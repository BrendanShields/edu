import { useEffect } from 'preact/hooks';

interface Props {
  prevHref?: string;
  nextHref?: string;
}

export default function KeyboardNav({ prevHref, nextHref }: Props) {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) return;

      if (e.key === 'ArrowLeft' && prevHref) {
        window.location.href = prevHref;
      } else if (e.key === 'ArrowRight' && nextHref) {
        window.location.href = nextHref;
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [prevHref, nextHref]);

  return null;
}
