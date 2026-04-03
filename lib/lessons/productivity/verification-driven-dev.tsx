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
            Without verification, every AI-generated change is an act of faith.
            You read 200 lines of code, squint at the logic, and hope nothing
            slips through.
          </p>
          <p>
            Verification flips this. You define what &quot;correct&quot; means
            up front, and the agent iterates until it gets there. Your job shifts
            from reading code to reviewing test definitions.
          </p>
        </>
      ),
    },
    {
      id: 'testsFirst',
      visual: 'testFirstApproach',
      content: (
        <>
          <h3>Tests first, implementation second</h3>
          <p>
            Ask the agent to write tests before writing code. The tests define
            the spec — what the feature should do, edge cases included.
          </p>
          <p>
            Once you approve the tests, the agent implements until they pass.
            You review 20 lines of assertions instead of 200 lines of logic.
            This is the single biggest productivity lever in AI-assisted
            development.
          </p>
        </>
      ),
    },
    {
      id: 'spectrum',
      visual: 'verificationSpectrum',
      content: (
        <>
          <h3>The verification spectrum</h3>
          <p>
            Tests aren&apos;t the only verification layer. Linters catch style
            violations. Type checkers catch interface mismatches. Screenshot
            tests catch visual regressions.
          </p>
          <p>
            Each layer catches a different class of error. The more layers you
            stack, the less can slip through — and the more confidently the
            agent can iterate without your intervention.
          </p>
        </>
      ),
    },
    {
      id: 'example',
      visual: 'testExample',
      content: (
        <>
          <h3>Tests-first in practice</h3>
          <p>
            This prompt asks the agent to write tests first, run them to confirm
            they fail, then implement the class to make them pass. The agent
            gets a tight feedback loop: red, green, done.
          </p>
          <p>
            Notice how the prompt specifies behavior, not implementation. The
            agent is free to choose the approach as long as the assertions
            hold.
          </p>
        </>
      ),
    },
    {
      id: 'stacking',
      visual: 'stackingLayers',
      content: (
        <>
          <h3>Stacking layers</h3>
          <p>
            Tell the agent to run the linter after editing, check types before
            committing, and take screenshots after UI changes. Each layer is a
            gate the agent must pass.
          </p>
          <p>
            With multiple verification layers, the agent transforms from a code
            generator into a collaborator. It doesn&apos;t just produce output —
            it proves the output is correct.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
