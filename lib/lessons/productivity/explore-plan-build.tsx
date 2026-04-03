import { BeforeAfter } from '@/components/visuals/templates/BeforeAfter';
import { StepFlow } from '@/components/visuals/templates/StepFlow';
import { CodeExample } from '@/components/visuals/templates/CodeExample';
import type { LessonDef } from '../types';

const lesson: LessonDef = {
  slug: 'explore-plan-build',
  module: 'productivity',
  title: 'Explore, Plan, Build',
  visuals: {
    expensiveMistake: (
      <BeforeAfter
        before={{
          label: 'Build first',
          icon: '💥',
          text: 'Wrong library, wrong directory, wrong patterns — 30 min wasted',
        }}
        after={{
          label: 'Plan first',
          icon: '🗺️',
          text: 'Reads codebase, follows conventions — 2 min investment saves everything',
        }}
      />
    ),
    explorePhase: (
      <StepFlow
        title="Phase 1: Explore"
        steps={[
          { n: '1', label: 'Switch to Plan mode', desc: '— read-only, no edits' },
          { n: '2', label: 'Read relevant files', desc: '— understand the landscape' },
          { n: '3', label: 'Understand existing patterns', desc: '— naming, structure, style' },
          { n: '4', label: 'Report back', desc: '— summarize what you found' },
        ]}
      />
    ),
    planPhase: (
      <CodeExample
        title="Phase 2: Plan"
        language="prompt"
        code={`Based on what you just read,\nwhat files need to change to add\nGoogle OAuth?\n\nPropose a plan before writing any code.`}
      />
    ),
    buildPhase: (
      <CodeExample
        title="Phase 3: Build"
        language="prompt"
        code={`Implement the OAuth flow from your plan.\nWrite tests for the callback handler.\nRun the suite after.`}
      />
    ),
    fullCycle: (
      <StepFlow
        title="The Full Cycle"
        steps={[
          { n: '1', label: 'Explore', desc: '— read the codebase' },
          { n: '2', label: 'Plan', desc: '— propose an approach' },
          { n: '3', label: 'Build', desc: '— implement with reviewed plan' },
          { n: '4', label: 'Commit', desc: '— ship it' },
        ]}
      />
    ),
  },
  sections: [
    {
      id: 'intro',
      visual: 'expensiveMistake',
      content: (
        <>
          <h1>Explore, Plan, Build</h1>
          <p>
            The most expensive mistake in AI-assisted coding is building the
            wrong thing. The agent writes 200 lines that use the wrong library,
            land in the wrong directory, and ignore every pattern your team
            follows.
          </p>
          <p>
            Two minutes of planning saves thirty minutes of rework. This lesson
            teaches you a three-phase workflow that makes that investment
            automatic.
          </p>
        </>
      ),
    },
    {
      id: 'explore',
      visual: 'explorePhase',
      content: (
        <>
          <h3>Phase 1: Explore</h3>
          <p>
            Start in read-only mode. Ask the agent to explore your codebase
            without changing anything. It should read the relevant files,
            identify existing patterns, and report back.
          </p>
          <p>
            This gives you a shared understanding of the landscape before a
            single line is written. The agent knows what&apos;s there; you know
            what the agent knows.
          </p>
        </>
      ),
    },
    {
      id: 'plan',
      visual: 'planPhase',
      content: (
        <>
          <h3>Phase 2: Plan</h3>
          <p>
            Ask the agent to propose a plan based on what it found. Which files
            need to change? What&apos;s the approach? Are there dependencies to
            consider?
          </p>
          <p>
            Review the plan before giving the go-ahead. It&apos;s much cheaper to
            correct a three-line plan than to undo 200 lines of code.
          </p>
        </>
      ),
    },
    {
      id: 'build',
      visual: 'buildPhase',
      content: (
        <>
          <h3>Phase 3: Build</h3>
          <p>
            Once the plan looks right, tell the agent to implement it. Include
            verification — write tests, run the suite, confirm the feature
            works.
          </p>
          <p>
            Because the agent already explored and planned, its implementation
            will follow the conventions it discovered. No surprises.
          </p>
        </>
      ),
    },
    {
      id: 'notes',
      visual: 'fullCycle',
      content: (
        <>
          <h3>Putting it together</h3>
          <p>
            Explore, Plan, Build is a rhythm you can use for any task bigger than
            a one-line fix. The cycle ends with a commit — clean, tested, and
            consistent with the rest of your codebase.
          </p>
          <p>
            Over time, this becomes second nature. You stop thinking of the
            agent as a code generator and start treating it as a collaborator
            that reads the room before it speaks.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
