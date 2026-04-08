'use client';

import { useState, useEffect } from 'react';

const PHASE_INTERVAL = 3000;

const phases = [
  { label: 'Read', color: '#3B82F6' },
  { label: 'Think', color: '#F59E0B' },
  { label: 'Act', color: '#22C55E' },
  { label: 'Verify', color: '#A855F7' },
] as const;

function ReadContent() {
  return (
    <div>
      <div style={{ color: 'var(--color-text-secondary)' }}>
        $ Reading src/auth.ts...
      </div>
      <div style={{ height: 8 }} />
      <div style={{ color: '#C084FC' }}>
        export async function{' '}
        <span style={{ color: '#60A5FA' }}>validateToken</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>(</span>
        <span style={{ color: '#F97316' }}>token</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>:</span>{' '}
        <span style={{ color: '#22D3EE' }}>string</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>)</span>{' '}
        <span style={{ color: 'var(--color-text-secondary)' }}>{'{'}</span>
      </div>
      <div style={{ color: 'var(--color-text-primary)', paddingLeft: 16 }}>
        <span style={{ color: '#C084FC' }}>const</span>{' '}
        <span style={{ color: 'var(--color-text-primary)' }}>decoded</span>{' '}
        <span style={{ color: 'var(--color-text-secondary)' }}>=</span>{' '}
        <span style={{ color: '#60A5FA' }}>jwt</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>.verify(</span>
        <span style={{ color: '#F97316' }}>token</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>,</span>{' '}
        <span style={{ color: '#F97316' }}>SECRET</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>);</span>
      </div>
      <div style={{ color: 'var(--color-text-primary)', paddingLeft: 16 }}>
        <span style={{ color: '#C084FC' }}>const</span>{' '}
        <span style={{ color: 'var(--color-text-primary)' }}>expiry</span>{' '}
        <span style={{ color: 'var(--color-text-secondary)' }}>=</span>{' '}
        <span style={{ color: '#C084FC' }}>new</span>{' '}
        <span style={{ color: '#22D3EE' }}>Date</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>(decoded.exp * 1000);</span>
      </div>
      <div style={{ color: 'var(--color-text-primary)', paddingLeft: 16 }}>
        <span style={{ color: '#C084FC' }}>if</span>{' '}
        <span style={{ color: 'var(--color-text-secondary)' }}>(</span>
        <span style={{ color: 'var(--color-text-primary)' }}>expiry</span>{' '}
        <span style={{ color: '#F59E0B' }}>&gt;=</span>{' '}
        <span style={{ color: '#C084FC' }}>new</span>{' '}
        <span style={{ color: '#22D3EE' }}>Date</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>()) {'{'}</span>
      </div>
      <div style={{ color: 'var(--color-text-primary)', paddingLeft: 32 }}>
        <span style={{ color: '#C084FC' }}>return</span>{' '}
        <span style={{ color: 'var(--color-text-primary)' }}>decoded</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>;</span>
      </div>
      <div style={{ color: 'var(--color-text-secondary)', paddingLeft: 16 }}>{'}'}</div>
      <div style={{ color: 'var(--color-text-primary)', paddingLeft: 16 }}>
        <span style={{ color: '#C084FC' }}>throw</span>{' '}
        <span style={{ color: '#C084FC' }}>new</span>{' '}
        <span style={{ color: '#22D3EE' }}>AuthError</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>(</span>
        <span style={{ color: '#A3E635' }}>&apos;token_expired&apos;</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>);</span>
      </div>
      <div style={{ color: 'var(--color-text-secondary)' }}>{'}'}</div>
    </div>
  );
}

const THINK_TEXT = `The test expects expired tokens to be rejected.
The comparison uses >= which means tokens expiring
at exactly this moment are accepted.

Changing >= to > fixes the boundary condition.`;

function ThinkContent() {
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    setVisibleChars(0);
    const interval = setInterval(() => {
      setVisibleChars((prev) => {
        if (prev >= THINK_TEXT.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 2;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const displayed = THINK_TEXT.slice(0, visibleChars);
  const cursor = visibleChars < THINK_TEXT.length;

  return (
    <div
      style={{
        fontStyle: 'italic',
        color: '#FCD34D',
      }}
    >
      {displayed}
      {cursor && (
        <span
          style={{
            display: 'inline-block',
            width: 6,
            height: 14,
            backgroundColor: '#FCD34D',
            marginLeft: 1,
            verticalAlign: 'text-bottom',
            animation: 'cursorBlink 0.6s step-end infinite',
          }}
        />
      )}
    </div>
  );
}

function ActContent() {
  return (
    <div>
      <div style={{ color: 'var(--color-text-secondary)' }}>
        $ Editing src/auth.ts
      </div>
      <div style={{ height: 12 }} />
      <div
        style={{
          color: '#F87171',
          backgroundColor: 'rgba(248, 113, 113, 0.08)',
          padding: '2px 4px',
          borderRadius: 2,
        }}
      >
        {'- if (expiry >= new Date()) {'}
      </div>
      <div
        style={{
          color: '#4ADE80',
          backgroundColor: 'rgba(74, 222, 128, 0.08)',
          padding: '2px 4px',
          borderRadius: 2,
        }}
      >
        {'+ if (expiry > new Date()) {'}
      </div>
      <div style={{ height: 12 }} />
      <div style={{ color: '#4ADE80' }}>
        {'✓ '}
        <span style={{ color: 'var(--color-text-secondary)' }}>
          1 file changed
        </span>
      </div>
    </div>
  );
}

function VerifyContent() {
  return (
    <div>
      <div style={{ color: 'var(--color-text-secondary)' }}>$ npm test</div>
      <div style={{ height: 12 }} />
      <div style={{ color: 'var(--color-text-secondary)', paddingLeft: 8 }}>
        auth/validateToken
      </div>
      <div style={{ paddingLeft: 16 }}>
        <span style={{ color: '#4ADE80' }}>✓</span>{' '}
        <span style={{ color: 'var(--color-text-primary)' }}>
          accepts valid token
        </span>{' '}
        <span style={{ color: 'var(--color-text-muted)' }}>(4ms)</span>
      </div>
      <div style={{ paddingLeft: 16 }}>
        <span style={{ color: '#4ADE80' }}>✓</span>{' '}
        <span style={{ color: 'var(--color-text-primary)' }}>
          rejects expired token
        </span>{' '}
        <span style={{ color: 'var(--color-text-muted)' }}>(2ms)</span>
      </div>
      <div style={{ paddingLeft: 16 }}>
        <span style={{ color: '#4ADE80' }}>✓</span>{' '}
        <span style={{ color: 'var(--color-text-primary)' }}>
          rejects token at exact expiry
        </span>{' '}
        <span style={{ color: 'var(--color-text-muted)' }}>(1ms)</span>
      </div>
      <div style={{ height: 12 }} />
      <div style={{ color: '#4ADE80', paddingLeft: 8 }}>
        3 passed
        <span style={{ color: 'var(--color-text-muted)' }}>, 0 failed</span>
      </div>
    </div>
  );
}

const contentComponents = [ReadContent, ThinkContent, ActContent, VerifyContent];

export function AgenticLoop() {
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % 4);
    }, PHASE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const Content = contentComponents[activePhase];

  return (
    <div style={{ width: '100%' }}>
      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      {/* Terminal window */}
      <div
        style={{
          backgroundColor: '#0d0d0d',
          borderRadius: 10,
          border: '1px solid var(--color-border)',
          overflow: 'hidden',
        }}
      >
        {/* Title bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '10px 14px',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: '#FF5F57',
            }}
          />
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: '#FEBC2E',
            }}
          />
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: '#28C840',
            }}
          />
        </div>

        {/* Terminal content area */}
        <div
          style={{
            padding: '16px 16px 20px',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            lineHeight: 1.5,
            minHeight: 180,
            position: 'relative',
          }}
        >
          {contentComponents.map((C, i) => (
            <div
              key={i}
              style={{
                position: i === 0 ? 'relative' : 'absolute',
                top: i === 0 ? undefined : 16,
                left: i === 0 ? undefined : 16,
                right: i === 0 ? undefined : 16,
                opacity: activePhase === i ? 1 : 0,
                transition: 'opacity 0.4s ease',
                pointerEvents: activePhase === i ? 'auto' : 'none',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}
            >
              {activePhase === i && <C />}
            </div>
          ))}
        </div>
      </div>

      {/* Progress dots */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          marginTop: 14,
        }}
      >
        {phases.map((phase, i) => {
          const isActive = activePhase === i;
          return (
            <button
              type="button"
              key={phase.label}
              onClick={() => setActivePhase(i)}
              aria-label={`Show ${phase.label} phase`}
              aria-pressed={isActive}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                padding: 0,
                font: 'inherit',
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: isActive ? phase.color : 'transparent',
                  border: `1.5px solid ${isActive ? phase.color : 'var(--color-text-muted)'}`,
                  transition:
                    'background-color 0.3s ease, border-color 0.3s ease',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  color: isActive ? phase.color : 'transparent',
                  transition: 'color 0.3s ease',
                  userSelect: 'none',
                }}
              >
                {phase.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
