/**
 * CodeAlong — visual template for hands-on exercises in lessons.
 *
 * Renders a focused card with a clear time budget, prerequisites, numbered
 * steps, a success checkpoint, and a recovery tip. Used in lessons 3, 4, 7,
 * 8 (and potentially more) to give workshop attendees something concrete to
 * try in their own terminal as they read.
 *
 * Pure presentation. No state, no client behaviour — renders as a Server
 * Component so the lesson route can keep its bundle small.
 */

interface CodeAlongStep {
  /** Short imperative — "Run claude" — that fits on one line. */
  text: string;
  /** Optional code/command for the step (rendered in mono). */
  code?: string;
}

interface CodeAlongProps {
  /** Card title — keep it short, e.g. "Install & first run". */
  title: string;
  /** Estimated time, e.g. "~10 minutes". */
  time: string;
  /** Comma-separated prerequisites, e.g. "Claude Code, a real project". */
  needs: string;
  /** Numbered steps. 3-6 work best. */
  steps: CodeAlongStep[];
  /** Success criterion — "You know it worked when..." */
  checkpoint: string;
  /** Most common failure and the fix. */
  recovery?: string;
}

export function CodeAlong({
  title,
  time,
  needs,
  steps,
  checkpoint,
  recovery,
}: CodeAlongProps) {
  return (
    <div className="code-along">
      <style>{`
        .code-along {
          width: 100%;
          max-width: 600px;
          border-radius: 1rem;
          border: 1px solid var(--color-border);
          background: var(--color-surface);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .code-along__eyebrow {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.625rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-accent);
          margin: 0;
        }
        .code-along__eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-accent);
        }
        .code-along__title {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--color-text-primary);
          margin: 0;
          letter-spacing: -0.01em;
        }
        .code-along__meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 1.25rem;
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }
        .code-along__meta strong {
          color: var(--color-text-secondary);
          font-weight: 500;
        }
        .code-along__steps {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
        }
        .code-along__step {
          display: grid;
          grid-template-columns: 1.5rem 1fr;
          gap: 0.75rem;
          align-items: start;
        }
        .code-along__step-num {
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          background: rgba(255, 107, 53, 0.12);
          color: var(--color-accent);
          font-size: 0.6875rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .code-along__step-body {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }
        .code-along__step-text {
          font-size: 0.8125rem;
          line-height: 1.5;
          color: var(--color-text-secondary);
        }
        .code-along__step-code {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--color-border);
          border-radius: 6px;
          padding: 0.5rem 0.75rem;
          color: var(--color-text-primary);
          overflow-x: auto;
          white-space: pre;
        }
        .code-along__checkpoint {
          border-left: 2px solid var(--color-accent);
          padding: 0.625rem 0 0.625rem 0.875rem;
          font-size: 0.8125rem;
          line-height: 1.55;
          color: var(--color-text-primary);
        }
        .code-along__checkpoint-label {
          display: block;
          font-size: 0.625rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-accent);
          margin-bottom: 0.25rem;
        }
        .code-along__recovery {
          font-size: 0.6875rem;
          line-height: 1.55;
          color: var(--color-text-muted);
          padding-top: 0.5rem;
          border-top: 1px solid var(--color-border);
        }
        .code-along__recovery strong {
          color: var(--color-text-secondary);
          font-weight: 500;
        }
      `}</style>

      <div>
        <p className="code-along__eyebrow">
          <span className="code-along__eyebrow-dot" aria-hidden />
          Code-along
        </p>
        <p className="code-along__title">{title}</p>
      </div>

      <div className="code-along__meta">
        <span><strong>Time:</strong> {time}</span>
        <span><strong>You need:</strong> {needs}</span>
      </div>

      <ol className="code-along__steps">
        {steps.map((step, i) => (
          <li key={i} className="code-along__step">
            <span className="code-along__step-num" aria-hidden>{i + 1}</span>
            <div className="code-along__step-body">
              <span className="code-along__step-text">{step.text}</span>
              {step.code && <pre className="code-along__step-code">{step.code}</pre>}
            </div>
          </li>
        ))}
      </ol>

      <div className="code-along__checkpoint">
        <span className="code-along__checkpoint-label">You know it worked when</span>
        {checkpoint}
      </div>

      {recovery && (
        <p className="code-along__recovery">
          <strong>If it didn&apos;t work:</strong> {recovery}
        </p>
      )}
    </div>
  );
}
