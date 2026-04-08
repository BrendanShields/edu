'use client';

import { useState } from 'react';

interface Card {
  icon: string;
  label: string;
  desc?: string;
}

interface CardGridProps {
  title?: string;
  columns?: 2 | 3;
  cards: Card[];
}

export function CardGrid({ title, columns = 2, cards }: CardGridProps) {
  const gridCols = columns === 3 ? 'grid-cols-3' : 'grid-cols-2';
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="space-y-6 w-full max-w-[560px] mx-auto">
      {title && (
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-muted text-center animate-[fadeIn_0.3s_ease-out_both]">{title}</p>
      )}
      <div className={`grid ${gridCols} gap-4`}>
        {cards.map((card, i) => {
          const isHovered = hoveredIndex === i;
          return (
            <div
              key={card.label}
              className="p-5 rounded-xl border border-border bg-surface text-center animate-[fadeScaleIn_0.35s_ease-out_both] cursor-default"
              style={{
                animationDelay: `${i * 80}ms`,
                opacity: 0,
                transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                transition: 'transform 0.2s, border-color 0.2s, background-color 0.2s',
                borderColor: isHovered ? 'var(--color-border-hover)' : undefined,
                backgroundColor: isHovered ? 'var(--color-surface-hover)' : undefined,
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="text-3xl mb-3">{card.icon}</div>
              <div className="text-sm font-semibold text-text-primary leading-snug">{card.label}</div>
              {card.desc && (
                <div
                  className="text-xs text-text-muted mt-2 overflow-hidden transition-all duration-200 leading-relaxed"
                  style={{
                    maxHeight: isHovered ? '120px' : '0px',
                    opacity: isHovered ? 1 : 0,
                  }}
                >
                  {card.desc}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
