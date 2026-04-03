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

  return (
    <div className="space-y-6">
      {title && (
        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">{title}</p>
      )}
      <div className={`grid ${gridCols} gap-3`}>
        {cards.map((card) => (
          <div
            key={card.label}
            className="p-4 rounded-lg border border-border bg-surface text-center"
          >
            <div className="text-2xl mb-2">{card.icon}</div>
            <div className="text-xs font-medium text-text-secondary">{card.label}</div>
            {card.desc && (
              <div className="text-[10px] text-text-muted mt-1">{card.desc}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
