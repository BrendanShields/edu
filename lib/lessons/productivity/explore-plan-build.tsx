import { BeforeAfter } from '@/components/visuals/templates/BeforeAfter';
import { StepFlow } from '@/components/visuals/templates/StepFlow';
import { CodeExample } from '@/components/visuals/templates/CodeExample';
import { ExplorePlanBuild } from '@/components/visuals/lesson/ExplorePlanBuild';
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
    workflow: <ExplorePlanBuild />,
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
            <strong>The most expensive line of AI-generated code is the one that
            lands in the wrong directory.</strong>
          </p>
          <p>
            Look at the canvas. &quot;Build first&quot; means 200 lines written
            against the wrong library, in the wrong folder, ignoring every
            convention your team follows. &quot;Plan first&quot; means two minutes
            of reading before a single character is written.
          </p>
          <p>
            That two-minute investment is a three-phase workflow you can start
            using today. Click through it on the next canvas.
          </p>
        </>
      ),
    },
    {
      id: 'explore',
      visual: 'workflow',
      content: (
        <>
          <h3>Read the room before you speak</h3>
          <p>
            Click <strong>Explore</strong> on the canvas. Watch the terminal run{' '}
            <code>grep -r &quot;authenticate&quot; src/</code> — three hits across
            three files. Then it reads <code>src/auth/login.ts</code> and
            immediately spots the bug: comparing a hash to plaintext.
          </p>
          <p>
            No edits happened. The agent is in read-only mode, building a mental
            map of your code. It now knows where the auth logic lives, how tests
            are structured, and what the bug actually is.
          </p>
          <p>
            This shared understanding is the foundation. Without it, the agent
            guesses. With it, the agent plans. Click <strong>Plan</strong> to see
            what happens next.
          </p>
        </>
      ),
    },
    {
      id: 'plan',
      visual: 'planPhase',
      content: (
        <>
          <h3>Correct a three-line plan, not a 200-line diff</h3>
          <p>
            Read the prompt on the canvas. It asks the agent to propose a plan
            before writing any code — which files change, what the approach is,
            whether there are dependency implications.
          </p>
          <p>
            Now click <strong>Plan</strong> on the previous canvas to see the
            output: four numbered steps, each tied to a real file. You can scan
            this in ten seconds and catch a wrong turn before a single line is
            written.
          </p>
          <p>
            Reviewing a plan is fast. Undoing an implementation is not.
            Once the plan looks right, you give the green light to build.
          </p>
        </>
      ),
    },
    {
      id: 'build',
      visual: 'buildPhase',
      content: (
        <>
          <h3>Now the agent has earned the right to edit</h3>
          <p>
            Look at the prompt on the canvas: implement, write tests, run the
            suite. Three instructions, one sentence each. The agent already knows
            the codebase and has an approved plan — it doesn&apos;t need hand-holding.
          </p>
          <p>
            Click <strong>Build</strong> on the interactive canvas to see the
            result. Three green checkmarks. <code>npm test</code> passes: 3/3.
            The fix uses <code>bcrypt.compare()</code> because the agent
            discovered that pattern during Explore.
          </p>
          <p>
            No wrong library. No wrong directory. No surprises. The full cycle
            ties it all together.
          </p>
        </>
      ),
    },
    {
      id: 'notes',
      visual: 'fullCycle',
      content: (
        <>
          <h3>One rhythm for every non-trivial task</h3>
          <p>
            Look at the four steps on the canvas: Explore, Plan, Build, Commit.
            This is the full cycle. It ends with a commit that is clean, tested,
            and consistent with the rest of your codebase.
          </p>
          <p>
            Use this rhythm for anything bigger than a one-line fix. Over time
            it becomes automatic — you stop treating the agent as a code
            generator and start treating it as a collaborator that reads the room
            before it speaks.
          </p>
          <p>
            But even the best plan burns out if context fills up. The next lesson
            teaches you how to keep sessions sharp.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
