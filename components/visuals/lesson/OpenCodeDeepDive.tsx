'use client';

import { useState } from 'react';
import { TerminalChrome } from '@/components/visuals/shared/TerminalChrome';

type Tab = 'providers' | 'sessions' | 'tools';

const TABS: { key: Tab; label: string }[] = [
  { key: 'providers', label: 'Provider Switching' },
  { key: 'sessions', label: 'Session Management' },
  { key: 'tools', label: 'Custom Tools' },
];

/* ── Tab content ─────────────────────────────────────────── */

function ProviderSwitchingContent() {
  return (
    <>
      <TerminalChrome>
        <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          <Comment># config.toml</Comment>
          {'\n'}
          <SectionHeader>[providers.anthropic]</SectionHeader>
          <ConfigLine k="model" v={'"claude-sonnet-4-20250514"'} />
          {'\n'}
          <SectionHeader>[providers.openai]</SectionHeader>
          <ConfigLine k="model" v={'"gpt-4o"'} />
          {'\n'}
          <SectionHeader>[providers.local]</SectionHeader>
          <ConfigLine k="model" v={'"ollama/deepseek-r1"'} />
          <ConfigLine k="base_url" v={'"http://localhost:11434"'} />
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
        Switch providers with one config change.
      </p>
    </>
  );
}

function SessionManagementContent() {
  return (
    <TerminalChrome>
      <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
        <span style={{ color: 'var(--color-text-muted)' }}>Sessions:</span>
        {'\n'}
        <span style={{ color: 'var(--color-tool-opencode)' }}>{'  * '}</span>
        <span style={{ color: 'var(--color-text-primary)' }}>auth-refactor</span>
        <span style={{ color: 'var(--color-text-muted)' }}>{'     2 min ago   '}</span>
        <span
          style={{
            color: '#0d0d0d',
            background: 'var(--color-tool-opencode)',
            borderRadius: '3px',
            padding: '1px 6px',
            fontSize: '0.6875rem',
            fontWeight: 600,
          }}
        >
          active
        </span>
        {'\n'}
        <span style={{ color: 'var(--color-text-muted)' }}>{'    api-migration       1 hour ago'}</span>
        {'\n'}
        <span style={{ color: 'var(--color-text-muted)' }}>{'    debug-payments      yesterday'}</span>
        {'\n\n'}
        <span style={{ color: 'var(--color-tool-opencode)' }}>{'> '}</span>
        <span style={{ color: 'var(--color-text-primary)' }}>/session resume api-migration</span>
        {'\n'}
        <span style={{ color: '#4ade80', paddingLeft: '0.5rem' }}>
          ✓ Resumed with full context
        </span>
      </div>
    </TerminalChrome>
  );
}

function CustomToolsContent() {
  return (
    <>
      <TerminalChrome>
        <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          <Comment># config.toml</Comment>
          {'\n'}
          <SectionHeader>[tools.deploy]</SectionHeader>
          <ConfigLine k="command" v={'"bash scripts/deploy.sh"'} />
          <ConfigLine k="description" v={'"Deploy to staging"'} />
        </div>
      </TerminalChrome>

      {/* Usage example */}
      <div
        style={{
          marginTop: '10px',
          background: '#0d0d0d',
          borderRadius: '10px',
          border: '1px solid var(--color-border)',
          padding: '12px 16px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8125rem',
          lineHeight: 1.7,
        }}
      >
        <span style={{ color: 'var(--color-text-muted)', fontWeight: 600 }}>Agent: </span>
        <span style={{ color: 'var(--color-text-secondary)' }}>Running deploy tool... </span>
        <span style={{ color: '#4ade80' }}>✓ Deployed to staging</span>
      </div>
    </>
  );
}

/* ── Tiny helpers ─────────────────────────────────────────── */

function Comment({ children }: { children: React.ReactNode }) {
  return <span style={{ color: 'var(--color-text-muted)' }}>{children}</span>;
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ color: 'var(--color-tool-opencode)', fontWeight: 600 }}>{children}</div>
  );
}

function ConfigLine({ k, v }: { k: string; v: string }) {
  return (
    <div style={{ paddingLeft: '0.5rem' }}>
      <span style={{ color: '#c084fc' }}>{k}</span>
      <span style={{ color: 'var(--color-text-muted)' }}> = </span>
      <span style={{ color: '#fb923c' }}>{v}</span>
    </div>
  );
}

/* ── Main component ──────────────────────────────────────── */

export function OpenCodeDeepDive() {
  const [activeTab, setActiveTab] = useState<Tab>('providers');

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
        OpenCode Deep Dive
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
                color: isActive ? 'var(--color-tool-opencode)' : 'var(--color-text-muted)',
                background: 'transparent',
                border: 'none',
                borderBottom: isActive
                  ? '2px solid var(--color-tool-opencode)'
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
        {activeTab === 'providers' && <ProviderSwitchingContent />}
        {activeTab === 'sessions' && <SessionManagementContent />}
        {activeTab === 'tools' && <CustomToolsContent />}
      </div>
    </div>
  );
}
