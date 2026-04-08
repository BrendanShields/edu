'use client';

import { useEffect } from 'react';

export default function LessonError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="status-page">
      <div className="status-page__inner">
        <p className="status-page__eyebrow">Error</p>
        <h1 className="status-page__title">Something broke loading this lesson</h1>
        <p className="status-page__body">
          The page hit an unexpected error. You can try again, or go back to the workshop home.
        </p>
        <div className="status-page__actions">
          <button type="button" onClick={reset} className="status-page__cta">
            Try again
          </button>
          <a href="/" className="status-page__cta status-page__cta--ghost">
            Workshop home
          </a>
        </div>
      </div>
    </main>
  );
}
