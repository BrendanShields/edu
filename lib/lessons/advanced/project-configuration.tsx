import { BeforeAfter } from '@/components/visuals/templates/BeforeAfter';
import { CodeExample } from '@/components/visuals/templates/CodeExample';
import { ToolComparison } from '@/components/visuals/templates/ToolComparison';
import { CardGrid } from '@/components/visuals/templates/CardGrid';
import { StepFlow } from '@/components/visuals/templates/StepFlow';
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
            Every time you start a new session, the agent knows nothing about
            your project. Your package manager, test command, style rules,
            directory structure &mdash; all gone.
          </p>
          <p>
            Configuration files fix this permanently. Write your conventions
            once, and every session starts informed.
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
            CLAUDE.md is a markdown file at your project root that the agent
            reads automatically at the start of every session. Think of it as
            onboarding docs for your AI teammate.
          </p>
          <p>
            Keep it lean. Build commands, test commands, style rules, and
            boundaries. The agent doesn&apos;t need your life story &mdash; it
            needs the commands and conventions that prevent mistakes.
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
            Each tool has its own config file, but the idea is identical:
            persistent project context that loads automatically.
          </p>
          <p>
            OpenCode reads AGENTS.md first, then falls back to CLAUDE.md.
            Copilot uses its own path under .github/. If your team uses
            multiple tools, you may want config files for each &mdash; or
            pick the one your primary tool reads and let others fall back.
          </p>
        </>
      ),
    },
    {
      id: 'crossTool',
      visual: 'crossToolCompat',
      content: (
        <>
          <h3>Cross-tool compatibility</h3>
          <p>
            Six files, three tools. It sounds like a lot, but most teams only
            need one or two. Start with the file your primary tool reads and
            add others as teammates adopt different tools.
          </p>
          <p>
            Scoped rules are the power move. Instead of bloating your root
            config, put detailed guidance in pattern-matched files:
            {' '}<code>.claude/rules/tests.md</code> applies only when the
            agent touches test files.
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
            Run <code>/init</code> to generate a starting point, then edit it
            down. The best CLAUDE.md files are under 200 lines. Every line
            competes for context window space, so make each one count.
          </p>
          <p>
            Add <em>human</em> context the agent can&apos;t infer: why you
            chose that ORM, why migrations are off-limits, why the legacy
            folder uses a different pattern. Commit the file so the whole
            team benefits.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
