import { TitleCard } from '@/components/visuals/templates/TitleCard';
import { StepFlow } from '@/components/visuals/templates/StepFlow';
import { CodeExample } from '@/components/visuals/templates/CodeExample';
import { CardGrid } from '@/components/visuals/templates/CardGrid';
import { ToolComparison } from '@/components/visuals/templates/ToolComparison';
import { ClaudeCodeDeepDive } from '@/components/visuals/lesson/ClaudeCodeDeepDive';
import type { LessonDef } from '../types';

const lesson: LessonDef = {
  slug: 'claude-code',
  module: 'mastery',
  title: 'Claude Code Mastery',
  visuals: {
    claudeIntro: (
      <TitleCard
        icon="⌨️"
        title="Claude Code Mastery"
        subtitle="Terminal-first agentic coding with Anthropic's CLI"
        tool="claude"
      />
    ),
    agenticLoop: (
      <StepFlow
        title="The Agentic Loop"
        steps={[
          { n: '1', label: 'Read', desc: 'Files, errors, context' },
          { n: '2', label: 'Think', desc: 'Analyze, plan approach' },
          { n: '3', label: 'Act', desc: 'Edit, run commands' },
          { n: '4', label: 'Verify', desc: 'Test, check output' },
        ]}
        loop
      />
    ),
    permissionModes: (
      <CodeExample
        title="Permission Modes"
        language="Shift+Tab to cycle"
        code={`Plan        → Read-only exploration
Default     → Asks before edits & commands
Accept Edits → Auto-approves file changes
Auto        → AI classifier decides
DontAsk     → Explicit allow rules only (CI)
Bypass      → No checks (containers only)`}
      />
    ),
    claudeMd: (
      <CodeExample
        title="CLAUDE.md — Project Memory"
        language="markdown"
        code={`# Project
Next.js 14 app with Prisma ORM

# Commands
- npm run dev — start dev server
- npm test — run vitest

# Style
- Use camelCase for variables
- Prefer named exports
- Tests go in __tests__/ directories`}
      />
    ),
    subagentCards: (
      <CardGrid
        title="Built-in Subagents"
        columns={3}
        cards={[
          { icon: '🔍', label: 'Explore', desc: 'Fast, read-only, Haiku-powered' },
          { icon: '📋', label: 'Plan', desc: 'Research for planning' },
          { icon: '⚙️', label: 'General', desc: 'Full tool access for complex tasks' },
        ]}
      />
    ),
    deepDive: <ClaudeCodeDeepDive />,
    gitIntegration: (
      <ToolComparison
        tools={[
          {
            tool: 'claude',
            title: 'Git Integration',
            content:
              'Semantic commits, branches, PRs. /batch splits work across parallel worktrees.',
            command: 'claude "commit these changes"',
          },
        ]}
      />
    ),
  },
  sections: [
    {
      id: 'intro',
      visual: 'deepDive',
      content: (
        <>
          <h1>Claude Code Mastery</h1>
          <p>
            Claude Code is Anthropic&apos;s terminal-first coding agent. No editor plugins, no
            browser tabs — just your shell and a direct line to Claude.
          </p>
          <p>
            It reads your project, makes edits, runs commands, and verifies its own work. You
            describe what you want; it figures out how to get there.
          </p>
        </>
      ),
    },
    {
      id: 'loop',
      visual: 'agenticLoop',
      content: (
        <>
          <h2>The agentic loop</h2>
          <p>
            Every Claude Code interaction follows the same cycle:{' '}
            <strong>Read &rarr; Think &rarr; Act &rarr; Verify</strong>. Then it loops back.
          </p>
          <p>
            Failed test? It reads the error, re-analyzes, tries a different fix, and runs the
            test again. This loop continues until the task succeeds or it asks for help.
          </p>
          <p>
            Understanding this loop is the key to effective prompting. Give the agent enough
            context to <em>read</em> well, and the rest follows.
          </p>
        </>
      ),
    },
    {
      id: 'permissions',
      visual: 'permissionModes',
      content: (
        <>
          <h2>Permission modes</h2>
          <p>
            Press <strong>Shift+Tab</strong> to cycle through six permission levels. Start in
            Default mode — the agent asks before every edit and command.
          </p>
          <p>
            As trust builds, move to <strong>Accept Edits</strong> for faster iteration.{' '}
            <strong>Auto</strong> mode lets an AI classifier decide what needs approval.
          </p>
          <p>
            <strong>DontAsk</strong> is for CI pipelines with explicit allow rules.{' '}
            <strong>Bypass</strong> disables all checks — only use it inside disposable containers.
          </p>
        </>
      ),
    },
    {
      id: 'memory',
      visual: 'claudeMd',
      content: (
        <>
          <h2>CLAUDE.md — project memory</h2>
          <p>
            CLAUDE.md is a Markdown file at your project root that Claude reads on every
            session. It&apos;s persistent memory — build commands, style rules, architectural
            decisions.
          </p>
          <p>
            Put the stuff you&apos;d tell a new teammate on their first day. What framework?
            How to run tests? What naming conventions? Claude follows it every time.
          </p>
          <p>
            You can also have <code>~/.claude/CLAUDE.md</code> for global preferences that
            apply across all projects.
          </p>
        </>
      ),
    },
    {
      id: 'subagents',
      visual: 'subagentCards',
      content: (
        <>
          <h2>Subagents for delegation</h2>
          <p>
            Claude Code can spawn lightweight subagents for parallel work.{' '}
            <strong>Explore</strong> is fast and read-only — perfect for searching the codebase
            without burning tokens.
          </p>
          <p>
            <strong>Plan</strong> subagents do research and analysis. <strong>General</strong>{' '}
            subagents get full tool access for complex subtasks.
          </p>
          <p>
            This means the main agent can delegate &quot;find all usages of this API&quot; to
            Explore while it focuses on the actual fix.
          </p>
        </>
      ),
    },
    {
      id: 'git',
      visual: 'gitIntegration',
      content: (
        <>
          <h2>Git integration</h2>
          <p>
            Claude Code understands git natively. Ask it to commit and it writes semantic commit
            messages. Ask it to create a PR and it handles the branch, push, and description.
          </p>
          <p>
            The <code>/batch</code> command splits work across parallel git worktrees — multiple
            tasks running simultaneously, each in its own branch.
          </p>
          <p>
            Combined with headless mode (<code>claude -p &quot;task&quot;</code>), you can
            script Claude Code into CI pipelines, pre-commit hooks, and automation workflows.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
