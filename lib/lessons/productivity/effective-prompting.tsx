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
            You wouldn&apos;t call a plumber and say &quot;fix the water.&quot;
            You&apos;d say the kitchen sink is dripping when the faucet is closed,
            it&apos;s the pipe under the cabinet, and please don&apos;t replace
            the whole faucet. That&apos;s a work order. A good prompt is the same thing.
          </p>
          <p>
            The vague prompt on the right gives the agent nothing — no file, no
            symptom, no way to know when the job is done. The specific one is a
            complete work order. Same task, wildly different outcomes.
          </p>
          <p>
            Four elements separate the two. Master them and you stop filing
            incomplete work orders for good.
          </p>
        </>
      ),
    },
    {
      id: 'framework',
      visual: 'promptFramework',
      content: (
        <>
          <h2>The CICV work order</h2>
          <p>
            Hover over the blue underline — that&apos;s <strong>Context</strong>,
            the &quot;where&quot; on the work order. Green is <strong>Intent</strong>,
            the &quot;what.&quot; Orange is <strong>Constraints</strong>, the
            &quot;don&apos;t touch.&quot; Purple is <strong>Verification</strong>,
            the &quot;how I&apos;ll check your work.&quot;
          </p>
          <p>
            Click any legend pill to isolate one element and dim the rest. Below
            the prompt, the gray dashed box shows what the same task looks like
            without any of these signals. That&apos;s the &quot;fix the
            water&quot; version.
          </p>
          <p>
            A one-line typo fix might only need Intent. A multi-file refactor
            needs all four. The bigger the job, the more complete the work order.
          </p>
        </>
      ),
    },
    {
      id: 'context',
      visual: 'contextElement',
      content: (
        <>
          <h2>A flashlight in a dark warehouse</h2>
          <p>
            Without context, the agent walks into your codebase like a dark
            warehouse — groping along every shelf, reading labels it
            doesn&apos;t need. The prompt on the right hands it a flashlight:
            {' '}<code>src/auth/</code>, token refresh,{' '}
            <code>@src/auth/refresh.ts</code>. Three details that illuminate
            exactly the shelf it needs.
          </p>
          <p>
            Every file you name is a file the agent doesn&apos;t waste tokens
            discovering on its own. Use <code>@</code>-mentions in tools that
            support them, or just spell the path out.
          </p>
          <p>
            Precise context also prevents a sneaky failure mode: the agent
            finding a similar-looking function in the wrong module and
            &quot;fixing&quot; code that was never broken. Point the flashlight.
            Don&apos;t hand over the whole warehouse map.
          </p>
        </>
      ),
    },
    {
      id: 'intent',
      visual: 'intentElement',
      content: (
        <>
          <h2>Guardrails, not a cage</h2>
          <p>
            Think of constraints as guardrails on a mountain road. They
            don&apos;t slow you down — they keep you from going over the edge.
            The first two lines in this prompt are intent: reproduce the timeout,
            fix the root cause. The last three are guardrails: no new deps,
            follow <code>orders.ts</code> patterns, keep the public API stable.
          </p>
          <p>
            Together they form a corridor wide enough for the agent to choose
            its own approach, narrow enough to stop it from pulling in a new
            library when your codebase already has bcrypt wired up.
          </p>
          <p>
            Without guardrails, the agent optimizes for &quot;working code.&quot;
            With them, it optimizes for code that belongs in <em>your</em>{' '}
            project. One element remains — the one that closes the loop.
          </p>
        </>
      ),
    },
    {
      id: 'verification',
      visual: 'verificationElement',
      content: (
        <>
          <h2>The difference between &quot;I think I fixed it&quot; and
            &quot;here&apos;s proof&quot;</h2>
          <p>
            Without verification, you are the only feedback loop. Every line
            reviewed by eye. Every edge case caught by gut feeling. That&apos;s
            the &quot;I think I fixed it&quot; side on the right.
          </p>
          <p>
            Add five words — &quot;Run the tests after&quot; — and the agent
            runs <code>npm test</code>, sees failures, and iterates on its own
            before you ever open the diff. That&apos;s proof, not hope.
          </p>
          <p>
            Verification is the highest-leverage element on any work order. The
            next lesson builds an entire workflow around it: Explore, Plan, Build.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
