import { IntroVisual } from '@/components/visuals/IntroVisual';
import { AnimatedMentalShift } from '@/components/visuals/remotion/MentalShiftPlayer';
import { AgentAppears } from '@/components/visuals/agentic-loop/AgentAppears';
import { PhaseRead } from '@/components/visuals/agentic-loop/PhaseRead';
import { PhaseThink } from '@/components/visuals/agentic-loop/PhaseThink';
import { PhaseAct } from '@/components/visuals/agentic-loop/PhaseAct';
import { PhaseVerify } from '@/components/visuals/agentic-loop/PhaseVerify';
import { CycleDiagram } from '@/components/visuals/agentic-loop/CycleDiagram';
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
    phaseRead: <PhaseRead />,
    phaseThink: <PhaseThink />,
    phaseAct: <PhaseAct />,
    phaseVerify: <PhaseVerify />,
    cycleDiagram: <CycleDiagram />,
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
            <strong>Watch the terminal on the canvas. That&apos;s an AI coding tool fixing a bug.</strong>
          </p>
          <p>
            No copy-paste. No switching windows. The tool reads the error, finds the file,
            edits the code, and runs the tests — all in one sequence. You didn&apos;t touch the keyboard
            after the first prompt.
          </p>
          <p>
            That&apos;s the shift. You stop being an operator and start being a delegator.
          </p>
        </>
      ),
    },
    {
      id: 'mental-shift',
      visual: 'mentalShift',
      content: (
        <>
          <h3>The mental shift</h3>
          <p>
            <strong>A chatbot is texting an expert. An AI coding tool is handing them your laptop.</strong>
          </p>
          <p>
            Watch the animation on the canvas. See the transition from &quot;advice&quot; to
            &quot;action&quot; — the expert can browse your files, open your terminal, run commands,
            and make changes. They just check with you before doing anything risky.
          </p>
          <p>
            Once you internalize this distinction, you&apos;ll never write a prompt the same way again.
          </p>
        </>
      ),
    },
    {
      id: 'agentic-loop-intro',
      visual: 'agentAppears',
      content: (
        <>
          <h3>The agentic loop</h3>
          <p>
            Every AI coding tool — Claude Code, OpenCode, Copilot — runs the same pattern under the hood.
          </p>
          <p>
            Look at the canvas. An <strong>agent</strong> appears: software that perceives its
            environment, makes decisions, and takes action. Not generating text for you to paste.
            Actually doing things in your codebase.
          </p>
          <p>
            The next four sections break down exactly what happens inside that loop.
          </p>
        </>
      ),
    },
    {
      id: 'phase-read',
      visual: 'phaseRead',
      content: (
        <>
          <h3>Phase 1: Read</h3>
          <p>
            <strong>The agent opens its eyes before it touches anything.</strong>
          </p>
          <p>
            Watch the canvas — the agent reads <code>src/auth.ts</code>, greps for related
            imports, checks <code>git log</code>, and pulls in the error message. It&apos;s
            building a mental model of what exists before making a single change.
          </p>
          <p>
            Skip this phase and the agent hallucinates. That&apos;s why context management
            (the next lesson) matters so much.
          </p>
        </>
      ),
    },
    {
      id: 'phase-think',
      visual: 'phaseThink',
      content: (
        <>
          <h3>Phase 2: Think</h3>
          <p>
            What needs to change? What&apos;s the safest path? Are there edge cases?
          </p>
          <p>
            Look at the canvas. The agent connects the dots — error message, source code,
            expected behavior — and forms a plan. This reasoning step is invisible in the UI
            but it&apos;s where the model spends most of its tokens.
          </p>
          <p>
            Better input context means better reasoning. Garbage in, garbage plan out.
          </p>
        </>
      ),
    },
    {
      id: 'phase-act',
      visual: 'phaseAct',
      content: (
        <>
          <h3>Phase 3: Act</h3>
          <p>
            <strong>This is the step that separates an agent from a chatbot.</strong>
          </p>
          <p>
            Watch the canvas. The agent edits <code>src/auth.ts:45</code>, runs{' '}
            <code>npm test</code>, creates a branch. It has hands now — it modifies your
            codebase directly instead of suggesting what you should change.
          </p>
          <p>
            Every action is logged. You&apos;ll learn to control which actions need your
            approval in the Permissions lesson.
          </p>
        </>
      ),
    },
    {
      id: 'phase-verify',
      visual: 'phaseVerify',
      content: (
        <>
          <h3>Phase 4: Verify</h3>
          <p>
            Did the fix actually work? The agent doesn&apos;t assume — it checks.
          </p>
          <p>
            Watch the canvas. It runs the test suite, reads the output, compares against
            expectations. If tests fail, it loops back to Read with the new error — rethinks,
            tries a different approach, verifies again.
          </p>
          <p>
            This self-correction loop is what makes agents reliable. A chatbot gives you one
            shot. An agent iterates until the tests pass.
          </p>
        </>
      ),
    },
    {
      id: 'the-cycle',
      visual: 'cycleDiagram',
      content: (
        <>
          <h3>The full cycle</h3>
          <p>
            <strong>Watch the terminal cycle on the canvas: Read, Think, Act, Verify — then repeat.</strong>
          </p>
          <p>
            Notice something familiar? This is exactly what <em>you</em> do when you debug:
            read the error, reason about the cause, make a change, test it. The agent runs
            the same loop — just faster and without losing context between steps.
          </p>
          <p>
            Every AI coding tool is this loop with different packaging around it.
          </p>
        </>
      ),
    },
    {
      id: 'tools',
      visual: 'builtInTools',
      content: (
        <>
          <h3>Built-in tools</h3>
          <p>
            <strong>Five tools — watch them cycle on the canvas.</strong>
          </p>
          <p>
            Read files, search code, edit files, run shell commands, manage browser sessions.
            The agent picks which tools to chain based on your request. Ask it to &quot;fix the
            failing test in <code>auth.test.ts</code>&quot; and it might use all five in a single loop.
          </p>
          <p>
            These built-in tools are just the starting set. MCP servers let you add
            databases, APIs, and custom tooling — but that&apos;s a later lesson.
          </p>
        </>
      ),
    },
    {
      id: 'implementations',
      visual: 'implementations',
      content: (
        <>
          <h3>Same loop, three interfaces</h3>
          <p>
            Look at the three cards on the canvas. Same agentic loop. Different homes.
          </p>
          <p>
            <strong>Claude Code</strong> — your terminal. Type natural language, agent acts in
            your project directory. <strong>OpenCode</strong> — beautiful TUI, open source, any
            LLM provider. <strong>Copilot</strong> — lives inside VS Code with Chat and Agent modes.
          </p>
          <p>
            The interface changes. The Read-Think-Act-Verify engine underneath does not.
          </p>
        </>
      ),
    },
    {
      id: 'why',
      visual: 'whyMatters',
      content: (
        <>
          <h3>Why this changes your prompts</h3>
          <p>
            <strong>Stop asking &quot;write me a function.&quot; Start asking &quot;fix the failing
            test in <code>auth.test.ts</code>.&quot;</strong>
          </p>
          <p>
            Look at the canvas. When you understand the loop, you give the agent a goal
            instead of a script. It figures out which files to read, what to change, and how
            to verify — because that&apos;s what the loop is built to do.
          </p>
          <p>
            The rest of this workshop teaches you to feed the loop better context, set the
            right permissions, and structure prompts that let the agent do its best work.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
