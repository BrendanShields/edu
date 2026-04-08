'use client';

/**
 * BonsaiVisual — replaces the older blueprint-vs-tree comparison.
 *
 * Two-column visual that anchors the "grown, not crafted" metaphor:
 *   • Left:  blueprint → constructed building (traditional software)
 *   • Right: bonsai growing in a pot, with pruning shears that snip a branch
 *            (modern AI — shaped, not built)
 *
 * The bonsai animation runs entirely in CSS so it loops indefinitely without
 * any JS state. A `prefers-reduced-motion` media query freezes everything in
 * its final position.
 *
 * The bonsai is the canonical metaphor for the lesson: a human is actively
 * involved (training data, pruning, fine-tuning) but the result is organic
 * and not fully predictable. Engineers control the environment, not the
 * outcome.
 */
export function BonsaiVisual() {
  return (
    <div className="bonsai-visual">
      <style>{`
        .bonsai-visual { width: 100%; max-width: 600px; }
        .bonsai-visual__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        .bonsai-card {
          border-radius: 0.75rem;
          border: 1px solid var(--color-border);
          background: var(--color-surface);
          padding: 1.25rem;
        }
        .bonsai-card--left {
          animation: fadeUp 0.5s ease-out both;
        }
        .bonsai-card--right {
          animation: fadeUp 0.5s 0.2s ease-out both;
          opacity: 0;
        }
        .bonsai-card__eyebrow {
          font-size: 0.625rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-text-muted);
          margin: 0 0 0.75rem;
        }
        .bonsai-card__caption {
          margin-top: 0.75rem;
          text-align: center;
          font-size: 0.75rem;
          color: var(--color-text-secondary);
        }
        .bonsai-card__sub {
          text-align: center;
          font-size: 0.625rem;
          color: var(--color-text-muted);
        }

        /* ---- Bonsai animation ---- */
        @keyframes bonsai-draw {
          0%   { stroke-dashoffset: var(--len, 100); }
          25%  { stroke-dashoffset: 0; }
          90%  { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: var(--len, 100); }
        }
        @keyframes bonsai-leaf {
          0%, 25%  { opacity: 0; transform: scale(0); }
          40%      { opacity: 0.45; transform: scale(1); }
          88%      { opacity: 0.45; transform: scale(1); }
          100%     { opacity: 0; transform: scale(0); }
        }
        @keyframes bonsai-leaf-snipped {
          0%, 25%  { opacity: 0; transform: scale(0); }
          40%      { opacity: 0.45; transform: scale(1); }
          70%      { opacity: 0.45; transform: scale(1); }
          75%      { opacity: 0; transform: scale(0); }
          100%     { opacity: 0; transform: scale(0); }
        }
        @keyframes bonsai-shears {
          0%, 60%  { opacity: 0; transform: translate(6px, -6px); }
          66%      { opacity: 1; transform: translate(0, 0); }
          70%      { opacity: 1; transform: translate(0, 0) rotate(0deg); transform-origin: 116px 36px; }
          74%      { opacity: 1; transform: translate(0, 0) rotate(-18deg); transform-origin: 116px 36px; }
          78%      { opacity: 1; transform: translate(0, 0) rotate(0deg); transform-origin: 116px 36px; }
          84%      { opacity: 0; transform: translate(6px, -6px); }
          100%     { opacity: 0; transform: translate(6px, -6px); }
        }

        .bonsai-stroke {
          stroke: var(--color-accent);
          stroke-linecap: round;
          fill: none;
          stroke-dasharray: var(--len, 100);
          animation: bonsai-draw 9s ease-in-out infinite;
        }
        .bonsai-leaf {
          fill: var(--color-accent);
          opacity: 0;
          transform-box: fill-box;
          transform-origin: center;
          animation: bonsai-leaf 9s ease-in-out infinite;
        }
        .bonsai-leaf--snipped {
          animation: bonsai-leaf-snipped 9s ease-in-out infinite;
        }
        .bonsai-shears-group {
          opacity: 0;
          animation: bonsai-shears 9s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .bonsai-stroke { animation: none; stroke-dashoffset: 0; }
          .bonsai-leaf { animation: none; opacity: 0.45; transform: scale(1); }
          .bonsai-leaf--snipped { animation: none; opacity: 0; }
          .bonsai-shears-group { animation: none; opacity: 0; }
          .bonsai-card--left, .bonsai-card--right { animation: none; opacity: 1; }
        }
      `}</style>

      <div className="bonsai-visual__grid">
        {/* LEFT — blueprint → building */}
        <div className="bonsai-card bonsai-card--left">
          <p className="bonsai-card__eyebrow">Traditional software</p>
          <svg viewBox="0 0 160 130" className="w-full h-auto">
            <defs>
              <pattern id="bonsai-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M10 0H0V10" fill="none" stroke="#1f2937" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="160" height="130" fill="url(#bonsai-grid)" />
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
                fill="var(--color-accent)"
                opacity={0.9}
                style={{ animation: `fadeIn 0.4s ease-out ${b.d}s both` }}
              />
            ))}
          </svg>
          <p className="bonsai-card__caption">Blueprint &rarr; Building</p>
          <p className="bonsai-card__sub">every beam placed deliberately</p>
        </div>

        {/* RIGHT — bonsai */}
        <div className="bonsai-card bonsai-card--right">
          <p className="bonsai-card__eyebrow">Modern AI</p>
          <svg viewBox="0 0 160 130" className="w-full h-auto" aria-label="A bonsai tree growing in a pot, with pruning shears occasionally snipping a branch">
            {/* Pot */}
            <path
              d="M62 110 L98 110 L100 124 L60 124 Z"
              fill="#1a1a1a"
              stroke="var(--color-accent)"
              strokeOpacity="0.5"
              strokeWidth="1.2"
            />
            <line x1="58" y1="110" x2="102" y2="110" stroke="var(--color-accent)" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" />
            {/* Soil line */}
            <line x1="64" y1="113" x2="96" y2="113" stroke="var(--color-text-muted)" strokeWidth="0.8" strokeDasharray="1.5 2" />

            {/* Trunk — slow curving growth */}
            <path
              className="bonsai-stroke"
              style={{ ['--len' as string]: '120', strokeWidth: 3.5 }}
              d="M80 110 Q76 95 82 80 Q88 65 78 50 Q72 38 86 28"
            />

            {/* Three side branches, each with its own draw delay via stagger */}
            <path
              className="bonsai-stroke"
              style={{ ['--len' as string]: '40', strokeWidth: 2, animationDelay: '0.3s' }}
              d="M81 80 Q70 78 58 82"
            />
            <path
              className="bonsai-stroke"
              style={{ ['--len' as string]: '50', strokeWidth: 2, animationDelay: '0.6s' }}
              d="M83 62 Q98 56 112 44"
            />
            <path
              className="bonsai-stroke"
              style={{ ['--len' as string]: '36', strokeWidth: 2, animationDelay: '0.9s' }}
              d="M77 44 Q66 38 60 32"
            />

            {/* Foliage clusters */}
            <circle cx="56" cy="80" r="6" className="bonsai-leaf" style={{ animationDelay: '1.0s' }} />
            <circle cx="60" cy="76" r="4" className="bonsai-leaf" style={{ animationDelay: '1.1s' }} />
            <circle cx="58" cy="32" r="5" className="bonsai-leaf" style={{ animationDelay: '1.2s' }} />
            <circle cx="62" cy="28" r="4" className="bonsai-leaf" style={{ animationDelay: '1.3s' }} />
            <circle cx="84" cy="26" r="6" className="bonsai-leaf" style={{ animationDelay: '1.0s' }} />
            <circle cx="88" cy="22" r="4" className="bonsai-leaf" style={{ animationDelay: '1.2s' }} />

            {/* The branch tip that gets snipped — fades out partway through the loop */}
            <circle cx="114" cy="42" r="6" className="bonsai-leaf bonsai-leaf--snipped" style={{ animationDelay: '1.0s' }} />
            <circle cx="118" cy="38" r="4" className="bonsai-leaf bonsai-leaf--snipped" style={{ animationDelay: '1.1s' }} />

            {/* Pruning shears — swing in, snip, swing out */}
            <g className="bonsai-shears-group">
              {/* Two blades meeting at a pivot */}
              <line x1="116" y1="36" x2="128" y2="26" stroke="#9aa0a6" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="116" y1="38" x2="128" y2="48" stroke="#9aa0a6" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="116" cy="37" r="1.4" fill="#9aa0a6" />
              {/* Handle loops */}
              <circle cx="130" cy="24" r="2.2" fill="none" stroke="#9aa0a6" strokeWidth="1" />
              <circle cx="130" cy="50" r="2.2" fill="none" stroke="#9aa0a6" strokeWidth="1" />
            </g>
          </svg>
          <p className="bonsai-card__caption">Bonsai &rarr; Form</p>
          <p className="bonsai-card__sub">shaped by environment, not by hand</p>
        </div>
      </div>
    </div>
  );
}
