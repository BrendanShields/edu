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
            Reading 200 lines of AI-generated code on faith is like signing a
            contract without reading it. Maybe it&apos;s fine. Maybe you just
            agreed to give away your car.
          </p>
          <p>
            Verification flips the entire relationship. Define &quot;correct&quot;
            up front, and the agent iterates until it gets there. Your job shifts
            from reading code line-by-line to reviewing a handful of test
            definitions. The finish line exists before the race starts.
          </p>
        </>
      ),
    },
    {
      id: 'testsFirst',
      visual: 'testFirstApproach',
      content: (
        <>
          <h2>Define the finish line before you start running</h2>
          <p>
            On the left: &quot;Review 200 lines&quot; — reading code on faith,
            hoping to catch edge cases with tired eyes. On the right: &quot;Review
            20 lines of tests&quot; — assertions that define correctness, with
            the agent iterating until green. Which one would you bet on at 6 PM
            on a Friday?
          </p>
          <p>
            Ask the agent to write tests before implementation. The tests become
            the spec — what the feature does, which edge cases matter, what
            failure looks like. Once you approve those 20 lines, the agent is
            free to write whatever implementation satisfies them.
          </p>
          <p>
            This is the single biggest productivity lever in AI-assisted
            development. But tests alone have a blind spot.
          </p>
        </>
      ),
    },
    {
      id: 'spectrum',
      visual: 'verificationSpectrum',
      content: (
        <>
          <h2>Airport security for your code</h2>
          <p>
            Think of verification layers as airport security. Tests are the metal
            detector — they catch the obvious weapons. The linter is the bag
            scanner — it catches things you didn&apos;t think to check. The type
            checker is the passport control — it verifies your identity matches
            your ticket. Remove any one layer and something slips through.
          </p>
          <p>
            Click <strong>&quot;What tests miss&quot;</strong> on the right.
            Tests still pass. Linter still passes. But <code>tsc --noEmit</code>{' '}
            catches it: <code>src/auth.ts:12</code> returns a string where a
            number is expected. A green test suite almost shipped a type mismatch
            to production.
          </p>
          <p>
            Each layer catches a different class of threat. Stack them all, and
            nothing gets on the plane.
          </p>
        </>
      ),
    },
    {
      id: 'example',
      visual: 'testExample',
      content: (
        <>
          <h2>Red, green, done</h2>
          <p>
            The prompt on the right asks the agent to write tests for a{' '}
            <code>RateLimiter</code> class — 10 requests per minute per user, 429
            after the limit, reset after the window. Then: run them (they should
            fail), and implement until they pass.
          </p>
          <p>
            Notice what the prompt does <em>not</em> say: no data structures, no
            algorithms, no internal state. It defines behavior, not blueprints.
            The agent chooses its own approach as long as every assertion holds.
          </p>
          <p>
            You own the spec. The agent owns the code. That division is the
            whole philosophy in three words.
          </p>
        </>
      ),
    },
    {
      id: 'stacking',
      visual: 'stackingLayers',
      content: (
        <>
          <h2>Three checkpoints, one sentence</h2>
          <p>
            Metal detector, bag scanner, passport control, security camera. Tests
            catch logic errors. Linters catch style drift. Type checkers catch
            interface mismatches. Screenshots catch UI regressions. Four gates
            the agent must clear before you ever see the diff.
          </p>
          <p>
            Add this to the end of any prompt: &quot;After editing, run{' '}
            <code>npm test</code>, then <code>eslint .</code>, then{' '}
            <code>tsc --noEmit</code>.&quot; Three commands, one sentence. The
            agent iterates through all three before it comes back to you.
          </p>
          <p>
            With stacked verification, the agent stops being a code generator you
            have to babysit and starts being a collaborator that proves its own
            output is correct. No more signing contracts on faith.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
