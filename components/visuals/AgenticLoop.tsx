export function AgenticLoop() {
  return (
    <div className="space-y-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">The Agentic Loop</p>
      <div className="relative p-6 rounded-xl border border-border bg-surface">
        <div className="space-y-4 font-mono text-sm">
          {[
            { n: '1', label: 'Read', desc: 'files, errors, context' },
            { n: '2', label: 'Think', desc: 'analyze, plan approach' },
            { n: '3', label: 'Act', desc: 'edit, run commands' },
            { n: '4', label: 'Verify', desc: 'test, check output' },
          ].map((step, i) => (
            <div key={step.n}>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center text-xs font-bold">
                  {step.n}
                </span>
                <div>
                  <span className="text-text-primary font-semibold">{step.label}</span>
                  <span className="text-text-muted ml-2">{step.desc}</span>
                </div>
              </div>
              {i < 3 && <div className="ml-4 border-l border-border h-4 mt-1" />}
            </div>
          ))}
          <div className="ml-4 border-l border-dashed border-accent h-4" />
          <div className="text-xs text-accent text-center">↩ repeat until done</div>
        </div>
      </div>
    </div>
  );
}
