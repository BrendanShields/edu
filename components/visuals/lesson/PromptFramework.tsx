const quadrants = [
  {
    icon: '🔍',
    label: 'Context',
    desc: 'Where to look',
    border: 'border-blue-400',
    bg: 'bg-blue-400/10',
    text: 'text-blue-400',
  },
  {
    icon: '🎯',
    label: 'Intent',
    desc: 'What you want',
    border: 'border-green-400',
    bg: 'bg-green-400/10',
    text: 'text-green-400',
  },
  {
    icon: '🚧',
    label: 'Constraints',
    desc: 'What to avoid',
    border: 'border-orange-400',
    bg: 'bg-orange-400/10',
    text: 'text-orange-400',
  },
  {
    icon: '✅',
    label: 'Verification',
    desc: 'How to prove it',
    border: 'border-purple-400',
    bg: 'bg-purple-400/10',
    text: 'text-purple-400',
  },
];

export function PromptFramework() {
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        Prompt Framework
      </p>
      <div className="grid grid-cols-2 gap-3">
        {quadrants.map((q) => (
          <div
            key={q.label}
            className={`p-4 rounded-xl border ${q.border} ${q.bg}`}
          >
            <div className="text-xl mb-2">{q.icon}</div>
            <div className={`text-sm font-semibold ${q.text}`}>{q.label}</div>
            <div className="text-xs text-text-muted mt-1">{q.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
