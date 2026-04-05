'use client';

import { useState, useEffect, useCallback } from 'react';

type Mode = 'pass' | 'partial';

interface Layer {
  label: string;
  command: string;
  lines: string[];
  pass: boolean;
}

const passLayers: Layer[] = [
  {
    label: 'Tests',
    command: '$ npm test',
    lines: ['\u2713 auth/validateToken \u2014 3 passed'],
    pass: true,
  },
  {
    label: 'Linter',
    command: '$ eslint src/auth.ts',
    lines: ['No issues found'],
    pass: true,
  },
  {
    label: 'Types',
    command: '$ tsc --noEmit',
    lines: ['No errors'],
    pass: true,
  },
];

const partialLayers: Layer[] = [
  {
    label: 'Tests',
    command: '$ npm test',
    lines: ['\u2713 auth/validateToken \u2014 3 passed'],
    pass: true,
  },
  {
    label: 'Linter',
    command: '$ eslint src/auth.ts',
    lines: ['No issues found'],
    pass: true,
  },
  {
    label: 'Types',
    command: '$ tsc --noEmit',
    lines: [
      "src/auth.ts:12 \u2014 Type 'string' is",
      "not assignable to type 'number'",
    ],
    pass: false,
  },
];

const footerText: Record<Mode, string> = {
  pass: 'Every layer confirms the fix.',
  partial: 'Tests pass. Linter passes. Only the type checker catches it.',
};

export function VerificationLayers() {
  const [mode, setMode] = useState<Mode>('pass');
  const [visibleCount, setVisibleCount] = useState(0);

  const layers = mode === 'pass' ? passLayers : partialLayers;

  const resetAnimation = useCallback(() => {
    setVisibleCount(0);
  }, []);

  // Stagger reveal: increment visibleCount every 600ms
  useEffect(() => {
    if (visibleCount < layers.length) {
      const timer = setTimeout(() => {
        setVisibleCount((c) => c + 1);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, layers.length]);

  const handleModeChange = (newMode: Mode) => {
    if (newMode === mode) return;
    setMode(newMode);
    resetAnimation();
  };

  return (
    <div
      className="space-y-4"
      style={
        {
          '--vl-green': '#4ade80',
          '--vl-green-border': 'rgba(74, 222, 128, 0.45)',
          '--vl-green-bg': 'rgba(74, 222, 128, 0.06)',
          '--vl-red': '#f87171',
          '--vl-red-border': 'rgba(248, 113, 113, 0.45)',
          '--vl-red-bg': 'rgba(248, 113, 113, 0.06)',
          '--vl-surface': 'var(--color-surface)',
          '--vl-border': 'var(--color-border)',
          '--vl-text-muted': 'var(--color-text-muted)',
          '--vl-accent': 'var(--color-accent)',
        } as React.CSSProperties
      }
    >
      {/* Toggle */}
      <div
        className="inline-flex rounded-lg overflow-hidden"
        style={{
          border: '1px solid var(--vl-border)',
          background: 'var(--vl-surface)',
        }}
      >
        <ToggleButton
          active={mode === 'pass'}
          onClick={() => handleModeChange('pass')}
        >
          All pass
        </ToggleButton>
        <ToggleButton
          active={mode === 'partial'}
          onClick={() => handleModeChange('partial')}
        >
          What tests miss
        </ToggleButton>
      </div>

      {/* Code change label */}
      <div
        className="rounded-lg px-3 py-2 font-mono"
        style={{
          fontSize: '11px',
          background: 'var(--vl-surface)',
          border: '1px solid var(--vl-border)',
          color: 'var(--vl-text-muted)',
        }}
      >
        {mode === 'pass' ? (
          <>
            <span style={{ color: 'var(--color-text-secondary)' }}>
              Change:{' '}
            </span>
            <span style={{ color: 'var(--vl-red)' }}>
              expiry &gt;={' '}
            </span>
            <span style={{ color: 'var(--vl-text-muted)' }}>&rarr; </span>
            <span style={{ color: 'var(--vl-green)' }}>expiry &gt;</span>
          </>
        ) : (
          <>
            <span style={{ color: 'var(--color-text-secondary)' }}>
              Change:{' '}
            </span>
            <span style={{ color: 'var(--vl-red)' }}>
              return number{' '}
            </span>
            <span style={{ color: 'var(--vl-text-muted)' }}>&rarr; </span>
            <span style={{ color: 'var(--vl-green)' }}>return string</span>
          </>
        )}
      </div>

      {/* Layers */}
      <div className="space-y-2">
        {layers.map((layer, i) => {
          const isVisible = i < visibleCount;
          const borderColor = layer.pass
            ? 'var(--vl-green-border)'
            : 'var(--vl-red-border)';
          const bgColor = layer.pass
            ? 'var(--vl-green-bg)'
            : 'var(--vl-red-bg)';
          const iconColor = layer.pass ? 'var(--vl-green)' : 'var(--vl-red)';
          const icon = layer.pass ? '\u2713' : '\u2717';

          return (
            <div
              key={`${mode}-${i}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
              }}
            >
              <div
                className="rounded-lg overflow-hidden"
                style={{
                  borderLeft: `3px solid ${borderColor}`,
                  border: `1px solid var(--vl-border)`,
                  borderLeftWidth: '3px',
                  borderLeftColor: borderColor,
                  background: bgColor,
                }}
              >
                {/* Layer header */}
                <div
                  className="flex items-center justify-between px-3 pt-2 pb-1"
                  style={{ minHeight: 0 }}
                >
                  <span
                    className="font-semibold"
                    style={{
                      fontSize: '11px',
                      color: 'var(--color-text-secondary)',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {layer.label}
                  </span>
                  <span
                    className="font-bold"
                    style={{ fontSize: '14px', color: iconColor }}
                  >
                    {icon}
                  </span>
                </div>

                {/* Terminal content */}
                <div
                  className="font-mono px-3 pb-2"
                  style={{
                    fontSize: '11px',
                    lineHeight: '1.5',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  <div style={{ color: 'var(--vl-text-muted)' }}>
                    {layer.command}
                  </div>
                  {layer.lines.map((line, li) => (
                    <div
                      key={li}
                      style={{
                        color: layer.pass
                          ? 'var(--color-text-secondary)'
                          : 'var(--vl-red)',
                        paddingLeft: '0.5rem',
                      }}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <p
        style={{
          fontSize: '11px',
          color: 'var(--vl-text-muted)',
          lineHeight: '1.5',
          margin: 0,
          paddingTop: '2px',
          opacity: visibleCount >= layers.length ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
      >
        {footerText[mode]}
      </p>
    </div>
  );
}

function ToggleButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 font-medium transition-colors duration-150"
      style={{
        fontSize: '11px',
        background: active ? 'var(--vl-accent)' : 'transparent',
        color: active
          ? 'var(--color-text-primary)'
          : 'var(--vl-text-muted)',
        border: 'none',
        cursor: active ? 'default' : 'pointer',
      }}
    >
      {children}
    </button>
  );
}
