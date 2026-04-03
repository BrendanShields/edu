const items = [
  { label: 'System prompt', size: 'sm', opacity: 'opacity-100' },
  { label: 'Tool definitions', size: 'sm', opacity: 'opacity-100' },
  { label: 'CLAUDE.md rules', size: 'sm', opacity: 'opacity-100' },
  { label: 'Your latest prompt', size: 'md', opacity: 'opacity-100' },
  { label: 'Grep results', size: 'sm', opacity: 'opacity-90' },
  { label: 'src/auth.ts (2,000 lines)', size: 'lg', opacity: 'opacity-80' },
  { label: 'Conversation turn 1', size: 'md', opacity: 'opacity-50' },
  { label: 'Earlier file reads', size: 'md', opacity: 'opacity-30' },
  { label: 'Initial instructions', size: 'sm', opacity: 'opacity-20' },
];

const sizeMap: Record<string, string> = {
  sm: 'h-7',
  md: 'h-9',
  lg: 'h-14',
};

export function ContextDesk() {
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        Context Window
      </p>
      <div className="relative rounded-xl border border-border bg-surface p-4 overflow-hidden">
        <div className="space-y-1.5">
          {items.map((item) => (
            <div
              key={item.label}
              className={`${sizeMap[item.size]} ${item.opacity} flex items-center px-3 rounded-md border border-border bg-surface text-xs text-text-secondary transition-opacity`}
            >
              {item.label}
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-surface to-transparent pointer-events-none" />
        <div className="absolute bottom-2 left-0 right-0 text-center text-[10px] text-text-muted">
          older context pushed off the desk
        </div>
      </div>
    </div>
  );
}
