import { TitleCard } from '@/components/visuals/templates/TitleCard';
import { ToolComparison } from '@/components/visuals/templates/ToolComparison';
import { CardGrid } from '@/components/visuals/templates/CardGrid';
import { BeforeAfter } from '@/components/visuals/templates/BeforeAfter';
import { StepFlow } from '@/components/visuals/templates/StepFlow';
import { ClaudeCodeCard, OpenCodeCard, CopilotCard } from '@/components/visuals/ToolCards';
import { ComparisonTable } from '@/components/visuals/lesson/ComparisonTable';
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
    terminal: <ClaudeCodeCard />,
    freedom: <OpenCodeCard />,
    embedded: <CopilotCard />,
    comparison: (
      <ComparisonTable
        title="Side-by-Side"
        columns={['Claude Code', 'OpenCode', 'Copilot']}
        rows={[
          { label: 'Interface', values: ['Terminal / CLI', 'TUI / CLI', 'IDE-native'] },
          { label: 'Models', values: ['Claude only', '75+ providers', 'Multi-model'] },
          { label: 'Agentic Mode', values: ['✓', '✓', '✓'] },
          { label: 'MCP Servers', values: ['✓', '✓', '✓'] },
          { label: 'Inline Completions', values: ['✗', '✗', '✓'] },
          { label: 'Open Source', values: ['✗', '✓', '✗'] },
          { label: 'GitHub Integration', values: ['~', '~', '✓'] },
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
            <strong>Three tools own the AI coding space, and they all run the same engine underneath.</strong>
          </p>
          <p>
            Look at the canvas. That tagline — &quot;matching tools to how you actually work&quot; — is the
            entire lesson. The differences aren&apos;t about capability. They&apos;re about where you
            already spend your time.
          </p>
          <p>
            Keep that frame as we walk through each one.
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
            <strong>No GUI. No editor plugin. Just a prompt and your filesystem.</strong>
          </p>
          <p>
            Look at the canvas — that&apos;s the entire interface. You type <code>claude</code> in
            any project directory and start talking. It reads <code>src/auth.ts</code>, edits it,
            runs <code>npm test</code>, and verifies the output. All without leaving the shell.
          </p>
          <p>
            Claude-only models mean the deepest Anthropic integration. If your hands live on the
            keyboard and your home is the terminal, this is the tool that disappears into your
            workflow.
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
            What if you want the agentic loop but refuse to be locked to one provider?
          </p>
          <p>
            Look at the canvas. Same terminal-native approach, but notice the key
            difference: <strong>75+ model providers</strong>. Bring your own API keys, run local
            models, own every byte of data. The agentic capabilities — file editing, shell commands,
            tool use — are identical.
          </p>
          <p>
            OpenCode is fully open source. If vendor independence matters to your team, or you
            need a specific model for compliance reasons, this is your starting point.
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
            <strong>Copilot doesn&apos;t ask you to leave your editor. It moves in.</strong>
          </p>
          <p>
            Look at the canvas. Inline completions appear as you type. The Chat panel handles
            bigger requests. Agent mode gives it the same agentic loop — reading files, running
            commands, verifying changes — right inside VS Code.
          </p>
          <p>
            The standout is deep GitHub integration: it reads your PRs, issues, and repo context
            natively. If you rarely leave your IDE, Copilot is the tool that meets you where you are.
          </p>
        </>
      ),
    },
    {
      id: 'overlap',
      visual: 'comparison',
      content: (
        <>
          <h3>Where they converge</h3>
          <p>
            <strong>Scan the comparison table on the canvas. The &quot;check&quot; column is nearly identical.</strong>
          </p>
          <p>
            Notice the pattern: MCP servers, agentic mode, custom instructions — all three
            tools have them. The overlap is large and growing every month. What you can{' '}
            <em>do</em> with each tool is converging fast.
          </p>
          <p>
            The real differences are in two rows: <strong>Interface</strong> and{' '}
            <strong>Models</strong>. Where the tool lives and what ecosystem it plugs into — that&apos;s
            what separates them.
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
            Look at both sides of the canvas. The left is what happens when you pick against
            your instincts. The right is what happens when you pick with them.
          </p>
          <p>
            A terminal developer forced into an IDE fights the tool every session. That friction
            compounds — not in minutes, but in weeks of slower output and growing frustration.
          </p>
          <p>
            <strong>The right tool is the one you forget about.</strong> You think about the
            problem, never the interface. That&apos;s the only metric that matters.
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
            Follow the three steps on the canvas. Start with where you already spend your
            time — terminal or IDE. That single answer narrows the field to two tools or one.
          </p>
          <p>
            Then layer. Most productive developers use <strong>two or more tools</strong>{' '}
            together: Copilot for inline completions while coding, Claude Code for complex
            multi-file tasks from the terminal.
          </p>
          <p>
            You don&apos;t choose one forever. You choose where to start this week.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
