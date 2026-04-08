'use client';

import { useState } from 'react';

interface ToolInfo {
  tool: 'claude' | 'opencode' | 'copilot';
  title: string;
  content: string;
  command?: string;
}

interface ToolComparisonProps {
  tools: ToolInfo[];
}

// Full Tailwind class names spelled out per tool. Building class names with
// `bg-${color}/5` style template literals defeats the JIT scanner — it can
// only see the *template*, not the resulting class. Listing the full strings
// statically here keeps every class detectable.
const toolConfig = {
  claude: {
    label: 'Claude Code',
    cssVar: 'var(--color-tool-claude)',
    cardClasses:
      'p-4 rounded-xl border border-tool-claude/30 bg-tool-claude/5 animate-[fadeSlideIn_0.4s_ease-out_both] transition-opacity duration-300',
    dotClasses: 'w-2 h-2 rounded-full bg-tool-claude',
    titleClasses: 'text-sm font-semibold text-tool-claude',
  },
  opencode: {
    label: 'OpenCode',
    cssVar: 'var(--color-tool-opencode)',
    cardClasses:
      'p-4 rounded-xl border border-tool-opencode/30 bg-tool-opencode/5 animate-[fadeSlideIn_0.4s_ease-out_both] transition-opacity duration-300',
    dotClasses: 'w-2 h-2 rounded-full bg-tool-opencode',
    titleClasses: 'text-sm font-semibold text-tool-opencode',
  },
  copilot: {
    label: 'GitHub Copilot',
    cssVar: 'var(--color-tool-copilot)',
    cardClasses:
      'p-4 rounded-xl border border-tool-copilot/30 bg-tool-copilot/5 animate-[fadeSlideIn_0.4s_ease-out_both] transition-opacity duration-300',
    dotClasses: 'w-2 h-2 rounded-full bg-tool-copilot',
    titleClasses: 'text-sm font-semibold text-tool-copilot',
  },
} as const;

export function ToolComparison({ tools }: ToolComparisonProps) {
  const showTabs = tools.length >= 2;
  const [activeTab, setActiveTab] = useState<string | null>(showTabs ? tools[0].tool : null);

  const isVisible = (toolKey: string) => {
    if (!activeTab) return true; // "All" mode
    return activeTab === toolKey;
  };

  return (
    <div className="space-y-4">
      {/* Tabs */}
      {showTabs && (
        <div className="flex gap-2 flex-wrap animate-[fadeIn_0.3s_ease-out_both]">
          <button
            type="button"
            onClick={() => setActiveTab(null)}
            className={`px-3 py-1 rounded-full text-[10px] font-medium transition-colors duration-200 cursor-pointer ${
              activeTab === null
                ? 'bg-text-muted/20 text-text-primary'
                : 'bg-surface text-text-muted hover:text-text-secondary'
            }`}
          >
            All
          </button>
          {tools.map((t) => {
            const cfg = toolConfig[t.tool];
            const isActive = activeTab === t.tool;
            return (
              <button
                key={t.tool}
                type="button"
                onClick={() => setActiveTab(t.tool)}
                className="px-3 py-1 rounded-full text-[10px] font-medium transition-colors duration-200 cursor-pointer border"
                style={{
                  borderColor: isActive ? cfg.cssVar : 'transparent',
                  backgroundColor: isActive
                    ? `color-mix(in srgb, ${cfg.cssVar} 15%, transparent)`
                    : undefined,
                  color: isActive ? cfg.cssVar : undefined,
                }}
              >
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full mr-1.5"
                  style={{ backgroundColor: cfg.cssVar }}
                />
                {cfg.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Tool cards */}
      {tools.map((t, i) => {
        const cfg = toolConfig[t.tool];
        return (
          <div
            key={t.tool}
            className={cfg.cardClasses}
            style={{
              animationDelay: `${i * 150}ms`,
              opacity: isVisible(t.tool) ? 1 : 0.3,
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className={cfg.dotClasses} />
              <span className={cfg.titleClasses}>{t.title}</span>
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
