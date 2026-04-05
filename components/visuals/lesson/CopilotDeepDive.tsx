'use client';

import { useState } from 'react';

type Tab = 'modes' | 'github' | 'instructions';

const TABS: { key: Tab; label: string }[] = [
  { key: 'modes', label: 'Three Modes' },
  { key: 'github', label: 'GitHub Integration' },
  { key: 'instructions', label: 'Custom Instructions' },
];

/* ── Terminal chrome wrapper ─────────────────────────────── */

function TerminalChrome({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: '#0d0d0d',
        borderRadius: '10px',
        border: '1px solid var(--color-border)',
        overflow: 'hidden',
      }}
    >
      {/* Traffic-light dots */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '10px 14px 0',
        }}
      >
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
      </div>

      {/* Body */}
      <div
        style={{
          padding: '14px 16px 16px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8125rem',
          lineHeight: 1.7,
          color: 'var(--color-text-secondary)',
          overflowX: 'auto',
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ── Tab content ─────────────────────────────────────────── */

function ThreeModesContent() {
  const accentBlue = 'var(--color-tool-copilot)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {/* Inline mode */}
      <ModePanel
        label="Inline"
        accent={accentBlue}
        step="1"
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8125rem',
            lineHeight: 1.7,
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}
        >
          <span style={{ color: 'var(--color-text-primary)' }}>{'function validate(token) {\n'}</span>
          <span style={{ color: 'var(--color-text-primary)' }}>{'  '}</span>
          <span
            style={{
              color: 'var(--color-text-muted)',
              background: 'rgba(121, 192, 255, 0.08)',
              borderRadius: '3px',
              padding: '1px 2px',
            }}
          >
            {'return jwt.verify(token, SECRET);'}
          </span>
          <span
            style={{
              fontSize: '0.625rem',
              color: 'var(--color-text-muted)',
              marginLeft: '8px',
              fontStyle: 'italic',
              fontFamily: 'var(--font-sans)',
            }}
          >
            ghost text
          </span>
        </div>
      </ModePanel>

      {/* Chat mode */}
      <ModePanel
        label="Chat"
        accent={accentBlue}
        step="2"
      >
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.75rem',
            lineHeight: 1.6,
          }}
        >
          <div style={{ marginBottom: '6px' }}>
            <span style={{ fontWeight: 600, color: accentBlue }}>You: </span>
            <span style={{ color: 'var(--color-text-primary)' }}>
              How does the auth middleware work?
            </span>
          </div>
          <div>
            <span style={{ fontWeight: 600, color: 'var(--color-text-muted)' }}>Copilot: </span>
            <span style={{ color: 'var(--color-text-muted)' }}>
              The middleware extracts the JWT from the Authorization header, verifies it...
            </span>
          </div>
        </div>
      </ModePanel>

      {/* Agent mode */}
      <ModePanel
        label="Agent"
        accent={accentBlue}
        step="3"
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            lineHeight: 1.7,
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}
        >
          <TaskStep icon="1" text="Planning: Add rate limiter middleware" />
          <TaskStep icon="2" text="Edit: src/middleware/rateLimit.ts" done />
          <TaskStep icon="3" text="Edit: src/routes/api.ts" done />
          <TaskStep icon="4" text="Run: npm test" done />
          <span style={{ color: '#4ade80' }}>{'  ✓ 14 tests passed'}</span>
        </div>
      </ModePanel>
    </div>
  );
}

function GitHubIntegrationContent() {
  return (
    <TerminalChrome>
      <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
        <span style={{ color: 'var(--color-text-muted)', fontWeight: 600 }}>Agent: </span>
        <span style={{ color: 'var(--color-text-secondary)' }}>Creating pull request...</span>
        {'\n'}
        <span style={{ color: '#4ade80', paddingLeft: '0.5rem' }}>
          ✓ PR #247 opened: fix(auth): correct token expiry
        </span>
        {'\n\n'}
        <span style={{ color: 'var(--color-tool-copilot)', fontWeight: 600 }}>Reviewer: </span>
        <span style={{ color: 'var(--color-text-secondary)' }}>
          Can you add a test for the boundary case?
        </span>
        {'\n\n'}
        <span style={{ color: 'var(--color-text-muted)', fontWeight: 600 }}>Agent: </span>
        <span style={{ color: 'var(--color-text-secondary)' }}>Adding test... </span>
        <span style={{ color: '#4ade80' }}>✓ Pushed to branch</span>
      </div>
      <p
        style={{
          fontSize: '0.6875rem',
          color: 'var(--color-text-muted)',
          marginTop: '12px',
          borderTop: '1px solid var(--color-border)',
          paddingTop: '10px',
          lineHeight: 1.5,
        }}
      >
        PR creation, review responses, and code pushes — all from the agent.
      </p>
    </TerminalChrome>
  );
}

function CustomInstructionsContent() {
  return (
    <>
      <TerminalChrome>
        <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          <span style={{ color: 'var(--color-text-muted)' }}>
            {'# .github/copilot-instructions.md\n\n'}
          </span>
          <InstructionLine text="Use TypeScript strict mode" />
          <InstructionLine text="Prefer functional components" />
          <InstructionLine text="Run `npm test` after changes" />
          <InstructionLine text="Never modify generated files" />
        </div>
      </TerminalChrome>
      <p
        style={{
          fontSize: '0.6875rem',
          color: 'var(--color-text-muted)',
          marginTop: '10px',
          lineHeight: 1.5,
        }}
      >
        Checked into the repo — every contributor gets the same agent behaviour.
      </p>
    </>
  );
}

/* ── Tiny helpers ─────────────────────────────────────────── */

function ModePanel({
  label,
  accent,
  step,
  children,
}: {
  label: string;
  accent: string;
  step: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: '#0d0d0d',
        borderRadius: '8px',
        border: '1px solid var(--color-border)',
        padding: '12px 14px',
        position: 'relative',
      }}
    >
      {/* Label badge */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '8px',
        }}
      >
        <span
          style={{
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            background: accent,
            color: '#0d0d0d',
            fontSize: '0.625rem',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {step}
        </span>
        <span
          style={{
            fontSize: '0.6875rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: accent,
            fontFamily: 'var(--font-sans)',
          }}
        >
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}

function TaskStep({ icon, text, done }: { icon: string; text: string; done?: boolean }) {
  return (
    <div>
      <span style={{ color: done ? '#4ade80' : 'var(--color-tool-copilot)' }}>
        {done ? '  ✓ ' : `  ${icon}. `}
      </span>
      <span
        style={{
          color: done ? 'var(--color-text-secondary)' : 'var(--color-text-primary)',
        }}
      >
        {text}
      </span>
      {'\n'}
    </div>
  );
}

function InstructionLine({ text }: { text: string }) {
  // Highlight backtick-wrapped content
  const parts = text.split(/(`[^`]+`)/);
  return (
    <div>
      <span style={{ color: 'var(--color-tool-copilot)' }}>- </span>
      {parts.map((part, i) =>
        part.startsWith('`') && part.endsWith('`') ? (
          <span
            key={i}
            style={{
              color: 'var(--color-accent)',
              background: 'rgba(255, 107, 53, 0.1)',
              borderRadius: '3px',
              padding: '1px 4px',
            }}
          >
            {part.slice(1, -1)}
          </span>
        ) : (
          <span key={i} style={{ color: 'var(--color-text-primary)' }}>
            {part}
          </span>
        )
      )}
      {'\n'}
    </div>
  );
}

/* ── Main component ──────────────────────────────────────── */

export function CopilotDeepDive() {
  const [activeTab, setActiveTab] = useState<Tab>('modes');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Section label */}
      <p
        style={{
          fontSize: '0.75rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: 'var(--color-text-muted)',
          margin: 0,
        }}
      >
        GitHub Copilot Deep Dive
      </p>

      {/* Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '0',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        {TABS.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                padding: '8px 14px',
                fontSize: '0.6875rem',
                fontWeight: 600,
                fontFamily: 'var(--font-sans)',
                color: isActive ? 'var(--color-tool-copilot)' : 'var(--color-text-muted)',
                background: 'transparent',
                border: 'none',
                borderBottom: isActive
                  ? '2px solid var(--color-tool-copilot)'
                  : '2px solid transparent',
                cursor: isActive ? 'default' : 'pointer',
                transition: 'color 0.2s ease, border-color 0.2s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content with cross-fade */}
      <div
        key={activeTab}
        style={{
          animation: 'fadeIn 0.3s ease both',
          minWidth: 0,
        }}
      >
        {activeTab === 'modes' && <ThreeModesContent />}
        {activeTab === 'github' && <GitHubIntegrationContent />}
        {activeTab === 'instructions' && <CustomInstructionsContent />}
      </div>
    </div>
  );
}
