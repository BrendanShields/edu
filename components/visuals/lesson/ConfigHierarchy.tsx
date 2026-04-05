const layers = [
  {
    scope: 'System',
    path: '~/.claude/settings.json',
    bg: 'bg-white/[0.02]',
    border: 'border-border/50',
  },
  {
    scope: 'User',
    path: '~/.claude/CLAUDE.md',
    bg: 'bg-white/[0.04]',
    border: 'border-border',
  },
  {
    scope: 'Project',
    path: '.claude/settings.json',
    bg: 'bg-white/[0.06]',
    border: 'border-border-hover',
  },
  {
    scope: 'Project Instructions',
    path: 'CLAUDE.md',
    bg: 'bg-white/[0.08]',
    border: 'border-accent/30',
  },
  {
    scope: 'Your working session',
    path: null,
    bg: 'bg-white/[0.12]',
    border: 'border-accent/50',
  },
];

export function ConfigHierarchy() {
  // Build nested rectangles from outermost to innermost
  const nested = layers.reduceRight<React.ReactNode>(
    (children, layer, i) => (
      <div
        key={layer.scope}
        className={`${layer.bg} ${layer.border} rounded-lg border px-3 pt-2 pb-3`}
        style={{
          animation: `fadeUp 0.4s ease ${i * 0.1}s both`,
        }}
      >
        <span className="block font-mono text-[9px] leading-tight text-text-muted mb-1">
          <span className="text-text-secondary">{layer.scope}</span>
          {layer.path && (
            <span className="text-text-muted"> — {layer.path}</span>
          )}
        </span>
        {children}
      </div>
    ),
    null,
  );

  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        Configuration Hierarchy
      </p>

      {nested}

      <p className="text-[11px] text-text-secondary text-center mt-2">
        Inner layers override outer. Closest to the session wins.
      </p>
      <p className="text-[10px] text-text-muted text-center leading-relaxed">
        OpenCode: config.toml + AGENTS.md &nbsp;|&nbsp; Copilot: .github/copilot-instructions.md
      </p>
    </div>
  );
}
