'use client';

import { useState, useEffect, useCallback } from 'react';

interface Tool {
  name: string;
  icon: string;
  command: string;
  lines: ToolLine[];
}

interface ToolLine {
  text: string;
  style?: 'default' | 'added' | 'removed' | 'success' | 'highlight';
}

const tools: Tool[] = [
  {
    name: 'Read',
    icon: '📄',
    command: 'Read file: src/auth/login.ts',
    lines: [
      { text: '  1 │ import jwt from \'jsonwebtoken\';' },
      { text: '  2 │ import { db } from \'../db\';' },
      { text: '  3 │' },
      { text: '  4 │ export async function authenticate(' },
      { text: '  5 │   email: string, password: string' },
      { text: '  6 │ ) {' },
    ],
  },
  {
    name: 'Edit',
    icon: '✏️',
    command: 'Edit: src/auth/login.ts',
    lines: [
      { text: '' },
      { text: '  - if (user.passwordHash === password) {', style: 'removed' },
      { text: '  + if (await bcrypt.compare(password, user.passwordHash)) {', style: 'added' },
      { text: '' },
      { text: '  ✓ Applied 1 edit', style: 'success' },
    ],
  },
  {
    name: 'Bash',
    icon: '⚡',
    command: 'npm test',
    lines: [
      { text: '' },
      { text: '  PASS  src/auth/__tests__/login.test.ts' },
      { text: '    ✓ rejects wrong password (12ms)', style: 'success' },
      { text: '    ✓ accepts correct password (8ms)', style: 'success' },
      { text: '    ✓ handles missing user (3ms)', style: 'success' },
      { text: '' },
      { text: '  3 passed, 0 failed' },
    ],
  },
  {
    name: 'Search',
    icon: '🔍',
    command: 'Grep: "authenticate" --type ts',
    lines: [
      { text: '' },
      { text: '  src/auth/login.ts:4      export async function authenticate(', style: 'highlight' },
      { text: '  src/auth/middleware.ts:8  if (!authenticate(req)) {', style: 'highlight' },
      { text: '  src/routes/api.ts:22     const user = await authenticate(', style: 'highlight' },
    ],
  },
  {
    name: 'Fetch',
    icon: '🌐',
    command: 'WebFetch: docs.bcrypt.dev/compare',
    lines: [
      { text: '' },
      { text: '  bcrypt.compare(data, hash)' },
      { text: '  Returns: Promise<boolean>' },
      { text: '' },
      { text: '  Compares plaintext against hash.' },
      { text: '  Use for password verification.' },
    ],
  },
];

function getLineColor(style?: ToolLine['style']): string {
  switch (style) {
    case 'added':
      return 'var(--carousel-added)';
    case 'removed':
      return 'var(--carousel-removed)';
    case 'success':
      return 'var(--carousel-success)';
    case 'highlight':
      return 'var(--carousel-highlight)';
    default:
      return 'var(--color-text-secondary)';
  }
}

function getLineBg(style?: ToolLine['style']): string | undefined {
  switch (style) {
    case 'added':
      return 'var(--carousel-added-bg)';
    case 'removed':
      return 'var(--carousel-removed-bg)';
    default:
      return undefined;
  }
}

export function BuiltInTools() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % tools.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(advance, 4000);
    return () => clearInterval(interval);
  }, [isPaused, advance]);

  const activeTool = tools[activeIndex];

  return (
    <div
      className="space-y-4"
      style={
        {
          '--carousel-terminal-bg': '#0d0d0d',
          '--carousel-chrome-bg': '#1a1a1a',
          '--carousel-dot-red': '#ff5f57',
          '--carousel-dot-yellow': '#febc2e',
          '--carousel-dot-green': '#28c840',
          '--carousel-added': '#4ade80',
          '--carousel-added-bg': 'rgba(74, 222, 128, 0.08)',
          '--carousel-removed': '#f87171',
          '--carousel-removed-bg': 'rgba(248, 113, 113, 0.08)',
          '--carousel-success': '#4ade80',
          '--carousel-highlight': 'var(--color-accent)',
        } as React.CSSProperties
      }
    >
      {/* Tool label */}
      <div className="flex items-center gap-2">
        <span className="text-lg" aria-hidden="true">
          {activeTool.icon}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
          {activeTool.name}
        </span>
      </div>

      {/* Terminal */}
      <div
        className="rounded-xl overflow-hidden border border-border"
        style={{ backgroundColor: 'var(--carousel-terminal-bg)' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Chrome bar */}
        <div
          className="flex items-center gap-1.5 px-3 py-2.5"
          style={{ backgroundColor: 'var(--carousel-chrome-bg)' }}
        >
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: 'var(--carousel-dot-red)' }}
          />
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: 'var(--carousel-dot-yellow)' }}
          />
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: 'var(--carousel-dot-green)' }}
          />
        </div>

        {/* Content area with cross-fade */}
        <div className="relative" style={{ minHeight: '180px' }}>
          {tools.map((tool, i) => (
            <div
              key={tool.name}
              className="absolute inset-0 px-4 py-3"
              style={{
                opacity: i === activeIndex ? 1 : 0,
                transition: 'opacity 0.4s ease',
                pointerEvents: i === activeIndex ? 'auto' : 'none',
              }}
              aria-hidden={i !== activeIndex}
            >
              {/* Command line */}
              <p className="font-mono text-xs text-text-muted mb-2">
                <span style={{ color: 'var(--carousel-success)' }}>$</span>{' '}
                {tool.command}
              </p>

              {/* Output lines */}
              <div className="font-mono text-xs leading-relaxed">
                {tool.lines.map((line, j) => (
                  <div
                    key={j}
                    className="rounded-sm px-1 -mx-1"
                    style={{
                      color: getLineColor(line.style),
                      backgroundColor: getLineBg(line.style),
                    }}
                  >
                    {line.text || '\u200B'}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicator */}
      <div className="flex items-center justify-center gap-2" role="tablist">
        {tools.map((tool, i) => (
          <button
            key={tool.name}
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={tool.name}
            className="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer"
            style={{
              backgroundColor:
                i === activeIndex ? 'var(--color-accent)' : 'transparent',
              border:
                i === activeIndex
                  ? '1.5px solid var(--color-accent)'
                  : '1.5px solid var(--color-text-muted)',
              transform: i === activeIndex ? 'scale(1.3)' : 'scale(1)',
            }}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
