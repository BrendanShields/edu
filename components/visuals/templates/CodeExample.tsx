interface CodeExampleProps {
  title?: string;
  language?: string;
  code: string;
}

export function CodeExample({ title, language, code }: CodeExampleProps) {
  return (
    <div className="space-y-4">
      {title && (
        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">{title}</p>
      )}
      <div className="rounded-xl border border-border bg-surface overflow-hidden">
        {language && (
          <div className="px-4 py-2 border-b border-border text-[10px] uppercase tracking-wider text-text-muted">
            {language}
          </div>
        )}
        <pre className="p-4 text-sm font-mono text-text-secondary leading-relaxed overflow-x-auto whitespace-pre-wrap">
          {code}
        </pre>
      </div>
    </div>
  );
}
