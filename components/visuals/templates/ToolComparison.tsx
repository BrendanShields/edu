interface ToolInfo {
  tool: 'claude' | 'opencode' | 'copilot';
  title: string;
  content: string;
  command?: string;
}

interface ToolComparisonProps {
  tools: ToolInfo[];
}

const toolConfig = {
  claude: { color: 'tool-claude', label: 'Claude Code' },
  opencode: { color: 'tool-opencode', label: 'OpenCode' },
  copilot: { color: 'tool-copilot', label: 'GitHub Copilot' },
};

export function ToolComparison({ tools }: ToolComparisonProps) {
  return (
    <div className="space-y-4">
      {tools.map((t) => {
        const cfg = toolConfig[t.tool];
        return (
          <div
            key={t.tool}
            className={`p-4 rounded-xl border border-${cfg.color}/30 bg-${cfg.color}/5`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className={`w-2 h-2 rounded-full bg-${cfg.color}`} />
              <span className={`text-sm font-semibold text-${cfg.color}`}>{t.title}</span>
            </div>
            {t.command && (
              <div className="font-mono text-xs text-text-muted">{t.command}</div>
            )}
            <div className="text-xs text-text-muted mt-1">{t.content}</div>
          </div>
        );
      })}
    </div>
  );
}
