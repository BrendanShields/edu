'use client';

import { useEffect, useRef, useState } from 'react';

/* ============================================================
 * 1. GrownNotCrafted — blueprint vs seed
 * ============================================================ */
export function GrownNotCrafted() {
  return (
    <div className="w-full max-w-[600px]">
      <div className="grid grid-cols-2 gap-6">
        {/* LEFT: blueprint → building */}
        <div className="rounded-xl border border-border bg-surface p-5 animate-[fadeUp_0.5s_ease-out_both]">
          <div className="text-[10px] uppercase tracking-wider text-text-muted mb-3">
            Traditional software
          </div>
          <svg viewBox="0 0 160 130" className="w-full h-auto">
            {/* Blueprint grid */}
            <defs>
              <pattern id="grid1" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M10 0H0V10" fill="none" stroke="#1f2937" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="160" height="130" fill="url(#grid1)" />
            {/* Constructed building — beam by beam */}
            {[
              { x: 40, y: 90, w: 80, h: 6, d: 0 },
              { x: 40, y: 70, w: 80, h: 6, d: 0.2 },
              { x: 40, y: 50, w: 80, h: 6, d: 0.4 },
              { x: 40, y: 30, w: 80, h: 6, d: 0.6 },
              { x: 40, y: 30, w: 6, h: 66, d: 0.8 },
              { x: 114, y: 30, w: 6, h: 66, d: 0.8 },
              { x: 75, y: 30, w: 6, h: 66, d: 1.0 },
            ].map((b, i) => (
              <rect
                key={i}
                x={b.x}
                y={b.y}
                width={b.w}
                height={b.h}
                fill="#FF6B35"
                opacity={0.9}
                style={{
                  animation: `fadeIn 0.4s ease-out ${b.d}s both`,
                }}
              />
            ))}
          </svg>
          <div className="mt-3 text-xs text-text-secondary text-center">
            Blueprint &rarr; Building
          </div>
          <div className="text-[10px] text-text-muted text-center">
            each beam placed deliberately
          </div>
        </div>

        {/* RIGHT: seed → tree */}
        <div className="rounded-xl border border-border bg-surface p-5 animate-[fadeUp_0.5s_0.2s_ease-out_both]" style={{ opacity: 0 }}>
          <div className="text-[10px] uppercase tracking-wider text-text-muted mb-3">
            Modern AI
          </div>
          <svg viewBox="0 0 160 130" className="w-full h-auto">
            {/* Ground */}
            <line x1="10" y1="115" x2="150" y2="115" stroke="#2A2A2A" strokeWidth="1" />
            {/* Trunk */}
            <path
              d="M80 115 Q78 90 80 70 Q82 55 80 40"
              stroke="#FF6B35"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              style={{ animation: 'fadeIn 0.6s 0.4s ease-out both' }}
            />
            {/* Branches */}
            <path d="M80 80 Q65 70 55 55" stroke="#FF6B35" strokeWidth="2" fill="none" strokeLinecap="round" style={{ animation: 'fadeIn 0.6s 0.7s ease-out both' }} />
            <path d="M80 65 Q95 58 105 45" stroke="#FF6B35" strokeWidth="2" fill="none" strokeLinecap="round" style={{ animation: 'fadeIn 0.6s 0.8s ease-out both' }} />
            <path d="M80 50 Q70 42 60 35" stroke="#FF6B35" strokeWidth="2" fill="none" strokeLinecap="round" style={{ animation: 'fadeIn 0.6s 0.9s ease-out both' }} />
            {/* Leaves */}
            {[
              { cx: 80, cy: 35, r: 14 },
              { cx: 55, cy: 50, r: 9 },
              { cx: 105, cy: 42, r: 10 },
              { cx: 60, cy: 32, r: 7 },
            ].map((leaf, i) => (
              <circle
                key={i}
                cx={leaf.cx}
                cy={leaf.cy}
                r={leaf.r}
                fill="#FF6B35"
                opacity={0.25}
                style={{
                  animation: `fadeScaleIn 0.5s ${1 + i * 0.1}s ease-out both`,
                  transformOrigin: `${leaf.cx}px ${leaf.cy}px`,
                }}
              />
            ))}
          </svg>
          <div className="mt-3 text-xs text-text-secondary text-center">
            Seed &rarr; Tree
          </div>
          <div className="text-[10px] text-text-muted text-center">
            shaped by environment, not by hand
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
 * 2. TokenStrip — words mapping to numbers
 * ============================================================ */
export function TokenStrip() {
  const tokens = ['Once', 'upon', 'a', 'time'];
  const ids = [4023, 1817, 64, 892];

  return (
    <div className="w-full max-w-[600px] space-y-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        Text becomes numbers
      </p>
      <div className="flex items-center justify-center gap-2">
        {tokens.map((tok, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2"
            style={{ animation: `fadeSlideIn 0.45s ${i * 0.18}s ease-out both`, opacity: 0 }}
          >
            <div className="px-3 py-2 rounded-lg border border-border bg-surface text-sm font-mono text-text-primary min-w-[64px] text-center">
              {tok}
            </div>
            <div className="text-text-muted text-xs">&darr;</div>
            <div className="px-3 py-2 rounded-lg border border-accent/40 bg-accent/5 text-sm font-mono text-accent min-w-[64px] text-center">
              {ids[i]}
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
 * ============================================================ */
export function WeightGrid() {
  const cells = Array.from({ length: 16 * 9 });
  const sample = ['0.0042', '-1.37', '0.88', '0.21', '-0.04', '1.92', '-0.73', '0.55'];

  return (
    <div className="w-full max-w-[600px] space-y-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        ~ trillions of parameters
      </p>

      <div
        className="relative rounded-xl border border-border bg-surface p-4 overflow-hidden"
        style={{ height: 280 }}
      >
        {/* Background fade */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 30%, var(--color-surface) 80%)',
          }}
        />

        {/* The grid */}
        <div
          className="grid gap-[3px]"
          style={{
            gridTemplateColumns: 'repeat(16, minmax(0, 1fr))',
            opacity: 0.4,
          }}
        >
          {cells.map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-[2px] bg-text-muted/20"
              style={{
                animation: `fadeIn 0.4s ${(i % 16) * 0.02}s ease-out both`,
              }}
            />
          ))}
        </div>

        {/* Zoomed cluster overlay */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-accent/40 bg-background/95 p-3 backdrop-blur-sm"
          style={{
            animation: 'fadeScaleIn 0.5s 0.5s ease-out both',
            opacity: 0,
          }}
        >
          <div className="grid grid-cols-4 gap-2">
            {sample.map((v, i) => (
              <div
                key={i}
                className="px-2 py-1 rounded text-[11px] font-mono text-accent border border-accent/20 bg-accent/5 min-w-[52px] text-center"
              >
                {v}
              </div>
            ))}
          </div>
        </div>
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
export function TransformerStack() {
  const layers = Array.from({ length: 8 });
  return (
    <div className="w-full max-w-[600px] space-y-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        The wiring diagram
      </p>
      <div className="relative rounded-xl border border-border bg-surface p-5">
        <svg viewBox="0 0 280 280" className="w-full h-auto">
          {/* Layers */}
          {layers.map((_, i) => {
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
                {/* Token positions */}
                {[60, 100, 140, 180, 220].map((x, j) => (
                  <circle key={j} cx={x} cy={y + 7} r="2" fill="#FF6B35" opacity="0.8" />
                ))}
              </g>
            );
          })}

          {/* Attention lines spanning between layers */}
          <g style={{ animation: 'fadeIn 0.8s 0.7s ease-out both', opacity: 0 }}>
            <path d="M60 37 Q100 80 180 121" stroke="#FF6B35" strokeWidth="0.6" fill="none" opacity="0.5" />
            <path d="M180 37 Q120 80 60 149" stroke="#FF6B35" strokeWidth="0.6" fill="none" opacity="0.5" />
            <path d="M100 65 Q160 110 220 177" stroke="#FF6B35" strokeWidth="0.6" fill="none" opacity="0.5" />
            <path d="M140 93 Q100 130 60 205" stroke="#FF6B35" strokeWidth="0.6" fill="none" opacity="0.5" />
            <path d="M220 65 Q140 140 100 233" stroke="#FF6B35" strokeWidth="0.6" fill="none" opacity="0.5" />
          </g>

          {/* Labels */}
          <text x="20" y="40" fill="#666" fontSize="9" fontFamily="monospace">in</text>
          <text x="20" y="240" fill="#666" fontSize="9" fontFamily="monospace">out</text>
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
export function LossLandscape() {
  const [step, setStep] = useState(0);
  const maxSteps = 100;

  // Auto-advance training
  useEffect(() => {
    if (step >= maxSteps) {
      const reset = setTimeout(() => setStep(0), 2000);
      return () => clearTimeout(reset);
    }
    const t = setTimeout(() => setStep((s) => s + 2), 80);
    return () => clearTimeout(t);
  }, [step]);

  // Loss curve: parabola-ish, smoothed
  const t = step / maxSteps;
  // ball x along the curve from 0.05 to 0.5 (descent toward minimum at 0.5)
  const xNorm = 0.08 + t * 0.42;
  const yCurve = (x: number) => {
    // landscape function: bumpy bowl
    const center = 0.5;
    const dx = x - center;
    return 0.1 + 1.2 * dx * dx + 0.06 * Math.sin(x * 16);
  };

  // Build path
  const W = 320;
  const H = 180;
  const padX = 20;
  const padY = 24;
  const points: string[] = [];
  for (let i = 0; i <= 60; i++) {
    const x = i / 60;
    const y = yCurve(x);
    points.push(`${padX + x * (W - padX * 2)},${padY + y * (H - padY * 2)}`);
  }
  const path = 'M' + points.join(' L');

  const ballX = padX + xNorm * (W - padX * 2);
  const ballY = padY + yCurve(xNorm) * (H - padY * 2) - 6;

  return (
    <div className="w-full max-w-[600px] space-y-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        Gradient descent
      </p>
      <div className="rounded-xl border border-border bg-surface p-5">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
          {/* Y axis label */}
          <text x="6" y="30" fill="#666" fontSize="9" fontFamily="monospace">error</text>
          {/* Curve */}
          <path d={path} stroke="#3a3a3a" strokeWidth="1.5" fill="none" />
          {/* Ball */}
          <circle cx={ballX} cy={ballY} r="6" fill="#FF6B35" />
          <circle cx={ballX} cy={ballY} r="10" fill="#FF6B35" opacity="0.2" />
        </svg>

        {/* Slider */}
        <div className="mt-4 space-y-2">
          <input
            type="range"
            min={0}
            max={maxSteps}
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
            className="w-full accent-accent"
            style={{ accentColor: '#FF6B35' }}
          />
          <div className="flex justify-between text-[10px] text-text-muted font-mono">
            <span>training step</span>
            <span>{step} / {maxSteps}</span>
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
export function BaseModelDemo() {
  const examples = [
    { input: 'the capital of France is', output: 'Paris.' },
    { input: 'Once upon a time, in a small village,', output: 'there lived a baker who...' },
    { input: 'def fibonacci(n):', output: '\n    if n < 2: return n' },
  ];
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<'in' | 'out'>('in');

  useEffect(() => {
    if (phase === 'in') {
      const t = setTimeout(() => setPhase('out'), 1200);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setIdx((i) => (i + 1) % examples.length);
      setPhase('in');
    }, 2200);
    return () => clearTimeout(t);
  }, [phase, idx, examples.length]);

  const example = examples[idx];

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
        {examples.map((_, i) => (
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
export function DNAComparison() {
  // Generate stable strings
  const dna = (() => {
    const bases = ['A', 'C', 'G', 'T'];
    let s = '';
    for (let i = 0; i < 600; i++) s += bases[(i * 7 + 3) % 4];
    return s;
  })();
  const weights = (() => {
    const out: string[] = [];
    for (let i = 0; i < 200; i++) {
      const v = ((Math.sin(i * 1.7) + Math.cos(i * 2.3)) * 1.2).toFixed(3);
      out.push(v);
    }
    return out.join('  ');
  })();

  const ScrollCol = ({ label, text, colorClass }: { label: string; text: string; colorClass: string }) => (
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
          style={{
            animation: 'dnaScroll 18s linear infinite',
          }}
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
        <ScrollCol label="Genome" text={dna} colorClass="text-text-secondary" />
        <ScrollCol label="Weights" text={weights} colorClass="text-accent" />
      </div>
      <p className="text-[11px] text-text-muted text-center">
        You can read every character. Neither tells you what the system will do.
      </p>
    </div>
  );
}

/* ============================================================
 * 9. WorldModel — medical report → branching predictions → body
 * ============================================================ */
export function WorldModel() {
  return (
    <div className="w-full max-w-[600px] space-y-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        Predicting forces understanding
      </p>

      {/* The fragment */}
      <div className="rounded-lg border border-border bg-surface p-4 font-mono text-xs text-text-secondary animate-[fadeUp_0.4s_ease-out_both]">
        <span className="text-text-muted">[chart]</span> Following injection of 0.3mg epinephrine, the patient&hellip;
      </div>

      {/* Three branching predictions */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { text: '&hellip; fell asleep.', wrong: true },
          { text: '&hellip; heart rate rose, BP increased.', wrong: false },
          { text: '&hellip; turned blue.', wrong: true },
        ].map((p, i) => (
          <div
            key={i}
            className={`rounded-lg border p-3 text-[11px] leading-relaxed font-mono animate-[fadeUp_0.4s_ease-out_both] ${
              p.wrong
                ? 'border-border bg-surface text-text-muted line-through'
                : 'border-accent/40 bg-accent/5 text-accent'
            }`}
            style={{ animationDelay: `${0.2 + i * 0.15}s`, opacity: 0 }}
            dangerouslySetInnerHTML={{ __html: p.text }}
          />
        ))}
      </div>

      {/* Internal world model: body diagram */}
      <div
        className="rounded-xl border border-border bg-surface p-4 animate-[fadeUp_0.4s_0.8s_ease-out_both]"
        style={{ opacity: 0 }}
      >
        <div className="text-[10px] uppercase tracking-wider text-text-muted mb-3">
          Internal model of the world
        </div>
        <svg viewBox="0 0 280 90" className="w-full h-auto">
          {/* Simple body */}
          <circle cx="40" cy="45" r="18" stroke="#3a3a3a" strokeWidth="1.5" fill="none" />
          {/* Heart with pulse */}
          <g>
            <circle cx="40" cy="45" r="6" fill="#FF6B35" opacity="0.8">
              <animate attributeName="r" values="5;8;5" dur="1s" repeatCount="indefinite" />
            </circle>
          </g>
          {/* Arrow → effect */}
          <line x1="68" y1="45" x2="120" y2="45" stroke="#FF6B35" strokeWidth="1" markerEnd="url(#arr)" />
          <defs>
            <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 z" fill="#FF6B35" />
            </marker>
          </defs>
          {/* Label */}
          <text x="130" y="42" fill="#FAFAFA" fontSize="10" fontFamily="monospace">+ heart rate</text>
          <text x="130" y="55" fill="#FAFAFA" fontSize="10" fontFamily="monospace">+ blood pressure</text>
        </svg>
      </div>
    </div>
  );
}

/* ============================================================
 * 10. ChainOfThought — branching reasoning attempts
 * ============================================================ */
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
        {[
          { text: 'guess: x = 4 → 3(4)+7 = 19. wrong.', ok: false },
          { text: 'subtract 7: 3x = 15 → x = 5. ✓', ok: true },
          { text: 'divide first: x + 7/3 = 22/3...', ok: false },
          { text: 'try x = 6 → 25. nope.', ok: false },
        ].map((c, i) => (
          <div
            key={i}
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
export function PeriodToken() {
  const tokens = ['The', 'cat', 'sat', 'on', 'the', 'mat', '.'];
  return (
    <div className="w-full max-w-[600px] space-y-5">{/* alien */}
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        Where the model collects its thoughts
      </p>

      <div className="rounded-xl border border-border bg-surface p-6">
        <svg viewBox="0 0 460 160" className="w-full h-auto">
          {/* Tokens */}
          {tokens.map((tok, i) => {
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
            {tokens.slice(0, -1).map((_, i) => {
              const fromX = 30 + i * 60;
              const toX = 30 + (tokens.length - 1) * 60;
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
