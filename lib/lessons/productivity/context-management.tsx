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
            Imagine packing for a flight with a strict weight limit. Every file
            the agent reads, every tool call, every abandoned approach goes into
            that suitcase. When it&apos;s full, something gets left on the
            curb — your conventions, your constraints, your earlier decisions.
          </p>
          <p>
            <strong>A bloated context window doesn&apos;t crash. It
            forgets.</strong> The agent starts re-reading files it already saw,
            suggesting approaches you already rejected, misspelling types it
            used correctly ten minutes ago.
          </p>
        </>
      ),
    },
    {
      id: 'freshVsExhausted',
      visual: 'tactics',
      content: (
        <>
          <h3>Your entire wardrobe vs. three outfits</h3>
          <p>
            Toggle to <strong>Bloated Context</strong>. Six items stacked in
            red — full file dumps, redundant re-reads, a 40-turn conversation.
            That&apos;s packing your entire wardrobe. The usage bar reads 100%
            full, with older items being thrown out at the airport.
          </p>
          <p>
            Now toggle to <strong>Lean Context</strong>. Same trip, four items,
            all green. Targeted <code>grep</code> results instead of{' '}
            <code>cat</code> dumps, compacted conversation, 21% used. That&apos;s
            packing exactly three outfits. The tactic pills at the bottom are the
            four habits that got you here.
          </p>
          <p>
            When output quality drops mid-session, you don&apos;t have a model
            problem. You have a luggage problem.
          </p>
        </>
      ),
    },
    {
      id: 'clear',
      visual: 'clearCommands',
      content: (
        <>
          <h3>Vacuum-seal or start with a fresh bag</h3>
          <p>
            <code>/compact</code> is vacuum-sealing: it summarizes everything so
            far and frees space without losing progress. Claude Code gives you
            {' '}<code>/clear</code> and <code>/compact</code>. OpenCode uses
            {' '}<code>/new</code>. Copilot resets by starting a new chat thread.
          </p>
          <p>
            Full clear is a fresh empty bag — use it when switching between
            unrelated tasks. One task per session, always. <code>/compact</code>{' '}
            is for mid-task, when the bag is getting heavy but you&apos;re not
            done yet.
          </p>
          <p>
            But what about tasks that require reading dozens of files just to
            understand the problem? You can&apos;t fit a library into a carry-on.
            That&apos;s where subagents come in.
          </p>
        </>
      ),
    },
    {
      id: 'subagents',
      visual: 'offloadResearch',
      content: (
        <>
          <h3>Send a research assistant to the library</h3>
          <p>
            &quot;Research inline&quot; means dumping 50 files into your suitcase
            and wondering why the agent can&apos;t find your socks anymore.
            Every response after the research gets worse because the window is
            stuffed with files you no longer need.
          </p>
          <p>
            A subagent is a research assistant who works in a separate room. It
            reads whatever it needs — the entire shelf if necessary — distills
            the findings, and slides a one-page brief under your door. Your
            main session never sees the noise.
          </p>
          <p>
            The brief goes into your bag. The hundred source files don&apos;t.
            One last tactic makes every session smarter before it even starts.
          </p>
        </>
      ),
    },
    {
      id: 'conventions',
      visual: 'storeConventions',
      content: (
        <>
          <h3>The employee handbook</h3>
          <p>
            Every company has one. Every new hire reads it on day one. It
            doesn&apos;t matter who the hire is or when they start — the
            handbook is always current and always read first. That&apos;s what
            {' '}<code>CLAUDE.md</code> is for Claude Code, <code>AGENTS.md</code>{' '}
            for OpenCode, and <code>.github/copilot-instructions.md</code> for
            Copilot.
          </p>
          <p>
            Put your naming conventions, preferred libraries, file structure
            rules, and common mistakes in that file. The agent reads it at
            session start and follows it without being asked. Free context that
            shapes every response before you type a word.
          </p>
          <p>
            Lean sessions, subagent research, aggressive clearing, and a solid
            handbook. Context management is the invisible skill that makes
            everything else in this course work better.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
