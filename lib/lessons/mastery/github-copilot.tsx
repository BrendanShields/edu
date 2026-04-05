import { TitleCard } from '@/components/visuals/templates/TitleCard';
import { ToolComparison } from '@/components/visuals/templates/ToolComparison';
import { StepFlow } from '@/components/visuals/templates/StepFlow';
import { BeforeAfter } from '@/components/visuals/templates/BeforeAfter';
import { CardGrid } from '@/components/visuals/templates/CardGrid';
import { InlineCompletion } from '@/components/visuals/lesson/InlineCompletion';
import { CopilotDeepDive } from '@/components/visuals/lesson/CopilotDeepDive';
import type { LessonDef } from '../types';

const lesson: LessonDef = {
  slug: 'github-copilot',
  module: 'mastery',
  title: 'GitHub Copilot Mastery',
  visuals: {
    deepDive: <CopilotDeepDive />,
    copilotIntro: (
      <TitleCard
        icon="🤖"
        title="GitHub Copilot Mastery"
        subtitle="From inline completions to autonomous coding agents"
        tool="copilot"
      />
    ),
    inlineCompletion: <InlineCompletion />,
    chatMode: (
      <ToolComparison
        tools={[
          {
            tool: 'copilot',
            title: 'Chat Mode',
            content:
              'Ask questions about code, get explanations, brainstorm. Scope with @workspace or #file for precision.',
            command: 'Cmd+Shift+I',
          },
        ]}
      />
    ),
    agentMode: (
      <StepFlow
        title="Agent Mode Workflow"
        steps={[
          { n: '1', label: 'Describe the goal', desc: 'Natural language prompt' },
          { n: '2', label: 'Agent selects files', desc: 'Reads relevant context' },
          { n: '3', label: 'Makes edits autonomously', desc: 'Across multiple files' },
          { n: '4', label: 'Runs terminal commands', desc: 'Build, test, lint' },
          { n: '5', label: 'Iterates until done', desc: 'Self-correcting loop' },
        ]}
      />
    ),
    asyncAgent: (
      <BeforeAfter
        before={{
          label: 'Manual PR workflow',
          icon: '😓',
          text: 'Write code, test, create branch, push, open PR.',
        }}
        after={{
          label: 'Coding agent',
          icon: '🤖',
          text: 'Assign issue to @copilot, it creates branch, implements, opens draft PR.',
        }}
      />
    ),
    spacesReview: (
      <CardGrid
        title="Spaces & Code Review"
        columns={2}
        cards={[
          { icon: '📦', label: 'Spaces', desc: 'Curated context bundles for grounded answers' },
          { icon: '👀', label: 'Code Review', desc: 'Request review from Copilot like a teammate' },
          { icon: '📝', label: 'PR Summaries', desc: 'Auto-generated PR descriptions' },
          { icon: '🔒', label: 'Security', desc: 'CodeQL scanning built in' },
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
          <h1>GitHub Copilot Mastery</h1>
          <p>
            GitHub Copilot started as inline autocomplete. It&apos;s now a full agentic coding
            platform — from ghost text suggestions to autonomous agents that implement entire
            issues.
          </p>
          <p>
            It lives inside your IDE, so there&apos;s zero context switching. The AI is woven
            into every part of the editing experience.
          </p>
        </>
      ),
    },
    {
      id: 'inline',
      visual: 'inlineCompletion',
      content: (
        <>
          <h3>Inline completions</h3>
          <p>
            The foundation of Copilot: gray ghost text that appears as you type. Press{' '}
            <strong>Tab</strong> to accept, <strong>Esc</strong> to dismiss, or keep typing to
            refine.
          </p>
          <p>
            <strong>Next Edit Suggestions</strong> go further — Copilot predicts where
            you&apos;ll edit next based on your recent changes and jumps the cursor there.
          </p>
          <p>
            These completions are fastest when your code has good naming and clear patterns. The
            model reads your context; clean code generates clean suggestions.
          </p>
        </>
      ),
    },
    {
      id: 'chat',
      visual: 'chatMode',
      content: (
        <>
          <h3>Chat mode</h3>
          <p>
            Open the Chat panel with <strong>Cmd+Shift+I</strong> for longer conversations.
            Ask questions about code, brainstorm approaches, or get explanations.
          </p>
          <p>
            Scope your questions for better answers. <code>@workspace</code> gives Copilot your
            entire project context. <code>#file</code> focuses on a specific file.
          </p>
          <p>
            Chat mode is for thinking. Agent mode is for doing. Know when to use each.
          </p>
        </>
      ),
    },
    {
      id: 'agent',
      visual: 'agentMode',
      content: (
        <>
          <h3>Agent mode</h3>
          <p>
            Agent mode gives Copilot the full agentic loop inside VS Code. Describe a goal in
            natural language and it selects files, makes edits, runs terminal commands, and
            iterates.
          </p>
          <p>
            It works across multiple files and can run your build and test commands to verify
            changes. The iteration loop continues until the task passes or it needs your input.
          </p>
          <p>
            Start with small, well-scoped tasks. As you build trust, increase the scope.
          </p>
        </>
      ),
    },
    {
      id: 'codingAgent',
      visual: 'asyncAgent',
      content: (
        <>
          <h3>The coding agent</h3>
          <p>
            The coding agent runs asynchronously on GitHub&apos;s infrastructure. Assign an
            issue to <strong>@copilot</strong> and it creates a branch, implements the change,
            and opens a draft PR.
          </p>
          <p>
            It works while you sleep. Review the PR like you would from any teammate — approve,
            request changes, or close it.
          </p>
          <p>
            Best for well-defined issues with clear acceptance criteria. Vague issues produce
            vague PRs.
          </p>
        </>
      ),
    },
    {
      id: 'spaces',
      visual: 'spacesReview',
      content: (
        <>
          <h3>Spaces and code review</h3>
          <p>
            <strong>Spaces</strong> let you curate bundles of context — docs, specs, design
            files — so Copilot&apos;s answers are grounded in your team&apos;s actual knowledge,
            not just the codebase.
          </p>
          <p>
            <strong>Code review</strong> works like adding a reviewer to a PR. Copilot analyzes
            the diff, flags issues, suggests improvements, and explains complex changes.
          </p>
          <p>
            Combined with auto-generated PR summaries and built-in CodeQL security scanning,
            Copilot covers the full lifecycle from writing code to shipping it.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
