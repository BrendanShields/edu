const scopes = [
  { label: 'Local', color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/30' },
  { label: 'Project', color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/30' },
  { label: 'User', color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/30' },
];

const servers = [
  { name: 'DB Server', service: 'Database' },
  { name: 'Sentry Server', service: 'Error Tracker' },
  { name: 'Figma Server', service: 'Design Tool' },
];

export function MCPArchitecture() {
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        MCP Architecture
      </p>
      <div className="rounded-xl border border-border bg-surface p-5">
        <div className="flex items-stretch gap-3">
          {/* Left: Scopes */}
          <div className="flex flex-col justify-center gap-2 shrink-0">
            {scopes.map((scope) => (
              <div
                key={scope.label}
                className={`px-2.5 py-1 rounded-md border text-[10px] font-semibold ${scope.color} ${scope.bg} ${scope.border}`}
              >
                {scope.label}
              </div>
            ))}
          </div>

          {/* Center: Agent */}
          <div className="flex items-center shrink-0">
            <div className="w-px h-full bg-border" />
            <div className="mx-3 px-4 py-6 rounded-xl border-2 border-accent bg-accent/10 text-center">
              <div className="text-lg mb-1">🤖</div>
              <div className="text-xs font-bold text-accent">AI Agent</div>
            </div>
            <div className="w-px h-full bg-border" />
          </div>

          {/* Right: Servers → Services */}
          <div className="flex flex-col justify-center gap-2 min-w-0">
            {servers.map((server) => (
              <div key={server.name} className="flex items-center gap-2">
                <div className="px-2.5 py-1.5 rounded-md border border-border bg-surface text-[10px] font-medium text-text-secondary whitespace-nowrap">
                  {server.name}
                </div>
                <div className="text-text-muted text-xs">&rarr;</div>
                <div className="text-[10px] text-text-muted whitespace-nowrap">
                  {server.service}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 pt-3 border-t border-border flex items-center justify-center gap-4 text-[10px] text-text-muted">
          <span>Scopes control visibility</span>
          <span className="text-border">|</span>
          <span>Servers bridge agent to services</span>
        </div>
      </div>
    </div>
  );
}
