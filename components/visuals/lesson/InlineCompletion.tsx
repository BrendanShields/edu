export function InlineCompletion() {
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        Inline Completion
      </p>
      <div className="rounded-xl border border-border bg-background overflow-hidden font-mono text-xs">
        {/* Editor top bar */}
        <div className="flex items-center justify-between px-3 py-1.5 border-b border-border bg-surface">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-text-muted">auth.ts</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-tool-copilot/40" />
            <span className="text-[10px] text-tool-copilot">Copilot</span>
          </div>
        </div>

        {/* Code lines */}
        <div className="p-3 space-y-0.5 leading-relaxed">
          {/* Line 1 — normal code */}
          <div className="flex">
            <span className="w-6 text-right pr-3 text-text-muted/40 select-none">12</span>
            <span>
              <span className="text-purple-400">async function</span>{' '}
              <span className="text-blue-300">validateToken</span>
              <span className="text-text-secondary">(</span>
              <span className="text-orange-300">token</span>
              <span className="text-text-muted">: string</span>
              <span className="text-text-secondary">)</span>{' '}
              <span className="text-text-secondary">{'{'}</span>
            </span>
          </div>

          {/* Line 2 — normal code */}
          <div className="flex">
            <span className="w-6 text-right pr-3 text-text-muted/40 select-none">13</span>
            <span>
              <span className="text-text-secondary">{'  '}</span>
              <span className="text-purple-400">const</span>{' '}
              <span className="text-blue-300">decoded</span>{' '}
              <span className="text-text-secondary">=</span>{' '}
              <span className="text-purple-400">await</span>{' '}
              <span className="text-yellow-300">jwt</span>
              <span className="text-text-secondary">.</span>
              <span className="text-blue-300">verify</span>
              <span className="text-text-secondary">(</span>
              <span className="text-orange-300">token</span>
              <span className="text-text-secondary">);</span>
            </span>
          </div>

          {/* Line 3 — normal code */}
          <div className="flex">
            <span className="w-6 text-right pr-3 text-text-muted/40 select-none">14</span>
            <span>
              <span className="text-text-secondary">{'  '}</span>
              <span className="text-purple-400">if</span>{' '}
              <span className="text-text-secondary">(!</span>
              <span className="text-blue-300">decoded</span>
              <span className="text-text-secondary">)</span>{' '}
              <span className="text-purple-400">return</span>{' '}
              <span className="text-orange-300">null</span>
              <span className="text-text-secondary">;</span>
            </span>
          </div>

          {/* Line 4 — cursor line with ghost text */}
          <div className="flex items-start">
            <span className="w-6 text-right pr-3 text-text-muted/40 select-none">15</span>
            <span>
              <span className="text-text-secondary">{'  '}</span>
              <span className="text-purple-400">const</span>{' '}
              <span className="text-blue-300">user</span>{' '}
              <span className="text-text-secondary">=</span>{' '}
              <span className="border-r-2 border-tool-copilot animate-pulse" />
              <span className="text-text-muted/40 italic">
                await db.user.findUnique({'{'} where: {'{'} id: decoded.sub {'}'} {'}'});
              </span>
            </span>
          </div>

          {/* Line 5 — ghost continuation */}
          <div className="flex">
            <span className="w-6 text-right pr-3 text-text-muted/40 select-none">16</span>
            <span className="text-text-muted/40 italic">
              {'  '}return user ?? null;
            </span>
          </div>

          {/* Line 6 — ghost closing */}
          <div className="flex">
            <span className="w-6 text-right pr-3 text-text-muted/40 select-none">17</span>
            <span className="text-text-muted/40 italic">{'}'}</span>
          </div>
        </div>

        {/* Tab hint */}
        <div className="flex justify-end px-3 pb-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-tool-copilot/10 border border-tool-copilot/20 text-[10px] text-tool-copilot font-medium">
            Tab <span className="opacity-60">&rarr;</span>
          </span>
        </div>
      </div>
    </div>
  );
}
