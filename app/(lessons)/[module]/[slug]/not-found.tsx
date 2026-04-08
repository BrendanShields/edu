import Link from 'next/link';

export default function LessonNotFound() {
  return (
    <main id="main-content" className="status-page">
      <div className="status-page__inner">
        <p className="status-page__eyebrow">404</p>
        <h1 className="status-page__title">Lesson not found</h1>
        <p className="status-page__body">
          That lesson doesn’t exist — yet, anyway. Head back to the workshop home and pick a starting point.
        </p>
        <Link href="/" className="status-page__cta">Workshop home</Link>
      </div>
    </main>
  );
}
