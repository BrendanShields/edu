import { BeforeAfter } from '@/components/visuals/templates/BeforeAfter';
import { CodeExample } from '@/components/visuals/templates/CodeExample';
import { ToolComparison } from '@/components/visuals/templates/ToolComparison';
import { StepFlow } from '@/components/visuals/templates/StepFlow';
import { SkillMapping } from '@/components/visuals/lesson/SkillMapping';
import type { LessonDef } from '../types';

const lesson: LessonDef = {
  slug: 'skills-and-workflows',
  module: 'advanced',
  title: 'Skills & Workflows',
  visuals: {
    repetitionProblem: (
      <BeforeAfter
        before={{
          label: 'Repeat every time',
          icon: '🔁',
          text: 'Explaining the deployment process for the 5th time this week. From scratch. Again.',
        }}
        after={{
          label: 'Skill once, invoke forever',
          icon: '⚡',
          text: 'Type /deploy and the agent follows your recipe. Every step, every time.',
        }}
      />
    ),
    skillCreation: (
      <CodeExample
        title="Creating a Skill"
        language="markdown"
        code={`---
name: fix-issue
description: Fix a GitHub issue by number
disable-model-invocation: true
---

Fix GitHub issue $ARGUMENTS.

1. Read the issue with \`gh issue view $ARGUMENTS\`
2. Search the codebase for relevant files
3. Implement the fix and write tests
4. Create a commit`}
      />
    ),
    dynamicContext: (
      <CodeExample
        title="Dynamic Context Injection"
        language="markdown"
        code={`---
name: pr-summary
description: Summarize the current PR
context: fork
---

PR diff: !\`gh pr diff\`
Changed files: !\`gh pr diff --name-only\`

Summarize this pull request concisely.`}
      />
    ),
    crossToolSkills: (
      <ToolComparison
        tools={[
          {
            tool: 'claude',
            title: 'Claude Code',
            content: '.claude/skills/SKILL.md files. Invoke with /skill-name. Supports $ARGUMENTS and shell injection.',
          },
          {
            tool: 'opencode',
            title: 'OpenCode',
            content: 'Reads .claude/skills/ for compatibility. Same SKILL.md format works across both tools.',
          },
          {
            tool: 'copilot',
            title: 'GitHub Copilot',
            content: '.github/copilot/prompts/*.md files. Reference with #prompt-name in chat.',
          },
        ]}
      />
    ),
    mapping: <SkillMapping />,
    whenToCreate: (
      <StepFlow
        title="When to Create a Skill"
        steps={[
          { n: '1', label: 'Same instructions 3+ times', desc: 'repetition is the signal' },
          { n: '2', label: 'Multiple steps', desc: 'workflows that need ordering' },
          { n: '3', label: 'Needs live data', desc: 'shell injection pulls fresh context' },
          { n: '4', label: 'Team should share it', desc: 'commit the recipe to the repo' },
        ]}
      />
    ),
  },
  sections: [
    {
      id: 'intro',
      visual: 'repetitionProblem',
      content: (
        <>
          <h1>Skills &amp; Workflows</h1>
          <p>
            Your agent has cooking ability. It can chop, saut&eacute;,
            plate. But without a recipe, it improvises &mdash; and
            improvisation means different results every time.
          </p>
          <p>
            <strong>Skills are the recipes.</strong> The
            &quot;Before&quot; panel shows the cost of improvisation:
            explaining the deploy process from scratch, again. The
            &quot;After&quot; panel shows what a recipe changes:
            type <code>/deploy</code> and every step runs the same
            way, every time.
          </p>
          <p>
            A skill is a markdown file. You write the recipe once.
            The agent follows it forever.
          </p>
        </>
      ),
    },
    {
      id: 'creating',
      visual: 'mapping',
      content: (
        <>
          <h2>Anatomy of a skill</h2>
          <p>
            Each rule on the left produces the behavior on the right.
            &quot;Run tests after every edit&quot; maps directly to
            the npm test output. That one-to-one mapping is what makes
            recipes predictable.
          </p>
          <p>
            A skill lives in <code>.claude/skills/</code> as a
            markdown file with YAML frontmatter.{' '}
            <code>$ARGUMENTS</code> gets replaced with whatever you
            type after the slash command, so{' '}
            <code>/fix-issue 423</code> becomes &quot;Fix GitHub
            issue 423.&quot;
          </p>
          <p>
            Set <code>disable-model-invocation: true</code> to make
            the skill fully deterministic &mdash; no improvisation,
            just your exact steps. But some recipes call for
            ingredients that change daily.
          </p>
        </>
      ),
    },
    {
      id: 'dynamic',
      visual: 'dynamicContext',
      content: (
        <>
          <h2>Dynamic context injection</h2>
          <p>
            What if the recipe calls for &quot;today&apos;s
            produce&quot; &mdash; not yesterday&apos;s leftovers?
            The <code>!`gh pr diff`</code> syntax executes a shell
            command at invocation time. Its output gets injected into
            the prompt before the agent sees it.
          </p>
          <p>
            When you invoke <code>/pr-summary</code>, the agent
            receives the live PR diff, the list of changed files, and
            the instruction to summarize &mdash; all fresh, all in
            one prompt.
          </p>
          <p>
            <code>context: fork</code> in the frontmatter runs the
            skill in an isolated session so the injected data
            doesn&apos;t pollute your main conversation. Fresh
            ingredients, clean kitchen.
          </p>
        </>
      ),
    },
    {
      id: 'crossTool',
      visual: 'crossToolSkills',
      content: (
        <>
          <h2>Skills across tools</h2>
          <p>
            Write a recipe once, serve it in two kitchens. Claude Code
            and OpenCode share the same directory
            (<code>.claude/skills/</code>) and the same SKILL.md
            format &mdash; zero duplication needed.
          </p>
          <p>
            Copilot takes a different path:{' '}
            <code>.github/copilot/prompts/*.md</code>. Same concept,
            different invocation &mdash; you reference prompts
            with <code>#prompt-name</code> in chat instead of a slash
            command.
          </p>
          <p>
            Single-tool team? Pick one directory and move on. Multi-tool
            team? Duplicate only the recipes that matter most. Not
            every workflow deserves to become a skill, though.
          </p>
        </>
      ),
    },
    {
      id: 'notes',
      visual: 'whenToCreate',
      content: (
        <>
          <h2>When to create a skill</h2>
          <p>
            Not every dish needs a written recipe. The first signal
            is repetition: if you&apos;ve given the same instructions
            three or more times, write it down.
          </p>
          <p>
            The third signal matters most &mdash; &quot;needs live
            data.&quot; If the workflow requires fresh context at
            runtime (a PR diff, a log tail, a deploy status), a skill
            with shell injection handles it cleanly. A prompt you
            retype each time cannot.
          </p>
          <p>
            One last distinction: skills are individual dishes.
            CLAUDE.md rules are the restaurant&apos;s house rules
            &mdash; &quot;always wash hands, always plate on white
            china.&quot; Start with one recipe this week. Layer in
            dynamic context and team-shared skills as you go.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
