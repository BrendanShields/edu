interface PanelData {
  label: string;
  icon?: string;
  text: string;
}

interface BeforeAfterProps {
  before: PanelData;
  after: PanelData;
  footer?: string;
}

export function BeforeAfter({ before, after, footer }: BeforeAfterProps) {
  return (
    <div className="space-y-6">
      <div className="p-5 rounded-xl border border-red-500/20 bg-red-500/5">
        <div className="text-[10px] uppercase tracking-wider text-red-400 mb-2">
          {before.icon && <span className="mr-1">{before.icon}</span>}
          {before.label}
        </div>
        <div className="text-sm text-text-secondary leading-relaxed">{before.text}</div>
      </div>

      <div className="flex justify-center text-text-muted text-lg">&darr;</div>

      <div className="p-5 rounded-xl border border-green-500/20 bg-green-500/5">
        <div className="text-[10px] uppercase tracking-wider text-green-400 mb-2">
          {after.icon && <span className="mr-1">{after.icon}</span>}
          {after.label}
        </div>
        <div className="text-sm text-text-secondary leading-relaxed">{after.text}</div>
      </div>

      {footer && (
        <div className="text-center text-xs text-text-muted mt-4">{footer}</div>
      )}
    </div>
  );
}
