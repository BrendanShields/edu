'use client';

import { useEffect, useState } from 'react';

/* ============================================================
 * 1. TokenStrip — words mapping to numbers
 * ============================================================
 * (The former blueprint-vs-tree visual lives in BonsaiVisual.tsx now.)
 */
const TOKEN_STRIP_TOKENS = ['Once', 'upon', 'a', 'time'] as const;
const TOKEN_STRIP_IDS = [4023, 1817, 64, 892] as const;

export function TokenStrip() {
  return (
    <div className="w-full max-w-[600px] space-y-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        Text becomes numbers
      </p>
      <div className="flex items-center justify-center gap-2">
        {TOKEN_STRIP_TOKENS.map((tok, i) => (
          <div
            key={tok}
            className="flex flex-col items-center gap-2"
            style={{ animation: `fadeSlideIn 0.45s ${i * 0.18}s ease-out both`, opacity: 0 }}
          >
            <div className="px-3 py-2 rounded-lg border border-border bg-surface text-sm font-mono text-text-primary min-w-[64px] text-center">
              {tok}
            </div>
            <div className="text-text-muted text-xs">&darr;</div>
            <div className="px-3 py-2 rounded-lg border border-accent/40 bg-accent/5 text-sm font-mono text-accent min-w-[64px] text-center">
              {TOKEN_STRIP_IDS[i]}
            </div>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-text-muted text-center">
        Each token is just an index. Everything that follows is arithmetic.
      </p>
    </div>
  );
}

/* ============================================================
 * 3. WeightGrid — vast field of parameters
 * ============================================================
 *
 * All of the layout/data computation is deterministic and constant, so it
 * lives at module scope rather than re-running on every render of the
 * component (which would otherwise rebuild a 336-element array of objects
 * each time).
 */
const WG_COLS = 24;
const WG_ROWS = 14;
const WG_W = 480;
const WG_H = 280;
const WG_PAD_X = 8;
const WG_PAD_Y = 10;
const WG_GAP = 2;
const WG_CELL_W = (WG_W - WG_PAD_X * 2 - WG_GAP * (WG_COLS - 1)) / WG_COLS;
const WG_CELL_H = (WG_H - WG_PAD_Y * 2 - WG_GAP * (WG_ROWS - 1)) / WG_ROWS;

interface WeightGridCell {
  i: number;
  hasLabel: boolean;
  isHot: boolean;
  value: string;
  intensity: number;
}

const WG_CELLS: WeightGridCell[] = Array.from(
  { length: WG_COLS * WG_ROWS },
  (_, i) => {
    // Pseudo-noise: stable across renders, varied enough to feel real.
    const v = Math.sin(i * 1.7) * Math.cos(i * 0.93);
    const intensity = (v + 1) / 2; // 0..1
    return {
      i,
      // A scattered handful of cells get visible decimal labels.
      hasLabel: i % 31 === 5 || i % 41 === 12,
      // A different scattered subset gets the accent halo.
      isHot: i % 47 === 0 || i % 53 === 17,
      value: (Math.sin(i * 0.31) * 1.6).toFixed(2),
      intensity,
    };
  },
);

// Two values that "pop out" of the grid into the centred zoom callout.
const WG_SAMPLE = ['0.0042', '-1.37', '0.88', '0.21', '-0.04', '1.92', '-0.73', '0.55'];

export function WeightGrid() {
  return (
    <div className="w-full max-w-[600px] space-y-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        ~ trillions of parameters
      </p>

      <div
        className="relative rounded-xl border border-border bg-surface overflow-hidden"
        style={{ height: 300 }}
      >
        <svg viewBox={`0 0 ${WG_W} ${WG_H}`} className="w-full h-full" aria-label="A field of weight parameters laid out as a grid, with a few values labelled and a zoomed callout in the centre">
          <defs>
            <radialGradient id="weight-grid-fade" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="transparent" stopOpacity="0" />
              <stop offset="55%" stopColor="#141414" stopOpacity="0" />
              <stop offset="100%" stopColor="#141414" stopOpacity="0.95" />
            </radialGradient>
          </defs>

          {/* Cells */}
          {WG_CELLS.map((c) => {
            const col = c.i % WG_COLS;
            const row = Math.floor(c.i / WG_COLS);
            const x = WG_PAD_X + col * (WG_CELL_W + WG_GAP);
            const y = WG_PAD_Y + row * (WG_CELL_H + WG_GAP);
            // Round to 3 decimals so the SSR/CSR string representations
            // agree (full-precision floats can serialize at slightly
            // different lengths and trip the hydration matcher).
            const cellOpacity = Number((0.18 + c.intensity * 0.32).toFixed(3));

            return (
              <g
                key={c.i}
                style={{ animation: `fadeIn 0.4s ${((col * 0.012) + (row * 0.008)).toFixed(3)}s ease-out both` }}
              >
                <rect
                  x={x}
                  y={y}
                  width={WG_CELL_W}
                  height={WG_CELL_H}
                  rx={1.5}
                  fill={c.isHot ? 'var(--color-accent)' : '#a0a0a0'}
                  opacity={c.isHot ? 0.55 : cellOpacity}
                />
                {c.hasLabel && (
                  <text
                    x={x + WG_CELL_W / 2}
                    y={y + WG_CELL_H / 2 + 1.6}
                    fill="#9a9a9a"
                    fontSize="4.2"
                    fontFamily="ui-monospace, monospace"
                    textAnchor="middle"
                    opacity="0.7"
                  >
                    {c.value}
                  </text>
                )}
              </g>
            );
          })}

          {/* Vignette overlay so the grid feels infinite at the edges */}
          <rect x="0" y="0" width={WG_W} height={WG_H} fill="url(#weight-grid-fade)" />

          {/* Connector line — runs from a hot cell to the zoom callout. */}
          <g style={{ animation: 'fadeIn 0.4s 0.6s ease-out both', opacity: 0 }}>
            <line
              x1="120"
              y1="80"
              x2="190"
              y2="118"
              stroke="var(--color-accent)"
              strokeWidth="0.9"
              strokeDasharray="2 2"
              opacity="0.6"
            />
            <circle cx="120" cy="80" r="3" fill="none" stroke="var(--color-accent)" strokeWidth="1" opacity="0.8" />
          </g>

          {/* Zoom callout — rendered inside the SVG so it scales with the grid */}
          <g style={{ animation: 'fadeScaleIn 0.5s 0.55s ease-out both', opacity: 0, transformOrigin: '240px 140px' }}>
            <rect
              x="180"
              y="106"
              width="120"
              height="70"
              rx="6"
              fill="#0a0a0a"
              stroke="var(--color-accent)"
              strokeOpacity="0.5"
              strokeWidth="0.8"
            />
            {WG_SAMPLE.map((v, i) => {
              const cx = 192 + (i % 4) * 27;
              const cy = 124 + Math.floor(i / 4) * 26;
              return (
                <g key={i}>
                  <rect
                    x={cx - 11}
                    y={cy - 7}
                    width="22"
                    height="14"
                    rx="2.5"
                    fill="rgba(255,107,53,0.05)"
                    stroke="var(--color-accent)"
                    strokeOpacity="0.25"
                    strokeWidth="0.6"
                  />
                  <text
                    x={cx}
                    y={cy + 2.6}
                    fill="var(--color-accent)"
                    fontSize="5.5"
                    fontFamily="ui-monospace, monospace"
                    textAnchor="middle"
                    fontWeight="600"
                  >
                    {v}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      <p className="text-[11px] text-text-muted text-center">
        Each cell is a single &ldquo;weight&rdquo;. Most of the grid stretches on past the edge of the screen.
      </p>
    </div>
  );
}

/* ============================================================
 * 4. TransformerStack — stacked layers with attention
 * ============================================================ */
const TRANSFORMER_LAYERS = Array.from({ length: 8 });
const TRANSFORMER_TOKEN_X = [60, 100, 140, 180, 220] as const;
// Attention paths animate one at a time so the eye can follow each thread.
// Each path has its own draw delay; together they imply continuous flow.
const TRANSFORMER_ATTENTION = [
  { d: 'M60 37 Q100 80 180 121', delay: 0.9 },
  { d: 'M180 37 Q120 80 60 149', delay: 1.05 },
  { d: 'M100 65 Q160 110 220 177', delay: 1.2 },
  { d: 'M140 93 Q100 130 60 205', delay: 1.35 },
  { d: 'M220 65 Q140 140 100 233', delay: 1.5 },
  { d: 'M60 121 Q140 160 220 233', delay: 1.65 },
] as const;

export function TransformerStack() {
  return (
    <div className="w-full max-w-[600px] space-y-5">
      <style>{`
        @keyframes transformer-draw {
          from { stroke-dashoffset: 200; opacity: 0; }
          15%  { opacity: 0.7; }
          to   { stroke-dashoffset: 0; opacity: 0.55; }
        }
        @keyframes transformer-token {
          0%, 100% { opacity: 0.4; r: 2; }
          50%      { opacity: 1;   r: 2.6; }
        }
        .transformer-attn {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: transformer-draw 1.6s ease-in-out both;
        }
        .transformer-token {
          animation: transformer-token 3s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .transformer-attn { stroke-dasharray: 0; stroke-dashoffset: 0; opacity: 0.55; animation: none; }
          .transformer-token { animation: none; opacity: 0.8; }
        }
      `}</style>
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        The wiring diagram
      </p>
      <div className="relative rounded-xl border border-border bg-surface p-5">
        <svg viewBox="0 0 280 280" className="w-full h-auto">
          {/* Layers */}
          {TRANSFORMER_LAYERS.map((_, i) => {
            const y = 30 + i * 28;
            return (
              <g key={i} style={{ animation: `fadeUp 0.4s ${i * 0.07}s ease-out both`, opacity: 0 }}>
                <rect
                  x="40"
                  y={y}
                  width="200"
                  height="14"
                  rx="2"
                  fill="#1a1a1a"
                  stroke="#FF6B35"
                  strokeOpacity="0.4"
                  strokeWidth="1"
                />
                {/* Token positions — pulse on a slow loop, staggered per layer */}
                {TRANSFORMER_TOKEN_X.map((x, j) => (
                  <circle
                    key={x}
                    cx={x}
                    cy={y + 7}
                    r="2"
                    fill="#FF6B35"
                    className="transformer-token"
                    style={{ animationDelay: `${(i * 0.18) + (j * 0.12)}s` }}
                  />
                ))}
              </g>
            );
          })}

          {/* Attention lines — each draws in on its own delay */}
          {TRANSFORMER_ATTENTION.map((a, i) => (
            <path
              key={i}
              d={a.d}
              stroke="#FF6B35"
              strokeWidth="0.8"
              fill="none"
              strokeLinecap="round"
              className="transformer-attn"
              style={{ animationDelay: `${a.delay}s` }}
            />
          ))}

          {/* Labels */}
          <text x="20" y="40" fill="#666" fontSize="9" fontFamily="ui-monospace, monospace">in</text>
          <text x="20" y="240" fill="#666" fontSize="9" fontFamily="ui-monospace, monospace">out</text>
        </svg>
      </div>
      <p className="text-[11px] text-text-muted text-center">
        100+ near-identical layers stacked vertically. Threads = attention across positions.
      </p>
    </div>
  );
}

/* ============================================================
 * 5. LossLandscape — ball rolling down with steps slider
 * ============================================================ */
const LL_W = 320;
const LL_H = 180;
const LL_PAD_X = 20;
const LL_PAD_Y = 24;
const LL_MAX_STEPS = 100;

const llRound = (n: number) => Number(n.toFixed(2));

// Loss curve: parabola-ish, smoothed bumpy bowl. Pure function of x ∈ [0,1].
function llYCurve(x: number) {
  const dx = x - 0.5;
  return 0.1 + 1.2 * dx * dx + 0.06 * Math.sin(x * 16);
}

// The curve itself is constant — bake the SVG path string at module load.
const LL_PATH = (() => {
  const points: string[] = [];
  for (let i = 0; i <= 60; i++) {
    const x = i / 60;
    const y = llYCurve(x);
    points.push(
      `${llRound(LL_PAD_X + x * (LL_W - LL_PAD_X * 2))},${llRound(LL_PAD_Y + y * (LL_H - LL_PAD_Y * 2))}`,
    );
  }
  return 'M' + points.join(' L');
})();

export function LossLandscape() {
  const [step, setStep] = useState(0);

  // Auto-advance training
  useEffect(() => {
    if (step >= LL_MAX_STEPS) {
      const reset = setTimeout(() => setStep(0), 2000);
      return () => clearTimeout(reset);
    }
    const t = setTimeout(() => setStep((s) => s + 2), 80);
    return () => clearTimeout(t);
  }, [step]);

  // Ball position is the only thing that depends on `step`.
  const t = step / LL_MAX_STEPS;
  const xNorm = 0.08 + t * 0.42; // descent toward minimum at 0.5
  const ballX = llRound(LL_PAD_X + xNorm * (LL_W - LL_PAD_X * 2));
  const ballY = llRound(LL_PAD_Y + llYCurve(xNorm) * (LL_H - LL_PAD_Y * 2) - 6);

  return (
    <div className="w-full max-w-[600px] space-y-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        Gradient descent
      </p>
      <div className="rounded-xl border border-border bg-surface p-5">
        <svg viewBox={`0 0 ${LL_W} ${LL_H}`} className="w-full h-auto">
          {/* Y axis label */}
          <text x="6" y="30" fill="#666" fontSize="9" fontFamily="monospace">error</text>
          {/* Curve */}
          <path d={LL_PATH} stroke="#3a3a3a" strokeWidth="1.5" fill="none" />
          {/* Ball */}
          <circle cx={ballX} cy={ballY} r="6" fill="#FF6B35" />
          <circle cx={ballX} cy={ballY} r="10" fill="#FF6B35" opacity="0.2" />
        </svg>

        {/* Slider */}
        <div className="mt-4 space-y-2">
          <input
            type="range"
            min={0}
            max={LL_MAX_STEPS}
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
            className="w-full accent-accent"
            style={{ accentColor: '#FF6B35' }}
            aria-label="Training step"
            aria-valuetext={`Step ${step} of ${LL_MAX_STEPS}`}
          />
          <div className="flex justify-between text-[10px] text-text-muted font-mono">
            <span>training step</span>
            <span>{step} / {LL_MAX_STEPS}</span>
          </div>
        </div>
      </div>
      <p className="text-[11px] text-text-muted text-center">
        Each step nudges every weight slightly downhill. Repeat for trillions of words.
      </p>
    </div>
  );
}

/* ============================================================
 * 6. BaseModelDemo — input → LLM box → output, cycling
 * ============================================================ */
const BASE_MODEL_EXAMPLES = [
  { input: 'the capital of France is', output: 'Paris.' },
  { input: 'Once upon a time, in a small village,', output: 'there lived a baker who...' },
  { input: 'def fibonacci(n):', output: '\n    if n < 2: return n' },
] as const;

export function BaseModelDemo() {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<'in' | 'out'>('in');

  useEffect(() => {
    if (phase === 'in') {
      const t = setTimeout(() => setPhase('out'), 1200);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setIdx((i) => (i + 1) % BASE_MODEL_EXAMPLES.length);
      setPhase('in');
    }, 2200);
    return () => clearTimeout(t);
  }, [phase]);

  const example = BASE_MODEL_EXAMPLES[idx];

  return (
    <div className="w-full max-w-[600px] space-y-5">{/* base-model */}
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        The base model
      </p>
      <div className="flex items-stretch gap-3">
        {/* Input */}
        <div
          key={`in-${idx}`}
          className="flex-1 rounded-lg border border-border bg-surface p-4 animate-[fadeSlideIn_0.4s_ease-out_both]"
        >
          <div className="text-[10px] uppercase tracking-wider text-text-muted mb-2">in</div>
          <div className="text-sm font-mono text-text-secondary">{example.input}</div>
        </div>
        {/* Arrow */}
        <div className="flex items-center text-text-muted text-lg">&rarr;</div>
        {/* LLM box */}
        <div className="rounded-lg border border-accent/40 bg-accent/5 p-4 flex items-center justify-center min-w-[80px]">
          <div className="text-xs font-bold tracking-wider text-accent">LLM</div>
        </div>
        {/* Arrow */}
        <div className="flex items-center text-text-muted text-lg">&rarr;</div>
        {/* Output */}
        <div className="flex-1 rounded-lg border border-border bg-surface p-4">
          <div className="text-[10px] uppercase tracking-wider text-text-muted mb-2">out</div>
          <div
            key={`out-${idx}-${phase}`}
            className="text-sm font-mono text-accent min-h-[1.25rem] whitespace-pre-wrap"
            style={{
              opacity: phase === 'out' ? 1 : 0,
              transition: 'opacity 0.3s',
            }}
          >
            {example.output}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-1.5 mt-3">
        {BASE_MODEL_EXAMPLES.map((_, i) => (
          <div
            key={i}
            className="h-1 w-6 rounded-full"
            style={{ background: i === idx ? '#FF6B35' : '#2A2A2A', transition: 'background 0.3s' }}
          />
        ))}
      </div>
    </div>
  );
}

/* ============================================================
 * 7. FineTuneCompare — base vs fine-tuned response
 * ============================================================ */
export function FineTuneCompare() {
  return (
    <div className="w-full max-w-[600px] space-y-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        Same model, different behaviour
      </p>
      <div className="rounded-lg border border-border bg-surface px-4 py-3 text-sm font-mono text-text-secondary animate-[fadeUp_0.4s_ease-out_both]">
        <span className="text-text-muted">prompt:</span> &ldquo;What is recursion?&rdquo;
      </div>

      <div className="grid grid-cols-1 gap-3">
        <div
          className="rounded-xl border border-red-500/20 bg-red-500/5 p-4 animate-[fadeUp_0.4s_0.2s_ease-out_both]"
          style={{ opacity: 0 }}
        >
          <div className="text-[10px] uppercase tracking-wider text-red-400 mb-2">Base model</div>
          <div className="text-xs text-text-secondary leading-relaxed font-mono">
            ... and other concepts like iteration. Posted by anon42 on 2014-03-12.
            <br />
            <span className="text-text-muted">3 comments | reply</span>
            <br />
            &gt; Re: What is recursion? See sticky thread...
          </div>
        </div>

        <div
          className="rounded-xl border border-green-500/20 bg-green-500/5 p-4 animate-[fadeUp_0.4s_0.4s_ease-out_both]"
          style={{ opacity: 0 }}
        >
          <div className="text-[10px] uppercase tracking-wider text-green-400 mb-2">Fine-tuned</div>
          <div className="text-xs text-text-secondary leading-relaxed">
            Recursion is when a function calls itself to solve a smaller version of the same problem,
            until it hits a base case that stops the chain.
          </div>
        </div>
      </div>

      <p className="text-[11px] text-text-muted text-center">
        Knowledge is the same. The role is what changed.
      </p>
    </div>
  );
}

/* ============================================================
 * 8. DNAComparison — scrolling DNA vs scrolling weights
 * ============================================================ */

// Both strings are deterministic and constant — bake at module load.
const DNA_STRING = (() => {
  const bases = ['A', 'C', 'G', 'T'];
  let s = '';
  for (let i = 0; i < 600; i++) s += bases[(i * 7 + 3) % 4];
  return s;
})();

const WEIGHTS_STRING = (() => {
  const out: string[] = [];
  for (let i = 0; i < 200; i++) {
    out.push(((Math.sin(i * 1.7) + Math.cos(i * 2.3)) * 1.2).toFixed(3));
  }
  return out.join('  ');
})();

// Hoisted out of DNAComparison so it's a stable component identity rather
// than a fresh function on every render of the parent.
function ScrollCol({
  label,
  text,
  colorClass,
}: {
  label: string;
  text: string;
  colorClass: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface overflow-hidden">
      <div className="px-3 py-2 border-b border-border text-[10px] uppercase tracking-wider text-text-muted">
        {label}
      </div>
      <div
        className="p-3 font-mono text-[10px] leading-relaxed overflow-hidden relative"
        style={{ height: 200 }}
      >
        <div
          className={`whitespace-pre-wrap break-all ${colorClass}`}
          style={{ animation: 'dnaScroll 18s linear infinite' }}
        >
          {text}
          {text}
        </div>
        {/* Top/bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[var(--color-surface)] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[var(--color-surface)] to-transparent" />
      </div>
    </div>
  );
}

export function DNAComparison() {
  return (
    <div className="w-full max-w-[600px] space-y-5">
      <style>{`
        @keyframes dnaScroll {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
      `}</style>
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        Both transparent. Both opaque.
      </p>
      <div className="grid grid-cols-2 gap-3">
        <ScrollCol label="Genome" text={DNA_STRING} colorClass="text-text-secondary" />
        <ScrollCol label="Weights" text={WEIGHTS_STRING} colorClass="text-accent" />
      </div>
      <p className="text-[11px] text-text-muted text-center">
        You can read every character. Neither tells you what the system will do.
      </p>
    </div>
  );
}

/* ============================================================
 * 9. WorldModel — medical report → branching predictions → vitals
 * ============================================================ */
const WORLD_MODEL_PREDICTIONS = [
  { text: '… fell asleep.', wrong: true },
  { text: '… heart rate rose, BP increased.', wrong: false },
  { text: '… turned blue.', wrong: true },
] as const;

export function WorldModel() {
  return (
    <div className="w-full max-w-[600px] space-y-5">
      <style>{`
        @keyframes vital-pulse {
          0%, 100% { opacity: 0.85; }
          50%      { opacity: 1; }
        }
        @keyframes vital-bar-grow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(var(--scale, 1)); }
        }
        .vital-bar {
          transform-origin: left center;
          animation: vital-bar-grow 0.9s 0.95s ease-out both;
        }
        .vital-pulse {
          animation: vital-pulse 1.4s ease-in-out infinite;
        }
        .vital-trace {
          stroke-dasharray: 220;
          stroke-dashoffset: 220;
          animation: trace-draw 1.6s 1.05s ease-out both, vital-pulse 2.4s 2.6s ease-in-out infinite;
        }
        @keyframes trace-draw {
          to { stroke-dashoffset: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .vital-bar { animation: none; transform: scaleX(var(--scale, 1)); }
          .vital-pulse { animation: none; opacity: 0.9; }
          .vital-trace { animation: none; stroke-dashoffset: 0; opacity: 0.85; }
        }
      `}</style>
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        Predicting forces understanding
      </p>

      {/* The fragment */}
      <div className="rounded-lg border border-border bg-surface p-4 font-mono text-xs text-text-secondary animate-[fadeUp_0.4s_ease-out_both]">
        <span className="text-text-muted">[chart]</span> Following injection of 0.3mg epinephrine, the patient&hellip;
      </div>

      {/* Three branching predictions */}
      <div className="grid grid-cols-3 gap-2">
        {WORLD_MODEL_PREDICTIONS.map((p, i) => (
          <div
            key={p.text}
            className={`rounded-lg border p-3 text-[11px] leading-relaxed font-mono animate-[fadeUp_0.4s_ease-out_both] ${
              p.wrong
                ? 'border-border bg-surface text-text-muted line-through'
                : 'border-accent/40 bg-accent/5 text-accent'
            }`}
            style={{ animationDelay: `${0.2 + i * 0.15}s`, opacity: 0 }}
          >
            {p.text}
          </div>
        ))}
      </div>

      {/* Internal world model: vital-signs panel */}
      <div
        className="rounded-xl border border-border bg-surface p-4 animate-[fadeUp_0.4s_0.8s_ease-out_both]"
        style={{ opacity: 0 }}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="text-[10px] uppercase tracking-wider text-text-muted">
            Internal model: predicted vitals
          </div>
          <div className="text-[9px] font-mono text-text-muted">
            t = 0.3 mg epinephrine
          </div>
        </div>
        <svg viewBox="0 0 280 110" className="w-full h-auto" aria-label="Vital signs panel showing predicted heart rate, blood pressure, and airway response to epinephrine">
          {/* Heart rate row */}
          <g>
            <text x="6" y="22" fill="#9a9a9a" fontSize="7.5" fontFamily="ui-monospace, monospace">HR</text>
            <rect x="34" y="14" width="160" height="10" rx="2" fill="#1a1a1a" />
            <rect
              x="34"
              y="14"
              width="160"
              height="10"
              rx="2"
              fill="#FF6B35"
              opacity="0.8"
              className="vital-bar"
              style={{ ['--scale' as string]: '0.78' } as React.CSSProperties}
            />
            <text x="200" y="22" fill="#FF6B35" fontSize="8" fontFamily="ui-monospace, monospace" className="vital-pulse">128 bpm</text>
            <text x="240" y="22" fill="#9a9a9a" fontSize="6.5" fontFamily="ui-monospace, monospace">↑ +52</text>
          </g>
          {/* Blood pressure row */}
          <g>
            <text x="6" y="48" fill="#9a9a9a" fontSize="7.5" fontFamily="ui-monospace, monospace">BP</text>
            <rect x="34" y="40" width="160" height="10" rx="2" fill="#1a1a1a" />
            <rect
              x="34"
              y="40"
              width="160"
              height="10"
              rx="2"
              fill="#FF6B35"
              opacity="0.8"
              className="vital-bar"
              style={{ ['--scale' as string]: '0.62', animationDelay: '1.05s' } as React.CSSProperties}
            />
            <text x="200" y="48" fill="#FF6B35" fontSize="8" fontFamily="ui-monospace, monospace" className="vital-pulse" style={{ animationDelay: '0.4s' }}>156 / 94</text>
            <text x="240" y="48" fill="#9a9a9a" fontSize="6.5" fontFamily="ui-monospace, monospace">↑ +28</text>
          </g>
          {/* Airway row */}
          <g>
            <text x="6" y="74" fill="#9a9a9a" fontSize="7.5" fontFamily="ui-monospace, monospace">AWY</text>
            <rect x="34" y="66" width="160" height="10" rx="2" fill="#1a1a1a" />
            <rect
              x="34"
              y="66"
              width="160"
              height="10"
              rx="2"
              fill="#FF6B35"
              opacity="0.8"
              className="vital-bar"
              style={{ ['--scale' as string]: '0.92', animationDelay: '1.15s' } as React.CSSProperties}
            />
            <text x="200" y="74" fill="#FF6B35" fontSize="8" fontFamily="ui-monospace, monospace" className="vital-pulse" style={{ animationDelay: '0.8s' }}>dilated</text>
            <text x="240" y="74" fill="#9a9a9a" fontSize="6.5" fontFamily="ui-monospace, monospace">↑ +180%</text>
          </g>
          {/* ECG trace at the bottom */}
          <g>
            <line x1="6" y1="96" x2="274" y2="96" stroke="#2a2a2a" strokeWidth="0.6" />
            <path
              d="M6 96 L40 96 L46 86 L52 106 L58 80 L64 96 L120 96 L126 86 L132 106 L138 80 L144 96 L200 96 L206 86 L212 106 L218 80 L224 96 L274 96"
              stroke="#FF6B35"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="vital-trace"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

/* ============================================================
 * 10. ChainOfThought — branching reasoning attempts
 * ============================================================ */
const COT_ATTEMPTS = [
  { text: 'guess: x = 4 → 3(4)+7 = 19. wrong.', ok: false },
  { text: 'subtract 7: 3x = 15 → x = 5. ✓', ok: true },
  { text: 'divide first: x + 7/3 = 22/3...', ok: false },
  { text: 'try x = 6 → 25. nope.', ok: false },
] as const;

export function ChainOfThought() {
  return (
    <div className="w-full max-w-[600px] space-y-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        Chain-of-thought training
      </p>

      <div className="rounded-lg border border-border bg-surface p-4 font-mono text-xs text-text-secondary text-center animate-[fadeUp_0.4s_ease-out_both]">
        if 3x + 7 = 22, what is x?
      </div>

      <div className="grid grid-cols-2 gap-3">
        {COT_ATTEMPTS.map((c, i) => (
          <div
            key={c.text}
            className={`rounded-lg border p-3 text-[11px] font-mono leading-relaxed animate-[fadeUp_0.4s_ease-out_both] ${
              c.ok
                ? 'border-green-500/40 bg-green-500/5 text-green-400'
                : 'border-border bg-surface text-text-muted line-through'
            }`}
            style={{ animationDelay: `${0.2 + i * 0.12}s`, opacity: 0 }}
          >
            attempt {i + 1}: {c.text}
          </div>
        ))}
      </div>

      <div
        className="flex items-center justify-center gap-2 text-[11px] text-accent animate-[fadeIn_0.4s_0.9s_ease-out_both]"
        style={{ opacity: 0 }}
      >
        <span>↺</span>
        <span>winning chain reinforced via gradient descent</span>
      </div>
    </div>
  );
}

/* ============================================================
 * 11. PeriodToken — token strip with glowing period collecting attention
 * ============================================================ */
const PERIOD_TOKEN_TOKENS = ['The', 'cat', 'sat', 'on', 'the', 'mat', '.'] as const;

export function PeriodToken() {
  return (
    <div className="w-full max-w-[600px] space-y-5">{/* alien */}
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        Where the model collects its thoughts
      </p>

      <div className="rounded-xl border border-border bg-surface p-6">
        <svg viewBox="0 0 460 160" className="w-full h-auto">
          {/* Tokens */}
          {PERIOD_TOKEN_TOKENS.map((tok, i) => {
            const x = 30 + i * 60;
            const isPeriod = tok === '.';
            return (
              <g key={i} style={{ animation: `fadeUp 0.3s ${i * 0.08}s ease-out both`, opacity: 0 }}>
                <rect
                  x={x - 22}
                  y={110}
                  width={44}
                  height={28}
                  rx={6}
                  fill={isPeriod ? '#FF6B35' : '#1a1a1a'}
                  stroke={isPeriod ? '#FF6B35' : '#2a2a2a'}
                  opacity={isPeriod ? 1 : 1}
                />
                {isPeriod && (
                  <circle cx={x} cy={124} r={26} fill="#FF6B35" opacity="0.18">
                    <animate attributeName="r" values="22;30;22" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2s" repeatCount="indefinite" />
                  </circle>
                )}
                <text
                  x={x}
                  y={129}
                  fill={isPeriod ? '#0A0A0A' : '#FAFAFA'}
                  fontSize="13"
                  fontFamily="monospace"
                  textAnchor="middle"
                  fontWeight={isPeriod ? 700 : 400}
                >
                  {tok}
                </text>
              </g>
            );
          })}

          {/* Convergence lines from each token to the period */}
          <g style={{ animation: 'fadeIn 0.6s 0.9s ease-out both', opacity: 0 }}>
            {PERIOD_TOKEN_TOKENS.slice(0, -1).map((_, i) => {
              const fromX = 30 + i * 60;
              const toX = 30 + (PERIOD_TOKEN_TOKENS.length - 1) * 60;
              return (
                <path
                  key={i}
                  d={`M${fromX} 108 Q${(fromX + toX) / 2} 30 ${toX} 108`}
                  stroke="#FF6B35"
                  strokeWidth="0.8"
                  fill="none"
                  opacity="0.4"
                />
              );
            })}
          </g>
        </svg>
      </div>

      <p className="text-[11px] text-text-muted text-center">
        Human brains don&rsquo;t need punctuation to understand a sentence.
      </p>
    </div>
  );
}

/* ============================================================
 * 12. TerrariumWorkbench — gardener-scientist's bench
 * ============================================================ */
export function TerrariumWorkbench() {
  return (
    <div className="w-full max-w-[600px] space-y-6 flex flex-col items-center text-center">
      <div className="rounded-2xl border border-border bg-surface p-8 w-full">
        <svg viewBox="0 0 320 200" className="w-full h-auto">
          {/* Workbench surface */}
          <line x1="20" y1="160" x2="300" y2="160" stroke="#3a3a3a" strokeWidth="2" />

          {/* Terrarium (jar) */}
          <g style={{ animation: 'fadeUp 0.5s 0.2s ease-out both', opacity: 0 }}>
            {/* Glass */}
            <path
              d="M120 60 L120 155 Q120 160 125 160 L195 160 Q200 160 200 155 L200 60 Z"
              fill="#FF6B35"
              fillOpacity="0.04"
              stroke="#FF6B35"
              strokeOpacity="0.5"
              strokeWidth="1.2"
            />
            {/* Lid */}
            <rect x="115" y="55" width="90" height="6" rx="2" fill="#3a3a3a" />
            {/* Soil */}
            <rect x="121" y="140" width="78" height="20" fill="#1a1a1a" />
            {/* Plant */}
            <path d="M160 140 Q158 120 162 100 Q166 85 160 70" stroke="#FF6B35" strokeWidth="2" fill="none" strokeLinecap="round" />
            <circle cx="155" cy="95" r="6" fill="#FF6B35" opacity="0.4" />
            <circle cx="167" cy="85" r="5" fill="#FF6B35" opacity="0.4" />
            <circle cx="160" cy="72" r="7" fill="#FF6B35" opacity="0.4" />
          </g>

          {/* Probe / measurement instruments around it */}
          <g style={{ animation: 'fadeIn 0.4s 0.7s ease-out both', opacity: 0 }}>
            {/* Left probe */}
            <line x1="60" y1="160" x2="80" y2="120" stroke="#666" strokeWidth="1.5" />
            <circle cx="80" cy="120" r="4" fill="none" stroke="#FF6B35" strokeWidth="1" />
            {/* Right probe */}
            <line x1="260" y1="160" x2="240" y2="115" stroke="#666" strokeWidth="1.5" />
            <rect x="234" y="106" width="14" height="10" fill="none" stroke="#FF6B35" strokeWidth="1" />
            {/* Gauge */}
            <circle cx="50" cy="145" r="14" fill="#1a1a1a" stroke="#3a3a3a" />
            <line x1="50" y1="145" x2="58" y2="138" stroke="#FF6B35" strokeWidth="1.5" />
            <circle cx="50" cy="145" r="1.5" fill="#FF6B35" />
            {/* Notebook */}
            <rect x="270" y="150" width="22" height="10" fill="#1a1a1a" stroke="#3a3a3a" />
            <line x1="274" y1="153" x2="288" y2="153" stroke="#666" strokeWidth="0.5" />
            <line x1="274" y1="156" x2="288" y2="156" stroke="#666" strokeWidth="0.5" />
          </g>
        </svg>
      </div>
      <div className="space-y-2">
        <div className="text-base font-semibold text-text-primary">Gardener-scientist, not mechanic</div>
        <div className="text-xs text-text-muted max-w-[360px] mx-auto">
          You&apos;re building on something more like a biological organism than a designed artefact.
          Your engineering practices need to account for that.
        </div>
      </div>
    </div>
  );
}
