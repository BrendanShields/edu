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
    <div className="space-y-6">
      {title && (
        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted animate-[fadeIn_0.3s_ease-out_both]">{title}</p>
      )}
      <div className={`grid ${gridCols} gap-3`}>
        {cards.map((card, i) => {
          const isHovered = hoveredIndex === i;
          return (
            <div
              key={card.label}
              className="p-4 rounded-lg border border-border bg-surface text-center animate-[fadeScaleIn_0.35s_ease-out_both] cursor-default"
              style={{
                animationDelay: `${i * 80}ms`,
                opacity: 0,
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.2s, border-color 0.2s',
                borderColor: isHovered ? 'var(--color-border-hover, rgba(255,255,255,0.2))' : undefined,
                backgroundColor: isHovered ? 'var(--color-surface-hover, rgba(255,255,255,0.03))' : undefined,
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="text-2xl mb-2">{card.icon}</div>
              <div className="text-xs font-medium text-text-secondary">{card.label}</div>
              {card.desc && (
                <div
                  className="text-[10px] text-text-muted mt-1 overflow-hidden transition-all duration-200"
                  style={{
                    maxHeight: isHovered ? '80px' : '0px',
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
