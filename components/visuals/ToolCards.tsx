export function ClaudeCodeCard() {
  return (
    <div className="p-6 rounded-xl border border-tool-claude/30 bg-tool-claude/5">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-3 h-3 rounded-full bg-tool-claude" />
        <span className="text-lg font-semibold text-tool-claude">Claude Code</span>
      </div>
      <p className="text-sm text-text-muted leading-relaxed mb-4">
        CLI-first. Anthropic models. Deep agentic loop. Runs in terminal, IDE, desktop, and browser.
      </p>
      <div className="flex gap-1.5 flex-wrap">
        {['Terminal', 'VS Code', 'Desktop', 'Web'].map((p) => (
          <span key={p} className="text-[10px] px-2 py-0.5 bg-tool-claude/10 text-tool-claude rounded">
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

export function OpenCodeCard() {
  return (
    <div className="p-6 rounded-xl border border-tool-opencode/30 bg-tool-opencode/5">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-3 h-3 rounded-full bg-tool-opencode" />
        <span className="text-lg font-semibold text-tool-opencode">OpenCode</span>
      </div>
      <p className="text-sm text-text-muted leading-relaxed mb-4">
        Open source. Any LLM provider. Beautiful TUI. Full customization control.
      </p>
      <div className="flex gap-1.5 flex-wrap">
        {['TUI', 'CLI', 'Web', 'IDE'].map((p) => (
          <span key={p} className="text-[10px] px-2 py-0.5 bg-tool-opencode/10 text-tool-opencode rounded">
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

export function CopilotCard() {
  return (
    <div className="p-6 rounded-xl border border-tool-copilot/30 bg-tool-copilot/5">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-3 h-3 rounded-full bg-tool-copilot" />
        <span className="text-lg font-semibold text-tool-copilot">GitHub Copilot</span>
      </div>
      <p className="text-sm text-text-muted leading-relaxed mb-4">
        IDE-native. GitHub integrated. Multi-model. Inline completions + chat + agent.
      </p>
      <div className="flex gap-1.5 flex-wrap">
        {['VS Code', 'JetBrains', 'CLI', 'Web'].map((p) => (
          <span key={p} className="text-[10px] px-2 py-0.5 bg-tool-copilot/10 text-tool-copilot rounded">
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}
