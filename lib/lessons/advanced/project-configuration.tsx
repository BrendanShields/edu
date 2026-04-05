import { BeforeAfter } from '@/components/visuals/templates/BeforeAfter';
import { CodeExample } from '@/components/visuals/templates/CodeExample';
import { ToolComparison } from '@/components/visuals/templates/ToolComparison';
import { CardGrid } from '@/components/visuals/templates/CardGrid';
import { StepFlow } from '@/components/visuals/templates/StepFlow';
import { ConfigHierarchy } from '@/components/visuals/lesson/ConfigHierarchy';
import type { LessonDef } from '../types';

const lesson: LessonDef = {
  slug: 'project-configuration',
  module: 'advanced',
  title: 'Project Configuration',
  visuals: {
    configIntro: (
      <BeforeAfter
        before={{
          label: 'Every session',
          icon: '🔄',
          text: 'Re-explain package manager, test command, file conventions, off-limits directories. Every. Single. Time.',
        }}
        after={{
          label: 'Once configured',
          icon: '⚡',
          text: 'Agent reads CLAUDE.md, knows your conventions from the first prompt. Zero ramp-up.',
        }}
      />
    ),
    claudeMdSetup: (
      <CodeExample
        title="CLAUDE.md"
        language="markdown"
        code={`# MyApp

## Build & Test
- Package manager: pnpm
- Dev: pnpm dev
- Test: pnpm vitest run
- Lint: pnpm eslint . --fix

## Style Rules
- Functional components only
- Prefer named exports
- Use path aliases (@/...)

## Off-limits
- Never edit migrations/
- Never modify .env.production`}
      />
    ),
    otherConfigs: (
      <ToolComparison
        tools={[
          {
            tool: 'claude',
            title: 'Claude Code',
            content: 'CLAUDE.md at project root. Scoped rules in .claude/rules/ for file-pattern-specific guidance.',
          },
          {
            tool: 'opencode',
            title: 'OpenCode',
            content: 'AGENTS.md at project root. Falls back to CLAUDE.md if no AGENTS.md exists.',
          },
          {
            tool: 'copilot',
            title: 'GitHub Copilot',
            content: '.github/copilot-instructions.md for repo-wide rules. Agent-specific files in .github/agents/.',
          },
        ]}
      />
    ),
    crossToolCompat: (
      <CardGrid
        title="Which File for Which Tool"
        columns={3}
        cards={[
          { icon: '📄', label: 'CLAUDE.md', desc: 'Claude Code' },
          { icon: '📄', label: 'AGENTS.md', desc: 'OpenCode' },
          { icon: '📄', label: 'copilot-instructions.md', desc: 'Copilot' },
          { icon: '📁', label: '.claude/rules/', desc: 'Scoped rules' },
          { icon: '⚙️', label: 'opencode.json', desc: 'OC config' },
          { icon: '📁', label: '.github/agents/', desc: 'Copilot agents' },
        ]}
      />
    ),
    hierarchy: <ConfigHierarchy />,
    configStrategy: (
      <StepFlow
        title="Configuration Strategy"
        steps={[
          { n: '1', label: 'Run /init', desc: 'to generate a starting point' },
          { n: '2', label: 'Add human context', desc: 'why decisions were made' },
          { n: '3', label: 'Keep under 200 lines', desc: 'lean beats comprehensive' },
          { n: '4', label: 'Scope detailed rules', desc: 'to specific file patterns' },
          { n: '5', label: 'Commit the file', desc: 'to share with your team' },
        ]}
      />
    ),
  },
  sections: [
    {
      id: 'intro',
      visual: 'configIntro',
      content: (
        <>
          <h1>Project Configuration</h1>
          <p>
            Imagine a new hire starting every morning with total
            amnesia. Package manager? Forgotten. Test command? Gone.
            Off-limits directories? Never heard of them.
          </p>
          <p>
            <strong>That&apos;s every agent session without
            configuration.</strong> The &quot;Before&quot; panel shows
            the repetition tax. The &quot;After&quot; panel shows what
            one file changes: zero ramp-up, conventions loaded before
            you type a single prompt.
          </p>
          <p>
            That file is CLAUDE.md &mdash; the employee handbook your
            agent reads on day one of every session.
          </p>
        </>
      ),
    },
    {
      id: 'claudeMd',
      visual: 'claudeMdSetup',
      content: (
        <>
          <h3>CLAUDE.md: the employee handbook</h3>
          <p>
            Every new hire reads the handbook on day one. Always
            current, always read first. The handbook doesn&apos;t
            care who the hire is &mdash; it applies to everyone.
          </p>
          <p>
            This example packs build commands, style rules, and
            off-limits directories into under 20 lines. Notice the
            boundary at the bottom: <code>Never edit migrations/</code>.
            The agent internalizes that rule before your first prompt
            lands.
          </p>
          <p>
            Keep the handbook lean. Every line competes for context
            window space. Commands and conventions that prevent
            mistakes belong here; explanatory prose does not.
          </p>
        </>
      ),
    },
    {
      id: 'agentsMd',
      visual: 'otherConfigs',
      content: (
        <>
          <h3>Configuration across tools</h3>
          <p>
            Three tools, three config files &mdash; but the concept is
            identical. Claude Code reads CLAUDE.md. OpenCode reads
            AGENTS.md, falling back to CLAUDE.md if none exists.
            Copilot reads{' '}
            <code>.github/copilot-instructions.md</code>.
          </p>
          <p>
            That fallback is a free win: a single CLAUDE.md serves two
            tools with zero extra work. If your team also uses Copilot,
            add its config under <code>.github/</code> &mdash; or skip
            it until someone actually needs it.
          </p>
          <p>
            Root configs handle the broad strokes. The real leverage
            comes from scoped rules &mdash; department-specific
            policies for different parts of the codebase.
          </p>
        </>
      ),
    },
    {
      id: 'crossTool',
      visual: 'hierarchy',
      content: (
        <>
          <h3>The config hierarchy</h3>
          <p>
            Think of Russian nesting dolls. The outermost doll is your
            system config &mdash; the broadest defaults. Inside that
            sits user config, then project, then session. The smallest
            doll always wins.
          </p>
          <p>
            <code>.claude/rules/tests.md</code> lives inside the
            project layer. That scoped rule only fires when the agent
            touches test files &mdash; like a department policy that
            applies to engineering but not marketing. Same company,
            different context.
          </p>
          <p>
            Most teams need exactly one CLAUDE.md and one or two
            scoped rules. Start there. Add layers only when the root
            config starts feeling crowded.
          </p>
        </>
      ),
    },
    {
      id: 'notes',
      visual: 'configStrategy',
      content: (
        <>
          <h3>Strategy: less is more</h3>
          <p>
            The best CLAUDE.md files are under 200 lines. Step 1:
            run <code>/init</code> to generate a starting point.
            Step 2: add the human context the agent cannot infer
            on its own.
          </p>
          <p>
            Why the line limit? Every line of CLAUDE.md competes for
            context window space. A bloated handbook pushes useful
            conversation history out of the window, making the agent
            worse at the task you actually care about.
          </p>
          <p>
            Include the <em>why</em> behind decisions &mdash; why you
            chose that ORM, why migrations are off-limits, why the
            legacy folder uses a different pattern. Then commit the
            file so every &quot;new hire&quot; benefits from day one.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
