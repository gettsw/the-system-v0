/**
 * THE SYSTEM: immutable host.
 *
 * Owns the chat session, the model switcher, slash commands, and the emergency
 * fallback terminal. The mutable UI lives in ../experience/ExperienceCanvas.tsx
 * and only ever sees the `SystemApi` below, so a broken canvas cannot take the
 * chat channel down with it.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import recipeYaml from '../../../../recipes/your-experience.yaml?raw';
import { acpChatSessionController } from '../acp/chatSessionController';
import { encodeRecipe, parseRecipe } from '../acp/recipe';
import ExperienceCanvas from '../experience/ExperienceCanvas';
import { useChatSession } from '../hooks/useChatSession';
import { ChatState } from '../types/chatState';
import type { ImageData, Message } from '../types/message';
import { errorMessage } from '../utils/conversionUtils';
import { getInitialWorkingDir } from '../utils/workingDir';
import { SystemErrorBoundary } from './SystemErrorBoundary';
import {
  DEFAULT_MODEL,
  DEFAULT_PROVIDER,
  isAllowedProvider,
  useSystemModels,
  type SystemModels,
} from './useSystemModels';

export interface LogEntry {
  id: string;
  kind: 'user' | 'agent' | 'tool' | 'result' | 'system' | 'error';
  text: string;
}

/** Everything the canvas is given. Nothing else is part of the contract. */
export interface SystemApi {
  /** Flattened, render-ready transcript (chat + local command output). */
  log: LogEntry[];
  /** Raw messages, for canvases that want richer rendering than `log`. */
  messages: Message[];
  /** True while the agent is working. `submit` of a prompt is refused meanwhile. */
  busy: boolean;
  chatState: ChatState;
  /** Send a prompt (optionally with base64 images), or run a slash command (`/help` lists them). */
  submit: (text: string, images?: ImageData[]) => Promise<void>;
  /** Interrupt the agent. */
  stop: () => void;
  models: SystemModels;
  sessionId: string;
}

const SESSION_KEY = 'system.sessionId';
const ROLLBACK_PROMPT =
  'The canvas is broken. Run `git restore --source=HEAD --worktree -- ui/desktop/src/experience` ' +
  'from the repository root, then tell me what was reverted.';
const HELP = `/models                     list subscription and local models (no per-token APIs)
/model <provider> <model>   switch model mid-session (one arg = model on current provider)
/new                        start a fresh session
/stop                       interrupt the agent
/rollback                   ask the agent to git-restore the canvas
/settings                   open provider settings (stock UI)
/clear                      clear the conversation
anything else is sent to YOUR EXPERIENCE`;

// Module-level so React StrictMode's double mount does not create two sessions.
let bootstrap: Promise<string> | null = null;

async function bootstrapSession(): Promise<string> {
  const saved = window.localStorage.getItem(SESSION_KEY);
  if (saved) return saved;
  // The recipe ships with the app, so it skips the consent prompt that
  // user-supplied recipes go through in ../sessions.ts.
  const recipeDeeplink = await encodeRecipe(await parseRecipe(recipeYaml));
  const session = await acpChatSessionController.createSession(getInitialWorkingDir(), undefined, {
    recipeDeeplink,
  });
  window.localStorage.setItem(SESSION_KEY, session.id);
  return session.id;
}

function str(value: unknown, max: number): string {
  const text = typeof value === 'string' ? value : (JSON.stringify(value) ?? '');
  return text.length > max ? `${text.slice(0, max)}…` : text;
}

function field(value: unknown, key: string): unknown {
  return value && typeof value === 'object' ? (value as Record<string, unknown>)[key] : undefined;
}

interface Note {
  at: number; // message count when the note was written
  entry: LogEntry;
}

function buildLog(messages: Message[], notes: Note[]): LogEntry[] {
  const log: LogEntry[] = [];
  for (let i = 0; i <= messages.length; i++) {
    for (const note of notes) {
      if (note.at === i || (i === messages.length && note.at > i)) log.push(note.entry);
    }
    const message = messages[i];
    if (!message || !message.metadata.userVisible) continue;
    message.content.forEach((content, j) => {
      const id = `${message.id ?? i}:${j}`;
      if (content.type === 'text') {
        if (content.text.trim()) {
          log.push({ id, kind: message.role === 'user' ? 'user' : 'agent', text: content.text });
        }
      } else if (content.type === 'image') {
        log.push({
          id,
          kind: message.role === 'user' ? 'user' : 'agent',
          text: `[image ${content.mimeType}]`,
        });
      } else if (content.type === 'toolRequest') {
        const call = field(content.toolCall, 'value');
        log.push({
          id,
          kind: 'tool',
          text: `${str(field(call, 'name') ?? 'tool', 80)} ${str(field(call, 'arguments') ?? {}, 300)}`,
        });
      } else if (content.type === 'toolResponse') {
        const result = content.toolResult;
        const parts = field(field(result, 'value'), 'content');
        const text = Array.isArray(parts)
          ? parts.map((part) => field(part, 'text') ?? '').join('')
          : (field(result, 'error') ?? '');
        if (text) log.push({ id, kind: 'result', text: str(text, 600) });
      } else if (content.type === 'systemNotification') {
        if (content.notificationType !== 'thinkingMessage') {
          log.push({ id, kind: 'system', text: content.msg });
        }
      } else if (
        content.type === 'actionRequired' &&
        content.data.actionType === 'toolConfirmation'
      ) {
        log.push({
          id,
          kind: 'error',
          text: `${content.data.toolName} is waiting for approval, which this terminal cannot give. Start The System with GOOSE_MODE=auto (run-system.sh does), then /stop and retry.`,
        });
      }
    });
  }
  return log;
}

const shell: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  background: '#0a0a0a',
  color: '#00ff66',
  fontFamily: '"JetBrains Mono", "Fira Code", monospace',
  fontSize: 13,
};
const errorStyle: React.CSSProperties = {
  margin: 0,
  padding: 8,
  color: '#ff5555',
  whiteSpace: 'pre-wrap',
  overflow: 'auto',
  maxHeight: '40%',
  borderBottom: '1px solid #ff5555',
  flexShrink: 0,
};

/** Emergency UI: host-owned, inline-styled, no dependency on the canvas. */
function FallbackTerminal({ system, error }: { system: SystemApi; error: string }) {
  const [input, setInput] = useState('');
  return (
    <div style={{ ...shell, position: 'relative', flex: 1, minHeight: 0 }}>
      <pre style={errorStyle}>
        {`[ CANVAS CRASHED // fallback terminal active ]\n${error}\n\nAsk YOUR EXPERIENCE to fix it, or type /rollback.`}
      </pre>
      <div style={{ flex: 1, overflow: 'auto', padding: 8, whiteSpace: 'pre-wrap' }}>
        {system.log.slice(-30).map((entry) => (
          <div key={entry.id}>{`${entry.kind === 'user' ? '> ' : ''}${entry.text}`}</div>
        ))}
        {system.busy && <div>…</div>}
      </div>
      <form
        style={{ display: 'flex', padding: 8, borderTop: '1px solid #00ff66' }}
        onSubmit={(event) => {
          event.preventDefault();
          void system.submit(input);
          setInput('');
        }}
      >
        <span>{'>'}&nbsp;</span>
        <input
          autoFocus
          value={input}
          onChange={(event) => setInput(event.target.value)}
          style={{
            flex: 1,
            background: 'transparent',
            color: 'inherit',
            font: 'inherit',
            border: 'none',
            outline: 'none',
          }}
        />
      </form>
    </div>
  );
}

function SystemSession({
  sessionId,
  onNewSession,
}: {
  sessionId: string;
  onNewSession: () => void;
}) {
  const navigate = useNavigate();
  const [notes, setNotes] = useState<Note[]>([]);
  const [compileError, setCompileError] = useState<string | null>(null);
  const messagesRef = useRef<Message[]>([]);
  const modelsRef = useRef<SystemModels | null>(null);

  const note = useCallback((text: string, kind: LogEntry['kind'] = 'system') => {
    const at = messagesRef.current.length;
    setNotes((prev) => [...prev, { at, entry: { id: `note:${prev.length}`, kind, text } }]);
  }, []);

  // The agent can switch models by ending a reply with `@@model <provider> <model>`.
  const onStreamFinish = useCallback(() => {
    const last = [...messagesRef.current].reverse().find((m) => m.role === 'assistant');
    const text = last?.content.map((c) => (c.type === 'text' ? c.text : '')).join('\n') ?? '';
    const directive = text.match(/^\s*@@model\s+(\S+)\s+(\S+)\s*$/m);
    if (directive) {
      void modelsRef.current?.switchModel(directive[1], directive[2]).then((ok) => {
        note(
          ok ? `model -> ${directive[1]}/${directive[2]}` : 'model switch failed',
          ok ? 'system' : 'error'
        );
      });
    }
  }, [note]);

  const chat = useChatSession({ sessionId, onStreamFinish });
  const models = useSystemModels(sessionId, chat.session);
  messagesRef.current = chat.messages;
  modelsRef.current = models;

  // Sessions left on a per-token API provider (e.g. from before the allowlist)
  // are moved back to the subscription before they can bill or compact there.
  const sessionProvider = chat.session?.provider_name;
  useEffect(() => {
    if (!sessionProvider || isAllowedProvider(sessionProvider)) return;
    void models
      .switchModel(DEFAULT_PROVIDER, DEFAULT_MODEL)
      .then((ok) =>
        note(
          ok
            ? `${sessionProvider} is a per-token API; moved this session to ${DEFAULT_PROVIDER}/${DEFAULT_MODEL}`
            : `session is on per-token ${sessionProvider} and could not be moved. Type /new`,
          ok ? 'system' : 'error'
        )
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionProvider]);

  // Vite's overlay is disabled (vite.renderer.config.mts) so a syntax error in the
  // canvas shows up here instead of covering the prompt. The last good canvas keeps running.
  useEffect(() => {
    const hot = import.meta.hot;
    if (!hot) return;
    const onError = (payload: { err: { message: string; stack: string } }) =>
      setCompileError(`${payload.err.message}\n${payload.err.stack}`);
    const onUpdate = () => setCompileError(null);
    hot.on('vite:error', onError);
    hot.on('vite:afterUpdate', onUpdate);
    return () => {
      hot.off('vite:error', onError);
      hot.off('vite:afterUpdate', onUpdate);
    };
  }, []);

  const busy =
    chat.chatState !== ChatState.Idle && chat.chatState !== ChatState.WaitingForUserInput;
  const { handleSubmit, stopStreaming } = chat;

  const submit = useCallback(
    async (raw: string, images: ImageData[] = []) => {
      const text = raw.trim();
      if (!text && images.length === 0) return;
      const [command, ...args] = text.split(/\s+/);
      const current = modelsRef.current;
      switch (command) {
        case '/help':
          return note(HELP);
        case '/models': {
          await current?.refresh();
          const available = modelsRef.current?.availableModels ?? {};
          const lines = Object.entries(available).map(
            ([provider, list]) => `${provider}: ${list.join(', ') || '(any model id)'}`
          );
          return note(
            `current: ${current?.currentProvider}/${current?.currentModel}\n` +
              (lines.join('\n') || 'no providers configured. Type /settings')
          );
        }
        case '/model': {
          const provider = args.length > 1 ? args[0] : current?.currentProvider;
          const model = args.length > 1 ? args[1] : args[0];
          if (!provider || !model) return note('usage: /model <provider> <model>', 'error');
          if (!isAllowedProvider(provider)) {
            return note(
              `${provider} bills per token; only ${current?.availableProviders.join(', ') || DEFAULT_PROVIDER} are allowed`,
              'error'
            );
          }
          const ok = await current?.switchModel(provider, model);
          return note(
            ok ? `model -> ${provider}/${model}` : `could not switch to ${provider}/${model}`,
            ok ? 'system' : 'error'
          );
        }
        case '/new':
          return onNewSession();
        case '/stop':
          return stopStreaming();
        case '/settings':
          return void navigate('/settings');
      }
      if (busy) return note('busy. /stop to interrupt', 'error');
      if (command === '/clear') setNotes([]);
      await handleSubmit({ msg: command === '/rollback' ? ROLLBACK_PROMPT : text, images });
    },
    [busy, handleSubmit, navigate, note, onNewSession, stopStreaming]
  );

  const log = useMemo(() => {
    const entries = buildLog(chat.messages, notes);
    if (chat.sessionLoadError) {
      entries.push({
        id: 'load-error',
        kind: 'error',
        text: `${chat.sessionLoadError}\nType /new for a fresh session.`,
      });
    }
    return entries;
  }, [chat.messages, chat.sessionLoadError, notes]);

  const system: SystemApi = {
    log,
    messages: chat.messages,
    busy,
    chatState: chat.chatState,
    submit,
    stop: stopStreaming,
    models,
    sessionId,
  };

  return (
    <div style={shell}>
      {compileError && (
        <pre style={errorStyle}>
          {`[ CANVAS FAILED TO COMPILE // last good version still running ]\n${compileError}`}
        </pre>
      )}
      <div style={{ position: 'relative', flex: 1, minHeight: 0, display: 'flex' }}>
        <SystemErrorBoundary
          fallback={(error, componentStack) => (
            <FallbackTerminal
              system={system}
              error={`${error.stack ?? error.message}${componentStack}`}
            />
          )}
        >
          <ExperienceCanvas system={system} />
        </SystemErrorBoundary>
      </div>
    </div>
  );
}

export default function SystemHost() {
  const navigate = useNavigate();
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [bootError, setBootError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    bootstrap ??= bootstrapSession();
    bootstrap.then(
      (id) => !cancelled && setSessionId(id),
      (error) => {
        bootstrap = null;
        if (!cancelled) setBootError(errorMessage(error));
      }
    );
    return () => {
      cancelled = true;
    };
  }, [attempt]);

  const restart = useCallback(() => {
    window.localStorage.removeItem(SESSION_KEY);
    bootstrap = null;
    setSessionId(null);
    setBootError(null);
    setAttempt((n) => n + 1);
  }, []);

  if (sessionId) {
    return <SystemSession key={sessionId} sessionId={sessionId} onNewSession={restart} />;
  }

  const link: React.CSSProperties = {
    background: 'none',
    border: 'none',
    color: 'inherit',
    font: 'inherit',
    cursor: 'pointer',
    padding: 0,
    textDecoration: 'underline',
  };
  return (
    <div style={{ ...shell, padding: 12, whiteSpace: 'pre-wrap' }}>
      {bootError ? (
        <>
          <div style={{ color: '#ff5555' }}>{`[ THE SYSTEM // BOOT FAILED ]\n${bootError}\n`}</div>
          <div>
            {'No provider configured yet? '}
            <button style={link} onClick={() => navigate('/settings')}>
              [open settings]
            </button>{' '}
            <button style={link} onClick={restart}>
              [retry]
            </button>
          </div>
        </>
      ) : (
        '[ THE SYSTEM // BOOTING ]'
      )}
    </div>
  );
}
