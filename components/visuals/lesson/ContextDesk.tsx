'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';

interface ContextItem {
  icon: string;
  label: string;
  size: number; // percentage of context used
  category: 'system' | 'file' | 'output' | 'history';
}

const initialItems: ContextItem[] = [
  { icon: '\u2699', label: 'System prompt', size: 5, category: 'system' },
  { icon: '\uD83D\uDD27', label: 'Tool definitions', size: 8, category: 'system' },
  { icon: '\uD83D\uDCCB', label: 'CLAUDE.md', size: 7, category: 'system' },
  { icon: '\uD83D\uDCC4', label: 'File: auth.ts', size: 15, category: 'file' },
  { icon: '\uD83D\uDCC4', label: 'File: handler.ts', size: 18, category: 'file' },
  { icon: '\uD83E\uDDEA', label: 'Test output', size: 22, category: 'output' },
  { icon: '\uD83D\uDCAC', label: 'Conversation history', size: 25, category: 'history' },
];

function getTotalUsage(items: ContextItem[]): number {
  return items.reduce((sum, item) => sum + item.size, 0);
}

function getBarColor(usage: number): string {
  if (usage > 100) return 'bg-red-500';
  if (usage < 50) return 'bg-emerald-400';
  if (usage < 80) return 'bg-amber-400';
  return 'bg-red-400';
}

function getBarTrackColor(usage: number): string {
  if (usage > 100) return 'bg-red-500/20';
  if (usage < 50) return 'bg-emerald-400/10';
  if (usage < 80) return 'bg-amber-400/10';
  return 'bg-red-400/10';
}

function getBarTextColor(usage: number): string {
  if (usage > 100) return 'text-red-400';
  if (usage < 50) return 'text-emerald-400';
  if (usage < 80) return 'text-amber-400';
  return 'text-red-400';
}

const sizeBarWidths: Record<string, string> = {
  system: 'w-8',
  file: 'w-14',
  output: 'w-20',
  history: 'w-24',
};

const buttonClass =
  'text-[11px] font-medium text-text-muted hover:text-text-secondary px-3 py-1.5 rounded-md border border-border hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-200 cursor-pointer';

export function ContextDesk() {
  // --- Auto-animation state ---
  const [visibleCount, setVisibleCount] = useState(0);
  const [autoFadedItems, setAutoFadedItems] = useState<Set<number>>(new Set());
  const [showControls, setShowControls] = useState(false);
  const [isRunning, setIsRunning] = useState(true);

  // --- Interactive state (active after auto-animation completes) ---
  const [interactiveItems, setInteractiveItems] = useState<ContextItem[]>([]);
  const [isInteractive, setIsInteractive] = useState(false);
  const [addFileCount, setAddFileCount] = useState(0);

  const resetAnimation = useCallback(() => {
    setVisibleCount(0);
    setAutoFadedItems(new Set());
    setShowControls(false);
    setIsRunning(true);
    setIsInteractive(false);
    setInteractiveItems([]);
    setAddFileCount(0);
  }, []);

  // Auto-advancing animation
  useEffect(() => {
    if (!isRunning) return;

    if (visibleCount < initialItems.length) {
      const timer = setTimeout(() => {
        const nextCount = visibleCount + 1;
        setVisibleCount(nextCount);

        if (nextCount >= 6) {
          setAutoFadedItems((prev) => {
            const next = new Set(prev);
            const fadeUpTo = nextCount - 5;
            for (let i = 0; i < fadeUpTo; i++) {
              next.add(i);
            }
            return next;
          });
        }
      }, 1200);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowControls(true);
        setIsRunning(false);
        // Transition to interactive mode with all items
        setInteractiveItems([...initialItems]);
        setIsInteractive(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, isRunning]);

  // --- Interactive handlers ---
  const handleAddFile = useCallback(() => {
    setAddFileCount((c) => c + 1);
    setInteractiveItems((prev) => [
      ...prev,
      {
        icon: '\uD83D\uDCC4',
        label: `File: legacy-utils.ts (2,000 lines)`,
        size: 35,
        category: 'file' as const,
      },
    ]);
  }, []);

  const handleCompact = useCallback(() => {
    setInteractiveItems((prev) => {
      const hasHistory = prev.some((item) => item.category === 'history');
      if (!hasHistory) return prev;

      const result: ContextItem[] = [];
      let replacedHistory = false;
      for (const item of prev) {
        if (item.category === 'history') {
          if (!replacedHistory) {
            result.push({
              icon: '\uD83D\uDCDD',
              label: 'Compacted summary',
              size: 8,
              category: 'history',
            });
            replacedHistory = true;
          }
          // skip other history items
        } else {
          result.push(item);
        }
      }
      return result;
    });
  }, []);

  // --- Compute derived state for interactive mode ---
  const interactiveUsage = useMemo(
    () => getTotalUsage(interactiveItems),
    [interactiveItems]
  );

  // Determine which items are evicted (oldest items evicted first when over 100%)
  const evictedSet = useMemo(() => {
    const evicted = new Set<number>();
    if (interactiveUsage <= 100) return evicted;

    // Calculate how much we need to evict
    let excess = interactiveUsage - 100;
    for (let i = 0; i < interactiveItems.length && excess > 0; i++) {
      evicted.add(i);
      excess -= interactiveItems[i].size;
    }
    return evicted;
  }, [interactiveItems, interactiveUsage]);

  // --- Determine which items/usage to display ---
  const displayItems = isInteractive ? interactiveItems : initialItems;
  const usage = isInteractive
    ? interactiveUsage
    : getTotalUsage(initialItems.slice(0, visibleCount));
  const displayUsage = isInteractive ? usage : Math.min(usage, 100);
  const barWidth = Math.min(displayUsage, 100);

  const hasHistoryItems = interactiveItems.some(
    (item) => item.category === 'history' && item.label !== 'Compacted summary'
  );

  return (
    <div className="space-y-3" style={{ animation: 'fadeIn 0.5s ease-out' }}>
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        Context Window
      </p>

      <div className="rounded-xl border border-border bg-surface overflow-hidden">
        {/* Progress bar */}
        <div className="px-3 pt-3 pb-2">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-medium text-text-muted">
              Context Usage
            </span>
            <span
              className={`text-[10px] font-mono font-semibold transition-colors duration-300 ${getBarTextColor(displayUsage)}`}
            >
              {displayUsage}%
            </span>
          </div>
          <div
            className={`h-1.5 rounded-full transition-colors duration-500 ${getBarTrackColor(displayUsage)}`}
          >
            <div
              className={`h-full rounded-full transition-all duration-700 ease-out ${getBarColor(displayUsage)}`}
              style={{ width: `${barWidth}%` }}
            />
          </div>
        </div>

        {/* Items list */}
        <div className="px-3 pb-3 min-h-[220px] relative">
          <div className="space-y-1.5">
            {displayItems.map((item, i) => {
              // Visibility / fade logic differs between auto and interactive mode
              let isVisible: boolean;
              let isFaded: boolean;
              let isEvicted: boolean;

              if (isInteractive) {
                isVisible = true;
                isFaded = evictedSet.has(i);
                isEvicted = evictedSet.has(i);
              } else {
                isVisible = i < visibleCount;
                isFaded = autoFadedItems.has(i);
                isEvicted = false;
              }

              // Unique key that accounts for interactive additions
              const key = `${item.label}-${i}`;

              return (
                <div
                  key={key}
                  className="transition-all duration-500 ease-out"
                  style={{
                    opacity: !isVisible ? 0 : isFaded ? 0.15 : 1,
                    transform: !isVisible
                      ? 'translateY(8px) scale(0.97)'
                      : isFaded
                        ? 'scale(0.95)'
                        : 'translateY(0) scale(1)',
                    maxHeight: isVisible ? '48px' : '0px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    className={`
                      flex items-center gap-2.5 px-2.5 py-1.5 rounded-md border border-border
                      bg-white/[0.03] text-xs
                      ${isFaded ? 'border-border/50' : ''}
                    `}
                  >
                    <span className="text-sm flex-shrink-0 w-5 text-center">
                      {item.icon}
                    </span>
                    <span
                      className={`flex-1 truncate transition-all duration-300 ${
                        isEvicted
                          ? 'text-text-muted line-through'
                          : isFaded
                            ? 'text-text-muted'
                            : 'text-text-secondary'
                      }`}
                    >
                      {item.label}
                    </span>
                    {isEvicted && (
                      <span className="text-[8px] uppercase tracking-wider text-red-400/70 font-semibold flex-shrink-0">
                        evicted
                      </span>
                    )}
                    {/* Size indicator bar */}
                    <div className="flex-shrink-0 flex items-center gap-1.5">
                      <div
                        className={`h-1 rounded-full ${
                          isFaded ? 'bg-white/10' : 'bg-white/20'
                        } ${sizeBarWidths[item.category]}`}
                      >
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isFaded
                              ? 'bg-white/15'
                              : getBarColor(
                                  isInteractive
                                    ? interactiveUsage
                                    : getTotalUsage(
                                        initialItems.slice(0, Math.min(i + 1, visibleCount))
                                      )
                                )
                          }`}
                          style={{ width: '100%' }}
                        />
                      </div>
                      <span className="text-[9px] text-text-muted font-mono w-6 text-right">
                        {item.size}%
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty state */}
          {visibleCount === 0 && !showControls && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="text-xs text-text-muted"
                style={{ animation: 'fadeIn 0.5s ease-out' }}
              >
                Loading context...
              </span>
            </div>
          )}

          {/* Interactive controls (replace the old "Start fresh" button) */}
          {showControls && (
            <div
              className="mt-3 flex flex-wrap justify-center gap-2"
              style={{ animation: 'fadeUp 0.4s ease-out' }}
            >
              <button onClick={handleAddFile} className={buttonClass}>
                Add a 2,000-line file
              </button>
              <button
                onClick={handleCompact}
                className={`${buttonClass} ${!hasHistoryItems ? 'opacity-40 cursor-not-allowed' : ''}`}
                disabled={!hasHistoryItems}
              >
                Compact conversation
              </button>
              <button onClick={resetAnimation} className={buttonClass}>
                Reset
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
