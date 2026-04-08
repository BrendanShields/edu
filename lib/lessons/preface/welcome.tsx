import { TitleCard } from '@/components/visuals/templates/TitleCard';
import { CardGrid } from '@/components/visuals/templates/CardGrid';
import { BeforeAfter } from '@/components/visuals/templates/BeforeAfter';
import { StepFlow } from '@/components/visuals/templates/StepFlow';
import type { LessonDef } from '../types';

const lesson: LessonDef = {
  slug: 'welcome',
  module: 'preface',
  title: 'Welcome to the Workshop',
  visuals: {
    intro: (
      <TitleCard
        icon="👋"
        title="Welcome to the Workshop"
        subtitle="A field guide to AI coding tools — built for people who actually ship code."
      />
    ),
    audience: (
      <CardGrid
        title="Built for"
        columns={2}
        cards={[
          { icon: '🧑‍💻', label: 'Working developers', desc: 'Anyone shipping code who wants AI as a teammate, not a toy.' },
          { icon: '🎓', label: 'New to AI tooling', desc: 'No prior experience required. We start from first principles.' },
          { icon: '🏗️', label: 'Tech leads', desc: 'Folks who need to evaluate Claude Code, OpenCode, or Copilot for a team.' },
          { icon: '🧭', label: 'The skeptical', desc: 'You\u2019ve tried autocomplete, were unimpressed, and want to know if anything has changed.' },
        ]}
      />
    ),
    walkAway: (
      <CardGrid
        title="What you\u2019ll leave with"
        columns={2}
        cards={[
          { icon: '🧠', label: 'A mental model', desc: 'How LLMs and agents actually work — no magic, no jargon.' },
          { icon: '🛠️', label: 'Hands-on fluency', desc: 'Three tools, deeply: Claude Code, OpenCode, Copilot.' },
          { icon: '🎯', label: 'Better prompts', desc: 'Stop describing keystrokes. Start describing destinations.' },
          { icon: '🛡️', label: 'Safer defaults', desc: 'Permissions, verification, and the habits that prevent disasters.' },
          { icon: '🔌', label: 'Extensibility', desc: 'MCP servers, hooks, subagents — the layer most people skip.' },
          { icon: '🗺️', label: 'A way to choose', desc: 'Match the tool to where you already work, not the other way around.' },
        ]}
      />
    ),
    how: (
      <StepFlow
        title="How to use this workshop"
        steps={[
          {
            n: '1',
            label: 'Read top to bottom',
            desc: 'Each lesson builds on the last. Skipping ahead skips the why.',
          },
          {
            n: '2',
            label: 'Watch the right column',
            desc: 'Visuals on the right reinforce — and sometimes contradict — the words on the left.',
          },
          {
            n: '3',
            label: 'Try things as you go',
            desc: 'Open a terminal. Install one tool. Break it on purpose. Theory sticks when you touch it.',
          },
          {
            n: '4',
            label: 'Come back to Reference',
            desc: 'The last module is a cheatsheet. You\u2019ll use it more than the lessons.',
          },
        ]}
      />
    ),
    pact: (
      <BeforeAfter
        before={{
          label: 'The trap',
          icon: '⚠️',
          text: 'Treating AI tools like a faster autocomplete. Pasting snippets back and forth, not trusting anything, then declaring it overhyped after a week.',
        }}
        after={{
          label: 'The shift',
          icon: '✨',
          text: 'Treating AI tools like a junior teammate. Briefing them, letting them work, verifying the result. Reaching for them by reflex when a task is well-defined.',
        }}
        footer="The whole workshop is about closing the gap between these two modes."
      />
    ),
  },
  sections: [
    {
      id: 'intro',
      visual: 'intro',
      content: (
        <>
          <h1>Welcome to the Workshop</h1>
          <p>
            This is a hands-on guide to using AI coding tools <em>well</em>. Not a list of
            features, not a hype reel, and not a debate about whether they&apos;re a fad. By the
            end you should be able to sit down at a project, pick the right tool, and get
            something real shipped — with the same instincts a senior teammate would bring.
          </p>
          <p>
            <strong>The honest pitch:</strong> AI tools won&apos;t turn a junior into a staff
            engineer. But used well, they remove the parts of the job that don&apos;t deserve
            your attention — boilerplate, scaffolding, repetitive refactors, finding that one
            file you read three weeks ago — and give you back the parts that do.
          </p>
          <p>
            That payoff only shows up if you understand what these tools actually <em>are</em>.
            Which is why we start one layer deeper than most tutorials: with the model itself.
          </p>
        </>
      ),
    },
    {
      id: 'audience',
      visual: 'audience',
      content: (
        <>
          <h2>Who this is for</h2>
          <p>
            You don&apos;t need to be senior. You don&apos;t need a machine learning background.
            You do need to be writing code for real reasons — fixing bugs, building features,
            shipping things people use. The workshop assumes you already know a programming
            language and have used a terminal. Everything else, we&apos;ll build.
          </p>
          <p>
            If you&apos;re a tech lead trying to decide what to put in your team&apos;s hands, the
            Tool Deep Dives module is the one to bookmark. If you&apos;re skeptical because last
            year&apos;s autocomplete underwhelmed you — fair. The Foundations module is where
            we&apos;ll show you what changed.
          </p>
        </>
      ),
    },
    {
      id: 'walkAway',
      visual: 'walkAway',
      content: (
        <>
          <h2>What you&apos;ll walk away with</h2>
          <p>
            Six things, in roughly this order: a working mental model of how the underlying
            language model behaves, the &quot;agentic loop&quot; that turns a chatbot into
            something that can edit your codebase, the prompting habits that separate fluent
            users from frustrated ones, the safety knobs that keep you out of trouble, the
            extension points (MCP servers, hooks, subagents) that the docs barely mention, and
            a clear way to choose between tools instead of cargo-culting whatever your timeline
            recommends.
          </p>
          <p>
            None of these are theoretical. Every section ends with something you can try in
            the next ten minutes.
          </p>
        </>
      ),
    },
    {
      id: 'how',
      visual: 'how',
      content: (
        <>
          <h2>How to use this workshop</h2>
          <p>
            The lessons are designed to be read top to bottom. Each one assumes the one before
            it. You <em>can</em> jump around — nothing will break — but the early lessons
            install the vocabulary the later ones rely on.
          </p>
          <p>
            The right column is not decoration. It&apos;s a second channel: animations,
            comparisons, terminal recordings. When the words on the left feel abstract, the
            visuals on the right are usually doing the heavy lifting. Pause and look at them.
          </p>
          <p>
            And please — open a terminal while you read. Install one tool. Run it on a real
            project, even a throwaway one. The single biggest predictor of getting value from
            this workshop is whether you actually touch the tools as you go.
          </p>
        </>
      ),
    },
    {
      id: 'pact',
      visual: 'pact',
      content: (
        <>
          <h2>One small pact before we start</h2>
          <p>
            The most common failure mode with AI coding tools isn&apos;t that they&apos;re bad.
            It&apos;s that people use them like a faster version of Stack Overflow: paste a
            snippet, copy a snippet, distrust everything, declare it overhyped after a week.
          </p>
          <p>
            This workshop asks for one thing: while you&apos;re here, treat the tool like a
            <strong> junior teammate</strong>, not a search engine. Brief it. Let it work. Read
            its diff. Verify the result. If it makes a mistake, correct it the way you&apos;d
            correct a person — not by giving up and reaching for the keyboard.
          </p>
          <p>
            Do that, and the rest of the workshop will land. With that out of the way: let&apos;s
            talk about what an LLM actually is.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
