'use client';

import { useState } from 'react';

const levels = [
  {
    id: 'plan',
    label: 'Plan Mode',
    dotColor: '#3b82f6',
    borderColor: '#3b82f6',
    bgTint: 'rgba(59, 130, 246, 0.08)',
    activeBg: 'rgba(59, 130, 246, 0.15)',
    activeBorder: 'rgba(59, 130, 246, 0.5)',
    terminalBorder: 'rgba(59, 130, 246, 0.3)',
  },
  {
    id: 'default',
    label: 'Default',
    dotColor: '#93c5fd',
    borderColor: '#93c5fd',
    bgTint: 'rgba(147, 197, 253, 0.08)',
    activeBg: 'rgba(147, 197, 253, 0.15)',
    activeBorder: 'rgba(147, 197, 253, 0.5)',
    terminalBorder: 'rgba(147, 197, 253, 0.3)',
  },
  {
    id: 'accept-edits',
    label: 'Accept Edits',
    dotColor: '#fbbf24',
    borderColor: '#fbbf24',
    bgTint: 'rgba(251, 191, 36, 0.08)',
    activeBg: 'rgba(251, 191, 36, 0.15)',
    activeBorder: 'rgba(251, 191, 36, 0.5)',
    terminalBorder: 'rgba(251, 191, 36, 0.3)',
  },
  {
    id: 'auto',
    label: 'Auto Mode',
    dotColor: '#fb923c',
    borderColor: '#fb923c',
    bgTint: 'rgba(251, 146, 60, 0.08)',
    activeBg: 'rgba(251, 146, 60, 0.15)',
    activeBorder: 'rgba(251, 146, 60, 0.5)',
    terminalBorder: 'rgba(251, 146, 60, 0.3)',
  },
  {
    id: 'full-auto',
    label: 'Full Auto',
    dotColor: '#ef4444',
    borderColor: '#ef4444',
    bgTint: 'rgba(239, 68, 68, 0.08)',
    activeBg: 'rgba(239, 68, 68, 0.15)',
    activeBorder: 'rgba(239, 68, 68, 0.5)',
    terminalBorder: 'rgba(239, 68, 68, 0.3)',
    flash: true,
  },
];

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
    // Plan Mode
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
    // Default
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
    // Accept Edits
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
    // Auto Mode
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

  function handleSelect(index: number) {
    if (index === selected) return;
    setSelected(index);
    setFadeKey(index);
  }

  const activeLevel = levels[selected];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {/* Keyframe styles */}
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

      {/* Radio button group — vertical segmented control */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          borderRadius: '10px',
          padding: '4px',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
        }}
      >
        {levels.map((level, i) => {
          const isActive = selected === i;
          return (
            <button
              key={level.id}
              onClick={() => handleSelect(i)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 12px',
                borderRadius: '7px',
                border: isActive
                  ? `1px solid ${level.activeBorder}`
                  : '1px solid transparent',
                background: isActive ? level.activeBg : 'transparent',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                width: '100%',
                textAlign: 'left',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {/* Colored dot */}
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: level.dotColor,
                  flexShrink: 0,
                  opacity: isActive ? 1 : 0.5,
                  transition: 'opacity 0.2s ease',
                }}
              />
              <span
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive
                    ? 'var(--color-text-primary)'
                    : 'var(--color-text-secondary)',
                  transition: 'color 0.2s ease, font-weight 0.2s ease',
                }}
              >
                {level.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Terminal mock */}
      <div
        style={{
          borderRadius: '10px',
          border: `1px solid ${activeLevel.terminalBorder}`,
          background: '#0d0d0d',
          overflow: 'hidden',
          transition: 'border-color 0.3s ease',
          ...(activeLevel.flash
            ? {
                animation: 'terminalFlashRed 1s ease-out',
              }
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

      {/* Spectrum labels */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.625rem',
          color: 'var(--color-text-muted)',
          padding: '0 4px',
        }}
      >
        <span>Most restrictive</span>
        <span
          style={{
            flex: 1,
            height: '1px',
            background: 'var(--color-border)',
            margin: '0 8px',
          }}
        />
        <span>Least restrictive</span>
      </div>
    </div>
  );
}
