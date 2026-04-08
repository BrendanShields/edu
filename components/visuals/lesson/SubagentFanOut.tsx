'use client';

import { useState, useEffect } from 'react';

const subagents = [
  {
    label: 'Agent 1',
    task: 'Extract types',
    border: 'border-blue-400',
    bg: 'bg-blue-400/10',
    text: 'text-blue-400',
    stroke: '#60a5fa',
  },
  {
    label: 'Agent 2',
    task: 'Update routes',
    border: 'border-green-400',
    bg: 'bg-green-400/10',
    text: 'text-green-400',
    stroke: '#4ade80',
  },
  {
    label: 'Agent 3',
    task: 'Write tests',
    border: 'border-purple-400',
    bg: 'bg-purple-400/10',
    text: 'text-purple-400',
    stroke: '#c084fc',
  },
];

type Status = 'reading' | 'editing' | 'done' | 'pause';

const STATUS_DISPLAY: Record<Status, { text: string; fill: string }> = {
  reading: { text: 'reading...', fill: 'var(--color-text-muted, #888)' },
  editing: { text: 'editing...', fill: '#f59e0b' },
  done: { text: '✓ done', fill: '#22c55e' },
  pause: { text: '✓ done', fill: '#22c55e' },
};

// Cycle order: reading (1.5s) → editing (1.5s) → done (1.5s) → pause (1s) → reading ...
// Total cycle: 5.5s
const CYCLE_STEPS: { status: Status; duration: number }[] = [
  { status: 'reading', duration: 1500 },
  { status: 'editing', duration: 1500 },
  { status: 'done', duration: 1500 },
  { status: 'pause', duration: 1000 },
];

const STAGGER_DELAYS = [0, 400, 800];

// Per-agent box fill colours, indexed the same way as `subagents`.
const AGENT_BOX_FILLS = [
  'rgba(96,165,250,0.1)',
  'rgba(74,222,128,0.1)',
  'rgba(192,132,252,0.1)',
] as const;

export function SubagentFanOut() {
  const [phase, setPhase] = useState(0);
  // phase 0: main agent appears
  // phase 1: fan-out lines draw
  // phase 2: sub-agents appear
  // phase 3: fan-in lines draw
  // phase 4: merge box appears

  const [statuses, setStatuses] = useState<Status[]>(['reading', 'reading', 'reading']);
  const [doneTracker, setDoneTracker] = useState<boolean[]>([false, false, false]);

  // Derived state — no extra useState/useEffect needed.
  const cyclingStarted = phase >= 4;
  const allDoneOnce = doneTracker.every(Boolean);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 900),
      setTimeout(() => setPhase(3), 1500),
      setTimeout(() => setPhase(4), 2000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  // Individual agent cycling with staggered starts.
  // We track only the *current* pending timer per agent (not all of them
  // ever scheduled) so the array doesn't grow unbounded over a long session.
  useEffect(() => {
    if (!cyclingStarted) return;

    const pending: (ReturnType<typeof setTimeout> | null)[] = subagents.map(() => null);

    subagents.forEach((_, agentIndex) => {
      let stepIndex = 0;

      const advanceStep = () => {
        const currentStep = CYCLE_STEPS[stepIndex % CYCLE_STEPS.length];

        setStatuses((prev) => {
          const next = [...prev];
          next[agentIndex] = currentStep.status;
          return next;
        });

        // Track if this agent has reached done
        if (currentStep.status === 'done') {
          setDoneTracker((prev) => {
            const next = [...prev];
            next[agentIndex] = true;
            return next;
          });
        }

        stepIndex++;
        pending[agentIndex] = setTimeout(advanceStep, currentStep.duration);
      };

      pending[agentIndex] = setTimeout(advanceStep, STAGGER_DELAYS[agentIndex]);
    });

    return () => {
      for (const t of pending) {
        if (t !== null) clearTimeout(t);
      }
    };
  }, [cyclingStarted]);

  const getStatusDisplay = (agentIndex: number) => {
    if (!cyclingStarted) return null;
    return STATUS_DISPLAY[statuses[agentIndex]];
  };

  const isAgentDone = (agentIndex: number) => {
    const status = statuses[agentIndex];
    return status === 'done' || status === 'pause';
  };

  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        Parallel Subagent Execution
      </p>

      <div className="relative w-full" style={{ minHeight: 340 }}>
        <svg
          viewBox="0 0 380 340"
          className="w-full h-auto"
          style={{ maxWidth: 380 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <style>{`
              @keyframes dash {
                to { stroke-dashoffset: -16; }
              }
              .animated-dash {
                stroke-dasharray: 8 8;
                stroke-dashoffset: 0;
                animation: dash 1.2s linear infinite;
              }
              @keyframes subtlePulse {
                0%, 100% { opacity: 0.7; }
                50% { opacity: 1; }
              }
              .status-pulse {
                animation: subtlePulse 1.5s ease-in-out infinite;
              }
              @keyframes borderPulse {
                0% { stroke-opacity: 1; }
                25% { stroke-opacity: 1; stroke-width: 2.5; }
                50% { stroke-opacity: 0.7; stroke-width: 1; }
                75% { stroke-opacity: 1; stroke-width: 2.5; }
                100% { stroke-opacity: 1; }
              }
              .border-pulse {
                animation: borderPulse 0.8s ease-in-out;
              }
            `}</style>
          </defs>

          {/* ── Main Agent (top) ── */}
          <g
            style={{
              opacity: phase >= 0 ? 1 : 0,
              transform: phase >= 0 ? 'translateY(0)' : 'translateY(-8px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          >
            <rect
              x="115" y="8" width="150" height="56" rx="8"
              fill="rgba(255,107,53,0.1)"
              stroke="#FF6B35"
              strokeWidth="1.5"
            />
            <text
              x="190" y="30"
              textAnchor="middle"
              className="fill-[#FF6B35]"
              fontSize="12"
              fontWeight="600"
              fontFamily="var(--font-sans)"
            >
              Main Agent
            </text>
            <text
              x="190" y="50"
              textAnchor="middle"
              className="fill-text-secondary"
              fontSize="10"
              fontFamily="var(--font-mono)"
            >
              &quot;Refactor auth module&quot;
            </text>
          </g>

          {/* ── Fan-out lines ── */}
          {subagents.map((agent, i) => {
            const startX = 190;
            const startY = 64;
            const endX = 65 + i * 125;
            const endY = 148;
            const midY = 106;

            return (
              <path
                key={`fan-out-${i}`}
                d={`M ${startX} ${startY} L ${startX} ${midY} L ${endX} ${midY} L ${endX} ${endY}`}
                fill="none"
                stroke={agent.stroke}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={phase >= 1 ? 'animated-dash' : ''}
                style={{
                  opacity: phase >= 1 ? 0.7 : 0,
                  transition: 'opacity 0.5s ease',
                }}
              />
            );
          })}

          {/* ── Dispatch arrow indicator ── */}
          <text
            x="190" y="100"
            textAnchor="middle"
            fontSize="10"
            className="fill-text-muted"
            fontFamily="var(--font-sans)"
            style={{
              opacity: phase >= 1 ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }}
          >
            dispatch
          </text>

          {/* ── Sub-agent boxes ── */}
          {subagents.map((agent, i) => {
            const cx = 65 + i * 125;
            const boxW = 110;
            const boxH = 52;
            const boxX = cx - boxW / 2;
            const boxY = 148;

            const statusDisplay = getStatusDisplay(i);
            const agentDone = isAgentDone(i);

            return (
              <g
                key={`agent-${i}`}
                style={{
                  opacity: phase >= 2 ? 1 : 0,
                  transform: phase >= 2 ? 'translateY(0)' : 'translateY(8px)',
                  transition: `opacity 0.4s ease ${i * 0.1}s, transform 0.4s ease ${i * 0.1}s`,
                }}
              >
                <rect
                  x={boxX} y={boxY}
                  width={boxW} height={boxH}
                  rx="6"
                  fill={AGENT_BOX_FILLS[i]}
                  stroke={agent.stroke}
                  strokeWidth={agentDone ? 2 : 1}
                  className={agentDone ? 'border-pulse' : ''}
                  style={{
                    transition: 'stroke-width 0.3s ease',
                  }}
                />
                {/* Agent label - always shown */}
                <text
                  x={cx} y={boxY + (statusDisplay ? 16 : 20)}
                  textAnchor="middle"
                  fill={agent.stroke}
                  fontSize="11"
                  fontWeight="600"
                  fontFamily="var(--font-sans)"
                >
                  {agent.label}
                </text>
                {/* Task label (small, above status) or full-size when not cycling */}
                {!statusDisplay ? (
                  <text
                    x={cx} y={boxY + 36}
                    textAnchor="middle"
                    className="fill-text-secondary"
                    fontSize="10"
                    fontFamily="var(--font-sans)"
                  >
                    {agent.task}
                  </text>
                ) : (
                  <>
                    <text
                      x={cx} y={boxY + 29}
                      textAnchor="middle"
                      className="fill-text-muted"
                      fontSize="8"
                      fontFamily="var(--font-sans)"
                      style={{ opacity: 0.6 }}
                    >
                      {agent.task}
                    </text>
                    <text
                      x={cx} y={boxY + 43}
                      textAnchor="middle"
                      fontSize="10"
                      fontWeight="500"
                      fontFamily="var(--font-sans)"
                      fill={statusDisplay.fill}
                      className={statuses[i] === 'reading' ? 'status-pulse' : ''}
                      style={{
                        transition: 'fill 0.3s ease',
                      }}
                    >
                      {statusDisplay.text}
                    </text>
                  </>
                )}
              </g>
            );
          })}

          {/* ── Fan-in lines ── */}
          {subagents.map((agent, i) => {
            const startX = 65 + i * 125;
            const startY = 200;
            const endX = 190;
            const endY = 272;
            const midY = 240;

            return (
              <path
                key={`fan-in-${i}`}
                d={`M ${startX} ${startY} L ${startX} ${midY} L ${endX} ${midY} L ${endX} ${endY}`}
                fill="none"
                stroke={agent.stroke}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={phase >= 3 ? 'animated-dash' : ''}
                style={{
                  opacity: phase >= 3 ? 0.7 : 0,
                  transition: 'opacity 0.5s ease',
                }}
              />
            );
          })}

          {/* ── Merge label ── */}
          <text
            x="190" y="234"
            textAnchor="middle"
            fontSize="10"
            className="fill-text-muted"
            fontFamily="var(--font-sans)"
            style={{
              opacity: phase >= 3 ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }}
          >
            merge
          </text>

          {/* ── Merge box (bottom) ── */}
          <g
            style={{
              opacity: phase >= 4 ? 1 : 0,
              transform: phase >= 4 ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          >
            <rect
              x="115" y="272" width="150" height="56" rx="8"
              fill={allDoneOnce ? 'rgba(34,197,94,0.1)' : 'rgba(255,107,53,0.1)'}
              stroke={allDoneOnce ? '#22c55e' : '#FF6B35'}
              strokeWidth="1.5"
              style={{ transition: 'fill 0.5s ease, stroke 0.5s ease' }}
            />
            <text
              x="190" y="294"
              textAnchor="middle"
              fill={allDoneOnce ? '#22c55e' : '#FF6B35'}
              fontSize="12"
              fontWeight="600"
              fontFamily="var(--font-sans)"
              style={{ transition: 'fill 0.5s ease' }}
            >
              Main Agent
            </text>
            <text
              x="190" y="312"
              textAnchor="middle"
              fill={allDoneOnce ? '#22c55e' : undefined}
              className={allDoneOnce ? '' : 'fill-text-secondary'}
              fontSize="10"
              fontFamily="var(--font-sans)"
              style={{ transition: 'fill 0.5s ease' }}
            >
              {allDoneOnce ? '✓ All passed' : 'merges and verifies'}
            </text>
          </g>
        </svg>
      </div>

      {/* ── Legend ── */}
      <div className="flex items-center justify-center gap-4 text-[10px] text-text-muted">
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block w-3 h-0.5 rounded-full"
            style={{ backgroundColor: '#FF6B35' }}
          />
          orchestrator
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-0.5 rounded-full bg-blue-400" />
          <span className="inline-block w-3 h-0.5 rounded-full bg-green-400 -ml-2.5" />
          <span className="inline-block w-3 h-0.5 rounded-full bg-purple-400 -ml-2.5" />
          parallel workers
        </span>
      </div>
    </div>
  );
}
