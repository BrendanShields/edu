import { TitleCard } from '@/components/visuals/templates/TitleCard';
import { BeforeAfter } from '@/components/visuals/templates/BeforeAfter';
import { ToolComparison } from '@/components/visuals/templates/ToolComparison';
import { ContextTactics } from '@/components/visuals/lesson/ContextTactics';
import type { LessonDef } from '../types';

const lesson: LessonDef = {
  slug: 'context-management',
  module: 'productivity',
  title: 'Context Management',
  visuals: {
    forgettingAgent: (
      <TitleCard
        icon="🧹"
        title="Managing Context"
        subtitle="Keep your AI sessions fast and focused"
      />
    ),
    sessionComparison: (
      <BeforeAfter
        before={{
          label: 'Exhausted session',
          icon: '🥵',
          text: 'Re-reads files, forgets conventions, suggests approaches you already rejected',
        }}
        after={{
          label: 'Fresh session',
          icon: '✨',
          text: 'Matches patterns, follows naming, references your types correctly',
        }}
      />
    ),
    clearCommands: (
      <ToolComparison
        tools={[
          {
            tool: 'claude',
            title: 'Claude Code',
            command: '/clear  /compact',
            content: '/clear resets the session entirely. /compact summarizes and compresses context.',
          },
          {
            tool: 'opencode',
            title: 'OpenCode',
            command: '/new  /clear',
            content: '/new or /clear starts a fresh session with clean context.',
          },
          {
            tool: 'copilot',
            title: 'GitHub Copilot',
            content: 'Start a new chat thread when context gets stale. Each thread is a separate session.',
          },
        ]}
      />
    ),
    offloadResearch: (
      <BeforeAfter
        before={{
          label: 'Research inline',
          icon: '🌊',
          text: '50 files of context pollution — every response gets worse',
        }}
        after={{
          label: 'Research via subagent',
          icon: '📦',
          text: 'Separate context, returns a summary, main session stays clean',
        }}
      />
    ),
    tactics: <ContextTactics />,
    storeConventions: (
      <ToolComparison
        tools={[
          {
            tool: 'claude',
            title: 'Claude Code',
            command: 'CLAUDE.md',
            content: 'Loaded automatically every session. Project-level rules, style guides, and conventions.',
          },
          {
            tool: 'opencode',
            title: 'OpenCode',
            command: 'AGENTS.md',
            content: 'Uses AGENTS.md or falls back to CLAUDE.md. Same concept, different file name.',
          },
          {
            tool: 'copilot',
            title: 'GitHub Copilot',
            command: '.github/copilot-instructions.md',
            content: 'Repository-level instructions loaded into every Copilot chat session.',
          },
        ]}
      />
    ),
  },
  sections: [
    {
      id: 'intro',
      visual: 'forgettingAgent',
      content: (
        <>
          <h1>Context Management</h1>
          <p>
            <strong>Every file read, every tool call, every abandoned approach
            eats from the same fixed budget.</strong> When the window fills up,
            the agent starts forgetting — your conventions, your constraints,
            your earlier decisions.
          </p>
          <p>
            Look at the canvas. That title is the mission: keep your AI sessions
            fast and focused. The next canvas shows you exactly what &quot;full&quot;
            looks like.
          </p>
        </>
      ),
    },
    {
      id: 'freshVsExhausted',
      visual: 'tactics',
      content: (
        <>
          <h3>94% full means the agent is forgetting your name</h3>
          <p>
            Toggle to <strong>Bloated Context</strong> on the canvas. Six items
            stacked in red — full file reads, redundant re-reads, a 40-turn
            conversation. The usage bar at the bottom reads 100% full, with
            older context being evicted.
          </p>
          <p>
            Now toggle to <strong>Lean Context</strong>. Same task, four items,
            all green. Targeted <code>grep</code> calls instead of{' '}
            <code>cat</code>, compacted conversation, 21% used. The tactic pills
            at the bottom light up — those are the four habits that got you here.
          </p>
          <p>
            When output quality drops mid-session, the session itself is almost
            always the problem. The fix is surgical, not magical.
          </p>
        </>
      ),
    },
    {
      id: 'clear',
      visual: 'clearCommands',
      content: (
        <>
          <h3>The cheapest performance fix is a clean slate</h3>
          <p>
            Look at the three tools on the canvas. Claude Code gives you{' '}
            <code>/clear</code> and <code>/compact</code>. OpenCode uses{' '}
            <code>/new</code>. Copilot resets by starting a new chat thread.
            Every tool has a way to reset — learn yours.
          </p>
          <p>
            <code>/compact</code> is your mid-task move: it summarizes everything
            so far and frees space without losing progress. Full clear is for
            switching between unrelated tasks — one task per session, always.
          </p>
          <p>
            But what about tasks that require reading dozens of files just to
            understand the problem? That&apos;s where subagents come in.
          </p>
        </>
      ),
    },
    {
      id: 'subagents',
      visual: 'offloadResearch',
      content: (
        <>
          <h3>Don&apos;t let research pollute your working session</h3>
          <p>
            Look at the canvas. &quot;Research inline&quot; means 50 files of
            context pollution — every response after the research gets worse
            because the window is stuffed with files you no longer need.
          </p>
          <p>
            &quot;Research via subagent&quot; runs in a separate context window.
            It reads whatever it needs, distills the findings into a summary, and
            hands that summary back. Your main session never sees the noise.
          </p>
          <p>
            Think of it as hiring a research assistant who works in another room
            and slides a one-page brief under your door. The last tactic makes
            every session smarter before it even starts.
          </p>
        </>
      ),
    },
    {
      id: 'conventions',
      visual: 'storeConventions',
      content: (
        <>
          <h3>Write it once, never repeat yourself again</h3>
          <p>
            Look at the canvas. Claude Code loads <code>CLAUDE.md</code>
            automatically. OpenCode reads <code>AGENTS.md</code>. Copilot uses{' '}
            <code>.github/copilot-instructions.md</code>. Same concept, different
            filenames.
          </p>
          <p>
            Put your naming conventions, preferred libraries, file structure
            rules, and common mistakes in that file. The agent reads it at
            session start and follows it without being asked. It&apos;s free
            context that shapes every response.
          </p>
          <p>
            Combined with lean sessions, subagent research, and aggressive
            clearing, context management becomes the invisible skill that makes
            everything else in this course work better.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
