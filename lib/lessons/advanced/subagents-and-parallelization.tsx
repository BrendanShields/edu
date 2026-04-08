import { BeforeAfter } from '@/components/visuals/templates/BeforeAfter';
import { ToolComparison } from '@/components/visuals/templates/ToolComparison';
import { CodeExample } from '@/components/visuals/templates/CodeExample';
import { StepFlow } from '@/components/visuals/templates/StepFlow';
import { CardGrid } from '@/components/visuals/templates/CardGrid';
import { SubagentFanOut } from '@/components/visuals/lesson/SubagentFanOut';
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
    fanOut: <SubagentFanOut />,
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
            You&apos;re a tech lead. A massive refactor lands on your
            desk. Do you read every file yourself, slowly drowning
            in context &mdash; or do you break it into three tasks
            and hand each to a different engineer?
          </p>
          <p>
            <strong>Subagents are those engineers.</strong> The
            &quot;Before&quot; panel shows what happens when one agent
            does everything: 50 files of context, responses degrading
            with every page. The &quot;After&quot; panel shows
            delegation: isolated context, clean summary returned.
          </p>
          <p>
            Your main session never sees the noise. The engineers
            report back when the work is done.
          </p>
        </>
      ),
    },
    {
      id: 'builtIn',
      visual: 'builtInSubagents',
      content: (
        <>
          <h2>Built-in subagents</h2>
          <p>
            Three engineer types ship out of the box. Explore uses a
            fast, cheap model for read-only search &mdash; the intern
            who can research but not commit. Plan does structured
            thinking without taking action. General gets full tool
            access for any task.
          </p>
          <p>
            OpenCode mirrors the pattern with <code>@general</code>{' '}
            and <code>@explore</code>. Copilot delegates internally
            and lets you define custom agents under{' '}
            <code>.github/agents/</code>.
          </p>
          <p>
            The agent spawns these automatically, but you can nudge
            it: &quot;use a subagent to research the auth patterns,
            then come back with a summary.&quot; For tighter control,
            build a custom subagent with explicit constraints.
          </p>
        </>
      ),
    },
    {
      id: 'custom',
      visual: 'customSubagent',
      content: (
        <>
          <h2>Custom subagents</h2>
          <p>
            Constraints are what make delegation safe. This security
            reviewer only gets Read, Grep, and Glob &mdash; it
            literally cannot edit code or run shell commands. Separate
            desks, separate permissions.
          </p>
          <p>
            The <code>model: sonnet</code> field assigns a faster,
            cheaper model. A documentation writer that only needs Read
            and Write costs a fraction of a general agent. Match the
            capability to the task.
          </p>
          <p>
            Custom subagents really shine when you run several in
            parallel &mdash; three engineers, three tasks, three
            branches, no conflicts.
          </p>
        </>
      ),
    },
    {
      id: 'worktrees',
      visual: 'fanOut',
      content: (
        <>
          <h2>Parallel work with worktrees</h2>
          <p>
            Each engineer gets their own desk. They can&apos;t rifle
            through each other&apos;s papers. In practice, that means
            each subagent works in its own git worktree &mdash; a
            separate directory, a separate branch, zero file conflicts.
          </p>
          <p>
            Three subagents cycle through reading, editing, done. When
            each finishes, it opens its own PR. Three features
            progress simultaneously without stepping on each other.
          </p>
          <p>
            The merge step at the bottom is where you, the tech lead,
            review and integrate. The main agent stays lean. Each PR
            gets an independent review cycle. Context isolation is the
            reason it all works.
          </p>
        </>
      ),
    },
    {
      id: 'notes',
      visual: 'delegationGuide',
      content: (
        <>
          <h2>When to delegate</h2>
          <p>
            You wouldn&apos;t delegate a two-minute task to someone
            who needs a five-minute briefing. Delegation has real
            overhead &mdash; context setup, result merging, no shared
            memory.
          </p>
          <p>
            The green checkmarks are delegate signals: exploratory
            research, independent tasks, parallelizable work. The red
            crosses mark tasks to keep inline: anything needing your
            conversation history, interactive back-and-forth, or
            immediate follow-up.
          </p>
          <p>
            The rule of thumb: if you would say &quot;go research
            this and come back with a summary,&quot; delegate. If
            you would say &quot;help me think through this,&quot;
            keep it on your own desk.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
