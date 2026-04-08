import { ToolComparison } from '@/components/visuals/templates/ToolComparison';
import { CardGrid } from '@/components/visuals/templates/CardGrid';
import { StepFlow } from '@/components/visuals/templates/StepFlow';
import { ComparisonTable } from '@/components/visuals/lesson/ComparisonTable';
import type { LessonDef } from '../types';

const lesson: LessonDef = {
  slug: 'tool-comparison',
  module: 'reference',
  title: 'Tool Comparison',
  visuals: {
    atAGlance: (
      <ToolComparison
        tools={[
          {
            tool: 'claude',
            title: 'Claude Code',
            content: 'Terminal CLI. Anthropic models. Deepest agentic features.',
          },
          {
            tool: 'opencode',
            title: 'OpenCode',
            content: 'TUI. 75+ providers. Open source.',
          },
          {
            tool: 'copilot',
            title: 'GitHub Copilot',
            content: 'IDE extensions. Inline completions. GitHub integration.',
          },
        ]}
      />
    ),
    interfaceMatrix: (
      <ComparisonTable
        title="Interface Support"
        columns={['Claude Code', 'OpenCode', 'Copilot']}
        rows={[
          { label: 'Terminal', values: ['✓', '✓', '✗'] },
          { label: 'VS Code', values: ['✓', '✗', '✓'] },
          { label: 'JetBrains', values: ['✗', '✗', '✓'] },
          { label: 'Desktop App', values: ['✗', '✗', '✗'] },
          { label: 'Web', values: ['✗', '✗', '✓'] },
          { label: 'Mobile', values: ['✗', '✗', '✓'] },
          { label: 'Inline Completions', values: ['✗', '✗', '✓'] },
        ]}
      />
    ),
    agenticMatrix: (
      <ComparisonTable
        title="Agentic Capabilities"
        columns={['Claude Code', 'OpenCode', 'Copilot']}
        rows={[
          { label: 'File Read/Edit', values: ['✓', '✓', '✓'] },
          { label: 'Shell Commands', values: ['✓', '✓', '✓'] },
          { label: 'Web Search', values: ['✓', '✗', '✓'] },
          { label: 'Subagents', values: ['✓', '✓', '✗'] },
          { label: 'Git Worktrees', values: ['✓', '✗', '✗'] },
          { label: 'MCP Support', values: ['✓', '✓', '✓'] },
          { label: 'Hooks/Lifecycle', values: ['✓', '✓', '~'] },
        ]}
      />
    ),
    choosingGuide: (
      <CardGrid
        title="If You Need..."
        columns={2}
        cards={[
          { icon: '⌨️', label: 'Inline completions', desc: 'Copilot' },
          { icon: '🔄', label: 'Model flexibility', desc: 'OpenCode' },
          { icon: '🤖', label: 'Deepest agentic features', desc: 'Claude Code' },
          { icon: '📖', label: 'Open source', desc: 'OpenCode' },
          { icon: '🐙', label: 'GitHub integration', desc: 'Copilot' },
          { icon: '⚙️', label: 'CI/CD automation', desc: 'Claude Code' },
        ]}
      />
    ),
    combiningTools: (
      <StepFlow
        title="Combining Tools"
        steps={[
          { n: '1', label: 'IDE', desc: 'Copilot for inline completions in your editor' },
          { n: '2', label: 'Terminal', desc: 'Claude Code or OpenCode for complex tasks' },
          { n: '3', label: 'Transfer', desc: 'Skills transfer directly between all three' },
        ]}
      />
    ),
  },
  sections: [
    {
      id: 'overview',
      visual: 'atAGlance',
      content: (
        <>
          <h1>Tool Comparison</h1>
          <p>
            Side-by-side reference for Claude Code, OpenCode, and GitHub Copilot.
            Use this to pick the right tool — or the right combination.
          </p>
          <h2>At a glance</h2>
          <table>
            <thead>
              <tr><th>Tool</th><th>Type</th><th>Strength</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Claude Code</strong></td><td>Terminal CLI</td><td>Deep agentic autonomy, Anthropic models</td></tr>
              <tr><td><strong>OpenCode</strong></td><td>Terminal TUI</td><td>75+ providers, open source, custom agents</td></tr>
              <tr><td><strong>Copilot</strong></td><td>IDE extension</td><td>Inline completions, GitHub-native workflow</td></tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      id: 'interface',
      visual: 'interfaceMatrix',
      content: (
        <>
          <h2>Interface support</h2>
          <p>
            Each tool lives in a different part of your workflow:
          </p>
          <ul>
            <li>
              <strong>Claude Code</strong> — Terminal-first. Also works as a VS Code
              extension. No JetBrains or web UI.
            </li>
            <li>
              <strong>OpenCode</strong> — Terminal TUI with a rich panel layout.
              No IDE extensions.
            </li>
            <li>
              <strong>Copilot</strong> — Broadest reach: VS Code, JetBrains, Neovim,
              web, and mobile. Only tool with inline completions.
            </li>
          </ul>
          <p>
            If you live in the terminal, Claude Code or OpenCode. If you never leave
            VS Code, Copilot is the path of least friction.
          </p>
        </>
      ),
    },
    {
      id: 'agentic',
      visual: 'agenticMatrix',
      content: (
        <>
          <h2>Agentic capabilities</h2>
          <p>
            All three can read files, edit code, and run commands. The differences
            are in the advanced features:
          </p>
          <ul>
            <li>
              <strong>Subagents</strong> — Claude Code and OpenCode can spawn lightweight
              subagents for parallel work. Copilot cannot.
            </li>
            <li>
              <strong>Git worktrees</strong> — Only Claude Code supports parallel branches
              via <code>/batch</code> with worktrees.
            </li>
            <li>
              <strong>MCP</strong> — All three support Model Context Protocol for extending
              tool capabilities.
            </li>
            <li>
              <strong>Hooks</strong> — Claude Code and OpenCode have lifecycle hooks.
              Copilot has limited support via extensions.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'choosing',
      visual: 'choosingGuide',
      content: (
        <>
          <h2>Choosing a tool</h2>
          <p>
            There&apos;s no single &quot;best&quot; tool. Match the tool to your need:
          </p>
          <ul>
            <li><strong>Inline completions</strong> — Copilot is the only option here.</li>
            <li><strong>Model flexibility</strong> — OpenCode supports 75+ providers. Use any model.</li>
            <li><strong>Deep agentic work</strong> — Claude Code has the most autonomous features.</li>
            <li><strong>Open source</strong> — OpenCode is fully open source.</li>
            <li><strong>GitHub workflow</strong> — Copilot&apos;s Coding Agent creates PRs from issues.</li>
            <li><strong>CI/CD automation</strong> — Claude Code&apos;s headless mode was built for pipelines.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'combining',
      visual: 'combiningTools',
      content: (
        <>
          <h2>Combining tools</h2>
          <p>
            The best setup is often a combination. These tools don&apos;t conflict —
            they complement each other:
          </p>
          <ol>
            <li>
              <strong>Copilot in your IDE</strong> — Handles inline completions, quick
              explanations, and small fixes as you type.
            </li>
            <li>
              <strong>Claude Code or OpenCode in your terminal</strong> — Handles complex
              multi-file tasks, refactoring, and agentic workflows.
            </li>
            <li>
              <strong>Skills transfer</strong> — The prompting patterns, permission models,
              and context management techniques you learn work across all three.
            </li>
          </ol>
          <p>
            Start with one tool, get comfortable, then add another. The concepts in this
            course apply everywhere.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
