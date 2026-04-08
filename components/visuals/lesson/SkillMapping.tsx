'use client';

import { useState, useEffect } from 'react';

// Hoisted glow styles — same shape on every render so we can hand back stable
// references instead of allocating fresh objects per cell.
const GLOW_STYLE_ACTIVE = {
  boxShadow:
    '0 0 12px 2px color-mix(in srgb, var(--color-accent) 25%, transparent)',
  borderColor:
    'color-mix(in srgb, var(--color-accent) 50%, var(--color-border))',
};
const GLOW_STYLE_INACTIVE = {};

const ROW_TRANSITION = 'box-shadow 0.4s ease, border-color 0.4s ease';

const pairs = [
  {
    rule: {
      text: 'Always run tests after\nediting a file',
    },
    behavior: {
      text: '$ npm test',
      result: '14 passed, 0 failed',
      resultType: 'success' as const,
    },
  },
  {
    rule: {
      text: 'Use conventional commits\nfor all commit messages',
    },
    behavior: {
      text: '$ git commit -m "fix(auth):\n  correct token expiry check"',
      result: null,
      resultType: 'neutral' as const,
    },
  },
  {
    rule: {
      text: 'Never modify files in\nthe /migrations directory',
    },
    behavior: {
      text: 'Blocked: write to\n  /migrations/003.sql denied',
      result: null,
      resultType: 'warning' as const,
    },
  },
];

function RuleBlock({ text }: { text: string }) {
  return (
    <pre
      className="text-xs font-mono leading-relaxed text-text-secondary whitespace-pre-wrap"
      style={{ margin: 0 }}
    >
      {text}
    </pre>
  );
}

function BehaviorBlock({
  text,
  result,
  resultType,
}: {
  text: string;
  result: string | null;
  resultType: 'success' | 'warning' | 'neutral';
}) {
  const prefixIcon =
    resultType === 'warning' ? (
      <span style={{ color: 'var(--color-tool-claude)' }}>&#9888; </span>
    ) : null;

  return (
    <div className="text-xs font-mono leading-relaxed">
      <pre
        className="whitespace-pre-wrap text-text-secondary"
        style={{ margin: 0 }}
      >
        {prefixIcon}
        {text}
      </pre>
      {result && (
        <div
          className="mt-1"
          style={{
            color:
              resultType === 'success'
                ? '#4ade80'
                : resultType === 'warning'
                  ? 'var(--color-tool-claude)'
                  : 'var(--color-text-secondary)',
          }}
        >
          <span style={{ color: '#4ade80' }}>&#10003;</span> {result}
        </div>
      )}
    </div>
  );
}

function ArrowRight() {
  return (
    <div
      className="flex items-center justify-center flex-shrink-0"
      style={{ color: 'var(--color-accent)' }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Arrow shaft and head */}
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
        {/* Animated pulse dot traveling along the arrow */}
        <circle r="2.5" fill="currentColor" stroke="none" opacity="0.7">
          <animateMotion
            dur="2s"
            repeatCount="indefinite"
            path="M5,12 L19,12"
          />
          <animate
            attributeName="opacity"
            values="0;0.8;0.8;0"
            keyTimes="0;0.1;0.7;1"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}

function ArrowDown() {
  return (
    <div
      className="flex items-center justify-center py-1"
      style={{ color: 'var(--color-accent)' }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <polyline points="19 12 12 19 5 12" />
        {/* Animated pulse dot traveling downward */}
        <circle r="2.5" fill="currentColor" stroke="none" opacity="0.7">
          <animateMotion
            dur="2s"
            repeatCount="indefinite"
            path="M12,5 L12,19"
          />
          <animate
            attributeName="opacity"
            values="0;0.8;0.8;0"
            keyTimes="0;0.1;0.7;1"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}

export function SkillMapping() {
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);
  const [hoveredRule, setHoveredRule] = useState<number | null>(null);
  const [hoveredBehavior, setHoveredBehavior] = useState<number | null>(null);

  // Cycling highlight: starts after stagger animations complete (~0.8s),
  // then cycles every 3 seconds through pairs 0 -> 1 -> 2 -> 0 -> ...
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null;
    const startDelay = setTimeout(() => {
      setHighlightIndex(0);
      intervalId = setInterval(() => {
        setHighlightIndex((prev) => ((prev ?? 0) + 1) % pairs.length);
      }, 3000);
    }, 1200);

    return () => {
      clearTimeout(startDelay);
      if (intervalId !== null) clearInterval(intervalId);
    };
  }, []);

  // When hovering, pause the cycling highlight
  const isHovering = hoveredRule !== null || hoveredBehavior !== null;

  function isRuleHighlighted(i: number) {
    if (hoveredBehavior === i) return true;
    if (!isHovering && highlightIndex === i) return true;
    return false;
  }

  function isBehaviorHighlighted(i: number) {
    if (hoveredRule === i) return true;
    if (!isHovering && highlightIndex === i) return true;
    return false;
  }

  function isArrowHighlighted(i: number) {
    if (hoveredRule === i || hoveredBehavior === i) return true;
    if (!isHovering && highlightIndex === i) return true;
    return false;
  }

  const glowStyle = (active: boolean) =>
    active ? GLOW_STYLE_ACTIVE : GLOW_STYLE_INACTIVE;

  return (
    <div className="space-y-3" style={{ animation: 'fadeUp 0.5s ease both' }}>
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        Skill Mapping
      </p>

      {/* Wide layout: side-by-side panels with arrows */}
      <div className="hidden min-[480px]:block">
        <div className="flex gap-0 items-stretch">
          {/* Left panel -- CLAUDE.md */}
          <div
            className="flex-1 rounded-l-xl border border-r-0 overflow-hidden"
            style={{
              borderColor: 'var(--color-border)',
              backgroundColor: 'color-mix(in srgb, var(--color-surface) 100%, black 0%)',
            }}
          >
            <div
              className="px-3 py-2 text-[10px] font-semibold uppercase tracking-wider font-mono"
              style={{
                color: 'var(--color-accent)',
                borderBottom: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-surface)',
              }}
            >
              CLAUDE.md
            </div>
            <div className="divide-y" style={{ borderColor: 'var(--color-border)' }}>
              {pairs.map((pair, i) => (
                <div
                  key={i}
                  className="px-3 py-3"
                  onMouseEnter={() => setHoveredRule(i)}
                  onMouseLeave={() => setHoveredRule(null)}
                  style={{
                    borderColor: 'var(--color-border)',
                    animation: `fadeSlideIn 0.4s ease both`,
                    animationDelay: `${i * 0.12}s`,
                    transition: ROW_TRANSITION,
                    backgroundColor: isRuleHighlighted(i)
                      ? 'color-mix(in srgb, var(--color-accent) 6%, var(--color-surface))'
                      : 'transparent',
                    ...glowStyle(isRuleHighlighted(i)),
                  }}
                >
                  <RuleBlock text={pair.rule.text} />
                </div>
              ))}
            </div>
          </div>

          {/* Arrows column */}
          <div
            className="flex flex-col w-12 flex-shrink-0 border-y"
            style={{
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-background)',
            }}
          >
            {/* Header spacer to align with panel headers */}
            <div
              className="h-[33px] flex-shrink-0"
              style={{ borderBottom: '1px solid var(--color-border)' }}
            />
            {pairs.map((_, i) => (
              <div
                key={i}
                className="flex-1 flex items-center justify-center"
                style={{
                  borderBottom:
                    i < pairs.length - 1
                      ? '1px solid var(--color-border)'
                      : 'none',
                  animation: `fadeIn 0.4s ease both`,
                  animationDelay: `${i * 0.12 + 0.2}s`,
                  transition: 'opacity 0.4s ease',
                  opacity: isArrowHighlighted(i) ? 1 : 0.5,
                }}
              >
                <ArrowRight />
              </div>
            ))}
          </div>

          {/* Right panel -- Agent Behavior */}
          <div
            className="flex-1 rounded-r-xl border border-l-0 overflow-hidden"
            style={{
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-surface)',
            }}
          >
            <div
              className="px-3 py-2 text-[10px] font-semibold uppercase tracking-wider font-mono"
              style={{
                color: 'var(--color-text-muted)',
                borderBottom: '1px solid var(--color-border)',
                backgroundColor: 'color-mix(in srgb, var(--color-surface) 85%, black 15%)',
              }}
            >
              Agent Behavior
            </div>
            <div className="divide-y" style={{ borderColor: 'var(--color-border)' }}>
              {pairs.map((pair, i) => (
                <div
                  key={i}
                  className="px-3 py-3"
                  onMouseEnter={() => setHoveredBehavior(i)}
                  onMouseLeave={() => setHoveredBehavior(null)}
                  style={{
                    borderColor: 'var(--color-border)',
                    animation: `fadeSlideIn 0.4s ease both`,
                    animationDelay: `${i * 0.12 + 0.1}s`,
                    transition: ROW_TRANSITION,
                    backgroundColor: isBehaviorHighlighted(i)
                      ? 'color-mix(in srgb, var(--color-accent) 6%, var(--color-surface))'
                      : 'transparent',
                    ...glowStyle(isBehaviorHighlighted(i)),
                  }}
                >
                  <BehaviorBlock
                    text={pair.behavior.text}
                    result={pair.behavior.result}
                    resultType={pair.behavior.resultType}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Narrow layout: stacked panels with down arrows */}
      <div className="block min-[480px]:hidden space-y-0">
        {pairs.map((pair, i) => {
          const pairActive = !isHovering && highlightIndex === i;
          return (
            <div
              key={i}
              className={i > 0 ? 'mt-4' : ''}
              style={{
                animation: `fadeUp 0.4s ease both`,
                animationDelay: `${i * 0.15}s`,
              }}
            >
              {/* Rule card */}
              <div
                className="rounded-t-lg border border-b-0 px-3 py-3"
                style={{
                  borderColor: pairActive
                    ? 'color-mix(in srgb, var(--color-accent) 50%, var(--color-border))'
                    : 'var(--color-border)',
                  backgroundColor: pairActive
                    ? 'color-mix(in srgb, var(--color-accent) 6%, var(--color-surface))'
                    : 'color-mix(in srgb, var(--color-surface) 100%, black 0%)',
                  transition: ROW_TRANSITION,
                  ...(pairActive
                    ? {
                        boxShadow:
                          '0 0 12px 2px color-mix(in srgb, var(--color-accent) 25%, transparent)',
                      }
                    : {}),
                }}
              >
                <div
                  className="text-[9px] font-semibold uppercase tracking-wider font-mono mb-2"
                  style={{ color: 'var(--color-accent)' }}
                >
                  CLAUDE.md
                </div>
                <RuleBlock text={pair.rule.text} />
              </div>

              {/* Down arrow */}
              <div
                className="flex justify-center border-x py-1"
                style={{
                  borderColor: pairActive
                    ? 'color-mix(in srgb, var(--color-accent) 50%, var(--color-border))'
                    : 'var(--color-border)',
                  backgroundColor: 'var(--color-background)',
                  transition: 'border-color 0.4s ease, opacity 0.4s ease',
                  opacity: pairActive ? 1 : 0.5,
                }}
              >
                <ArrowDown />
              </div>

              {/* Behavior card */}
              <div
                className="rounded-b-lg border border-t-0 px-3 py-3"
                style={{
                  borderColor: pairActive
                    ? 'color-mix(in srgb, var(--color-accent) 50%, var(--color-border))'
                    : 'var(--color-border)',
                  backgroundColor: pairActive
                    ? 'color-mix(in srgb, var(--color-accent) 6%, var(--color-surface))'
                    : 'var(--color-surface)',
                  transition: ROW_TRANSITION,
                  ...(pairActive
                    ? {
                        boxShadow:
                          '0 0 12px 2px color-mix(in srgb, var(--color-accent) 25%, transparent)',
                      }
                    : {}),
                }}
              >
                <div
                  className="text-[9px] font-semibold uppercase tracking-wider font-mono mb-2"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Agent Behavior
                </div>
                <BehaviorBlock
                  text={pair.behavior.text}
                  result={pair.behavior.result}
                  resultType={pair.behavior.resultType}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
