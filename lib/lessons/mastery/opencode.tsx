import { TitleCard } from '@/components/visuals/templates/TitleCard';
import { CardGrid } from '@/components/visuals/templates/CardGrid';
import { StepFlow } from '@/components/visuals/templates/StepFlow';
import { BeforeAfter } from '@/components/visuals/templates/BeforeAfter';
import { TUILayout } from '@/components/visuals/lesson/TUILayout';
import type { LessonDef } from '../types';

const lesson: LessonDef = {
  slug: 'opencode',
  module: 'mastery',
  title: 'OpenCode Essentials',
  visuals: {
    opencodeIntro: (
      <TitleCard
        icon="🟢"
        title="OpenCode Essentials"
        subtitle="Open source AI coding with any LLM provider"
        tool="opencode"
      />
    ),
    tuiLayout: <TUILayout />,
    providerGrid: (
      <CardGrid
        title="Provider Flexibility"
        columns={2}
        cards={[
          { icon: '🟤', label: 'Anthropic', desc: 'Claude models' },
          { icon: '🟢', label: 'OpenAI', desc: 'GPT models' },
          { icon: '🔵', label: 'Google', desc: 'Gemini models' },
          { icon: '💻', label: 'Local', desc: 'Ollama & LM Studio' },
          { icon: '🧘', label: 'Zen', desc: 'Curated defaults' },
          { icon: '🔌', label: 'Custom', desc: 'Any AI SDK provider' },
        ]}
      />
    ),
    agentSystem: (
      <StepFlow
        title="Agent System"
        steps={[
          { n: '1', label: 'Build', desc: 'Default, full tool access' },
          { n: '2', label: 'Plan', desc: 'Read-only analysis' },
          { n: '3', label: '@general', desc: 'Multi-step delegation' },
          { n: '4', label: '@explore', desc: 'Fast codebase search' },
        ]}
      />
    ),
    zenMode: (
      <BeforeAfter
        before={{
          label: 'Manual config',
          icon: '😓',
          text: 'Research providers, get API keys, configure JSON, test models.',
        }}
        after={{
          label: 'Zen mode',
          icon: '🧘',
          text: '/connect, sign in, curated benchmarked models, start coding.',
        }}
      />
    ),
    whenToChoose: (
      <CardGrid
        title="Choose OpenCode When"
        columns={2}
        cards={[
          { icon: '🔓', label: 'Open source matters', desc: 'Full source available' },
          { icon: '🔀', label: 'Model flexibility needed', desc: 'Switch providers freely' },
          { icon: '🎛️', label: 'Full control required', desc: 'Own your config and data' },
          { icon: '🚫', label: 'No vendor lock-in', desc: 'Bring your own keys' },
        ]}
      />
    ),
  },
  sections: [
    {
      id: 'intro',
      visual: 'opencodeIntro',
      content: (
        <>
          <h1>OpenCode Essentials</h1>
          <p>
            OpenCode is a fully open-source AI coding agent with a beautiful terminal UI. Same
            agentic capabilities as the proprietary tools — file editing, shell commands, tool
            use — but with complete freedom over your model provider.
          </p>
          <p>
            It works with 75+ providers including Anthropic, OpenAI, Google, and local models
            via Ollama. Your keys, your models, your data.
          </p>
        </>
      ),
    },
    {
      id: 'tui',
      visual: 'tuiLayout',
      content: (
        <>
          <h3>The terminal UI</h3>
          <p>
            OpenCode&apos;s TUI is designed for developers who want a richer interface than a
            raw prompt but don&apos;t want to leave the terminal.
          </p>
          <p>
            The main area shows the agent conversation. A bottom input bar takes your prompts.
            Side indicators show which agent is active and what tools are in use.
          </p>
          <p>
            It&apos;s keyboard-driven, fast, and stays out of your way. Think of it as the best
            of both worlds between a CLI and a GUI.
          </p>
        </>
      ),
    },
    {
      id: 'providers',
      visual: 'providerGrid',
      content: (
        <>
          <h3>Provider flexibility</h3>
          <p>
            OpenCode supports any provider compatible with the AI SDK. Anthropic, OpenAI,
            Google, Groq, Mistral, local models — switch between them with a config change.
          </p>
          <p>
            This means you can use Claude for complex tasks, GPT for quick iterations, and a
            local model when you&apos;re offline or want zero data sharing.
          </p>
          <p>
            No single vendor owns your workflow. If a provider raises prices or degrades
            quality, you switch — not rewrite.
          </p>
        </>
      ),
    },
    {
      id: 'agents',
      visual: 'agentSystem',
      content: (
        <>
          <h3>Agent system</h3>
          <p>
            OpenCode has four built-in agents. <strong>Build</strong> is the default — full tool
            access for making changes. <strong>Plan</strong> is read-only for analysis without
            risk.
          </p>
          <p>
            Tag <strong>@general</strong> for multi-step delegation or{' '}
            <strong>@explore</strong> for fast codebase search. Each agent has different
            permissions and costs.
          </p>
          <p>
            Pick the lightest agent that can handle the job. Don&apos;t use Build for a question
            that Explore can answer.
          </p>
        </>
      ),
    },
    {
      id: 'zen',
      visual: 'zenMode',
      content: (
        <>
          <h3>Zen mode</h3>
          <p>
            The hardest part of any multi-provider tool is setup. Zen mode eliminates that
            friction entirely.
          </p>
          <p>
            Run <code>/connect</code>, sign in, and you get curated, benchmarked model defaults
            immediately. No API key hunting. No JSON config files. No trial-and-error testing.
          </p>
          <p>
            You can always override later. Zen mode is the fast path from install to productive.
          </p>
        </>
      ),
    },
    {
      id: 'notes',
      visual: 'whenToChoose',
      content: (
        <>
          <h3>When to choose OpenCode</h3>
          <p>
            Choose OpenCode when vendor independence matters. When you want to own your tools,
            switch models freely, and never worry about a provider pulling the rug.
          </p>
          <p>
            It&apos;s also the right choice when you need specific model capabilities — a local
            model for sensitive code, a frontier model for complex reasoning, a fast model for
            quick edits.
          </p>
          <p>
            The tradeoff: you manage your own config. The reward: complete control.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
