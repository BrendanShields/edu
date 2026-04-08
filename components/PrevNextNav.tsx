import Link from 'next/link';

interface PrevNextNavProps {
  prevHref?: string;
  prevTitle?: string;
  nextHref?: string;
  nextTitle?: string;
}

export function PrevNextNav({ prevHref, prevTitle, nextHref, nextTitle }: PrevNextNavProps) {
  if (!prevHref && !nextHref) return null;
  return (
    <nav className="prev-next" aria-label="Lesson navigation">
      {prevHref ? (
        <Link href={prevHref} className="prev-next__link prev-next__link--prev">
          <span className="prev-next__label">‹ Previous</span>
          <span className="prev-next__title">{prevTitle}</span>
        </Link>
      ) : (
        <span />
      )}
      {nextHref ? (
        <Link href={nextHref} className="prev-next__link prev-next__link--next">
          <span className="prev-next__label">Next ›</span>
          <span className="prev-next__title">{nextTitle}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
