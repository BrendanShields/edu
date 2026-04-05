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
            <strong>Every file the agent reads stays in its context
            window &mdash; and that window has a ceiling.</strong>{' '}
            Look at the &quot;Before&quot; panel on the canvas: 50
            files of research context, main session polluted, every
            response degrading.
          </p>
          <p>
            Now look at the &quot;After&quot; panel. The subagent
            runs in isolated context, does the heavy lifting, and
            returns a clean summary. Your main session never sees
            the noise.
          </p>
          <p>
            The tools already ship with built-in subagents, and you
            can create your own. The next panel shows what comes
            out of the box.
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
            <strong>Three subagent types ship out of the box.</strong>{' '}
            Compare the rows on the canvas. Explore uses a fast,
            cheap model for read-only search. Plan does structured
            thinking without taking action. General gets full tool
            access for any task.
          </p>
          <p>
            Notice OpenCode mirrors the same concept with{' '}
            <code>@general</code> and <code>@explore</code>. Copilot
            delegates internally and lets you define custom agents
            under <code>.github/agents/</code>.
          </p>
          <p>
            The agent decides when to spawn these automatically, but
            you can nudge it: &quot;use a subagent to research the
            auth patterns in this codebase, then come back with a
            summary.&quot; For even tighter control, build a custom
            subagent.
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
            <strong>Constraints make subagents safer and more
            focused.</strong> Read the skill file on the canvas. This
            security reviewer only gets Read, Grep, and Glob &mdash;
            it literally cannot edit your code or run shell commands.
          </p>
          <p>
            Notice the <code>model: sonnet</code> field. You can
            assign a faster, cheaper model to subagents that
            don&apos;t need full reasoning power. A documentation
            writer that only gets Read and Write costs a fraction
            of what a general agent would.
          </p>
          <p>
            Custom subagents really shine when you run several in
            parallel. The next panel shows the fan-out pattern where
            multiple subagents work simultaneously on isolated
            branches.
          </p>
        </>
      ),
    },
    {
      id: 'worktrees',
      visual: 'fanOut',
      content: (
        <>
          <h3>Parallel work with worktrees</h3>
          <p>
            <strong>Watch the three subagents on the canvas.</strong>{' '}
            They cycle through reading, editing, done &mdash; each
            in its own isolated context. Notice the merge step at the
            bottom where results converge back to the main agent.
          </p>
          <p>
            Each subagent works in its own git worktree: a separate
            directory, a separate branch, zero file conflicts. When
            it finishes, it opens its own PR. Three features progress
            simultaneously without stepping on each other.
          </p>
          <p>
            This is the payoff of context isolation. The main agent
            stays lean, the subagents handle the heavy lifting, and
            each PR gets an independent review cycle. The last section
            helps you decide when delegation is worth the overhead.
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
            <strong>Delegation has overhead &mdash; use it when
            context isolation is worth the cost.</strong> Scan the
            six cards on the canvas. The green checkmarks are
            delegate signals: exploratory research, independent
            tasks, parallelizable work.
          </p>
          <p>
            Notice the red crosses. If the task needs your
            conversation context, requires interactive back-and-forth,
            or feeds directly into an immediate follow-up question,
            keep it inline. A subagent cannot read your main
            session&apos;s history.
          </p>
          <p>
            The rule of thumb: if you would say &quot;go research
            this and come back with a summary,&quot; delegate. If
            you would say &quot;help me think through this step by
            step,&quot; keep it inline.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
