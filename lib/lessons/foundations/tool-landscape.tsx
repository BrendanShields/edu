import Image from 'next/image';
import { CardGrid } from '@/components/visuals/templates/CardGrid';
import { BeforeAfter } from '@/components/visuals/templates/BeforeAfter';
import { StepFlow } from '@/components/visuals/templates/StepFlow';
import { ComparisonTable } from '@/components/visuals/lesson/ComparisonTable';
import { CodeAlong } from '@/components/visuals/CodeAlong';
import type { LessonDef } from '../types';

const lesson: LessonDef = {
  slug: 'tool-landscape',
  module: 'foundations',
  title: 'The Tool Landscape',
  visuals: {
    intro: (
      <div className="trail-figure" style={{ viewTransitionName: 'intro-image' }}>
        <Image
          src="/intro-image.png"
          alt="Mountain trail map showing Copilot, OpenCode, and Claude Code as trails of increasing difficulty"
          fill
          sizes="(max-width: 1024px) 90vw, 720px"
          className="trail-figure__img"
          priority
        />
      </div>
    ),
    terminal: (
      <div className="trail-figure">
        <Image
          src="/intro-image-claude-highlight.png"
          alt="Claude Code trail highlighted on the mountain map"
          fill
          sizes="(max-width: 1024px) 90vw, 720px"
          className="trail-figure__img"
        />
      </div>
    ),
    freedom: (
      <div className="trail-figure">
        <Image
          src="/intro-image-opencode-highlight.png"
          alt="OpenCode trail highlighted on the mountain map"
          fill
          sizes="(max-width: 1024px) 90vw, 720px"
          className="trail-figure__img"
        />
      </div>
    ),
    embedded: (
      <div className="trail-figure">
        <Image
          src="/intro-image-copilot-highlight.png"
          alt="GitHub Copilot trail highlighted on the mountain map"
          fill
          sizes="(max-width: 1024px) 90vw, 720px"
          className="trail-figure__img"
        />
      </div>
    ),
    comparison: (
      <ComparisonTable
        title="Side-by-Side"
        columns={['Claude Code', 'OpenCode', 'Copilot']}
        rows={[
          { label: 'Interface', values: ['Terminal / CLI', 'TUI / CLI', 'IDE-native'] },
          { label: 'Models', values: ['Claude only', '75+ providers', 'Multi-model'] },
          { label: 'Agentic Mode', values: ['✓', '✓', '✓'] },
          { label: 'MCP Servers', values: ['✓', '✓', '✓'] },
          { label: 'Inline Completions', values: ['✗', '✗', '✓'] },
          { label: 'Open Source', values: ['✗', '✓', '✗'] },
          { label: 'GitHub Integration', values: ['~', '~', '✓'] },
        ]}
      />
    ),
    overlap: (
      <CardGrid
        title="Shared Capabilities"
        columns={3}
        cards={[
          { icon: '🔌', label: 'MCP Servers', desc: 'Extend with external tools' },
          { icon: '🤖', label: 'Agentic Mode', desc: 'Read, edit, run, verify' },
          { icon: '📋', label: 'Custom Instructions', desc: 'Project-level rules' },
          { icon: '🔍', label: 'Code Review', desc: 'Analyze diffs and PRs' },
          { icon: '📦', label: 'Context Management', desc: 'Control what the AI sees' },
          { icon: '💾', label: 'Session Persistence', desc: 'Resume past conversations' },
        ]}
      />
    ),
    tradeoffs: (
      <BeforeAfter
        before={{
          label: 'Wrong match',
          icon: '❌',
          text: 'Picking a tool that fights your workflow. Terminal user forced into an IDE. IDE lover stuck in a TUI. Friction compounds into frustration.',
        }}
        after={{
          label: 'Right match',
          icon: '✅',
          text: 'Picking for where you actually spend your time. The tool disappears into your flow. You think about the problem, not the tool.',
        }}
      />
    ),
    notes: (
      <StepFlow
        title="Decision Framework"
        steps={[
          {
            n: '1',
            label: 'Where do you code?',
            desc: 'Terminal, IDE, or both?',
          },
          {
            n: '2',
            label: 'What ecosystem?',
            desc: 'Locked in, open source, or flexible?',
          },
          {
            n: '3',
            label: 'Combine for coverage',
            desc: 'Most devs use 2+ tools together.',
          },
        ]}
      />
    ),
    install: (
      <CodeAlong
        title="Install & first run"
        time="~10 minutes"
        needs="A terminal and a real project (anything with code)"
        steps={[
          { text: 'Install Claude Code globally with npm.', code: 'npm install -g @anthropic-ai/claude-code' },
          { text: 'Open your project and start the agent.', code: 'cd ~/your-project\nclaude' },
          { text: 'Sign in when prompted (browser opens to authenticate).' },
          { text: 'Ask one open question — no pressure to be clever.', code: '> how does the auth flow work in this codebase?' },
        ]}
        checkpoint="Claude reads several real files in your project and writes a coherent paragraph about how auth actually works. Not a generic explanation — a project-specific one with file paths."
        recovery="Auth fails: re-run the login command claude prints in the terminal. No files referenced: try a more specific question that names a folder, e.g. 'how does src/auth/ work?'"
      />
    ),
  },
  sections: [
    {
      id: 'intro',
      visual: 'intro',
      content: (
        <>
          <h1>The Tool Landscape</h1>
          <p>
            You wouldn&apos;t hire a roofer to fix your plumbing. Both are contractors and both are
            skilled, but the requirements of the job demand the right tools and knowledge.
          </p>
          <p>
            <strong>AI coding tools work in a similar way.</strong> Three dominate the space, and
            they share an engine under the hood. The difference isn&apos;t capability. It&apos;s where
            you already spend your time — terminal, IDE, or somewhere in between.
          </p>
          <p>
            Think of this lesson as three overlapping paths up the same mountain. Each path gets you to the top.
            You just need to understand enough to choose the right path for you.
          </p>
        </>
      ),
    },
    {
      id: 'terminal',
      visual: 'terminal',
      content: (
        <>
          <h2>Claude Code</h2>
          <p>
            That interface on the right? That&apos;s <em>everything</em>. No GUI. No editor plugin.
            You type <code>claude</code> in any project directory and start talking. It
            reads <code>src/auth.ts</code>, edits it, runs <code>npm test</code>, and verifies
            the output — all without leaving the shell.
          </p>
          <p>
            Claude-only models mean the deepest Anthropic integration. If your terminal is
            already open in another pane right now, this is the contractor who shows up speaking
            your language.
          </p>
        </>
      ),
    },
    {
      id: 'freedom',
      visual: 'freedom',
      content: (
        <>
          <h2>OpenCode: The open alternative</h2>
          <p>
            What if you want the agentic loop but refuse to be locked to one provider?
          </p>
          <p>
            Same terminal-native approach, but the key
            difference jumps out: <strong>75+ model providers</strong>. Bring your own API keys,
            run local models, own every byte of data. The agentic capabilities — file editing,
            shell commands, tool use — are identical to Claude Code&apos;s.
          </p>
          <p>
            OpenCode is fully open source. If your team treats vendor independence like a load-bearing
            wall, this is the contractor who works with whatever materials you supply.
          </p>
        </>
      ),
    },
    {
      id: 'embedded',
      visual: 'embedded',
      content: (
        <>
          <h2>GitHub Copilot: The IDE native</h2>
          <p>
            <strong>Copilot doesn&apos;t ask you to leave your editor. It moves in.</strong>
          </p>
          <p>
            Inline completions appear as you type. The Chat panel handles bigger requests. Agent
            mode gives it the same agentic loop — reading files, running commands, verifying
            changes — right inside VS Code. Notice the deep GitHub integration: it reads your
            PRs, issues, and repo context natively.
          </p>
          <p>
            If you can&apos;t remember the last time you opened a standalone terminal, Copilot is
            the contractor who already has keys to your building.
          </p>
        </>
      ),
    },
    {
      id: 'overlap',
      visual: 'comparison',
      content: (
        <>
          <h2>Where they converge</h2>
          <p>
            Scan the comparison table. The checkmarks are nearly identical — MCP servers, agentic
            mode, custom instructions. All three tools have them. The overlap is large and growing
            every month.
          </p>
          <p>
            So what actually separates them? Two rows: <strong>Interface</strong> and{' '}
            <strong>Models</strong>. Where the tool lives and what ecosystem it plugs into.
            Everything else is converging fast.
          </p>
          <p>
            This is why &quot;which tool is best?&quot; is the wrong question. The right question
            is: where do you already work?
          </p>
        </>
      ),
    },
    {
      id: 'tradeoffs',
      visual: 'tradeoffs',
      content: (
        <>
          <h2>The real tradeoff</h2>
          <p>
            A terminal developer forced into an IDE is a plumber handed a roofing nail gun.
            They&apos;ll figure it out — but the friction compounds. Not in minutes. In weeks of
            slower output and quiet frustration.
          </p>
          <p>
            The left side shows that mismatch. The right side shows the alternative: the tool
            disappears into your flow, and you think about the problem instead of the interface.
          </p>
          <p>
            <strong>The right tool is the one you forget you&apos;re using.</strong>
          </p>
        </>
      ),
    },
    {
      id: 'notes',
      visual: 'notes',
      content: (
        <>
          <h2>Choosing your stack</h2>
          <p>
            Start with one question: where do you already spend your time — terminal or IDE?
            That single answer narrows the field to two tools or one.
          </p>
          <p>
            Then layer. Most productive developers use <strong>two or more tools</strong>{' '}
            together: Copilot for inline completions while coding, Claude Code for complex
            multi-file tasks from the terminal. You don&apos;t hire one contractor for an entire
            renovation. You hire the right ones for each job.
          </p>
          <p>
            You don&apos;t choose one forever. You choose where to start this week.
          </p>
        </>
      ),
    },
    {
      id: 'install',
      visual: 'install',
      content: (
        <>
          <h2>Code-along: install and first run</h2>
          <p>
            Reading about a tool you haven&apos;t touched is a recipe for vague intuitions.
            Stop here for ten minutes and run the exercise on the right in a real project. The
            rest of the workshop will land much harder once you&apos;ve seen the agent
            actually read your own files.
          </p>
          <p>
            We&apos;re using Claude Code as the example because the install is a single
            command, but the same shape works for OpenCode (<code>npm i -g opencode-ai</code>)
            or Copilot (install the VS Code extension). Pick whichever one matches where you
            already spend your time.
          </p>
          <p>
            One rule: ask a question about <em>your</em> codebase, not a generic
            &ldquo;hello.&rdquo; The whole point is to feel the moment when the agent reads a
            file you wrote and tells you something true about it.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
