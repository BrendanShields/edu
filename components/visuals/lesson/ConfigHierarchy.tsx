/**
 * ConfigHierarchy — concentric SVG layers showing config override scope.
 *
 * The outer layer is the system-wide default; each inner layer overrides the
 * one outside it; the innermost is your live working session. The visual
 * deliberately mirrors the way config inheritance actually works: closest to
 * the centre wins.
 *
 * Pure SVG, animations are CSS-only, respects prefers-reduced-motion.
 */

const layers = [
  {
    scope: 'System',
    path: '~/.claude/settings.json',
    note: 'Defaults that apply to every project on this machine',
  },
  {
    scope: 'User',
    path: '~/.claude/CLAUDE.md',
    note: 'Personal style + always-on instructions',
  },
  {
    scope: 'Project',
    path: '.claude/settings.json',
    note: 'Per-repo overrides committed to source control',
  },
  {
    scope: 'Project instructions',
    path: 'CLAUDE.md',
    note: 'Conventions, glossaries, do-not-touch rules for this codebase',
  },
  {
    scope: 'Working session',
    path: 'live conversation',
    note: 'Anything you type now — wins against everything outside it',
  },
];

const W = 480;
const H = 320;
// Each layer = a rounded rect inset from the one outside it.
const STEP = 22;
const TOP_Y = 30;
const BOTTOM_PAD = 28;

export function ConfigHierarchy() {
  return (
    <div className="config-hierarchy">
      <style>{`
        .config-hierarchy { width: 100%; max-width: 560px; }
        .config-hierarchy__panel {
          border-radius: 0.75rem;
          border: 1px solid var(--color-border);
          background: var(--color-surface);
          padding: 1rem 0.875rem 0.75rem;
        }
        @keyframes ch-layer {
          from { opacity: 0; transform: scale(0.94); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes ch-arrow-pulse {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 1; }
        }
        .ch-layer {
          transform-origin: center;
          transform-box: fill-box;
          animation: ch-layer 0.5s ease-out both;
        }
        .ch-arrow {
          animation: ch-arrow-pulse 2.4s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .ch-layer { animation: none; opacity: 1; transform: none; }
          .ch-arrow { animation: none; opacity: 0.7; }
        }
      `}</style>

      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
        Configuration hierarchy
      </p>

      <div className="config-hierarchy__panel">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" aria-label="Concentric rectangles showing how Claude Code configuration layers override each other, from system defaults at the outside to the live working session at the centre">
          <defs>
            <linearGradient id="ch-arrow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#666" stopOpacity="0" />
              <stop offset="50%" stopColor="#FF6B35" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Concentric layers, drawn outermost first so the inner ones sit on top */}
          {layers.map((layer, i) => {
            const inset = i * STEP;
            const x = inset + 14;
            const y = TOP_Y + inset;
            const w = W - inset * 2 - 28;
            const h = H - TOP_Y - BOTTOM_PAD - inset * 2;
            const isInnermost = i === layers.length - 1;
            // Stronger fill for inner layers — closer to the centre wins.
            const fillOpacity = 0.04 + i * 0.05;
            const strokeOpacity = isInnermost ? 0.85 : 0.18 + i * 0.13;
            const stroke = isInnermost ? 'var(--color-accent)' : '#a0a0a0';
            const fill = isInnermost ? 'rgba(255, 107, 53, 0.08)' : '#ffffff';

            return (
              <g key={layer.scope} className="ch-layer" style={{ animationDelay: `${0.1 + i * 0.12}s` }}>
                <rect
                  x={x}
                  y={y}
                  width={w}
                  height={h}
                  rx="8"
                  fill={fill}
                  fillOpacity={fillOpacity}
                  stroke={stroke}
                  strokeOpacity={strokeOpacity}
                  strokeWidth={isInnermost ? 1.6 : 1}
                />
                {/* Scope label sits on the top edge of each layer */}
                <text
                  x={x + 12}
                  y={y + 14}
                  fill={isInnermost ? 'var(--color-accent)' : '#a0a0a0'}
                  fontSize="10"
                  fontWeight="600"
                  fontFamily="var(--font-sans)"
                  letterSpacing="0.02em"
                >
                  {layer.scope.toUpperCase()}
                </text>
                <text
                  x={x + w - 12}
                  y={y + 14}
                  fill={isInnermost ? 'var(--color-accent)' : '#666'}
                  fontSize="9"
                  fontFamily="ui-monospace, monospace"
                  textAnchor="end"
                >
                  {layer.path}
                </text>

                {/* Innermost gets a centred descriptor instead of just a label */}
                {isInnermost && (
                  <text
                    x={W / 2}
                    y={y + h / 2 + 4}
                    fill="var(--color-text-primary)"
                    fontSize="11"
                    fontWeight="500"
                    fontFamily="var(--font-sans)"
                    textAnchor="middle"
                  >
                    {layer.note}
                  </text>
                )}
              </g>
            );
          })}

          {/* "wins" arrow pointing inward */}
          <g className="ch-arrow">
            <line
              x1={W / 2 - 90}
              y1={H - 14}
              x2={W / 2 + 90}
              y2={H - 14}
              stroke="url(#ch-arrow-grad)"
              strokeWidth="1.6"
            />
            <text
              x={W / 2}
              y={H - 4}
              fill="#FF6B35"
              fontSize="9"
              fontFamily="ui-monospace, monospace"
              fontWeight="600"
              textAnchor="middle"
              letterSpacing="0.06em"
            >
              CLOSER TO CENTRE WINS
            </text>
          </g>
        </svg>

        <p className="text-[10px] text-text-muted text-center mt-2 leading-relaxed">
          OpenCode: <code className="font-mono">config.toml</code> + <code className="font-mono">AGENTS.md</code> &nbsp;·&nbsp; Copilot: <code className="font-mono">.github/copilot-instructions.md</code>
        </p>
      </div>
    </div>
  );
}
