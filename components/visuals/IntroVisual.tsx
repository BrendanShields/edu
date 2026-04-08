'use client';

import { useState, useEffect } from 'react';

/* ── Stage timing (ms from loop start) ── */
const STAGE_TIMES = [0, 1500, 3500, 5500, 7500, 10000, 11500, 13000];

/* ── Content for each stage ── */
interface Line {
  text: string;
  style?: 'dim' | 'red' | 'green' | 'check' | 'bold';
}

const STAGE_CONTENT: Record<number, Line[]> = {
  1: [
    { text: 'Reading src/auth/login.ts...', style: 'dim' },
    { text: 'Reading src/auth/__tests__/auth.test.ts...', style: 'dim' },
  ],
  2: [
    { text: 'Found: auth.test.ts:42 expects rejection at', style: 'dim' },
    { text: 'exact expiry, but login.ts:18 uses >= which', style: 'dim' },
    { text: 'accepts it.', style: 'dim' },
  ],
  3: [
    { text: 'Editing src/auth/login.ts', style: 'dim' },
    { text: '', style: 'dim' },
    { text: '- if (expiry >= new Date()) {', style: 'red' },
    { text: '+ if (expiry > new Date()) {', style: 'green' },
  ],
  4: [
    { text: '$ npm test', style: 'bold' },
    { text: '' },
    { text: '  \u2713 rejects expired token (2ms)', style: 'check' },
    { text: '  \u2713 rejects token at exact expiry (1ms)', style: 'check' },
    { text: '  \u2713 accepts valid token (4ms)', style: 'check' },
    { text: '' },
    { text: '  3 passed, 0 failed', style: 'check' },
  ],
  5: [
    { text: '\u2713 Fixed. The comparison operator was including', style: 'check' },
    { text: '  the boundary case.', style: 'check' },
  ],
};

/* ── Prompt text for typing animation ── */
const PROMPT_LINE_1 = '~/myapp $ claude';
const PROMPT_LINE_2 = '> fix the failing test in auth.test.ts';

/* ── CSS custom properties hoisted to module scope so the object isn't
 *    re-allocated every render. The only thing that varies per render is
 *    `opacity`, which we merge in at the call site. ── */
const TERM_THEME: React.CSSProperties = {
  ['--term-bg' as string]: '#0d0d0d',
  ['--term-chrome' as string]: '#1a1a1a',
  ['--term-text' as string]: '#d4d4d4',
  ['--term-dim' as string]: '#808080',
  ['--term-red' as string]: '#f87171',
  ['--term-red-bg' as string]: 'rgba(248, 113, 113, 0.1)',
  ['--term-green' as string]: '#4ade80',
  ['--term-green-bg' as string]: 'rgba(74, 222, 128, 0.1)',
  ['--term-cursor' as string]: 'rgba(212, 212, 212, 0.7)',
  ['--term-dot-red' as string]: '#ff5f57',
  ['--term-dot-yellow' as string]: '#febc2e',
  ['--term-dot-green' as string]: '#28c840',
  width: '100%',
  maxWidth: '480px',
  transition: 'opacity 0.7s ease',
};

/* ── Outer wrapper: bumps `loopKey` to force a clean remount of the inner
 *    component every cycle. Gives us state reset for free without a manual
 *    `resetLoop` that has to clear seven setters. ── */
export function IntroVisual() {
  const [loopKey, setLoopKey] = useState(0);
  return (
    <IntroVisualInner
      key={loopKey}
      onLoopComplete={() => setLoopKey((k) => k + 1)}
    />
  );
}

interface IntroVisualInnerProps {
  onLoopComplete: () => void;
}

function IntroVisualInner({ onLoopComplete }: IntroVisualInnerProps) {
  const [stage, setStage] = useState(-1); // -1 = not started / fading in
  const [typedChars1, setTypedChars1] = useState(0);
  const [typedChars2, setTypedChars2] = useState(0);
  const [lineReveal, setLineReveal] = useState(0); // how many lines revealed in current stage body
  const [fading, setFading] = useState(false); // fade-out state
  const [taglineVisible, setTaglineVisible] = useState(false);

  /* ── Initial mount: start the first loop ── */
  useEffect(() => {
    const t = setTimeout(() => setStage(0), 300);
    return () => clearTimeout(t);
  }, []);

  /* ── Stage 0: typing animation for prompt ──
   * Single setInterval driven by a counter, instead of queueing 80+
   * setTimeouts up front. Lower scheduling overhead, easier to reason about,
   * and the cleanup is one clearInterval call.
   */
  useEffect(() => {
    if (stage !== 0) return;
    setTypedChars1(0);
    setTypedChars2(0);

    const CHAR_DELAY = 45;
    const PAUSE_BETWEEN_LINES = 200; // ms gap before line 2 starts typing

    // Tick budget: line1 chars + pause-as-ticks + line2 chars (+ 1 to land
    // on the final char of line 2 cleanly).
    const pauseTicks = Math.ceil(PAUSE_BETWEEN_LINES / CHAR_DELAY);
    const totalTicks = PROMPT_LINE_1.length + pauseTicks + PROMPT_LINE_2.length;

    let tick = 0;
    const interval = setInterval(() => {
      tick += 1;
      if (tick <= PROMPT_LINE_1.length) {
        setTypedChars1(tick);
      } else if (tick > PROMPT_LINE_1.length + pauseTicks) {
        setTypedChars2(tick - PROMPT_LINE_1.length - pauseTicks);
      }
      if (tick >= totalTicks) clearInterval(interval);
    }, CHAR_DELAY);

    return () => clearInterval(interval);
  }, [stage]);

  /* ── Schedule the rest of the sequence once stage 0 begins ── */
  useEffect(() => {
    if (stage !== 0) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    // Schedule stages 1-5
    for (let s = 1; s <= 5; s++) {
      timers.push(
        setTimeout(() => {
          setStage(s);
          setLineReveal(0);
        }, STAGE_TIMES[s])
      );
    }

    // Stage 6: tagline
    timers.push(
      setTimeout(() => {
        setStage(6);
        setTaglineVisible(true);
      }, STAGE_TIMES[6])
    );

    // Stage 7: fade out
    timers.push(
      setTimeout(() => {
        setFading(true);
      }, STAGE_TIMES[7])
    );

    // After fade completes, tell the wrapper to remount us with a fresh key.
    timers.push(setTimeout(onLoopComplete, STAGE_TIMES[7] + 800));

    return () => timers.forEach(clearTimeout);
    // onLoopComplete is intentionally left out of deps: the wrapper guarantees
    // a stable identity for the lifetime of this instance because each mount
    // gets a new key.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  /* ── Stagger line reveals within each stage ──
   * Single setInterval ticks once per line reveal step instead of queuing
   * one setTimeout per line. Same pattern as the stage-0 typing effect.
   */
  useEffect(() => {
    if (stage < 1 || stage > 5) return;
    const lines = STAGE_CONTENT[stage];
    if (!lines) return;

    setLineReveal(0);
    let revealed = 0;
    const interval = setInterval(() => {
      revealed += 1;
      setLineReveal(revealed);
      if (revealed >= lines.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [stage]);

  /* ── Render a single terminal line ── */
  const renderLine = (line: Line, index: number, revealed: boolean) => {
    let bg = 'transparent';
    let color = 'var(--term-text)';

    if (line.style === 'dim') color = 'var(--term-dim)';
    if (line.style === 'red') {
      bg = 'var(--term-red-bg)';
      color = 'var(--term-red)';
    }
    if (line.style === 'green') {
      bg = 'var(--term-green-bg)';
      color = 'var(--term-green)';
    }
    if (line.style === 'check') color = 'var(--term-green)';
    if (line.style === 'bold') {
      color = 'var(--term-text)';
    }

    return (
      <div
        key={index}
        style={{
          padding: '0 0 0 2px',
          background: bg,
          color,
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'translateY(0)' : 'translateY(4px)',
          transition: 'opacity 0.2s ease, transform 0.2s ease',
          minHeight: line.text === '' ? '0.6em' : undefined,
          fontWeight: line.style === 'bold' ? 600 : 400,
        }}
      >
        {line.text}
      </div>
    );
  };

  /* ── Which stage body to show (stages 0-1 accumulate, 2+ replace) ── */
  const renderBody = () => {
    // Stages 2-5: show only current stage content
    if (stage >= 2 && stage <= 5) {
      const lines = STAGE_CONTENT[stage] || [];
      return (
        <div
          style={{
            transition: 'opacity 0.25s ease',
            opacity: 1,
          }}
        >
          {lines.map((line, i) => renderLine(line, i, i < lineReveal))}
        </div>
      );
    }

    // Stage 1: show stage 1 content (accumulates with prompt which is separate)
    if (stage === 1) {
      const lines = STAGE_CONTENT[1] || [];
      return (
        <div>
          {lines.map((line, i) => renderLine(line, i, i < lineReveal))}
        </div>
      );
    }

    return null;
  };

  /* ── Cursor blink ── */
  const cursor = (
    <span
      style={{
        display: 'inline-block',
        width: '7px',
        height: '14px',
        background: 'var(--term-cursor)',
        verticalAlign: 'middle',
        marginLeft: '1px',
        animation: 'termBlink 1s step-end infinite',
      }}
    />
  );

  return (
    <div style={{ ...TERM_THEME, opacity: fading ? 0 : 1 }}>
      {/* Keyframe styles */}
      <style>{`
        @keyframes termBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      {/* Terminal window */}
      <div
        style={{
          background: 'var(--term-bg)',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.06)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.5)',
        }}
      >
        {/* Chrome bar */}
        <div
          style={{
            background: 'var(--term-chrome)',
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
          }}
        >
          {/* Traffic lights */}
          <div style={{ display: 'flex', gap: '6px' }}>
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: 'var(--term-dot-red)',
              }}
            />
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: 'var(--term-dot-yellow)',
              }}
            />
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: 'var(--term-dot-green)',
              }}
            />
          </div>
          {/* Title */}
          <span
            style={{
              fontSize: '11px',
              color: 'var(--term-dim)',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.02em',
              marginLeft: '4px',
            }}
          >
            claude
          </span>
        </div>

        {/* Terminal body */}
        <div
          style={{
            padding: '14px 16px',
            fontFamily: 'var(--font-mono)',
            fontSize: '11.5px',
            lineHeight: 1.65,
            color: 'var(--term-text)',
            minHeight: '180px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}
        >
          {/* Prompt (always visible from stage 0+) */}
          {stage >= 0 && (
            <div>
              <div style={{ color: 'var(--term-text)' }}>
                {PROMPT_LINE_1.slice(0, typedChars1)}
                {stage === 0 && typedChars1 < PROMPT_LINE_1.length && typedChars2 === 0 && cursor}
              </div>
              {typedChars2 > 0 && (
                <div style={{ color: 'var(--term-text)' }}>
                  {PROMPT_LINE_2.slice(0, typedChars2)}
                  {stage === 0 && typedChars2 < PROMPT_LINE_2.length && cursor}
                </div>
              )}
              {stage === 0 && typedChars1 >= PROMPT_LINE_1.length && typedChars2 === 0 && (
                <div>{cursor}</div>
              )}
              {stage === 0 && typedChars2 >= PROMPT_LINE_2.length && (
                <span>{cursor}</span>
              )}
            </div>
          )}

          {/* Separator between prompt and agent output */}
          {stage >= 1 && (
            <div
              style={{
                borderTop: '1px solid rgba(255,255,255,0.05)',
                margin: '4px 0',
              }}
            />
          )}

          {/* Stage body content */}
          {renderBody()}
        </div>
      </div>

      {/* Tagline (outside terminal) */}
      <div
        style={{
          textAlign: 'center',
          fontSize: '13px',
          fontStyle: 'italic',
          color: 'var(--color-text-muted)',
          marginTop: '16px',
          padding: '0 8px',
          opacity: taglineVisible ? 1 : 0,
          transition: 'opacity 0.6s ease',
          lineHeight: 1.5,
        }}
      >
        One prompt. Four seconds of reading. One character changed. All tests pass.
      </div>
    </div>
  );
}
