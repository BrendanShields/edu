import { TitleCard } from '@/components/visuals/templates/TitleCard';
import { CardGrid } from '@/components/visuals/templates/CardGrid';
import { BeforeAfter } from '@/components/visuals/templates/BeforeAfter';
import { StepFlow } from '@/components/visuals/templates/StepFlow';
import { ContextDesk } from '@/components/visuals/lesson/ContextDesk';
import type { LessonDef } from '../types';

const lesson: LessonDef = {
  slug: 'understanding-context',
  module: 'foundations',
  title: 'Understanding Context',
  visuals: {
    intro: (
      <TitleCard
        icon="🧠"
        title="Understanding Context"
        subtitle="The most important skill for AI coding tools"
      />
    ),
    desk: <ContextDesk />,
    fillsUp: (
      <CardGrid
        title="Context Costs"
        columns={3}
        cards={[
          { icon: '📄', label: 'Small Config File', desc: 'Cheap' },
          { icon: '💬', label: 'Short Prompt', desc: 'Cheap' },
          { icon: '🔍', label: 'Grep Results', desc: 'Cheap' },
          { icon: '📦', label: '2,000-Line File', desc: 'Expensive' },
          { icon: '🧪', label: 'Full Test Output', desc: 'Very expensive' },
          { icon: '🔄', label: '20 Exchanges', desc: 'Compounds' },
        ]}
      />
    ),
    breaks: (
      <BeforeAfter
        before={{
          label: 'Exhausted session',
          icon: '😵',
          text: 'Forgets earlier instructions. Repeats work already done. Responses become generic and vague. The AI feels broken.',
        }}
        after={{
          label: 'Fresh session',
          icon: '✨',
          text: 'Follows your patterns precisely. Matches project conventions. Gives specific, grounded responses. The AI feels sharp.',
        }}
      />
    ),
    manage: (
      <StepFlow
        title="Management Strategies"
        steps={[
          {
            n: '1',
            label: 'Start fresh between tasks',
            desc: 'New task, new session. Don\u2019t carry baggage.',
          },
          {
            n: '2',
            label: 'Compact when degrading',
            desc: 'Use /compact to summarize and reclaim space.',
          },
          {
            n: '3',
            label: 'Send research to subagents',
            desc: 'Offload exploration to keep your main session clean.',
          },
          {
            n: '4',
            label: 'Put rules on the wall',
            desc: 'CLAUDE.md and instruction files survive every session.',
          },
        ]}
      />
    ),
    notes: (
      <CardGrid
        title="Key Rules"
        columns={2}
        cards={[
          { icon: '🎯', label: 'Context Is #1 Skill', desc: 'Everything else follows from this' },
          { icon: '💰', label: 'Manage Like Money', desc: 'Every token has a cost' },
          { icon: '🖥️', label: 'Subagents = Free Desks', desc: 'Parallel context at no cost' },
          { icon: '📌', label: 'Instruction Files Survive', desc: 'Rules persist across sessions' },
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
          <h1>Understanding Context</h1>
          <p>
            If you learn one thing about AI coding tools, make it this:{' '}
            <strong>context management is the most important skill you can develop.</strong>
          </p>
          <p>
            Every AI model has a context window — a fixed amount of information it can hold at
            once. Everything the AI knows about your project, your conversation, and your
            instructions has to fit inside it.
          </p>
          <p>When you manage context well, the AI is brilliant. When you don&apos;t, it falls apart.</p>
        </>
      ),
    },
    {
      id: 'desk',
      visual: 'desk',
      content: (
        <>
          <h3>The desk metaphor</h3>
          <p>
            Think of context as a <strong>desk</strong>. Everything the AI is working with sits
            on this desk — files, your conversation, tool definitions, system instructions.
          </p>
          <p>
            The desk has a fixed size. When you pile on more, older items get pushed off the
            edge. The AI doesn&apos;t tell you this is happening. It just quietly loses access
            to information it had before.
          </p>
          <p>
            That&apos;s the trap. <strong>Context degradation is silent.</strong> The AI doesn&apos;t
            say &quot;I forgot your instructions.&quot; It just starts giving worse answers.
          </p>
        </>
      ),
    },
    {
      id: 'fillsUp',
      visual: 'fillsUp',
      content: (
        <>
          <h3>What fills the desk</h3>
          <p>
            Not everything costs the same. A short prompt or small config file barely registers.
            A 2,000-line source file takes up serious space.
          </p>
          <p>
            The sneaky cost is <strong>conversation length</strong>. Each exchange adds both your
            message and the AI&apos;s response. Twenty back-and-forth exchanges can consume more
            context than the actual code you&apos;re working on.
          </p>
          <p>
            Full test output is the biggest surprise. A failing test suite can dump thousands of
            lines into context, crowding out everything else.
          </p>
        </>
      ),
    },
    {
      id: 'breaks',
      visual: 'breaks',
      content: (
        <>
          <h3>When context breaks</h3>
          <p>
            You&apos;ll know context is exhausted when the AI starts <strong>forgetting
            instructions</strong> you gave earlier, <strong>repeating work</strong> it already
            did, or giving <strong>generic responses</strong> that ignore your project&apos;s
            conventions.
          </p>
          <p>
            The fix is almost always the same: <strong>start a new session.</strong> A fresh
            context window with clear instructions outperforms a long, cluttered conversation
            every time.
          </p>
          <p>
            This feels wasteful. It isn&apos;t. It&apos;s the single most effective thing you
            can do.
          </p>
        </>
      ),
    },
    {
      id: 'manage',
      visual: 'manage',
      content: (
        <>
          <h3>Managing context like a pro</h3>
          <p>
            <strong>Start fresh between tasks.</strong> Don&apos;t reuse a session from a
            previous task. The leftover context will pollute your new work.
          </p>
          <p>
            <strong>Compact when you notice degradation.</strong> The <code>/compact</code>{' '}
            command summarizes the conversation, freeing up space while preserving key decisions.
          </p>
          <p>
            <strong>Use subagents for research.</strong> Need to explore a large codebase?
            Spawn a subagent. It gets its own context window — a separate desk — and reports
            back a summary.
          </p>
          <p>
            <strong>Put rules in instruction files.</strong> CLAUDE.md, .github/copilot-instructions.md,
            and similar files get loaded fresh every session. They&apos;re context that never
            degrades.
          </p>
        </>
      ),
    },
    {
      id: 'notes',
      visual: 'notes',
      content: (
        <>
          <h3>The rules</h3>
          <p>
            <strong>Context management is the #1 skill.</strong> Prompt engineering matters, but
            context management matters more. A great prompt in an exhausted session loses to a
            mediocre prompt in a fresh one.
          </p>
          <p>
            <strong>Treat context like money.</strong> Every file read, every tool call, every
            exchange has a cost. Spend deliberately.
          </p>
          <p>
            <strong>Subagents give you free desks.</strong> The main session stays focused while
            subagents do the exploration.
          </p>
          <p>
            <strong>Instruction files survive everything.</strong> When context resets, your
            rules don&apos;t. This is the most underused feature in every tool.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
