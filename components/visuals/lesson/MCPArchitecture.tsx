'use client';

import { useState, useEffect } from 'react';

const STAGE_DELAY_MS = 2000;
const TOTAL_STAGES = 5;

/* Hoisted theme — same object on every render. */
const TERM_THEME = {
  '--term-bg': '#0d0d0d',
  '--term-chrome': '#1a1a1a',
  '--term-dot-red': '#ff5f57',
  '--term-dot-yellow': '#febc2e',
  '--term-dot-green': '#28c840',
  '--term-accent': 'var(--color-accent)',
  '--term-text': '#e0e0e0',
  '--term-muted': '#6a6a6a',
  '--term-dim': '#888888',
  '--term-red': '#f87171',
  '--term-orange': '#fb923c',
  '--term-amber': '#fbbf24',
} as React.CSSProperties;

export function MCPArchitecture() {
  const [visibleStages, setVisibleStages] = useState(0);

  const replay = () => setVisibleStages(0);

  useEffect(() => {
    if (visibleStages < TOTAL_STAGES) {
      const timer = setTimeout(() => {
        setVisibleStages((s) => s + 1);
      }, visibleStages === 0 ? 600 : STAGE_DELAY_MS);
      return () => clearTimeout(timer);
    }
  }, [visibleStages]);

  const show = (stage: number) => visibleStages >= stage;

  return (
    <div style={TERM_THEME}>
      {/* Terminal window */}
      <div
        style={{
          background: 'var(--term-bg)',
          borderRadius: '10px',
          border: '1px solid var(--color-border)',
          overflow: 'hidden',
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          lineHeight: 1.6,
          minWidth: 0,
        }}
      >
        {/* Chrome bar */}
        <div
          style={{
            background: 'var(--term-chrome)',
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <span
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: 'var(--term-dot-red)',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: 'var(--term-dot-yellow)',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: 'var(--term-dot-green)',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              marginLeft: 'auto',
              fontSize: '10px',
              color: 'var(--term-muted)',
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              letterSpacing: '0.04em',
            }}
          >
            claude
          </span>
        </div>

        {/* Terminal content */}
        <div
          style={{
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            minHeight: '260px',
          }}
        >
          {/* Stage 1: User prompt */}
          <Stage visible={show(1)}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{ color: 'var(--term-accent)', fontWeight: 700, flexShrink: 0 }}>
                &gt;
              </span>
              <span style={{ color: 'var(--term-text)' }}>
                What errors spiked in production today?
              </span>
            </div>
          </Stage>

          {/* Stage 2: MCP tool call */}
          <Stage visible={show(2)}>
            <div style={{ paddingLeft: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                <span style={{ color: 'var(--term-accent)', fontSize: '11px' }}>
                  &#x26A1;
                </span>
                <span style={{ color: 'var(--term-muted)', fontSize: '11px' }}>
                  Tool:
                </span>
                <span
                  style={{
                    color: 'var(--term-accent)',
                    fontWeight: 600,
                    fontSize: '12px',
                  }}
                >
                  mcp__sentry__search_issues
                </span>
              </div>
              <div style={{ paddingLeft: '22px', color: 'var(--term-muted)', fontSize: '11px' }}>
                <div>
                  query:{' '}
                  <span style={{ color: 'var(--term-dim)' }}>
                    &quot;is:unresolved firstSeen:-24h&quot;
                  </span>
                </div>
                <div>
                  sort:{' '}
                  <span style={{ color: 'var(--term-dim)' }}>
                    &quot;freq&quot;
                  </span>
                </div>
              </div>
            </div>
          </Stage>

          {/* Stage 3: MCP result */}
          <Stage visible={show(3)}>
            <div style={{ paddingLeft: '4px' }}>
              <div
                style={{
                  color: 'var(--term-dim)',
                  fontSize: '11px',
                  marginBottom: '6px',
                }}
              >
                3 issues found:
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  paddingLeft: '8px',
                }}
              >
                <IssueRow
                  index={1}
                  name="AuthError: token_expired"
                  count={847}
                  file="src/auth/login.ts:42"
                  color="var(--term-red)"
                />
                <IssueRow
                  index={2}
                  name="TypeError: null is not obj"
                  count={203}
                  file="src/api/users.ts:18"
                  color="var(--term-orange)"
                />
                <IssueRow
                  index={3}
                  name="TimeoutError: DB conn pool"
                  count={67}
                  file="src/db/pool.ts:8"
                  color="var(--term-amber)"
                />
              </div>
            </div>
          </Stage>

          {/* Stage 4: Agent acts on data */}
          <Stage visible={show(4)}>
            <div style={{ paddingLeft: '4px' }}>
              <div
                style={{
                  color: 'var(--term-dim)',
                  fontSize: '12px',
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  marginBottom: '8px',
                }}
              >
                The top issue (847 occurrences) is in the
                <br />
                token validation code. Let me read that file...
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: 'var(--term-muted)', fontSize: '11px' }}>$</span>
                <span style={{ color: 'var(--term-text)', fontSize: '12px' }}>
                  Read file:{' '}
                  <span style={{ color: 'var(--color-text-secondary)' }}>
                    src/auth/login.ts
                  </span>
                </span>
              </div>
            </div>
          </Stage>

          {/* Stage 5: Summary footer */}
          <Stage visible={show(5)}>
            <div
              style={{
                borderTop: '1px solid var(--color-border)',
                paddingTop: '12px',
                marginTop: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  color: 'var(--term-muted)',
                  fontSize: '11px',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                No copy-paste. No tab switching. One conversation.
              </span>
              <button
                onClick={replay}
                style={{
                  background: 'transparent',
                  border: '1px solid var(--color-border)',
                  borderRadius: '6px',
                  color: 'var(--term-accent)',
                  fontSize: '11px',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  padding: '4px 12px',
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'border-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.borderColor =
                    'var(--color-border-hover)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.borderColor =
                    'var(--color-border)';
                }}
              >
                Replay
              </button>
            </div>
          </Stage>
        </div>
      </div>
    </div>
  );
}

/** Fade-in wrapper for each stage */
function Stage({
  visible,
  children,
}: {
  visible: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
        pointerEvents: visible ? 'auto' : 'none',
        maxHeight: visible ? '500px' : '0px',
        overflow: 'hidden',
        transitionProperty: 'opacity, transform, max-height',
        transitionDuration: '0.4s, 0.4s, 0.4s',
        transitionTimingFunction: 'ease, ease, ease',
      }}
    >
      {children}
    </div>
  );
}

/** Single error issue row */
function IssueRow({
  index,
  name,
  count,
  file,
  color,
}: {
  index: number;
  name: string;
  count: number;
  file: string;
  color: string;
}) {
  return (
    <div style={{ fontSize: '11px', lineHeight: 1.5 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', flexWrap: 'wrap' }}>
        <span style={{ color: 'var(--term-muted)' }}>{index}.</span>
        <span style={{ color: 'var(--term-text)' }}>{name}</span>
        <span style={{ color, fontWeight: 700, fontSize: '11px' }}>
          &times;{count.toLocaleString()}
        </span>
      </div>
      <div
        style={{
          paddingLeft: '16px',
          color: 'var(--term-muted)',
          fontSize: '10px',
        }}
      >
        {file}
      </div>
    </div>
  );
}
