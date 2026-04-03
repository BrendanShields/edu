import { BeforeAfter } from '@/components/visuals/templates/BeforeAfter';
import { ToolComparison } from '@/components/visuals/templates/ToolComparison';
import { CodeExample } from '@/components/visuals/templates/CodeExample';
import { StepFlow } from '@/components/visuals/templates/StepFlow';
import { CardGrid } from '@/components/visuals/templates/CardGrid';
import type { LessonDef } from '../types';

const lesson: LessonDef = {
  slug: 'subagents-and-parallelization',
  module: 'advanced',
  title: 'Subagents & Parallelization',
  visuals: {
    contextPollution: (
      <BeforeAfter
        before={{
          label: 'Research inline',
          icon: '🌊',
          text: '50 files of context. Main session polluted. Every response gets worse as the window fills up.',
        }}
        after={{
          label: 'Delegate to subagent',
          icon: '📦',
          text: 'Isolated context. Returns a clean summary. Your desk stays organized.',
        }}
      />
    ),
    builtInSubagents: (
      <ToolComparison
        tools={[
          {
            tool: 'claude',
            title: 'Claude Code',
            content: 'Explore (Haiku, read-only, fast search), Plan (structured thinking), General (full tool access, any task).',
          },
          {
            tool: 'opencode',
            title: 'OpenCode',
            content: '@general (full tool access), @explore (fast codebase search). Same delegation concept.',
          },
          {
            tool: 'copilot',
            title: 'GitHub Copilot',
            content: 'Agent mode delegates internally. Custom agents in .github/agents/ for specialized roles.',
          },
        ]}
      />
    ),
    customSubagent: (
      <CodeExample
        title="Custom Subagent"
        language="markdown"
        code={`---
name: security-reviewer
description: Reviews code for vulnerabilities
tools: Read, Grep, Glob
model: sonnet
---

Analyze code for SQL injection, XSS,
hardcoded secrets, and missing validation.
Rate each finding by severity.`}
      />
    ),
    parallelWork: (
      <StepFlow
        title="Parallel With Worktrees"
        steps={[
          { n: '1', label: 'Agent creates git worktree', desc: 'isolated copy of the repo' },
          { n: '2', label: 'Spawns subagent', desc: 'in the worktree directory' },
          { n: '3', label: 'Multiple features progress', desc: 'simultaneously, no conflicts' },
          { n: '4', label: 'Each opens its own PR', desc: 'independent review cycles' },
          { n: '5', label: 'No file conflicts', desc: 'separate working directories' },
        ]}
      />
    ),
    delegationGuide: (
      <CardGrid
        title="When to Delegate"
        columns={2}
        cards={[
          { icon: '✅', label: 'Exploratory research', desc: 'Delegate' },
          { icon: '✅', label: 'Independent tasks', desc: 'Delegate' },
          { icon: '✅', label: 'Parallelizable work', desc: 'Delegate' },
          { icon: '❌', label: 'Needs conversation context', desc: 'Keep inline' },
          { icon: '❌', label: 'Interactive back-and-forth', desc: 'Keep inline' },
          { icon: '❌', label: 'Immediate follow-up', desc: 'Keep inline' },
        ]}
      />
    ),
  },
  sections: [
    {
      id: 'intro',
      visual: 'contextPollution',
      content: (
        <>
          <h1>Subagents &amp; Parallelization</h1>
          <p>
            When you ask the agent to research something, it reads dozens
            of files. All that context stays in the window, making every
            subsequent response slower and less focused.
          </p>
          <p>
            Subagents solve this. They run in isolated context, do the
            work, and return a clean summary. Your main session stays
            lean.
          </p>
        </>
      ),
    },
    {
      id: 'builtIn',
      visual: 'builtInSubagents',
      content: (
        <>
          <h3>Built-in subagents</h3>
          <p>
            Claude Code ships with three: <strong>Explore</strong> uses a
            fast, cheap model for read-only search. <strong>Plan</strong>{' '}
            does structured thinking without taking action.{' '}
            <strong>General</strong> gets full tool access for any task.
          </p>
          <p>
            The agent decides when to spawn them automatically, but you
            can nudge it: &quot;use a subagent to research the auth
            patterns in this codebase, then come back with a summary.&quot;
          </p>
        </>
      ),
    },
    {
      id: 'custom',
      visual: 'customSubagent',
      content: (
        <>
          <h3>Custom subagents</h3>
          <p>
            You can define specialized subagents as skill files. Limit
            their tools, choose a faster model, and give them a narrow
            mandate.
          </p>
          <p>
            A security reviewer that only gets Read, Grep, and Glob
            can&apos;t accidentally edit your code. A documentation writer
            that only gets Read and Write can&apos;t run shell commands.
            Constraints make subagents safer and more focused.
          </p>
        </>
      ),
    },
    {
      id: 'worktrees',
      visual: 'parallelWork',
      content: (
        <>
          <h3>Parallel work with worktrees</h3>
          <p>
            Git worktrees let you have multiple working copies of the
            same repo. The agent creates a worktree, spawns a subagent
            in it, and now two features progress simultaneously.
          </p>
          <p>
            Each subagent works in its own directory with its own branch.
            No file conflicts, no merge headaches, and each opens its
            own PR when done.
          </p>
        </>
      ),
    },
    {
      id: 'notes',
      visual: 'delegationGuide',
      content: (
        <>
          <h3>When to delegate</h3>
          <p>
            Delegate exploratory research, independent tasks, and
            parallelizable work. The subagent does the heavy lifting
            and returns a summary.
          </p>
          <p>
            Keep things inline when the task needs your conversation
            context, requires interactive back-and-forth, or when
            you&apos;ll need the result immediately for a follow-up
            question. Delegation has overhead &mdash; use it when the
            context isolation is worth it.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
