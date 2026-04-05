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
            <strong>The difference between a 30-second fix and a 30-minute
            rabbit hole is one sentence of context.</strong>
          </p>
          <p>
            Look at the canvas. The gray prompt and the specific prompt describe
            the same task. Notice how &quot;fix the login bug&quot; gives the agent
            nothing to work with — no file, no symptom, no success criteria.
          </p>
          <p>
            Specificity isn&apos;t extra work. It&apos;s the work that prevents
            all the other work. Four elements turn a guess into a guaranteed
            first-pass hit.
          </p>
        </>
      ),
    },
    {
      id: 'framework',
      visual: 'promptFramework',
      content: (
        <>
          <h3>Four colors, four jobs</h3>
          <p>
            Look at the prompt on the canvas. Four colors, four jobs. Hover over
            the blue underline — that&apos;s <strong>Context</strong>, telling
            the agent exactly where to look.
          </p>
          <p>
            Now hover over green, orange, and purple in turn. Each color maps to
            one element: Intent, Constraints, Verification. Below the prompt, the
            gray dashed box shows the same task with zero signal.
          </p>
          <p>
            Click a legend pill to isolate one element and dim the rest. The
            bigger the task, the more colors your prompt should carry. A one-line
            fix might only need green.
          </p>
        </>
      ),
    },
    {
      id: 'context',
      visual: 'contextElement',
      content: (
        <>
          <h3>Point the flashlight, don&apos;t hand over the map</h3>
          <p>
            Read the prompt on the canvas. It names <code>src/auth/</code> and
            specifically calls out token refresh — two lines that save the agent
            from reading your entire codebase.
          </p>
          <p>
            Use <code>@src/auth/refresh.ts</code> in tools that support mentions,
            or just spell the path out. Every file you name is a file the agent
            doesn&apos;t waste context discovering on its own.
          </p>
          <p>
            Precise context also prevents a subtle failure: the agent finding a
            similar-looking function in the wrong module and &quot;fixing&quot;
            code that was never broken. Next, we add intent and constraints.
          </p>
        </>
      ),
    },
    {
      id: 'intent',
      visual: 'intentElement',
      content: (
        <>
          <h3>A corridor, not a cage</h3>
          <p>
            Look at the canvas. The first two lines are intent — reproduce the
            timeout failure and fix the root cause. The last three lines are
            constraints: no new deps, follow <code>orders.ts</code> patterns,
            keep the public API unchanged.
          </p>
          <p>
            Together they form a corridor: wide enough for the agent to pick its
            own approach, narrow enough to stop it from pulling in a new library
            when your codebase already has bcrypt wired up.
          </p>
          <p>
            Without constraints, the agent optimizes for &quot;working code.&quot;
            With them, it optimizes for code that belongs in <em>your</em> project.
            The last element — verification — closes the loop.
          </p>
        </>
      ),
    },
    {
      id: 'verification',
      visual: 'verificationElement',
      content: (
        <>
          <h3>Verification turns a hope into a proof</h3>
          <p>
            Look at the two states on the canvas. Without verification, you are
            the only feedback loop — every line reviewed by eye, every edge case
            caught by intuition.
          </p>
          <p>
            With verification, the agent runs <code>npm test</code>, sees
            failures, and iterates on its own before you ever open the diff.
            Adding &quot;Run the tests after&quot; to your prompt costs five
            words and saves entire review cycles.
          </p>
          <p>
            This is the single highest-leverage element in any prompt. The next
            lesson builds an entire workflow around it: Explore, Plan, Build.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
