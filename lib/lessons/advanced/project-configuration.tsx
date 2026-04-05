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
            <strong>Every new session, the agent forgets everything
            about your project.</strong> Look at the &quot;Before&quot;
            panel on the canvas &mdash; that is what re-explaining
            your package manager, test command, and file conventions
            every single time feels like.
          </p>
          <p>
            Now look at the &quot;After&quot; panel. One config file
            means zero ramp-up. The agent reads your conventions
            before you type a single prompt.
          </p>
          <p>
            The difference is a file called CLAUDE.md. The next section
            shows you exactly what goes inside it.
          </p>
        </>
      ),
    },
    {
      id: 'claudeMd',
      visual: 'claudeMdSetup',
      content: (
        <>
          <h3>CLAUDE.md: your project&apos;s brain</h3>
          <p>
            <strong>One markdown file replaces every &quot;remember
            to&hellip;&quot; prompt you&apos;ve ever typed.</strong>{' '}
            Read the CLAUDE.md example on the canvas. Build commands,
            test commands, style rules, off-limits directories &mdash;
            all in under 20 lines.
          </p>
          <p>
            Notice the &quot;Off-limits&quot; section at the bottom.
            Try imagining what happens when the agent encounters{' '}
            <code>Never edit migrations/</code> in its first read.
            It internalizes that boundary before your first prompt.
          </p>
          <p>
            Keep CLAUDE.md lean &mdash; every line competes for context
            window space. Commands and conventions that prevent mistakes
            belong here; explanatory prose does not. Other tools read
            similar files, as the next panel shows.
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
            <strong>Three tools, three config files &mdash; but the
            idea is identical.</strong> Compare the three rows on
            the canvas. Claude Code reads CLAUDE.md, OpenCode reads
            AGENTS.md (falling back to CLAUDE.md), and Copilot reads{' '}
            <code>.github/copilot-instructions.md</code>.
          </p>
          <p>
            Notice that OpenCode&apos;s fallback means a single
            CLAUDE.md can serve two tools with zero extra work. If
            your team uses Copilot as well, add its config under{' '}
            <code>.github/</code> &mdash; or skip it until someone
            actually needs it.
          </p>
          <p>
            The real power move is scoped rules, not root configs.
            The hierarchy on the next canvas shows how config layers
            override each other.
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
            <strong>Config is layered, and inner layers win.</strong>{' '}
            Click the outermost layer on the canvas &mdash; that&apos;s
            your system config, the broadest defaults. Now click the
            project layer. See the model setting? It overrides your
            personal preference.
          </p>
          <p>
            Notice how <code>.claude/rules/tests.md</code> sits
            inside the project layer. That scoped rule only applies
            when the agent touches test files &mdash; it never bloats
            the root config or competes for context window space with
            unrelated instructions.
          </p>
          <p>
            Most teams need exactly one CLAUDE.md and one or two
            scoped rules. Start there; add layers only when you feel
            the root config getting crowded. The next panel walks
            you through the strategy step by step.
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
            <strong>The best CLAUDE.md files are under 200
            lines.</strong> Follow the five steps on the canvas
            from top to bottom. Step 1: run <code>/init</code> to
            generate a starting point. Step 2: add the human context
            the agent cannot infer on its own.
          </p>
          <p>
            Notice step 3 &mdash; &quot;keep under 200 lines.&quot;
            Why? Every line of CLAUDE.md competes for context window
            space. A bloated config pushes useful conversation history
            out of the window, making the agent less effective at the
            task you actually care about.
          </p>
          <p>
            Add <em>why</em> decisions were made &mdash; why you chose
            that ORM, why migrations are off-limits, why the legacy
            folder uses a different pattern. Then commit the file so
            the whole team benefits from day one.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
