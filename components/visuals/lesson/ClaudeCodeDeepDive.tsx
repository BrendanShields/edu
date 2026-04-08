'use client';

import { useState } from 'react';
import { TerminalChrome } from '@/components/visuals/shared/TerminalChrome';

type Tab = 'slash' | 'headless' | 'multiturn';

const TABS: { key: Tab; label: string }[] = [
  { key: 'slash', label: 'Slash Commands' },
  { key: 'headless', label: 'Headless Mode' },
  { key: 'multiturn', label: 'Multi-turn' },
];

/* ── Tab content ─────────────────────────────────────────── */

function SlashCommandsContent() {
  return (
    <TerminalChrome>
      <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
        <Line prompt>/compact</Line>
        <Output color="#4ade80">✓ Conversation compacted (3,400 → 800 tokens)</Output>
        <Spacer />
        <Line prompt>/init</Line>
        <Output color="#4ade80">✓ Generated CLAUDE.md from project analysis</Output>
        <Spacer />
        <Line prompt>/cost</Line>
        <Output color="var(--color-text-secondary)">
          Session: $0.42 | Input: 18,200 | Output: 3,100
        </Output>
      </div>
    </TerminalChrome>
  );
}

function HeadlessModeContent() {
  return (
    <>
      <TerminalChrome>
        <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          <span style={{ color: 'var(--color-text-muted)' }}>{'# ci.yml\n'}</span>
          <span style={{ color: '#c084fc' }}>- name</span>
          <span style={{ color: 'var(--color-text-muted)' }}>: </span>
          <span>Fix lint errors</span>
          {'\n'}
          <span style={{ color: '#c084fc' }}>{'  run'}</span>
          <span style={{ color: 'var(--color-text-muted)' }}>: </span>
          <span style={{ color: 'var(--color-text-muted)' }}>|</span>
          {'\n'}
          <span>{'    claude --yes -p "Fix all ESLint errors" \\'}</span>
          {'\n'}
          <span>{'      --allowedTools "Bash,Read,Edit"'}</span>
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
        No human in the loop. Hooks still fire.
      </p>
    </>
  );
}

function MultiTurnContent() {
  return (
    <TerminalChrome>
      <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
        <Speaker label="You" color="var(--color-tool-claude)" />
        <span>Add OAuth login with GitHub</span>
        {'\n\n'}
        <Speaker label="Agent" color="var(--color-text-muted)" />
        <span style={{ color: 'var(--color-text-muted)' }}>
          {"I'll implement GitHub OAuth using next-auth..."}
        </span>
        {'\n\n'}
        <Speaker label="You" color="var(--color-tool-claude)" />
        <span>Actually, use Zod instead of Joi for validation</span>
        {'\n\n'}
        <Speaker label="Agent" color="var(--color-text-muted)" />
        <span style={{ color: 'var(--color-text-muted)' }}>
          Switching to Zod. Updating the schema in...
        </span>
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
        Mid-task course correction — the agent adapts without starting over.
      </p>
    </TerminalChrome>
  );
}

/* ── Tiny helpers ─────────────────────────────────────────── */

function Line({ prompt, children }: { prompt?: boolean; children: React.ReactNode }) {
  return (
    <div>
      {prompt && <span style={{ color: 'var(--color-tool-claude)' }}>{'> '}</span>}
      <span style={{ color: 'var(--color-text-primary)' }}>{children}</span>
    </div>
  );
}

function Output({ color, children }: { color: string; children: React.ReactNode }) {
  return <div style={{ color, paddingLeft: '0.5rem' }}>{children}</div>;
}

function Spacer() {
  return <div style={{ height: '10px' }} />;
}

function Speaker({ label, color }: { label: string; color: string }) {
  return (
    <span style={{ color, fontWeight: 600 }}>
      {label}:{' '}
    </span>
  );
}

/* ── Main component ──────────────────────────────────────── */

export function ClaudeCodeDeepDive() {
  const [activeTab, setActiveTab] = useState<Tab>('slash');

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
        Claude Code Deep Dive
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
                color: isActive ? 'var(--color-tool-claude)' : 'var(--color-text-muted)',
                background: 'transparent',
                border: 'none',
                borderBottom: isActive
                  ? '2px solid var(--color-tool-claude)'
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
        {activeTab === 'slash' && <SlashCommandsContent />}
        {activeTab === 'headless' && <HeadlessModeContent />}
        {activeTab === 'multiturn' && <MultiTurnContent />}
      </div>
    </div>
  );
}
