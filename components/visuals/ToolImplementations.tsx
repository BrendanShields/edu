export function ToolImplementations() {
  return (
    <div className="space-y-4">
      <div className="p-4 rounded-xl border border-tool-claude/30 bg-tool-claude/5">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-tool-claude" />
          <span className="text-sm font-semibold text-tool-claude">Claude Code</span>
        </div>
        <div className="font-mono text-xs text-text-muted">$ claude</div>
        <div className="text-xs text-text-muted mt-1">Terminal → Natural language → Agentic loop</div>
      </div>

      <div className="p-4 rounded-xl border border-tool-opencode/30 bg-tool-opencode/5">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-tool-opencode" />
          <span className="text-sm font-semibold text-tool-opencode">OpenCode</span>
        </div>
        <div className="font-mono text-xs text-text-muted">$ opencode</div>
        <div className="text-xs text-text-muted mt-1">TUI → Any LLM provider → Agentic loop</div>
      </div>

      <div className="p-4 rounded-xl border border-tool-copilot/30 bg-tool-copilot/5">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-tool-copilot" />
          <span className="text-sm font-semibold text-tool-copilot">GitHub Copilot</span>
        </div>
        <div className="font-mono text-xs text-text-muted">Cmd+Shift+I</div>
        <div className="text-xs text-text-muted mt-1">IDE → Inline + Chat + Agent → Agentic loop</div>
      </div>
    </div>
  );
}
