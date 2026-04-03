export function TUILayout() {
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        OpenCode TUI
      </p>
      <div className="rounded-xl border border-border bg-background overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-3 py-1.5 border-b border-border bg-surface">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-tool-opencode" />
            <span className="text-xs font-semibold text-tool-opencode">OpenCode</span>
          </div>
          <div className="flex items-center gap-3 text-[10px] text-text-muted">
            <span className="px-1.5 py-0.5 rounded bg-tool-opencode/10 text-tool-opencode font-medium">
              Build
            </span>
            <span>claude-sonnet-4-20250514</span>
          </div>
        </div>

        {/* Main chat area */}
        <div className="p-3 space-y-3 min-h-[160px]">
          {/* User message */}
          <div className="flex gap-2">
            <span className="text-[10px] text-tool-opencode font-bold mt-0.5">you</span>
            <div className="text-xs text-text-primary">
              Fix the failing test in auth.test.ts
            </div>
          </div>

          {/* Agent response */}
          <div className="flex gap-2">
            <span className="text-[10px] text-text-muted font-bold mt-0.5">ai</span>
            <div className="space-y-1.5">
              <div className="text-xs text-text-secondary">
                I&apos;ll look at the failing test and the auth module.
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
                <span className="px-1.5 py-0.5 rounded bg-surface border border-border">
                  read_file
                </span>
                <span className="text-text-muted/60">src/auth.test.ts</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
                <span className="px-1.5 py-0.5 rounded bg-surface border border-border">
                  read_file
                </span>
                <span className="text-text-muted/60">src/auth.ts</span>
              </div>
              <div className="text-xs text-text-secondary">
                Found the issue. The token expiry check uses <code className="text-[11px] px-1 py-0.5 rounded bg-surface">&gt;=</code> instead
                of <code className="text-[11px] px-1 py-0.5 rounded bg-surface">&gt;</code>. Fixing now...
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
                <span className="px-1.5 py-0.5 rounded bg-tool-opencode/10 text-tool-opencode border border-tool-opencode/20">
                  edit_file
                </span>
                <span className="text-text-muted/60">src/auth.ts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom input bar */}
        <div className="flex items-center gap-2 px-3 py-2 border-t border-border bg-surface">
          <span className="text-tool-opencode text-xs font-bold">&gt;</span>
          <span className="text-xs text-text-muted/40">Ask anything...</span>
        </div>
      </div>
    </div>
  );
}
