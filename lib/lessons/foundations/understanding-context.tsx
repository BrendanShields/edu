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
            <strong>Context management is the single most important skill you can develop with AI coding tools.</strong>
          </p>
          <p>
            Look at the canvas. &quot;The most important skill&quot; — not prompt engineering, not
            tool selection. Context. Everything the AI knows about your project, your conversation,
            and your instructions has to fit inside a fixed window.
          </p>
          <p>
            When you manage that window well, the AI is brilliant. When you don&apos;t, it falls apart silently.
          </p>
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
            <strong>Click &quot;Add a large file&quot; on the canvas. Watch the percentage climb.</strong>
          </p>
          <p>
            That desk is your context window. Files, conversation history, tool definitions,
            system instructions — all of it sits on the same surface. The desk has a fixed size.
            When you pile on more, older items get pushed off the edge without warning.
          </p>
          <p>
            Now click &quot;Compact.&quot; See the percentage drop? That&apos;s <code>/compact</code>{' '}
            summarizing your conversation to reclaim space. <strong>Context degradation is silent</strong> —
            the AI never says &quot;I forgot.&quot; It just gives worse answers.
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
            Not everything costs the same. Look at the cards on the canvas — small configs and
            short prompts are cheap. A 2,000-line source file is expensive.
          </p>
          <p>
            The sneaky cost is <strong>conversation length</strong>. Each exchange adds your
            message <em>and</em> the AI&apos;s response. Twenty back-and-forth exchanges can
            consume more context than the code you&apos;re working on.
          </p>
          <p>
            Notice the &quot;Full Test Output&quot; card — a failing test suite can dump thousands
            of lines into context, crowding out everything else. That&apos;s your biggest surprise cost.
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
            Compare the two sides on the canvas. The left is an exhausted session. The right is
            a fresh one.
          </p>
          <p>
            You&apos;ll recognize the left: the AI forgets instructions you gave three messages
            ago, repeats work it already did, gives generic responses that ignore your project&apos;s
            conventions in <code>.eslintrc</code> or <code>CLAUDE.md</code>.
          </p>
          <p>
            The fix is almost always the same: <strong>start a new session.</strong> A fresh window
            with clear instructions outperforms a long, cluttered conversation every time. It feels
            wasteful. It isn&apos;t.
          </p>
        </>
      ),
    },
    {
      id: 'manage',
      visual: 'manage',
      content: (
        <>
          <h3>Four strategies</h3>
          <p>
            Follow the four steps on the canvas — this is the playbook that separates
            productive users from frustrated ones.
          </p>
          <p>
            New task? New session — don&apos;t carry baggage. Quality degrading mid-task?
            Run <code>/compact</code> to summarize and reclaim space. Need to explore a
            large codebase? Spawn a subagent — it gets its own desk and reports back a summary.
          </p>
          <p>
            The fourth step is the most underused: put rules in <code>CLAUDE.md</code> or{' '}
            <code>.github/copilot-instructions.md</code>. These files load fresh every
            session — context that never degrades.
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
            <strong>Look at the four cards on the canvas. Memorize them.</strong>
          </p>
          <p>
            Context is the #1 skill — a great prompt in an exhausted session loses to a
            mediocre prompt in a fresh one. Treat context like money: every file read, every
            tool call, every exchange has a cost. Subagents give you parallel desks at no
            cost to your main session.
          </p>
          <p>
            Instruction files survive everything. When context resets, your rules don&apos;t.
            Start building your <code>CLAUDE.md</code> today — it&apos;s the highest-leverage
            file in your project.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
