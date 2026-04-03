import { TitleCard } from '@/components/visuals/templates/TitleCard';
import { BeforeAfter } from '@/components/visuals/templates/BeforeAfter';
import { ToolComparison } from '@/components/visuals/templates/ToolComparison';
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
            AI coding agents have a fixed context window. Everything — your
            files, the conversation, tool results — competes for space. When the
            window fills up, the agent starts forgetting.
          </p>
          <p>
            Managing context is the difference between an agent that feels
            brilliant and one that feels broken. This lesson teaches you how
            to keep sessions sharp.
          </p>
        </>
      ),
    },
    {
      id: 'freshVsExhausted',
      visual: 'sessionComparison',
      content: (
        <>
          <h3>Fresh vs. exhausted sessions</h3>
          <p>
            A fresh session has plenty of room. The agent reads your files once,
            holds your conventions, and produces consistent output.
          </p>
          <p>
            An exhausted session is full of old file reads, abandoned approaches,
            and stale context. The agent re-reads things it already saw,
            forgets constraints you set earlier, and suggests ideas you already
            rejected.
          </p>
          <p>
            When output quality drops, the session is usually the problem.
          </p>
        </>
      ),
    },
    {
      id: 'clear',
      visual: 'clearCommands',
      content: (
        <>
          <h3>Clearing context</h3>
          <p>
            Every tool gives you a way to reset. Use it aggressively — start
            a new session for each distinct task.
          </p>
          <p>
            The compact option is useful mid-task: it summarizes the
            conversation so far, freeing space without losing progress. Full
            clear is best between unrelated tasks.
          </p>
        </>
      ),
    },
    {
      id: 'subagents',
      visual: 'offloadResearch',
      content: (
        <>
          <h3>Subagents for research</h3>
          <p>
            Some tasks require reading dozens of files — understanding a
            dependency, auditing a module, gathering examples. Doing this in
            your main session pollutes it with context you don&apos;t need
            afterward.
          </p>
          <p>
            Offload research to a subagent. It runs in its own context, reads
            whatever it needs, and returns a clean summary. Your main session
            never sees the noise.
          </p>
        </>
      ),
    },
    {
      id: 'conventions',
      visual: 'storeConventions',
      content: (
        <>
          <h3>Storing conventions</h3>
          <p>
            Instead of repeating your style guide every session, write it down
            once in a conventions file. The agent loads it automatically and
            follows it without being asked.
          </p>
          <p>
            Include naming conventions, preferred libraries, file structure
            rules, and anything the agent keeps getting wrong. This is free
            context — it shapes every response without you lifting a finger.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
