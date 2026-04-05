'use client';

import { useState, useEffect } from 'react';

/* ------------------------------------------------------------------ */
/*  Phase definitions                                                  */
/* ------------------------------------------------------------------ */

type PhaseId = 'phase-read' | 'phase-think' | 'phase-act' | 'phase-verify';

interface PhaseConfig {
  label: string;
  content: React.ReactNode;
}

const PHASE_ORDER: PhaseId[] = [
  'phase-read',
  'phase-think',
  'phase-act',
  'phase-verify',
];

const PHASE_LABELS: Record<PhaseId, string> = {
  'phase-read': 'Read',
  'phase-think': 'Think',
  'phase-act': 'Act',
  'phase-verify': 'Verify',
};

/* ------------------------------------------------------------------ */
/*  Terminal content for each phase                                    */
/* ------------------------------------------------------------------ */

function ReadContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div>
        <div style={{ color: 'var(--sst-prompt)' }}>
          $ Reading src/auth/login.ts...
        </div>
        <div style={{ paddingTop: '6px' }}>
          <pre style={{ margin: 0, fontFamily: 'inherit', fontSize: 'inherit', lineHeight: 'inherit' }}>
{`  1 │ export async function validateToken(token) {
  2 │   const decoded = jwt.verify(token, SECRET);
  3 │   const expiry = new Date(decoded.exp * 1000);
  4 │   if (expiry >= new Date()) {
  5 │     return decoded;
  6 │   }
  7 │   throw new AuthError('token_expired');
  8 │ }`}
          </pre>
        </div>
      </div>
      <div>
        <div style={{ color: 'var(--sst-prompt)' }}>
          $ Reading src/auth/__tests__/auth.test.ts...
        </div>
        <div style={{ paddingLeft: '8px', paddingTop: '4px', color: 'var(--sst-text-dim)' }}>
          expect(validateToken(exactExpiryToken)).toThrow()
        </div>
      </div>
    </div>
  );
}

function ThinkContent() {
  return (
    <div
      style={{
        color: 'var(--sst-amber)',
        fontStyle: 'italic',
        lineHeight: 1.7,
      }}
    >
      <p style={{ margin: 0 }}>
        The test on line 42 expects tokens at exact expiry
        to be rejected. But login.ts:4 uses {'>='} which means
        tokens expiring at exactly this moment are accepted.
      </p>
      <p style={{ margin: '12px 0 0' }}>
        The fix: change {'>='} to {'>'} on line 4. One character.
      </p>
    </div>
  );
}

function ActContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ color: 'var(--sst-prompt)' }}>
        $ Editing src/auth/login.ts:4
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <div
          style={{
            background: 'var(--sst-diff-red-bg)',
            color: 'var(--sst-diff-red)',
            padding: '2px 8px',
            borderRadius: '2px',
          }}
        >
          {'  - if (expiry >= new Date()) {'}
        </div>
        <div
          style={{
            background: 'var(--sst-diff-green-bg)',
            color: 'var(--sst-diff-green)',
            padding: '2px 8px',
            borderRadius: '2px',
          }}
        >
          {'  + if (expiry > new Date()) {'}
        </div>
      </div>
      <div style={{ color: 'var(--sst-green)', paddingTop: '4px' }}>
        {'  \u2713 1 file changed, 1 line modified'}
      </div>
    </div>
  );
}

function VerifyContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ color: 'var(--sst-prompt)' }}>$ npm test</div>
      <div style={{ paddingLeft: '8px' }}>
        <div style={{ color: 'var(--sst-text-dim)', paddingBottom: '6px' }}>
          src/auth/__tests__/auth.test.ts
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', paddingLeft: '8px' }}>
          <div>
            <span style={{ color: 'var(--sst-green)' }}>{'\u2713'}</span>
            <span style={{ color: 'var(--sst-text)' }}> accepts valid token </span>
            <span style={{ color: 'var(--sst-text-dim)' }}>(4ms)</span>
          </div>
          <div>
            <span style={{ color: 'var(--sst-green)' }}>{'\u2713'}</span>
            <span style={{ color: 'var(--sst-text)' }}> rejects expired token </span>
            <span style={{ color: 'var(--sst-text-dim)' }}>(2ms)</span>
          </div>
          <div>
            <span style={{ color: 'var(--sst-green)' }}>{'\u2713'}</span>
            <span style={{ color: 'var(--sst-text)' }}> rejects token at exact expiry </span>
            <span style={{ color: 'var(--sst-text-dim)' }}>(1ms)</span>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: '4px' }}>
        <span style={{ color: 'var(--sst-green)', fontWeight: 600 }}>3 passed</span>
        <span style={{ color: 'var(--sst-text-dim)' }}>, 0 failed</span>
      </div>
    </div>
  );
}

function IdleContent() {
  return (
    <div>
      <div style={{ color: 'var(--sst-prompt)' }}>~/myapp $ claude</div>
      <div style={{ paddingTop: '10px', color: 'var(--sst-text-dim)' }}>
        {'  Ready. Describe what you need.'}
      </div>
    </div>
  );
}

const PHASE_CONTENT: Record<PhaseId, React.ReactNode> = {
  'phase-read': <ReadContent />,
  'phase-think': <ThinkContent />,
  'phase-act': <ActContent />,
  'phase-verify': <VerifyContent />,
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function ScrollSyncedTerminal() {
  const [activePhase, setActivePhase] = useState<string | null>(null);

  useEffect(() => {
    function onSectionChange(e: Event) {
      const { id } = (e as CustomEvent).detail;
      setActivePhase(id);
    }

    window.addEventListener('sectionchange', onSectionChange);
    return () => window.removeEventListener('sectionchange', onSectionChange);
  }, []);

  const isKnownPhase = activePhase != null && PHASE_ORDER.includes(activePhase as PhaseId);
  const currentPhase = isKnownPhase ? (activePhase as PhaseId) : null;

  return (
    <div
      style={
        {
          /* CSS custom properties */
          '--sst-bg': '#0d0d0d',
          '--sst-bar': '#1a1a1a',
          '--sst-dot-red': '#ff5f56',
          '--sst-dot-yellow': '#ffbd2e',
          '--sst-dot-green': '#27c93f',
          '--sst-text': '#d4d4d4',
          '--sst-text-dim': '#6b6b6b',
          '--sst-prompt': '#8b8b8b',
          '--sst-green': '#4ade80',
          '--sst-amber': '#fbbf24',
          '--sst-diff-red': '#fca5a5',
          '--sst-diff-red-bg': 'rgba(239, 68, 68, 0.15)',
          '--sst-diff-green': '#86efac',
          '--sst-diff-green-bg': 'rgba(34, 197, 94, 0.15)',
          '--sst-indicator-inactive': '#333',
          '--sst-indicator-active': '#e5e5e5',
        } as React.CSSProperties
      }
    >
      {/* Terminal chrome */}
      <div
        style={{
          background: 'var(--sst-bg)',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.06)',
          minWidth: '0',
        }}
      >
        {/* Title bar with 3 dots */}
        <div
          style={{
            background: 'var(--sst-bar)',
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
          }}
        >
          <span
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: 'var(--sst-dot-red)',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: 'var(--sst-dot-yellow)',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: 'var(--sst-dot-green)',
              flexShrink: 0,
            }}
          />
        </div>

        {/* Terminal body */}
        <div
          style={{
            padding: '16px',
            fontFamily: 'var(--font-mono, ui-monospace, "SF Mono", "Cascadia Code", Menlo, monospace)',
            fontSize: '0.8125rem',
            lineHeight: 1.6,
            color: 'var(--sst-text)',
            minHeight: '180px',
            position: 'relative',
          }}
        >
          {/* Idle state (shown when no phase matches) */}
          <div
            style={{
              opacity: currentPhase === null ? 1 : 0,
              transition: 'opacity 0.4s ease',
              position: currentPhase === null ? 'relative' : 'absolute',
              inset: currentPhase === null ? undefined : 0,
              padding: currentPhase === null ? undefined : '16px',
              pointerEvents: currentPhase === null ? 'auto' : 'none',
            }}
          >
            <IdleContent />
          </div>

          {/* Phase states */}
          {PHASE_ORDER.map((phaseId) => {
            const isActive = currentPhase === phaseId;
            return (
              <div
                key={phaseId}
                style={{
                  opacity: isActive ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                  position: isActive ? 'relative' : 'absolute',
                  inset: isActive ? undefined : 0,
                  padding: isActive ? undefined : '16px',
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
              >
                {PHASE_CONTENT[phaseId]}
              </div>
            );
          })}
        </div>

        {/* Phase indicator bar */}
        <div
          style={{
            padding: '10px 16px 14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
          }}
        >
          {PHASE_ORDER.map((phaseId) => {
            const isActive = currentPhase === phaseId;
            return (
              <div
                key={phaseId}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'opacity 0.4s ease',
                  opacity: isActive ? 1 : 0.35,
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: isActive
                      ? 'var(--sst-indicator-active)'
                      : 'var(--sst-indicator-inactive)',
                    transition: 'background 0.4s ease',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: '0.625rem',
                    fontWeight: 500,
                    color: isActive ? 'var(--sst-text)' : 'var(--sst-text-dim)',
                    letterSpacing: '0.04em',
                    transition: 'color 0.4s ease, opacity 0.4s ease',
                    opacity: isActive ? 1 : 0,
                    width: isActive ? 'auto' : 0,
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {PHASE_LABELS[phaseId]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
