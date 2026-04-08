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
            Picture an exam room. You get a desk. Every reference sheet, every cheat sheet,
            every scrap of notes you bring has to fit on that desk. Pile on too much and
            sheets start sliding off the edge. Once they fall, you can&apos;t retrieve them
            mid-exam.
          </p>
          <p>
            <strong>That desk is how AI coding tools work.</strong> Everything the model knows —
            your files, your conversation, your instructions — has to fit in a fixed context
            window. Not prompt engineering, not tool selection. Context management is the single
            most important skill you can develop.
          </p>
          <p>
            When the desk is organized, the AI is brilliant. When it overflows, the AI falls
            apart — silently.
          </p>
        </>
      ),
    },
    {
      id: 'desk',
      visual: 'desk',
      content: (
        <>
          <h2>The desk in action</h2>
          <p>
            Click &quot;Add a large file.&quot; The percentage climbs. Files, conversation history,
            tool definitions, system instructions — all of it sits on the same surface. The desk
            has a fixed size. When you pile on more, older items get pushed off the edge without
            warning.
          </p>
          <p>
            Now click &quot;Compact.&quot; That&apos;s <code>/compact</code> summarizing your
            conversation to reclaim space. Notice something unsettling: the AI never
            says &quot;I forgot.&quot; It just gives worse answers.
          </p>
          <p>
            Context eviction isn&apos;t forgetting. It&apos;s amnesia. The AI doesn&apos;t get
            fuzzy — it sharp-cuts, like a coworker who blinked and forgot the last meeting entirely.
          </p>
        </>
      ),
    },
    {
      id: 'fillsUp',
      visual: 'fillsUp',
      content: (
        <>
          <h2>What fills the desk</h2>
          <p>
            Not everything costs the same. Small configs and short prompts are cheap. A 2,000-line
            source file is expensive. But the sneakiest cost? <strong>Conversation length.</strong>
          </p>
          <p>
            Each exchange adds your message <em>and</em> the AI&apos;s response. Twenty
            back-and-forth exchanges can consume more context than the code you&apos;re
            working on. You&apos;re filling the desk with chitchat instead of reference sheets.
          </p>
          <p>
            The &quot;Full Test Output&quot; card is the trap nobody expects — a failing test suite
            dumps thousands of lines into context, shoving your instructions off the edge.
          </p>
        </>
      ),
    },
    {
      id: 'breaks',
      visual: 'breaks',
      content: (
        <>
          <h2>When context breaks</h2>
          <p>
            What happens when the agent can&apos;t see your original instructions anymore?
          </p>
          <p>
            The left side shows it: the AI forgets rules you gave three messages ago, repeats
            work it already did, gives generic responses that ignore your project&apos;s conventions
            in <code>.eslintrc</code> or <code>CLAUDE.md</code>. You&apos;ve written a beautiful,
            detailed prompt — and mailed it to the wrong address, because the context holding
            it has been evicted.
          </p>
          <p>
            The fix is almost always the same: <strong>start a new session.</strong> A fresh
            desk with clear instructions outperforms a long, cluttered conversation every time.
            It feels wasteful. It isn&apos;t.
          </p>
        </>
      ),
    },
    {
      id: 'manage',
      visual: 'manage',
      content: (
        <>
          <h2>Four strategies</h2>
          <p>
            This is the playbook that separates productive users from frustrated ones.
          </p>
          <p>
            New task? New session — don&apos;t carry baggage from the last exam into this one.
            Quality degrading mid-task? Run <code>/compact</code> to summarize and reclaim space.
            Need to explore a large codebase? Spawn a subagent — it gets its own desk and
            reports back a summary, keeping your main desk clean.
          </p>
          <p>
            The fourth strategy is the most underused: put rules in <code>CLAUDE.md</code> or{' '}
            <code>.github/copilot-instructions.md</code>. These files load fresh every
            session. They&apos;re the reference sheets bolted to the desk — context that never
            slides off.
          </p>
        </>
      ),
    },
    {
      id: 'notes',
      visual: 'notes',
      content: (
        <>
          <h2>The rules</h2>
          <p>
            Four cards, four non-negotiables.
          </p>
          <p>
            A great prompt in an exhausted session loses to a mediocre prompt in a fresh one.
            Treat context like money — every file read, every tool call, every exchange has a
            cost. Subagents give you parallel desks at no cost to your main session. And
            instruction files survive everything: when context resets, your rules don&apos;t.
          </p>
          <p>
            Start building your <code>CLAUDE.md</code> today. It&apos;s the highest-leverage
            file in your project — the one reference sheet that&apos;s always on the desk.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
