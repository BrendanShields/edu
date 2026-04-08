import { IntroVisual } from '@/components/visuals/IntroVisual';
import { AnimatedMentalShift } from '@/components/visuals/remotion/MentalShiftPlayer';
import { AgentAppears } from '@/components/visuals/agentic-loop/AgentAppears';
import { ScrollSyncedTerminal } from '@/components/visuals/lesson/ScrollSyncedTerminal';
import { AgenticLoop } from '@/components/visuals/AgenticLoop';
import { BuiltInTools } from '@/components/visuals/BuiltInTools';
import { ClaudeCodeCard, OpenCodeCard, CopilotCard } from '@/components/visuals/ToolCards';
import { WhyMatters } from '@/components/visuals/WhyMatters';
import type { LessonDef } from '../types';

const lesson: LessonDef = {
  slug: 'how-tools-work',
  module: 'foundations',
  title: 'How AI Coding Tools Work',
  visuals: {
    intro: <IntroVisual />,
    mentalShift: <AnimatedMentalShift />,
    agentAppears: <AgentAppears />,
    scrollTerminal: <ScrollSyncedTerminal />,
    cycleDiagram: <AgenticLoop />,
    builtInTools: <BuiltInTools />,
    implementations: <div className="space-y-3"><ClaudeCodeCard /><OpenCodeCard /><CopilotCard /></div>,
    whyMatters: <WhyMatters />,
  },
  sections: [
    {
      id: 'intro',
      visual: 'intro',
      content: (
        <>
          <h1>How AI Coding Tools Work</h1>
          <p>
            The terminal on the right is fixing a bug. No copy-paste, no switching windows.
            It reads the error, finds the file, edits the code, and runs the tests — all in
            one sequence. You didn&apos;t touch the keyboard after the first prompt.
          </p>
          <p>
            <strong>That&apos;s the shift.</strong> You stop being an operator and start being a
            delegator. Like handing your laptop to a senior developer and describing the problem
            instead of dictating keystrokes.
          </p>
          <p>
            This lesson shows you what happens inside that handoff.
          </p>
        </>
      ),
    },
    {
      id: 'mental-shift',
      visual: 'mentalShift',
      content: (
        <>
          <h2>The mental shift</h2>
          <p>
            Imagine two ways of getting help. In the first, you text an expert: &quot;How do I
            fix this auth bug?&quot; They text back advice. You do the typing. In the second, you
            hand them your laptop. They browse your files, open your terminal, and fix it
            themselves — checking with you before anything risky.
          </p>
          <p>
            The animation shows that transition from advice to action. A chatbot is the text
            message. An AI coding tool is the laptop handoff.
          </p>
          <p>
            Once you internalize this, you&apos;ll never write a prompt the same way again.
          </p>
        </>
      ),
    },
    {
      id: 'agentic-loop-intro',
      visual: 'agentAppears',
      content: (
        <>
          <h2>The agentic loop</h2>
          <p>
            Every AI coding tool — Claude Code, OpenCode, Copilot — runs the same pattern
            under the hood. You wouldn&apos;t dictate keystrokes to a senior developer. You&apos;d
            describe the problem and let them drive.
          </p>
          <p>
            That&apos;s what an <strong>agent</strong> is: software that perceives its environment,
            makes decisions, and takes action. Not generating text for you to paste. Actually
            doing things in your codebase, the way a pair programmer would.
          </p>
          <p>
            The next four sections break down exactly what happens inside that loop.
          </p>
        </>
      ),
    },
    {
      id: 'phase-read',
      visual: 'scrollTerminal',
      content: (
        <>
          <h2>Phase 1: Read</h2>
          <p>
            Think of this as the agent&apos;s <strong>eyes</strong>. Before touching anything,
            it reads <code>src/auth.ts</code>, greps for related imports,
            checks <code>git log</code>, pulls in the error message. It&apos;s building a mental
            model of what exists before making a single change.
          </p>
          <p>
            A surgeon doesn&apos;t cut before looking at the scan. Skip this phase and the agent
            hallucinates — confidently editing files it hasn&apos;t read.
          </p>
          <p>
            That&apos;s why context management (the next lesson) matters more than anything else
            you&apos;ll learn here.
          </p>
        </>
      ),
    },
    {
      id: 'phase-think',
      visual: 'scrollTerminal',
      content: (
        <>
          <h2>Phase 2: Think</h2>
          <p>
            What needs to change? What&apos;s the safest path? Are there edge cases the tests
            don&apos;t cover?
          </p>
          <p>
            This is the agent&apos;s <strong>memory</strong> at work — connecting dots between the
            error message, source code, and expected behavior to form a plan. The reasoning step
            is invisible in the UI, but it&apos;s where the model spends most of its tokens.
          </p>
          <p>
            Better input context means better reasoning. Feed it noise, get a noise plan back.
          </p>
        </>
      ),
    },
    {
      id: 'phase-act',
      visual: 'scrollTerminal',
      content: (
        <>
          <h2>Phase 3: Act</h2>
          <p>
            <strong>This is the step that separates an agent from a chatbot.</strong>
          </p>
          <p>
            The agent has <strong>hands</strong> now. It edits <code>src/auth.ts:45</code>,
            runs <code>npm test</code>, creates a branch. It modifies your codebase directly
            instead of suggesting what you should change. Every action gets logged — you&apos;ll
            learn to control which ones need your approval in the Permissions lesson.
          </p>
          <p>
            A chatbot writes you a letter. An agent picks up the wrench.
          </p>
        </>
      ),
    },
    {
      id: 'phase-verify',
      visual: 'scrollTerminal',
      content: (
        <>
          <h2>Phase 4: Verify</h2>
          <p>
            Did the fix actually work? The agent doesn&apos;t assume — it checks.
          </p>
          <p>
            It runs the test suite, reads the output, compares against expectations. If tests
            fail, it loops back to Read with the new error — rethinks, tries a different
            approach, verifies again. This is the agent&apos;s <strong>ears</strong>, listening to
            the outside world for confirmation.
          </p>
          <p>
            A chatbot gives you one shot. An agent iterates until the tests pass.
          </p>
        </>
      ),
    },
    {
      id: 'the-cycle',
      visual: 'cycleDiagram',
      content: (
        <>
          <h2>The full cycle</h2>
          <p>
            Read, Think, Act, Verify — then repeat. Sound familiar?
          </p>
          <p>
            This is exactly what <em>you</em> do when you debug: read the error, reason about
            the cause, make a change, test it. The agent runs the same loop — just faster and
            without losing focus between steps. It doesn&apos;t check Slack mid-debug.
          </p>
          <p>
            Every AI coding tool is this loop with different packaging around it. Once you see
            the pattern, you see it everywhere.
          </p>
        </>
      ),
    },
    {
      id: 'tools',
      visual: 'builtInTools',
      content: (
        <>
          <h2>Built-in tools: the five senses</h2>
          <p>
            An agent without tools is a brain in a jar. These five built-in tools are its
            senses: <strong>Read</strong> (eyes on your files), <strong>Search</strong>{' '}
            (memory across the codebase), <strong>Edit</strong> (hands to change
            code), <strong>Bash</strong> (voice to run commands), and{' '}
            <strong>Web</strong> (ears to the outside world).
          </p>
          <p>
            The agent picks which senses to chain based on your request. Ask it to &quot;fix the
            failing test in <code>auth.test.ts</code>&quot; and it might use all five in a single loop.
          </p>
          <p>
            These are just the starting set. MCP servers let you add databases, APIs, and
            custom tooling — but that&apos;s a later lesson.
          </p>
        </>
      ),
    },
    {
      id: 'implementations',
      visual: 'implementations',
      content: (
        <>
          <h2>Same loop, three interfaces</h2>
          <p>
            Three cards, three homes, one engine.
          </p>
          <p>
            <strong>Claude Code</strong> — your terminal. Type natural language, the agent acts
            in your project directory. <strong>OpenCode</strong> — beautiful TUI, open source,
            any LLM provider. <strong>Copilot</strong> — lives inside VS Code with Chat and
            Agent modes. The interface changes. The Read-Think-Act-Verify engine underneath
            does not.
          </p>
          <p>
            Choosing between them is a topic for the Tool Landscape lesson. Here, just notice
            the shared skeleton.
          </p>
        </>
      ),
    },
    {
      id: 'why',
      visual: 'whyMatters',
      content: (
        <>
          <h2>Why this changes your prompts</h2>
          <p>
            Here&apos;s the payoff. Stop asking &quot;write me a function.&quot; Start
            asking &quot;fix the failing test in <code>auth.test.ts</code>.&quot;
          </p>
          <p>
            When you understand the loop, you give the agent a <em>goal</em> instead of a
            script. It figures out which files to read, what to change, and how to verify —
            because that&apos;s what the loop is built to do. You describe the destination; the
            senior dev picks the route.
          </p>
          <p>
            The rest of this workshop teaches you to feed the loop better context, set the
            right permissions, and write prompts that let the agent do its best work.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
