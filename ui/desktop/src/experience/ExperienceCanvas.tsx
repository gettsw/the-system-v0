import { useEffect, useRef, useState } from 'react';
import type { SystemApi } from '../system/SystemHost';
import Cat from './Cat';

const COLOR: Record<string, string> = {
  user: 'text-green-200',
  agent: 'text-green-400',
  tool: 'text-green-700',
  result: 'text-green-700',
  system: 'text-green-600',
  error: 'text-red-400',
};

export default function ExperienceCanvas({ system }: { system: SystemApi }) {
  const [input, setInput] = useState('');
  const end = useRef<HTMLDivElement>(null);

  useEffect(() => {
    end.current?.scrollIntoView();
  }, [system.log]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setInput('');
    void system.submit(text);
  };

  return (
    <div className="relative h-screen flex flex-col bg-black text-green-400 font-mono text-sm p-3">
      <Cat />
      <div className="flex-1 overflow-y-auto whitespace-pre-wrap">
        {system.log.length === 0 && (
          <div className="text-green-600">THE MAINFRAME ONLINE. Type /help.</div>
        )}
        {system.log.map((e) => (
          <div key={e.id} className={COLOR[e.kind] ?? 'text-green-400'}>
            {e.kind === 'user' ? '> ' : ''}
            {e.text}
          </div>
        ))}
        {system.busy && <div className="text-green-600 animate-pulse">...</div>}
        <div ref={end} />
      </div>
      <div className="flex gap-2 pt-2 border-t border-green-900">
        <span>{'>'}</span>
        <input
          autoFocus
          className="flex-1 bg-transparent outline-none text-green-300 caret-green-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') send();
            if (e.key === 'Escape') system.stop();
          }}
        />
      </div>
    </div>
  );
}
