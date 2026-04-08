'use client';

import { useState, useEffect, useCallback } from 'react';

interface PanelData {
  label: string;
  icon?: string;
  text: string;
}

interface BeforeAfterProps {
  before: PanelData;
  after: PanelData;
  footer?: string;
}

export function BeforeAfter({ before, after, footer }: BeforeAfterProps) {
  const [phase, setPhase] = useState<'before' | 'transitioning' | 'after'>('before');
  const [showFooter, setShowFooter] = useState(false);
  const [key, setKey] = useState(0);

  const runSequence = useCallback(() => {
    setPhase('before');
    setShowFooter(false);

    const t1 = setTimeout(() => {
      setPhase('transitioning');
    }, 2000);

    const t2 = setTimeout(() => {
      setPhase('after');
    }, 2500);

    const t3 = setTimeout(() => {
      setShowFooter(true);
    }, 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  useEffect(() => {
    const cleanup = runSequence();
    return cleanup;
  }, [key, runSequence]);

  const handleReplay = () => {
    setKey((k) => k + 1);
  };

  const isAfter = phase === 'after' || phase === 'transitioning';

  return (
    <div className="space-y-5 w-full max-w-[480px] mx-auto">
      {/* Before panel */}
      <div
        className="p-7 rounded-2xl border border-red-500/25 bg-red-500/[0.06] transition-opacity duration-500 animate-[fadeUp_0.4s_ease-out_both]"
        style={{ opacity: isAfter ? 0.5 : 1 }}
      >
        <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-red-400 mb-3">
          {before.icon && <span className="mr-1.5">{before.icon}</span>}
          {before.label}
        </div>
        <div className="text-base text-text-secondary leading-relaxed">{before.text}</div>
      </div>

      {/* Arrow */}
      <div
        className="flex justify-center text-text-muted text-2xl animate-[fadeIn_0.3s_0.2s_ease-out_both]"
        style={{
          opacity: phase === 'transitioning' ? 1 : 0.5,
          transition: 'opacity 0.3s',
        }}
      >
        &darr;
      </div>

      {/* After panel */}
      <div
        className="p-7 rounded-2xl border border-green-500/25 bg-green-500/[0.06] transition-opacity duration-500"
        style={{ opacity: isAfter ? 1 : 0 }}
      >
        <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-green-400 mb-3">
          {after.icon && <span className="mr-1.5">{after.icon}</span>}
          {after.label}
        </div>
        <div className="text-base text-text-secondary leading-relaxed">{after.text}</div>
      </div>

      {/* Footer */}
      {footer && (
        <div
          className="text-center text-xs text-text-muted mt-5 transition-opacity duration-500"
          style={{ opacity: showFooter ? 1 : 0 }}
        >
          {footer}
        </div>
      )}

      {/* Replay button */}
      {phase === 'after' && (
        <div className="flex justify-center">
          <button
            onClick={handleReplay}
            className="text-[11px] text-text-muted hover:text-text-secondary transition-colors duration-200 cursor-pointer"
          >
            &#8635; Replay
          </button>
        </div>
      )}
    </div>
  );
}
