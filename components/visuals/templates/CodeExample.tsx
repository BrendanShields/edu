'use client';

import { useMemo, useState, useEffect } from 'react';

interface CodeExampleProps {
  title?: string;
  language?: string;
  code: string;
}

export function CodeExample({ title, language, code }: CodeExampleProps) {
  // Memoized so the line array isn't rebuilt — and the effect deps that
  // depend on its length don't churn — on every parent re-render.
  const lines = useMemo(() => code.split('\n'), [code]);
  const [revealedCount, setRevealedCount] = useState(0);
  const [finished, setFinished] = useState(false);

  // Line-by-line reveal
  useEffect(() => {
    if (revealedCount >= lines.length) return;

    const timer = setTimeout(() => {
      setRevealedCount((prev) => prev + 1);
    }, 400);

    return () => clearTimeout(timer);
  }, [revealedCount, lines.length]);

  // After all lines revealed, hold 2s then mark finished
  useEffect(() => {
    if (revealedCount < lines.length || finished) return;

    const timer = setTimeout(() => {
      setFinished(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [revealedCount, lines.length, finished]);

  return (
    <div className="space-y-4">
      {title && (
        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted animate-[fadeIn_0.3s_ease-out_both]">
          {title}
        </p>
      )}
      <div className="rounded-xl border border-border bg-surface overflow-hidden animate-[fadeUp_0.4s_ease-out_both]">
        {language && (
          <div
            className="px-4 py-2 border-b border-border text-[10px] uppercase tracking-wider text-text-muted animate-[fadeIn_0.3s_0.2s_ease-out_both]"
            style={{ opacity: 0 }}
          >
            {language}
          </div>
        )}
        <pre className="p-4 text-sm font-mono text-text-secondary leading-relaxed overflow-x-auto whitespace-pre-wrap">
          {lines.map((line, i) => {
            const isRevealed = i < revealedCount;
            const isLastRevealed = i === revealedCount - 1;

            if (!isRevealed && !finished) return null;

            return (
              <span key={i} className="block">
                <span
                  className={finished ? '' : 'animate-[fadeSlideIn_0.3s_ease-out_both]'}
                  style={finished ? undefined : { display: 'inline-block' }}
                >
                  {line || '\u200B'}
                </span>
                {/* Blinking cursor on the last revealed line, before finished */}
                {isLastRevealed && !finished && (
                  <span
                    className="inline-block w-2 h-4 ml-0.5 align-middle animate-pulse rounded-sm"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  />
                )}
              </span>
            );
          })}
        </pre>
      </div>
    </div>
  );
}
