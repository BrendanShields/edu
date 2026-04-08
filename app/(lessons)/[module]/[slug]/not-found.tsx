export default function LessonNotFound() {
  return (
    <main className="status-page">
      <div className="status-page__inner">
        <p className="status-page__eyebrow">404</p>
        <h1 className="status-page__title">Lesson not found</h1>
        <p className="status-page__body">
          That lesson doesn’t exist — yet, anyway. Head back to the workshop home and pick a starting point.
        </p>
        <a href="/" className="status-page__cta">Workshop home</a>
      </div>
    </main>
  );
}
