import { useCallback, useEffect, useState } from 'react';
import { acpListProviderDetails } from '../acp/providers';
import { useModelAndProvider } from '../components/ModelAndProviderContext';
import type { Session } from '../types/session';

/**
 * The System only runs on flat-rate or free models: the Claude subscription via
 * the official Claude CLI, and local Ollama. Per-token API providers (anthropic,
 * openai, google, ...) are never offered or switched to, even if a key is set.
 */
const ALLOWED_PROVIDERS = ['claude-code', 'ollama'];
const CLAUDE_CODE_MODELS = ['default', 'opus', 'sonnet', 'haiku'];
export const DEFAULT_PROVIDER = 'claude-code';
export const DEFAULT_MODEL = 'default';

export function isAllowedProvider(provider: string | null | undefined): boolean {
  return !!provider && ALLOWED_PROVIDERS.includes(provider);
}

export interface SystemModels {
  currentProvider: string | null;
  currentModel: string | null;
  /** Subscription or local providers that are set up. */
  availableProviders: string[];
  /** Known model ids, keyed by provider id. */
  availableModels: Record<string, string[]>;
  /** Switch the live session. Conversation state is kept. Resolves false on failure or refusal. */
  switchModel: (provider: string, model: string) => Promise<boolean>;
  refresh: () => Promise<void>;
}

export function useSystemModels(sessionId: string, session?: Session): SystemModels {
  const { changeModel } = useModelAndProvider();
  const [availableModels, setAvailableModels] = useState<Record<string, string[]>>({});

  const refresh = useCallback(async () => {
    const providers = await acpListProviderDetails();
    setAvailableModels(
      Object.fromEntries(
        providers
          .filter((p) => p.is_configured && isAllowedProvider(p.name))
          .map((p) => [
            p.name,
            p.name === 'claude-code'
              ? CLAUDE_CODE_MODELS
              : p.metadata.known_models.map((m) => m.name),
          ])
      )
    );
  }, []);

  useEffect(() => {
    refresh().catch((error) => console.error('Failed to list providers:', error));
  }, [refresh]);

  const switchModel = useCallback(
    async (provider: string, model: string) =>
      isAllowedProvider(provider) && changeModel(sessionId, { provider, name: model }),
    [changeModel, sessionId]
  );

  return {
    currentProvider: session?.provider_name ?? null,
    currentModel: session?.model_config?.model_name ?? null,
    availableProviders: Object.keys(availableModels),
    availableModels,
    switchModel,
    refresh,
  };
}
