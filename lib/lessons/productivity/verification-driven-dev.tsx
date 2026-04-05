import { TitleCard } from '@/components/visuals/templates/TitleCard';
import { BeforeAfter } from '@/components/visuals/templates/BeforeAfter';
import { CodeExample } from '@/components/visuals/templates/CodeExample';
import { CardGrid } from '@/components/visuals/templates/CardGrid';
import { VerificationLayers } from '@/components/visuals/lesson/VerificationLayers';
import type { LessonDef } from '../types';

const lesson: LessonDef = {
  slug: 'verification-driven-dev',
  module: 'productivity',
  title: 'Verification-Driven Development',
  visuals: {
    anxiety: (
      <TitleCard
        icon="✅"
        title="Verification-Driven Development"
        subtitle="Give the AI something to verify against"
      />
    ),
    testFirstApproach: (
      <BeforeAfter
        before={{
          label: 'Review 200 lines',
          icon: '😰',
          text: 'Reading code on faith, hoping to catch edge cases by eye',
        }}
        after={{
          label: 'Review 20 lines of tests',
          icon: '🧪',
          text: 'Assertions define correctness — agent iterates until green',
        }}
      />
    ),
    verificationSpectrum: <VerificationLayers />,
    testExample: (
      <CodeExample
        title="Tests-First Prompt"
        language="prompt"
        code={`Write tests for a RateLimiter class:\n- Allows 10 requests per minute per user\n- Returns 429 after limit exceeded\n- Resets after the window expires\n\nRun the tests (they should fail),\nthen implement RateLimiter to make them pass.`}
      />
    ),
    stackingLayers: (
      <CardGrid
        title="Stacking Verification"
        columns={2}
        cards={[
          { icon: '🧪', label: 'Tests', desc: 'Catch logic errors' },
          { icon: '📏', label: 'Linters', desc: 'Catch style issues' },
          { icon: '🔷', label: 'Type checkers', desc: 'Catch interface mismatches' },
          { icon: '📸', label: 'Screenshots', desc: 'Catch UI regressions' },
        ]}
      />
    ),
  },
  sections: [
    {
      id: 'intro',
      visual: 'anxiety',
      content: (
        <>
          <h1>Verification-Driven Development</h1>
          <p>
            <strong>Would you trust a contractor who never checks their own
            work?</strong> Without verification, every AI-generated change is
            exactly that — 200 lines of code accepted on faith.
          </p>
          <p>
            Look at the canvas. That subtitle is the entire philosophy: give the
            AI something to verify against. Define &quot;correct&quot; up front,
            and the agent iterates until it gets there. Your job shifts from
            reading code to reviewing test definitions.
          </p>
        </>
      ),
    },
    {
      id: 'testsFirst',
      visual: 'testFirstApproach',
      content: (
        <>
          <h3>Review 20 lines of tests, not 200 lines of code</h3>
          <p>
            Look at the two states on the canvas. On the left: &quot;Review 200
            lines&quot; — reading code on faith, hoping to catch edge cases by
            eye. On the right: &quot;Review 20 lines of tests&quot; — assertions
            that define correctness, with the agent iterating until green.
          </p>
          <p>
            Ask the agent to write tests before implementation. The tests become
            the spec — what the feature does, which edge cases matter, what
            failure looks like. Once you approve those 20 lines, the agent is
            free to write whatever implementation satisfies them.
          </p>
          <p>
            This is the single biggest productivity lever in AI-assisted
            development. But tests alone have a blind spot — watch the next
            canvas to see it.
          </p>
        </>
      ),
    },
    {
      id: 'spectrum',
      visual: 'verificationSpectrum',
      content: (
        <>
          <h3>Tests pass. The type checker doesn&apos;t.</h3>
          <p>
            Watch each verification layer run on the canvas. All green — tests
            pass, linter passes, types pass. Every layer confirms the fix. Now
            click <strong>&quot;What tests miss.&quot;</strong>
          </p>
          <p>
            Tests still pass. Linter still passes. But <code>tsc --noEmit</code>{' '}
            catches it: <code>src/auth.ts:12</code> returns a string where a
            number is expected. Without that third layer, a type mismatch ships
            to production with a green test suite.
          </p>
          <p>
            Each layer catches a different class of error. Tests catch logic.
            Linters catch style. Type checkers catch interface mismatches. Stack
            them all to close every gap.
          </p>
        </>
      ),
    },
    {
      id: 'example',
      visual: 'testExample',
      content: (
        <>
          <h3>Red, green, done</h3>
          <p>
            Read the prompt on the canvas. It asks the agent to write tests for a{' '}
            <code>RateLimiter</code> class — 10 requests per minute per user, 429
            after the limit, reset after the window. Then: run them (they should
            fail), and implement until they pass.
          </p>
          <p>
            Notice what the prompt does <em>not</em> specify: data structures,
            algorithms, or internal state. It defines behavior, not
            implementation. The agent is free to choose any approach as long as
            the assertions hold.
          </p>
          <p>
            That&apos;s the pattern: you own the spec, the agent owns the code.
            The final section shows you how to stack multiple verification layers
            into a single prompt.
          </p>
        </>
      ),
    },
    {
      id: 'stacking',
      visual: 'stackingLayers',
      content: (
        <>
          <h3>Four gates, zero blind spots</h3>
          <p>
            Look at the four cards on the canvas. Tests catch logic errors.
            Linters catch style issues. Type checkers catch interface mismatches.
            Screenshots catch UI regressions. Each one is a gate the agent must
            pass before you see the diff.
          </p>
          <p>
            Add this to the end of any prompt: &quot;After editing, run{' '}
            <code>npm test</code>, then <code>eslint .</code>, then{' '}
            <code>tsc --noEmit</code>.&quot; Three commands, one sentence.
            The agent iterates through all three before it comes back to you.
          </p>
          <p>
            With stacked verification, the agent stops being a code generator and
            starts being a collaborator that proves its own output is correct.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
