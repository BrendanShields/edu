const layers = [
  {
    label: 'Screenshots',
    desc: 'Visual regressions',
    color: 'border-purple-400',
    bg: 'bg-purple-400/10',
    text: 'text-purple-400',
    width: 'w-[60%]',
  },
  {
    label: 'Type Checkers',
    desc: 'Interface mismatches',
    color: 'border-orange-400',
    bg: 'bg-orange-400/10',
    text: 'text-orange-400',
    width: 'w-[73%]',
  },
  {
    label: 'Linters',
    desc: 'Style issues',
    color: 'border-blue-400',
    bg: 'bg-blue-400/10',
    text: 'text-blue-400',
    width: 'w-[86%]',
  },
  {
    label: 'Tests',
    desc: 'Logic errors',
    color: 'border-green-400',
    bg: 'bg-green-400/10',
    text: 'text-green-400',
    width: 'w-full',
  },
];

export function VerificationLayers() {
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        Verification Layers
      </p>
      <div className="flex flex-col items-center gap-2">
        {layers.map((layer) => (
          <div
            key={layer.label}
            className={`${layer.width} px-4 py-3 rounded-lg border ${layer.color} ${layer.bg} flex items-center justify-between`}
          >
            <span className={`text-sm font-semibold ${layer.text}`}>{layer.label}</span>
            <span className="text-xs text-text-muted">{layer.desc}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between text-[10px] text-text-muted px-1">
        <span />
        <span>widest coverage at the base</span>
      </div>
    </div>
  );
}
