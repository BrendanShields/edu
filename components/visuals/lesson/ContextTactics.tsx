'use client';

import { useState } from 'react';

type Mode = 'bloated' | 'lean';

interface ContextItem {
  label: string;
  percent: number;
}

const bloatedItems: ContextItem[] = [
  { label: 'Full contents of utils.ts (800 lines)', percent: 25 },
  { label: 'Full contents of handler.ts (600 lines)', percent: 18 },
  { label: 'Complete error stacktrace', percent: 15 },
  { label: 'Entire conversation (40 turns)', percent: 22 },
  { label: 'Redundant re-read of utils.ts', percent: 12 },
  { label: 'Previous failed attempt output', percent: 8 },
];

const leanItems: ContextItem[] = [
  { label: 'grep: authenticate function only (12 lines)', percent: 4 },
  { label: 'Targeted read: handler.ts:45-70', percent: 3 },
  { label: 'Compacted conversation (5 turns)', percent: 6 },
  { label: 'Current test output only', percent: 8 },
];

const tactics = [
  'Use grep not cat',
  'Compact regularly',
  'Target reads',
  'Split long tasks',
];

const maxBarPercent = 30; // scale bars relative to this max

export function ContextTactics() {
  const [mode, setMode] = useState<Mode>('bloated');

  const isBloated = mode === 'bloated';
  const items = isBloated ? bloatedItems : leanItems;
  const totalPercent = items.reduce((sum, item) => sum + item.percent, 0);

  return (
    <div
      className="space-y-3"
      style={
        {
          '--ct-transition': '0.5s ease',
          animation: 'fadeIn 0.5s ease-out',
        } as React.CSSProperties
      }
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        Context Tactics
      </p>

      {/* Segmented control */}
      <div className="flex rounded-lg border border-border bg-surface overflow-hidden">
        <button
          onClick={() => setMode('bloated')}
          className="flex-1 px-3 py-2 text-xs font-semibold transition-all cursor-pointer"
          style={{
            transitionDuration: '0.5s',
            transitionTimingFunction: 'ease',
            backgroundColor: isBloated
              ? 'var(--color-accent)'
              : 'transparent',
            color: isBloated
              ? 'var(--color-text-primary)'
              : 'var(--color-text-muted)',
          }}
        >
          Bloated Context
        </button>
        <button
          onClick={() => setMode('lean')}
          className="flex-1 px-3 py-2 text-xs font-semibold transition-all cursor-pointer"
          style={{
            transitionDuration: '0.5s',
            transitionTimingFunction: 'ease',
            backgroundColor: !isBloated
              ? 'var(--color-accent)'
              : 'transparent',
            color: !isBloated
              ? 'var(--color-text-primary)'
              : 'var(--color-text-muted)',
          }}
        >
          Lean Context
        </button>
      </div>

      {/* Context items stack */}
      <div className="rounded-xl border border-border bg-surface overflow-hidden">
        <div className="px-3 pt-3 pb-2 space-y-1">
          {/* Render all items with transitions */}
          <div
            className="space-y-1 transition-all"
            style={{ transitionDuration: '0.5s', transitionTimingFunction: 'ease' }}
          >
            {items.map((item, i) => {
              const isLastTwo = isBloated && i >= bloatedItems.length - 2;
              const isLast = isBloated && i === bloatedItems.length - 1;
              const barWidth = Math.min((item.percent / maxBarPercent) * 100, 100);

              return (
                <div
                  key={`${mode}-${i}`}
                  className="flex items-center gap-2 rounded-md border px-2.5 py-1.5 transition-all"
                  style={{
                    transitionDuration: '0.5s',
                    transitionTimingFunction: 'ease',
                    borderColor: isBloated
                      ? 'var(--color-border)'
                      : 'rgba(74, 222, 128, 0.2)',
                    backgroundColor: isBloated
                      ? 'rgba(255, 255, 255, 0.03)'
                      : 'rgba(74, 222, 128, 0.05)',
                    opacity: isLast ? 0.25 : isLastTwo ? 0.5 : 1,
                    animation: `fadeSlideIn 0.4s ease both`,
                    animationDelay: `${i * 0.07}s`,
                  }}
                >
                  {/* Bar + label */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[11px] text-text-secondary truncate">
                        {item.label}
                      </span>
                      <span className="text-[10px] font-mono text-text-muted flex-shrink-0">
                        {item.percent}%
                      </span>
                    </div>
                    <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          transitionDuration: '0.5s',
                          transitionTimingFunction: 'ease',
                          width: `${barWidth}%`,
                          backgroundColor: isBloated
                            ? 'rgba(239, 68, 68, 0.6)'
                            : 'rgba(74, 222, 128, 0.6)',
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Usage indicator */}
        <div
          className="px-3 py-2 border-t transition-all"
          style={{
            transitionDuration: '0.5s',
            transitionTimingFunction: 'ease',
            borderColor: 'var(--color-border)',
            backgroundColor: isBloated
              ? 'rgba(239, 68, 68, 0.06)'
              : 'rgba(74, 222, 128, 0.06)',
          }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full flex-shrink-0 transition-all"
              style={{
                transitionDuration: '0.5s',
                transitionTimingFunction: 'ease',
                backgroundColor: isBloated
                  ? 'rgb(239, 68, 68)'
                  : 'rgb(74, 222, 128)',
              }}
            />
            <span
              className="text-[11px] font-medium transition-all"
              style={{
                transitionDuration: '0.5s',
                transitionTimingFunction: 'ease',
                color: isBloated
                  ? 'rgb(248, 113, 113)'
                  : 'rgb(74, 222, 128)',
              }}
            >
              {isBloated
                ? `${totalPercent}% full \u2014 older context being evicted.`
                : `${totalPercent}% used \u2014 room for deep work.`}
            </span>
          </div>
        </div>
      </div>

      {/* Tactic pills */}
      <div className="flex flex-wrap gap-1.5">
        {tactics.map((tactic) => (
          <span
            key={tactic}
            className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border transition-all"
            style={{
              transitionDuration: '0.5s',
              transitionTimingFunction: 'ease',
              borderColor: isBloated
                ? 'var(--color-border)'
                : 'rgba(74, 222, 128, 0.4)',
              backgroundColor: isBloated
                ? 'rgba(255, 255, 255, 0.03)'
                : 'rgba(74, 222, 128, 0.12)',
              color: isBloated
                ? 'var(--color-text-muted)'
                : 'rgb(74, 222, 128)',
              boxShadow: isBloated
                ? 'none'
                : '0 0 8px rgba(74, 222, 128, 0.15)',
            }}
          >
            {tactic}
          </span>
        ))}
      </div>
    </div>
  );
}
