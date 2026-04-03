import { IntroVisual } from '@/components/visuals/IntroVisual';
import { MentalShift } from '@/components/visuals/MentalShift';
import { AgenticLoop } from '@/components/visuals/AgenticLoop';
import { BuiltInTools } from '@/components/visuals/BuiltInTools';
import { ToolImplementations } from '@/components/visuals/ToolImplementations';
import { WhyMatters } from '@/components/visuals/WhyMatters';
import type { LessonDef } from '../types';

const lesson: LessonDef = {
  slug: 'how-tools-work',
  module: 'foundations',
  title: 'How AI Coding Tools Work',
  visuals: {
    intro: <IntroVisual />,
    mentalShift: <MentalShift />,
    agenticLoop: <AgenticLoop />,
    builtInTools: <BuiltInTools />,
    implementations: <ToolImplementations />,
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
            You&apos;ve probably used ChatGPT or a similar chatbot. You type a question, get text back.
            If you want to change code, you copy the suggestion, paste it into your editor, and hope it works.
          </p>
          <p>AI coding tools are fundamentally different.</p>
          <p>
            They don&apos;t just generate text — they take action. They read your files, edit your code,
            run your tests, and verify their own work. You stop being an operator and start being a delegator.
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
            Think of it this way: a chatbot is like texting an expert for advice.
            An AI coding tool is like having that expert sit at your computer.
          </p>
          <p>
            The expert can browse your files, open your terminal, run commands, and make changes —
            but they always check with you before doing anything risky.
          </p>
          <p>This changes everything about how you work with AI.</p>
        </>
      ),
    },
    {
      id: 'agentic-loop',
      visual: 'agenticLoop',
      content: (
        <>
          <h3>The agentic loop</h3>
          <p>
            Every AI coding tool follows the same core pattern. We call it the <strong>agentic loop</strong>:
          </p>
          <p>
            <strong>Read</strong> — The agent gathers context. It reads files, searches your codebase,
            looks at error messages, checks git history.
          </p>
          <p>
            <strong>Think</strong> — It analyzes what it found and plans an approach.
            What needs to change? What&apos;s the safest path?
          </p>
          <p>
            <strong>Act</strong> — It makes changes. Edits a file, runs a command, creates a branch.
          </p>
          <p>
            <strong>Verify</strong> — It checks its work. Runs tests, reads the output,
            compares against expectations.
          </p>
          <p>
            Then it loops back. If the tests fail, it reads the error, thinks about what went wrong,
            tries a different approach, and verifies again.
          </p>
        </>
      ),
    },
    {
      id: 'tools',
      visual: 'builtInTools',
      content: (
        <>
          <h3>What the agent can do</h3>
          <p>
            Each tool gives the AI a set of <strong>built-in tools</strong> — specific capabilities it can use.
          </p>
          <p>
            The agent decides which tools to use based on your request. Ask it to fix a bug,
            and it might read the failing test, search for related code, edit the source file,
            and run the tests again — all in one loop.
          </p>
        </>
      ),
    },
    {
      id: 'implementations',
      visual: 'implementations',
      content: (
        <>
          <h3>How each tool implements the loop</h3>
          <p>
            <strong>Claude Code</strong> runs in your terminal. You type natural language, and the agent
            reads, edits, and runs commands directly in your project directory.
          </p>
          <p>
            <strong>OpenCode</strong> gives you a beautiful TUI with the same agentic capabilities.
            It&apos;s open source and works with any LLM provider.
          </p>
          <p>
            <strong>GitHub Copilot</strong> lives inside your IDE. Its Chat and Agent modes give it
            the same agentic loop — reading files, running commands, and verifying changes.
          </p>
        </>
      ),
    },
    {
      id: 'why',
      visual: 'whyMatters',
      content: (
        <>
          <h3>Why this matters for you</h3>
          <p>
            Understanding the loop changes how you use these tools. Instead of asking
            &quot;write me a function,&quot; you ask &quot;fix the failing test in auth.test.ts&quot; —
            and the agent figures out the rest.
          </p>
          <p>
            The better you understand what the agent can see and do, the better your results.
            That&apos;s what the rest of this workshop is about.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
