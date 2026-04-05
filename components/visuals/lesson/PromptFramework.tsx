'use client';

import { useState } from 'react';

type FrameworkElement = 'context' | 'intent' | 'constraints' | 'verification';

interface Phrase {
  text: string;
  element: FrameworkElement;
}

const COLORS: Record<FrameworkElement, string> = {
  context: '#60a5fa',
  intent: '#4ade80',
  constraints: '#fb923c',
  verification: '#c084fc',
};

const LABELS: Record<FrameworkElement, string> = {
  context: 'Context',
  intent: 'Intent',
  constraints: 'Constraints',
  verification: 'Verification',
};

const EXPLANATIONS: Record<FrameworkElement, string> = {
  context: 'Tell the model exactly where to look and what exists.',
  intent: 'State the outcome you need, not the steps to get there.',
  constraints: 'Name the boundaries so the model stays inside them.',
  verification: 'Define how you will know the fix actually worked.',
};

const LEGEND_DOTS: Record<FrameworkElement, string> = {
  context: '\u{1F535}',
  intent: '\u{1F7E2}',
  constraints: '\u{1F7E0}',
  verification: '\u{1F7E3}',
};

const PHRASES: Phrase[] = [
  { text: 'In src/auth/login.ts, the validateToken function', element: 'context' },
  { text: 'needs to reject tokens at exact expiry boundary.', element: 'intent' },
  { text: "Don't change the function signature or add\nnew dependencies.", element: 'constraints' },
  { text: 'Run npm test after the fix.', element: 'verification' },
];

const ELEMENT_ORDER: FrameworkElement[] = ['context', 'intent', 'constraints', 'verification'];

export function PromptFramework() {
  const [hoveredElement, setHoveredElement] = useState<FrameworkElement | null>(null);
  const [activeFilter, setActiveFilter] = useState<FrameworkElement | null>(null);

  const highlighted = hoveredElement ?? activeFilter;

  function handleLegendClick(element: FrameworkElement) {
    setActiveFilter((prev) => (prev === element ? null : element));
  }

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
        Prompt Framework
      </p>

      {/* Good prompt */}
      <div
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: '8px',
          padding: '20px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8125rem',
          lineHeight: 1.7,
          position: 'relative',
        }}
      >
        {/* Prompt label */}
        <span
          style={{
            position: 'absolute',
            top: '8px',
            right: '12px',
            fontSize: '0.625rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-sans)',
          }}
        >
          CICV Prompt
        </span>

        <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          {PHRASES.map((phrase, i) => {
            const isHighlighted = highlighted === null || highlighted === phrase.element;
            const showTooltip = hoveredElement === phrase.element;

            return (
              <span key={i} style={{ position: 'relative', display: 'inline' }}>
                <span
                  onMouseEnter={() => setHoveredElement(phrase.element)}
                  onMouseLeave={() => setHoveredElement(null)}
                  style={{
                    borderBottom: `2px solid ${COLORS[phrase.element]}`,
                    paddingBottom: '2px',
                    opacity: isHighlighted ? 1 : 0.4,
                    transition: 'opacity 0.2s ease',
                    cursor: 'default',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {phrase.text}
                </span>

                {/* Tooltip */}
                {showTooltip && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 'calc(100% + 8px)',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: COLORS[phrase.element],
                      color: '#000',
                      fontSize: '0.6875rem',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '6px',
                      whiteSpace: 'nowrap',
                      pointerEvents: 'none',
                      zIndex: 10,
                      lineHeight: 1.4,
                    }}
                  >
                    {LABELS[phrase.element]}
                    <span style={{ fontWeight: 400, display: 'block', fontSize: '0.625rem' }}>
                      {EXPLANATIONS[phrase.element]}
                    </span>
                  </span>
                )}

                {/* Space or newline between phrases */}
                {i < PHRASES.length - 1 && (
                  <span>{'\n'}</span>
                )}
              </span>
            );
          })}
        </div>
      </div>

      {/* Bad prompt */}
      <div
        style={{
          background: 'var(--color-surface)',
          border: '1px dashed var(--color-border)',
          borderRadius: '8px',
          padding: '16px 20px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8125rem',
          lineHeight: 1.7,
          opacity: 0.5,
        }}
      >
        <span style={{ color: 'var(--color-text-muted)' }}>fix the auth bug</span>
        <span
          style={{
            display: 'block',
            marginTop: '8px',
            fontSize: '0.6875rem',
            fontFamily: 'var(--font-sans)',
            fontWeight: 500,
            color: 'var(--color-text-muted)',
            fontStyle: 'italic',
          }}
        >
          Same task. Zero signal.
        </span>
      </div>

      {/* Legend */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        {ELEMENT_ORDER.map((element) => {
          const isActive = activeFilter === element;
          return (
            <button
              key={element}
              onClick={() => handleLegendClick(element)}
              onMouseEnter={() => setHoveredElement(element)}
              onMouseLeave={() => setHoveredElement(null)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '999px',
                border: isActive
                  ? `1px solid ${COLORS[element]}`
                  : '1px solid var(--color-border)',
                background: isActive ? `${COLORS[element]}15` : 'transparent',
                cursor: 'pointer',
                fontSize: '0.6875rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                color: 'var(--color-text-secondary)',
                transition: 'all 0.2s ease',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: COLORS[element],
                  flexShrink: 0,
                }}
              />
              {LABELS[element]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
