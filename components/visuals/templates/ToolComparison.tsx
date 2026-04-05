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

const toolConfig = {
  claude: { color: 'tool-claude', label: 'Claude Code' },
  opencode: { color: 'tool-opencode', label: 'OpenCode' },
  copilot: { color: 'tool-copilot', label: 'GitHub Copilot' },
};

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
                onClick={() => setActiveTab(t.tool)}
                className={`px-3 py-1 rounded-full text-[10px] font-medium transition-colors duration-200 cursor-pointer border`}
                style={{
                  borderColor: isActive
                    ? `var(--color-${cfg.color})`
                    : 'transparent',
                  backgroundColor: isActive
                    ? `color-mix(in srgb, var(--color-${cfg.color}) 15%, transparent)`
                    : undefined,
                  color: isActive
                    ? `var(--color-${cfg.color})`
                    : undefined,
                }}
              >
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full mr-1.5"
                  style={{ backgroundColor: `var(--color-${cfg.color})` }}
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
            className={`p-4 rounded-xl border border-${cfg.color}/30 bg-${cfg.color}/5 animate-[fadeSlideIn_0.4s_ease-out_both] transition-opacity duration-300`}
            style={{
              animationDelay: `${i * 150}ms`,
              opacity: isVisible(t.tool) ? 1 : 0.3,
            }}
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
