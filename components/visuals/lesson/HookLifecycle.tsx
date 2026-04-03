const events = [
  {
    n: '1',
    label: 'PreToolUse',
    desc: 'Can block (exit 2)',
    color: 'text-blue-400',
    bg: 'bg-blue-400/20',
    border: 'border-blue-400/30',
    line: 'border-blue-400/40',
  },
  {
    n: '2',
    label: 'Tool Executes',
    desc: 'Action runs',
    color: 'text-text-muted',
    bg: 'bg-surface',
    border: 'border-border',
    line: 'border-border',
  },
  {
    n: '3',
    label: 'PostToolUse',
    desc: 'Can react (format, lint)',
    color: 'text-green-400',
    bg: 'bg-green-400/20',
    border: 'border-green-400/30',
    line: 'border-green-400/40',
  },
  {
    n: '·',
    label: '···',
    desc: 'Loop continues',
    color: 'text-text-muted',
    bg: 'bg-transparent',
    border: 'border-dashed border-border',
    line: 'border-dashed border-border',
  },
  {
    n: '4',
    label: 'Stop',
    desc: 'Agent finished responding',
    color: 'text-orange-400',
    bg: 'bg-orange-400/20',
    border: 'border-orange-400/30',
    line: 'border-orange-400/40',
  },
  {
    n: '5',
    label: 'Notification',
    desc: 'Needs your attention',
    color: 'text-purple-400',
    bg: 'bg-purple-400/20',
    border: 'border-purple-400/30',
    line: 'border-purple-400/40',
  },
];

export function HookLifecycle() {
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        Hook Lifecycle
      </p>
      <div className="rounded-xl border border-border bg-surface p-5">
        <div className="space-y-0">
          {events.map((event, i) => (
            <div key={event.label}>
              <div className="flex items-center gap-3">
                <span
                  className={`w-8 h-8 rounded-lg ${event.bg} ${event.color} flex items-center justify-center text-xs font-bold shrink-0 border ${event.border}`}
                >
                  {event.n}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className={`text-sm font-semibold ${event.color}`}>
                    {event.label}
                  </span>
                  <span className="text-xs text-text-muted">{event.desc}</span>
                </div>
              </div>
              {i < events.length - 1 && (
                <div className={`ml-4 h-4 mt-1 mb-1 border-l ${event.line}`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
