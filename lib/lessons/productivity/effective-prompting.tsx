import { BeforeAfter } from '@/components/visuals/templates/BeforeAfter';
import { CardGrid } from '@/components/visuals/templates/CardGrid';
import { CodeExample } from '@/components/visuals/templates/CodeExample';
import { PromptFramework } from '@/components/visuals/lesson/PromptFramework';
import { CodeAlong } from '@/components/visuals/CodeAlong';
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
    badVsGood: (
      <CodeAlong
        title="Bad prompt vs good prompt"
        time="~10 minutes"
        needs="Any AI coding tool, a project with at least one TypeScript or Python file"
        steps={[
          { text: 'Pick a real (small) bug or task in your project. Write down what success looks like in one sentence.' },
          { text: 'Run the vague version first. Note the time and token count when it finishes.', code: '> fix the bug' },
          { text: 'Reset the session, then run the work-order version of the same task.', code: '> /clear\n> In src/orders/cart.ts, the running total drops the\n> tax line when an item is removed. Fix the root cause,\n> add a regression test, and run npm test after.' },
          { text: 'Compare: number of tool calls, files touched, whether the test passed, and how confident you feel about the diff.' },
        ]}
        checkpoint="The two transcripts feel different — not just at the answer, but at every step. The work-order version probably touched fewer files and got to a verified result first try."
        recovery="Both transcripts look identical: your task may be too small for the difference to show. Try again with a multi-file task. Token counts not visible: most CLIs print them at session end with /cost or /usage."
      />
    ),
    putItDown: (
      <CardGrid
        title="When to put the tool down"
        columns={2}
        cards={[
          {
            icon: '🔐',
            label: 'Security-critical code',
            desc: 'Auth, crypto, payment paths. Anywhere a subtle bug becomes a vulnerability. Humans review first; AI assists, never decides.',
          },
          {
            icon: '🧪',
            label: 'Truly novel algorithms',
            desc: 'Research code or domain-specific logic the model has never seen. Without examples in training data, you get plausible-looking nonsense.',
          },
          {
            icon: '⏱️',
            label: 'Verification > writing time',
            desc: 'A four-line bash script you could write in 30 seconds. Reading the AI version and confirming it carefully takes longer than just typing it.',
          },
          {
            icon: '📋',
            label: 'Regulated / audited code',
            desc: 'Financial, healthcare, government code with traceability requirements. AI-generated code may need extra governance — check your team\u2019s policy first.',
          },
        ]}
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
            Remember from &ldquo;Grown, Not Crafted&rdquo;: under the hood, the model is
            predicting text. <strong>Your prompt is the first few words of the text it&apos;s
            predicting.</strong> Make those words count, and the prediction has somewhere
            specific to go. Make them vague, and you get vague continuations.
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
    {
      id: 'badVsGood',
      visual: 'badVsGood',
      content: (
        <>
          <h2>Code-along: bad prompt vs good prompt</h2>
          <p>
            Reading about CICV is fine. Watching it work on a real bug in your own code is the
            thing that converts &ldquo;makes sense&rdquo; into &ldquo;I am never writing a
            vague prompt again.&rdquo; Take ten minutes and run the exercise on the right.
          </p>
          <p>
            The two prompts are deliberately different in length, but length isn&apos;t the
            point — specificity is. The vague version forces the agent to guess what file you
            mean, what counts as a fix, and whether to verify. The work-order version
            answers all three questions in advance.
          </p>
          <p>
            Pay particular attention to the <em>first thing the agent does</em>. With the
            vague prompt it usually starts by groping around your codebase trying to find
            relevant files. With the work-order version it goes straight to the file you
            named. That detour is the cost of a vague prompt, made visible.
          </p>
        </>
      ),
    },
    {
      id: 'putItDown',
      visual: 'putItDown',
      content: (
        <>
          <h2>When to put the tool down</h2>
          <p>
            The flip side of every productivity guide is the part nobody likes to write: the
            tool isn&apos;t always the right answer. A great work order is wasted on the wrong
            job. Four cases where the right move is to close the chat and write it yourself.
          </p>
          <p>
            <strong>Security-critical paths.</strong> Auth, crypto, payment, anything where a
            subtle bug becomes a vulnerability. The AI is excellent at fluent code; fluent code
            is exactly the kind of code that hides plausible-sounding bugs from a tired
            reviewer. If a human wouldn&apos;t merge it without three other humans looking,
            don&apos;t let an agent decide it on its own.
          </p>
          <p>
            <strong>Novel algorithms with no training data.</strong> Research code, domain-
            specific logic, hardware drivers — anywhere the model is guessing instead of
            recalling. You&apos;ll get plausible-looking nonsense, which is harder to debug
            than obvious nonsense.
          </p>
          <p>
            <strong>When verification costs more than writing.</strong> If the task is a
            four-line bash script, the round trip of prompting, reading the diff, and
            convincing yourself it&apos;s correct takes longer than just typing the four
            lines. Reach for the agent when the task has enough surface area to make the
            handshake worthwhile.
          </p>
          <p>
            <strong>Regulated or audited code.</strong> Finance, healthcare, government
            workloads with traceability or governance requirements may have explicit policies
            about AI-generated code. If you&apos;re shipping at a place like that, check the
            policy <em>before</em> you ship the diff, not after.
          </p>
          <p>
            None of these are &ldquo;AI is bad.&rdquo; They&apos;re all &ldquo;know which
            jobs deserve a human first.&rdquo; The fluent users of these tools are the ones
            who are quickest to walk away when the situation calls for it.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
