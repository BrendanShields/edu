/**
 * HookLifecycle — visual timeline of the events that fire around a tool call.
 *
 * Pure SVG diagram. Each event sits on a vertical spine, connected by colored
 * segments. The middle "Tool Executes" node is the canonical agent action;
 * everything else is a hook attachment point you can subscribe to.
 *
 * Animations are CSS-only and respect prefers-reduced-motion.
 */

const events = [
  {
    n: '1',
    label: 'PreToolUse',
    desc: 'fires before each tool call',
    detail: 'Block with exit 2 to veto the action',
    color: '#60a5fa', // blue
    isHook: true,
  },
  {
    n: '2',
    label: 'Tool executes',
    desc: 'the actual read / edit / bash / web call',
    detail: 'agent action — not a hook',
    color: '#9aa0a6', // neutral
    isHook: false,
  },
  {
    n: '3',
    label: 'PostToolUse',
    desc: 'fires after each successful call',
    detail: 'Format, lint, log, mutate the result',
    color: '#4ade80', // green
    isHook: true,
  },
  {
    n: '·',
    label: '… loop continues',
    desc: 'Read → Think → Act → Verify, repeat',
    detail: '',
    color: '#666',
    isHook: false,
    dashed: true,
  },
  {
    n: '4',
    label: 'Stop',
    desc: 'agent finishes responding',
    detail: 'Trigger a final summary, archive the session',
    color: '#FF6B35', // accent
    isHook: true,
  },
  {
    n: '5',
    label: 'Notification',
    desc: 'agent needs your attention',
    detail: 'Send a Slack ping, ring a bell',
    color: '#c084fc', // purple
    isHook: true,
  },
];

const ROW_H = 64;
const TOP_PAD = 22;
const TOTAL_H = TOP_PAD * 2 + ROW_H * (events.length - 1);
const NODE_X = 38;
const TEXT_X = 78;

export function HookLifecycle() {
  return (
    <div className="hook-lifecycle">
      <style>{`
        .hook-lifecycle { width: 100%; max-width: 540px; }
        .hook-lifecycle__panel {
          border-radius: 0.75rem;
          border: 1px solid var(--color-border);
          background: var(--color-surface);
          padding: 1.25rem 1rem 1rem;
        }
        @keyframes hl-row {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hl-spine {
          from { stroke-dashoffset: 100%; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes hl-pulse {
          0%, 100% { opacity: 0.85; }
          50%      { opacity: 1; }
        }
        .hl-row { animation: hl-row 0.45s ease-out both; }
        .hl-spine {
          stroke-dasharray: ${TOTAL_H};
          stroke-dashoffset: ${TOTAL_H};
          animation: hl-spine 1.4s 0.2s ease-out forwards;
        }
        .hl-node-pulse { animation: hl-pulse 2.4s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
        @media (prefers-reduced-motion: reduce) {
          .hl-row { animation: none; opacity: 1; transform: none; }
          .hl-spine { animation: none; stroke-dashoffset: 0; }
          .hl-node-pulse { animation: none; }
        }
      `}</style>

      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
        Hook lifecycle
      </p>

      <div className="hook-lifecycle__panel">
        <svg viewBox={`0 0 460 ${TOTAL_H}`} className="w-full h-auto" aria-label="Vertical timeline of hook events that fire around an agent tool call">
          {/* Spine — solid for the hook segments, dashed where the loop continues */}
          <line
            x1={NODE_X}
            y1={TOP_PAD - 4}
            x2={NODE_X}
            y2={TOTAL_H - TOP_PAD + 4}
            stroke="#2a2a2a"
            strokeWidth="1.5"
            className="hl-spine"
          />

          {events.map((event, i) => {
            const cy = TOP_PAD + i * ROW_H;
            const nodeR = event.isHook ? 14 : 11;
            const fill = event.dashed ? 'transparent' : event.color;
            const stroke = event.color;
            const dashAttr = event.dashed ? '2 2' : undefined;

            return (
              <g key={event.label} className="hl-row" style={{ animationDelay: `${0.35 + i * 0.12}s` }}>
                {/* Node circle */}
                <circle
                  cx={NODE_X}
                  cy={cy}
                  r={nodeR}
                  fill={fill}
                  fillOpacity={event.dashed ? 0 : 0.18}
                  stroke={stroke}
                  strokeWidth="1.6"
                  strokeDasharray={dashAttr}
                  className={event.isHook ? 'hl-node-pulse' : undefined}
                  style={event.isHook ? { animationDelay: `${1 + i * 0.2}s` } : undefined}
                />
                <text
                  x={NODE_X}
                  y={cy + 4}
                  fill={stroke}
                  fontSize="11"
                  fontWeight="700"
                  fontFamily="ui-monospace, monospace"
                  textAnchor="middle"
                >
                  {event.n}
                </text>

                {/* Label + description */}
                <text
                  x={TEXT_X}
                  y={cy - 4}
                  fill={stroke}
                  fontSize="13"
                  fontWeight="600"
                  fontFamily="var(--font-sans)"
                >
                  {event.label}
                </text>
                <text
                  x={TEXT_X}
                  y={cy + 11}
                  fill="#a0a0a0"
                  fontSize="10"
                  fontFamily="var(--font-sans)"
                >
                  {event.desc}
                </text>
                {event.detail && (
                  <text
                    x={TEXT_X}
                    y={cy + 24}
                    fill="#666"
                    fontSize="9"
                    fontFamily="ui-monospace, monospace"
                    fontStyle="italic"
                  >
                    {event.detail}
                  </text>
                )}

                {/* "hook" badge on the right */}
                {event.isHook && (
                  <g transform={`translate(420 ${cy - 7})`}>
                    <rect
                      x="0"
                      y="0"
                      width="34"
                      height="14"
                      rx="3"
                      fill={stroke}
                      fillOpacity="0.12"
                      stroke={stroke}
                      strokeOpacity="0.5"
                      strokeWidth="0.6"
                    />
                    <text
                      x="17"
                      y="10"
                      fill={stroke}
                      fontSize="8"
                      fontWeight="600"
                      fontFamily="ui-monospace, monospace"
                      textAnchor="middle"
                      letterSpacing="0.04em"
                    >
                      HOOK
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>

        <p className="text-[10px] text-text-muted text-center mt-2 font-mono">
          PreToolUse · Tool · PostToolUse · Stop · Notification
        </p>
      </div>
    </div>
  );
}
