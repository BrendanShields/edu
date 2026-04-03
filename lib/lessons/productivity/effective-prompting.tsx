import { BeforeAfter } from '@/components/visuals/templates/BeforeAfter';
import { CodeExample } from '@/components/visuals/templates/CodeExample';
import { PromptFramework } from '@/components/visuals/lesson/PromptFramework';
import type { LessonDef } from '../types';

const lesson: LessonDef = {
  slug: 'effective-prompting',
  module: 'productivity',
  title: 'Effective Prompting',
  visuals: {
    badPrompt: (
      <BeforeAfter
        before={{
          label: 'Vague prompt',
          icon: '😶',
          text: '"fix the login bug" — the agent sees nothing, guesses everything',
        }}
        after={{
          label: 'Specific prompt',
          icon: '🎯',
          text: 'Scoped to files, clear intent, verification criteria included',
        }}
      />
    ),
    promptFramework: <PromptFramework />,
    contextElement: (
      <CodeExample
        title="Scoping Context"
        language="prompt"
        code={`Check the auth flow in src/auth/,\nespecially token refresh.\n\nUse @src/auth/refresh.ts for reference.`}
      />
    ),
    intentElement: (
      <CodeExample
        title="Intent + Constraints"
        language="prompt"
        code={`Reproduce the session timeout failure\nand fix the root cause.\n\nDon't add new dependencies.\nFollow the existing pattern in orders.ts.\nKeep the public API unchanged.`}
      />
    ),
    verificationElement: (
      <BeforeAfter
        before={{
          label: 'No verification',
          icon: '🤞',
          text: 'You become the only feedback loop',
        }}
        after={{
          label: 'With verification',
          icon: '🔁',
          text: 'Agent runs tests, iterates on its own, self-corrects',
        }}
        footer="Verification is the highest-leverage element"
      />
    ),
  },
  sections: [
    {
      id: 'intro',
      visual: 'badPrompt',
      content: (
        <>
          <h1>Effective Prompting</h1>
          <p>
            A vague prompt forces the agent to guess. It picks the wrong file,
            misunderstands the bug, and burns through context fixing the wrong
            thing.
          </p>
          <p>
            A specific prompt gives the agent everything it needs to succeed on
            the first try. The difference is a framework you can learn in five
            minutes.
          </p>
        </>
      ),
    },
    {
      id: 'framework',
      visual: 'promptFramework',
      content: (
        <>
          <h3>The 4-element framework</h3>
          <p>
            Every great prompt has four parts: <strong>Context</strong> (where to
            look), <strong>Intent</strong> (what you want), <strong>Constraints</strong>{' '}
            (what to avoid), and <strong>Verification</strong> (how to prove it
            worked).
          </p>
          <p>
            You don&apos;t need all four for every prompt. A one-line fix might
            only need intent. But the bigger the task, the more elements you
            should include.
          </p>
        </>
      ),
    },
    {
      id: 'context',
      visual: 'contextElement',
      content: (
        <>
          <h3>Context: where to look</h3>
          <p>
            The agent has access to your entire codebase, but it doesn&apos;t
            know where to start. Pointing it to specific files or directories
            saves time and prevents it from reading unrelated code.
          </p>
          <p>
            Use <code>@</code>-mentions in tools that support them, or just name
            the paths directly. The more precise you are, the less context the
            agent wastes on exploration.
          </p>
        </>
      ),
    },
    {
      id: 'intent',
      visual: 'intentElement',
      content: (
        <>
          <h3>Intent and constraints</h3>
          <p>
            Intent tells the agent <em>what</em> to do. Constraints tell it what{' '}
            <em>not</em> to do. Together they form a corridor: wide enough for
            the agent to find creative solutions, narrow enough to prevent bad
            ones.
          </p>
          <p>
            &quot;Don&apos;t add new dependencies&quot; and &quot;follow the existing
            pattern&quot; are constraints that prevent the agent from reaching for
            a shiny new library when your codebase already has an established
            approach.
          </p>
        </>
      ),
    },
    {
      id: 'verification',
      visual: 'verificationElement',
      content: (
        <>
          <h3>Verification: the multiplier</h3>
          <p>
            Without verification, you are the only feedback loop. You read every
            line, test manually, and catch edge cases yourself.
          </p>
          <p>
            With verification, the agent tests its own work. It runs the suite,
            sees failures, and iterates — all before you review anything. This
            is the single highest-leverage element you can add to a prompt.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
