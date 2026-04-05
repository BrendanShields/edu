'use client';

import { useState, useCallback } from 'react';

const levels = [
  {
    id: 'plan',
    label: 'Plan',
    color: '#3b82f6',
    terminalBorder: 'rgba(59, 130, 246, 0.3)',
    analogy: 'Watching the contractor work',
  },
  {
    id: 'default',
    label: 'Default',
    color: '#60a5fa',
    terminalBorder: 'rgba(96, 165, 250, 0.3)',
    analogy: 'Contractor checks before each change',
  },
  {
    id: 'accept-edits',
    label: 'Accept Edits',
    color: '#fbbf24',
    terminalBorder: 'rgba(251, 191, 36, 0.3)',
    analogy: 'Contractor works freely, checks before demolition',
  },
  {
    id: 'auto',
    label: 'Auto',
    color: '#fb923c',
    terminalBorder: 'rgba(251, 146, 60, 0.3)',
    analogy: 'Contractor has keys, knows which rooms are off-limits',
  },
  {
    id: 'full-auto',
    label: 'Full Auto',
    color: '#ef4444',
    terminalBorder: 'rgba(239, 68, 68, 0.3)',
    analogy: 'Contractor has keys to everything. No supervision.',
    flash: true,
  },
];

/* Color at each stop for the gradient track */
const trackColors = ['#3b82f6', '#60a5fa', '#fbbf24', '#fb923c', '#ef4444'];

function getTrackGradient() {
  return trackColors
    .map((c, i) => `${c} ${(i / (trackColors.length - 1)) * 100}%`)
    .join(', ');
}

function BlinkingCursor() {
  return (
    <span
      style={{
        display: 'inline-block',
        width: '0.55em',
        height: '1.1em',
        background: '#93c5fd',
        verticalAlign: 'text-bottom',
        marginLeft: '2px',
        animation: 'cursorBlink 1s step-end infinite',
      }}
    />
  );
}

function TerminalContent({ levelIndex }: { levelIndex: number }) {
  const muted = 'var(--color-text-muted)';
  const secondary = 'var(--color-text-secondary)';
  const primary = 'var(--color-text-primary)';

  if (levelIndex === 0) {
    return (
      <div style={{ color: secondary }}>
        <div>
          <span style={{ color: muted }}>&gt;</span>{' '}
          <span style={{ color: primary }}>
            I would run: rm -rf node_modules &amp;&amp; npm install
          </span>
        </div>
        <div style={{ color: muted, marginTop: '4px' }}>
          {'  '}This removes all installed packages and reinstalls
        </div>
        <div style={{ color: muted }}>
          {'  '}from package-lock.json.
        </div>
        <div style={{ marginTop: '12px', color: '#3b82f6' }}>
          {'  '}No changes made — Plan mode is read-only.
        </div>
      </div>
    );
  }

  if (levelIndex === 1) {
    return (
      <div style={{ color: secondary }}>
        <div>
          <span style={{ color: muted }}>$</span>{' '}
          <span style={{ color: primary }}>
            rm -rf node_modules &amp;&amp; npm install
          </span>
        </div>
        <div style={{ marginTop: '12px' }}>
          {'  '}Allow this command?{' '}
          <span style={{ color: primary }}>[y/n]</span>{' '}
          <BlinkingCursor />
        </div>
      </div>
    );
  }

  if (levelIndex === 2) {
    return (
      <div style={{ color: secondary }}>
        <div>
          <span style={{ color: muted }}>$</span>{' '}
          <span style={{ color: primary }}>
            rm -rf node_modules &amp;&amp; npm install
          </span>
        </div>
        <div style={{ marginTop: '12px' }}>
          {'  '}Allow this command?{' '}
          <span style={{ color: primary }}>[y/n]</span>{' '}
          <BlinkingCursor />
        </div>
        <div
          style={{
            marginTop: '12px',
            fontSize: '0.7rem',
            color: '#fbbf24',
            opacity: 0.8,
          }}
        >
          File edits auto-approved, shell commands still require confirmation.
        </div>
      </div>
    );
  }

  if (levelIndex === 3) {
    return (
      <div style={{ color: secondary }}>
        <div>
          <span style={{ color: '#fb923c' }}>&#9889;</span>{' '}
          <span style={{ color: '#fb923c' }}>Classifier:</span>{' '}
          <span style={{ color: primary }}>standard dev operation</span>
        </div>
        <div style={{ color: muted }}>
          {'  '}Risk: low — local dependency refresh
        </div>
        <div style={{ marginTop: '12px' }}>
          <span style={{ color: muted }}>$</span>{' '}
          <span style={{ color: primary }}>
            rm -rf node_modules &amp;&amp; npm install
          </span>
        </div>
        <div style={{ color: muted, marginTop: '4px' }}>
          {'  '}removed 847 packages
        </div>
        <div style={{ color: muted }}>
          {'  '}added 847 packages in 12.4s
        </div>
      </div>
    );
  }

  // Full Auto (levelIndex === 4)
  return (
    <div style={{ color: secondary }}>
      <div>
        <span style={{ color: muted }}>$</span>{' '}
        <span style={{ color: primary }}>
          rm -rf node_modules &amp;&amp; npm install
        </span>
      </div>
      <div style={{ color: muted, marginTop: '4px' }}>
        {'  '}removed 847 packages
      </div>
      <div style={{ color: muted }}>
        {'  '}added 847 packages in 12.4s
      </div>
      <div
        style={{
          marginTop: '12px',
          fontSize: '0.7rem',
          color: '#ef4444',
          opacity: 0.8,
        }}
      >
        No approval step. Runs immediately.
      </div>
    </div>
  );
}

export function PermissionSpectrum() {
  const [selected, setSelected] = useState(1);
  const [fadeKey, setFadeKey] = useState(1);
  const handleSelect = useCallback(
    (index: number) => {
      if (index === selected) return;
      setSelected(index);
      setFadeKey(index);
    },
    [selected],
  );

  const activeLevel = levels[selected];

  /* Unique ID so multiple instances don't collide */
  const sliderId = 'perm-slider';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {/* ---------- keyframes + range-input styles ---------- */}
      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes terminalFlashRed {
          0% { border-color: rgba(239, 68, 68, 0.8); box-shadow: 0 0 20px rgba(239, 68, 68, 0.3); }
          100% { border-color: rgba(239, 68, 68, 0.3); box-shadow: none; }
        }
        @keyframes terminalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes analogyFadeIn {
          from { opacity: 0; transform: translateY(2px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ---- Range input custom styles ---- */
        #${sliderId} {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 6px;
          background: transparent;
          cursor: pointer;
          margin: 0;
          padding: 0;
        }

        /* Webkit track */
        #${sliderId}::-webkit-slider-runnable-track {
          height: 6px;
          border-radius: 3px;
          background: linear-gradient(to right, ${getTrackGradient()});
        }

        /* Moz track */
        #${sliderId}::-moz-range-track {
          height: 6px;
          border-radius: 3px;
          background: linear-gradient(to right, ${getTrackGradient()});
        }

        /* Webkit thumb */
        #${sliderId}::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: ${activeLevel.color};
          border: 2px solid rgba(255,255,255,0.9);
          box-shadow: 0 0 0 3px ${activeLevel.color}44, 0 2px 8px rgba(0,0,0,0.5);
          margin-top: -8px;
          cursor: grab;
          transition: background 0.25s ease, box-shadow 0.25s ease;
        }
        #${sliderId}::-webkit-slider-thumb:active {
          cursor: grabbing;
          transform: scale(1.12);
          box-shadow: 0 0 0 5px ${activeLevel.color}55, 0 2px 12px rgba(0,0,0,0.6);
        }

        /* Moz thumb */
        #${sliderId}::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: ${activeLevel.color};
          border: 2px solid rgba(255,255,255,0.9);
          box-shadow: 0 0 0 3px ${activeLevel.color}44, 0 2px 8px rgba(0,0,0,0.5);
          cursor: grab;
          transition: background 0.25s ease, box-shadow 0.25s ease;
        }
        #${sliderId}::-moz-range-thumb:active {
          cursor: grabbing;
          transform: scale(1.12);
          box-shadow: 0 0 0 5px ${activeLevel.color}55, 0 2px 12px rgba(0,0,0,0.6);
        }

        /* Focus ring */
        #${sliderId}:focus {
          outline: none;
        }
        #${sliderId}:focus-visible::-webkit-slider-thumb {
          box-shadow: 0 0 0 4px ${activeLevel.color}66, 0 2px 8px rgba(0,0,0,0.5);
        }
      `}</style>

      {/* Section label */}
      <p
        style={{
          fontSize: '0.75rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: 'var(--color-text-muted)',
          margin: 0,
        }}
      >
        Permission Simulator
      </p>

      {/* Contractor analogy line */}
      <div
        key={`analogy-${selected}`}
        style={{
          fontSize: '0.8125rem',
          lineHeight: 1.4,
          color: activeLevel.color,
          fontStyle: 'italic',
          padding: '8px 12px',
          borderRadius: '8px',
          background: `${activeLevel.color}0d`,
          border: `1px solid ${activeLevel.color}22`,
          animation: 'analogyFadeIn 0.3s ease',
          minHeight: '36px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        &ldquo;{activeLevel.analogy}&rdquo;
      </div>

      {/* ---------- SLIDER AREA ---------- */}
      <div
        style={{
          borderRadius: '10px',
          padding: '20px 16px 12px',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Danger zone tint — rightmost 20 % of the track area */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '20%',
            background:
              'linear-gradient(to right, transparent, rgba(239, 68, 68, 0.06))',
            pointerEvents: 'none',
            borderRadius: '0 10px 10px 0',
          }}
        />

        {/* Track container with notch marks */}
        <div
          style={{ position: 'relative', padding: '0 0px' }}
        >
          {/* Notch marks behind the slider */}
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              height: '6px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              pointerEvents: 'none',
              /* account for thumb centering: half-thumb-width inset on each side */
              padding: '0 0px',
            }}
          >
            {levels.map((lvl, i) => (
              <div
                key={lvl.id}
                style={{
                  width: '2px',
                  height: i === selected ? '14px' : '10px',
                  borderRadius: '1px',
                  background:
                    i === selected
                      ? lvl.color
                      : 'rgba(255,255,255,0.15)',
                  transition: 'height 0.25s ease, background 0.25s ease',
                }}
              />
            ))}
          </div>

          {/* The actual range input */}
          <input
            id={sliderId}
            type="range"
            min={0}
            max={4}
            step={1}
            value={selected}
            onChange={(e) => handleSelect(Number(e.target.value))}
            aria-label="Permission level"
            aria-valuetext={activeLevel.label}
            style={{
              display: 'block',
              width: '100%',
              position: 'relative',
              zIndex: 1,
            }}
          />
        </div>

        {/* Labels below each stop */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '10px',
            padding: '0 0px',
          }}
        >
          {levels.map((lvl, i) => {
            const isActive = i === selected;
            return (
              <button
                key={lvl.id}
                onClick={() => handleSelect(i)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '2px 0',
                  cursor: 'pointer',
                  fontSize: '0.625rem',
                  fontWeight: isActive ? 700 : 400,
                  color: isActive ? lvl.color : 'var(--color-text-muted)',
                  fontFamily: 'var(--font-sans)',
                  textAlign: 'center',
                  transition: 'color 0.25s ease, font-weight 0.15s ease',
                  /* equal-width columns so labels spread evenly */
                  flex: '1 1 0',
                  minWidth: 0,
                  lineHeight: 1.3,
                }}
              >
                {lvl.label}
              </button>
            );
          })}
        </div>

        {/* Spectrum endpoints */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.5625rem',
            color: 'var(--color-text-muted)',
            marginTop: '6px',
            opacity: 0.7,
          }}
        >
          <span>Safe</span>
          <span
            style={{
              flex: 1,
              height: '1px',
              background: 'var(--color-border)',
              margin: '0 6px',
            }}
          />
          <span style={{ color: 'rgba(239, 68, 68, 0.6)' }}>Dangerous</span>
        </div>
      </div>

      {/* ---------- TERMINAL MOCK ---------- */}
      <div
        style={{
          borderRadius: '10px',
          border: `1px solid ${activeLevel.terminalBorder}`,
          background: '#0d0d0d',
          overflow: 'hidden',
          transition: 'border-color 0.3s ease',
          ...(activeLevel.flash
            ? { animation: 'terminalFlashRed 1s ease-out' }
            : {}),
        }}
        key={`terminal-border-${selected}`}
      >
        {/* Chrome bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '10px 14px',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <span
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#ff5f57',
            }}
          />
          <span
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#febc2e',
            }}
          />
          <span
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#28c840',
            }}
          />
          <span
            style={{
              marginLeft: 'auto',
              fontSize: '0.65rem',
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {activeLevel.label}
          </span>
        </div>

        {/* Terminal content */}
        <div
          key={fadeKey}
          style={{
            padding: '16px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            lineHeight: 1.6,
            minHeight: '120px',
            animation: 'terminalFadeIn 0.3s ease',
          }}
        >
          <TerminalContent levelIndex={selected} />
        </div>
      </div>
    </div>
  );
}
