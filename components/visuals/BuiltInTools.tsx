export function BuiltInTools() {
  const tools = [
    { name: 'Read files', icon: '📄' },
    { name: 'Edit code', icon: '✏️' },
    { name: 'Run bash', icon: '⚡' },
    { name: 'Search code', icon: '🔍' },
    { name: 'Web fetch', icon: '🌐' },
    { name: 'Git operations', icon: '🔀' },
  ];

  return (
    <div className="space-y-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Built-in Tools</p>
      <div className="grid grid-cols-2 gap-3">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="p-4 rounded-lg border border-border bg-surface text-center"
          >
            <div className="text-2xl mb-2">{tool.icon}</div>
            <div className="text-xs text-text-secondary">{tool.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
