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
    <div className="card-grid space-y-6 w-full max-w-[560px] mx-auto">
      {title && (
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-muted text-center animate-[fadeIn_0.3s_ease-out_both]">{title}</p>
      )}
      <div className={`grid ${gridCols} gap-4`}>
        {cards.map((card, i) => (
          <div
            key={card.label}
            className="card-grid__card p-5 rounded-xl border border-border bg-surface text-center animate-[fadeScaleIn_0.35s_ease-out_both]"
            style={{
              animationDelay: `${i * 80}ms`,
              opacity: 0,
            }}
          >
            <div className="text-3xl mb-3">{card.icon}</div>
            <div className="text-sm font-semibold text-text-primary leading-snug">{card.label}</div>
            {card.desc && (
              <div className="card-grid__desc text-xs text-text-muted mt-2 leading-relaxed">
                {card.desc}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
