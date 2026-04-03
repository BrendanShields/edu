const levels = [
  {
    label: 'Plan Mode',
    desc: 'Read only. The AI explains what it would do but changes nothing.',
    color: 'border-blue-400',
    bg: 'bg-blue-400/10',
    text: 'text-blue-400',
  },
  {
    label: 'Default',
    desc: 'Asks before every file edit and every shell command.',
    color: 'border-blue-300',
    bg: 'bg-blue-300/10',
    text: 'text-blue-300',
  },
  {
    label: 'Accept Edits',
    desc: 'Auto-approves file changes but still gates shell commands.',
    color: 'border-amber-400',
    bg: 'bg-amber-400/10',
    text: 'text-amber-400',
  },
  {
    label: 'Auto Mode',
    desc: 'AI classifier decides what needs approval. Prompts only when risky.',
    color: 'border-orange-400',
    bg: 'bg-orange-400/10',
    text: 'text-orange-400',
  },
  {
    label: 'Full Auto',
    desc: 'No checks at all. Everything runs without confirmation. Dangerous.',
    color: 'border-red-500',
    bg: 'bg-red-500/10',
    text: 'text-red-500',
  },
];

export function PermissionSpectrum() {
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        Permission Spectrum
      </p>
      <div className="space-y-2">
        {levels.map((level) => (
          <div
            key={level.label}
            className={`flex items-start gap-3 p-3 rounded-lg border-l-4 ${level.color} ${level.bg}`}
          >
            <div className="min-w-0">
              <div className={`text-sm font-semibold ${level.text}`}>{level.label}</div>
              <div className="text-xs text-text-muted mt-0.5">{level.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between text-[10px] text-text-muted px-1">
        <span>Most restrictive</span>
        <span>Least restrictive</span>
      </div>
    </div>
  );
}
