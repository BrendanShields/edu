import type { ReactNode } from 'react';

interface TerminalChromeProps {
  /** Optional title displayed in the chrome bar (right of the dots). */
  title?: string;
  /** Optional accent color for the title (e.g. for tool-themed terminals). */
  accent?: string;
  /** Body content — usually monospace text or code. */
  children: ReactNode;
}

/**
 * Shared terminal-window chrome used by every visual that needs to look like
 * a terminal: deep dives, agentic loop demos, code-along outputs, etc.
 *
 * Hand-tuned to match macOS terminal proportions:
 *   • 10px traffic-light dots, 6px gap
 *   • 1px border using the project border token
 *   • monospace body using the project --font-mono token
 *
 * Server Component — no hooks, no event handlers, no client JS.
 */
export function TerminalChrome({ title, accent, children }: TerminalChromeProps) {
  return (
    <div
      style={{
        background: '#0d0d0d',
        borderRadius: '10px',
        border: '1px solid var(--color-border)',
        overflow: 'hidden',
      }}
    >
      {/* Title bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '10px 14px 0',
          position: 'relative',
        }}
      >
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56', flexShrink: 0 }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e', flexShrink: 0 }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f', flexShrink: 0 }} />
        {title && (
          <span
            style={{
              marginLeft: '0.75rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              color: accent ?? 'var(--color-text-muted)',
              letterSpacing: '0.02em',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {title}
          </span>
        )}
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
