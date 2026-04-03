import { TitleCard } from '@/components/visuals/templates/TitleCard';
import { ToolComparison } from '@/components/visuals/templates/ToolComparison';
import { CardGrid } from '@/components/visuals/templates/CardGrid';
import { BeforeAfter } from '@/components/visuals/templates/BeforeAfter';
import { StepFlow } from '@/components/visuals/templates/StepFlow';
import type { LessonDef } from '../types';

const lesson: LessonDef = {
  slug: 'tool-landscape',
  module: 'foundations',
  title: 'The Tool Landscape',
  visuals: {
    intro: (
      <TitleCard
        icon="🔧"
        title="The Right Tool for the Shape"
        subtitle="Matching tools to how you actually work"
      />
    ),
    terminal: (
      <ToolComparison
        tools={[
          {
            tool: 'claude',
            title: 'Terminal-Native Agent',
            content:
              'Lives in your terminal. Claude models only. Deep agentic loop with direct file and shell access. Maximum autonomy for complex tasks.',
            command: 'claude',
          },
        ]}
      />
    ),
    freedom: (
      <ToolComparison
        tools={[
          {
            tool: 'opencode',
            title: 'Open Source TUI',
            content:
              'Beautiful terminal UI. 75+ providers including local models. Bring your own keys, own your workflow, no vendor lock-in.',
            command: 'opencode',
          },
        ]}
      />
    ),
    embedded: (
      <ToolComparison
        tools={[
          {
            tool: 'copilot',
            title: 'IDE-Native Assistant',
            content:
              'Lives inside VS Code. Inline completions as you type. Chat panel for bigger tasks. Deep GitHub integration for PRs and issues.',
          },
        ]}
      />
    ),
    overlap: (
      <CardGrid
        title="Shared Capabilities"
        columns={3}
        cards={[
          { icon: '🔌', label: 'MCP Servers', desc: 'Extend with external tools' },
          { icon: '🤖', label: 'Agentic Mode', desc: 'Read, edit, run, verify' },
          { icon: '📋', label: 'Custom Instructions', desc: 'Project-level rules' },
          { icon: '🔍', label: 'Code Review', desc: 'Analyze diffs and PRs' },
          { icon: '📦', label: 'Context Management', desc: 'Control what the AI sees' },
          { icon: '💾', label: 'Session Persistence', desc: 'Resume past conversations' },
        ]}
      />
    ),
    tradeoffs: (
      <BeforeAfter
        before={{
          label: 'Wrong match',
          icon: '❌',
          text: 'Picking a tool that fights your workflow. Terminal user forced into an IDE. IDE lover stuck in a TUI. Friction compounds into frustration.',
        }}
        after={{
          label: 'Right match',
          icon: '✅',
          text: 'Picking for where you actually spend your time. The tool disappears into your flow. You think about the problem, not the tool.',
        }}
      />
    ),
    notes: (
      <StepFlow
        title="Decision Framework"
        steps={[
          {
            n: '1',
            label: 'Where do you code?',
            desc: 'Terminal, IDE, or both?',
          },
          {
            n: '2',
            label: 'What ecosystem?',
            desc: 'Locked in, open source, or flexible?',
          },
          {
            n: '3',
            label: 'Combine for coverage',
            desc: 'Most devs use 2+ tools together.',
          },
        ]}
      />
    ),
  },
  sections: [
    {
      id: 'intro',
      visual: 'intro',
      content: (
        <>
          <h1>The Tool Landscape</h1>
          <p>
            Three tools dominate AI-assisted coding right now: <strong>Claude Code</strong>,{' '}
            <strong>OpenCode</strong>, and <strong>GitHub Copilot</strong>. They share the same
            agentic loop but make very different tradeoffs.
          </p>
          <p>
            Picking the right tool isn&apos;t about which is &quot;best.&quot; It&apos;s about
            which one fits the shape of how you already work.
          </p>
        </>
      ),
    },
    {
      id: 'terminal',
      visual: 'terminal',
      content: (
        <>
          <h3>Claude Code: The terminal purist</h3>
          <p>
            Claude Code lives entirely in your terminal. No editor plugins, no GUI — just a
            prompt and your filesystem.
          </p>
          <p>
            It uses Claude models exclusively, giving it the deepest integration with
            Anthropic&apos;s capabilities. The agentic loop is tight: it reads your files,
            edits them, runs commands, and verifies — all without leaving the shell.
          </p>
          <p>
            <strong>Best for:</strong> Developers who live in the terminal and want maximum
            autonomy on complex, multi-file tasks.
          </p>
        </>
      ),
    },
    {
      id: 'freedom',
      visual: 'freedom',
      content: (
        <>
          <h3>OpenCode: The open alternative</h3>
          <p>
            OpenCode is fully open source with a beautiful terminal UI. The key difference:
            it works with <strong>75+ model providers</strong>, including local models.
          </p>
          <p>
            Bring your own API keys, pick your model, own your data. Same agentic capabilities —
            file editing, shell commands, tool use — but with complete provider freedom.
          </p>
          <p>
            <strong>Best for:</strong> Developers who want control over their stack, need
            specific models, or care about vendor independence.
          </p>
        </>
      ),
    },
    {
      id: 'embedded',
      visual: 'embedded',
      content: (
        <>
          <h3>GitHub Copilot: The IDE native</h3>
          <p>
            Copilot lives inside your editor. Inline completions appear as you type. The Chat
            panel handles bigger requests. Agent mode gives it the full agentic loop.
          </p>
          <p>
            Its deep GitHub integration is the standout feature — it understands your PRs,
            issues, and repository context natively.
          </p>
          <p>
            <strong>Best for:</strong> Developers who rarely leave their IDE and want AI woven
            directly into the editing experience.
          </p>
        </>
      ),
    },
    {
      id: 'overlap',
      visual: 'overlap',
      content: (
        <>
          <h3>Where they converge</h3>
          <p>
            All three tools have converged on the same core capabilities. MCP servers for
            extensibility. Agentic mode for autonomous work. Custom instructions for
            project-level rules.
          </p>
          <p>
            The overlap is large and growing. The real differences are in <strong>where</strong>{' '}
            the tool lives and <strong>what ecosystem</strong> it plugs into — not what it can do.
          </p>
        </>
      ),
    },
    {
      id: 'tradeoffs',
      visual: 'tradeoffs',
      content: (
        <>
          <h3>The real tradeoff</h3>
          <p>
            The wrong tool creates friction that compounds over time. If you&apos;re a terminal
            person forced into an IDE workflow, you&apos;ll fight the tool instead of using it.
          </p>
          <p>
            The right match is the one you forget about. It fits your hands. You think about the
            problem, not the interface.
          </p>
          <p>
            <strong>There is no single best tool.</strong> There&apos;s only the best tool for
            your workflow.
          </p>
        </>
      ),
    },
    {
      id: 'notes',
      visual: 'notes',
      content: (
        <>
          <h3>Choosing your stack</h3>
          <p>
            Start with where you already spend your time. Terminal-first? Start with Claude Code
            or OpenCode. IDE-first? Start with Copilot.
          </p>
          <p>
            Then layer. Most productive developers use <strong>two or more tools</strong>{' '}
            together — Copilot for inline completions while coding, Claude Code for complex
            agentic tasks from the terminal.
          </p>
          <p>
            You don&apos;t have to choose one. You have to choose where to start.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
