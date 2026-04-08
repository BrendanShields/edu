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
            You wouldn&apos;t pour concrete before reading the soil report. You
            wouldn&apos;t frame walls without blueprints. Yet developers hand an
            AI agent a task and say &quot;build it&quot; — skipping the
            equivalent of the site survey and the architect.
          </p>
          <p>
            <strong>The most expensive code is code that solves the wrong problem
            fast.</strong> &quot;Build first&quot; means 200 lines against the
            wrong library, in the wrong folder, ignoring every convention your
            team follows. &quot;Plan first&quot; means two minutes of reading
            before a single character is written.
          </p>
          <p>
            AI coding is construction, not improvisation. Three phases keep it
            that way.
          </p>
        </>
      ),
    },
    {
      id: 'explore',
      visual: 'workflow',
      content: (
        <>
          <h2>Read the soil report</h2>
          <p>
            Click <strong>Explore</strong>. The terminal runs{' '}
            <code>grep -r &quot;authenticate&quot; src/</code> — three hits
            across three files. Then it reads <code>src/auth/login.ts</code> and
            immediately spots the bug: comparing a hash to plaintext.
          </p>
          <p>
            No edits happened. This is the site survey. The agent is in read-only
            mode, building a map of your code — where the auth logic lives, how
            tests are structured, what the actual problem is. A contractor who
            skips this step digs the foundation in the wrong place.
          </p>
          <p>
            With the survey done, the agent can draw blueprints instead of
            guessing. Click <strong>Plan</strong> to see them.
          </p>
        </>
      ),
    },
    {
      id: 'plan',
      visual: 'planPhase',
      content: (
        <>
          <h2>Blueprints are cheap. Demolition is not.</h2>
          <p>
            The prompt on the right asks the agent to propose a plan before
            writing code — which files change, what the approach is, whether
            there are dependency implications. Four numbered steps, each tied
            to a real file.
          </p>
          <p>
            You can scan this in ten seconds and catch a wrong turn. Crossing
            out a line on a blueprint costs nothing. Tearing down a half-built
            wall costs everything.
          </p>
          <p>
            Once the blueprint looks right, you give the green light. Now — and
            only now — the agent has earned the right to pick up a hammer.
          </p>
        </>
      ),
    },
    {
      id: 'build',
      visual: 'buildPhase',
      content: (
        <>
          <h2>Build to spec, not from scratch</h2>
          <p>
            Three instructions, one sentence each: implement, write tests, run
            the suite. The agent already surveyed the site and has approved
            blueprints — it doesn&apos;t need hand-holding.
          </p>
          <p>
            Click <strong>Build</strong> on the interactive panel to see the
            result. Three green checkmarks. <code>npm test</code> passes: 3/3.
            The fix uses <code>bcrypt.compare()</code> because the agent
            discovered that pattern during Explore — not because you told it to.
          </p>
          <p>
            No wrong library. No wrong directory. No surprises. When the
            contractor reads the plans, the building passes inspection.
          </p>
        </>
      ),
    },
    {
      id: 'notes',
      visual: 'fullCycle',
      content: (
        <>
          <h2>One rhythm, every project</h2>
          <p>
            Explore, Plan, Build, Commit. The four-step cycle on the right ends
            with a commit that is clean, tested, and consistent with the rest of
            your codebase. Use it for anything bigger than a one-line fix.
          </p>
          <p>
            Over time this rhythm becomes second nature. You stop treating the
            agent as an improvising jazz musician and start treating it as a
            general contractor who reads the soil report before pouring concrete.
          </p>
          <p>
            But even the best blueprints burn out if context fills up. The next
            lesson teaches you how to keep sessions sharp when the work order
            gets long.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
