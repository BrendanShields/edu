import { TitleCard } from '@/components/visuals/templates/TitleCard';
import { BeforeAfter } from '@/components/visuals/templates/BeforeAfter';
import { CodeExample } from '@/components/visuals/templates/CodeExample';
import { CardGrid } from '@/components/visuals/templates/CardGrid';
import { MCPArchitecture } from '@/components/visuals/lesson/MCPArchitecture';
import type { LessonDef } from '../types';

const lesson: LessonDef = {
  slug: 'mcp-external-tools',
  module: 'advanced',
  title: 'MCP & External Tools',
  visuals: {
    mcpIntro: (
      <TitleCard
        icon="🔌"
        title="MCP & External Tools"
        subtitle="Connect your agent to databases, APIs, and services"
      />
    ),
    mcpComparison: (
      <BeforeAfter
        before={{
          label: 'Without MCP',
          icon: '📋',
          text: 'Open Sentry, copy stack trace, paste into agent. Open DB client, copy query results, paste again. Repeat forever.',
        }}
        after={{
          label: 'With MCP',
          icon: '🔌',
          text: 'Agent queries Sentry and your database directly. No tab switching. No copy-paste. One conversation.',
        }}
      />
    ),
    mcpSetup: (
      <CodeExample
        title="Setup in Claude Code"
        language="bash"
        code={`# Remote HTTP server
claude mcp add --transport http \\
  notion https://mcp.notion.com/mcp

# Local server with env vars
claude mcp add --transport stdio \\
  --env SENTRY_TOKEN=xxx sentry \\
  -- npx -y @sentry/mcp-server

# Share with team via .mcp.json
claude mcp list`}
      />
    ),
    popularServers: (
      <CardGrid
        title="Popular MCP Servers"
        columns={3}
        cards={[
          { icon: '📚', label: 'Context7', desc: 'Library docs' },
          { icon: '🐛', label: 'Sentry', desc: 'Error monitoring' },
          { icon: '🐘', label: 'PostgreSQL', desc: 'Database queries' },
          { icon: '🐙', label: 'GitHub', desc: 'Issues & PRs' },
          { icon: '🎨', label: 'Figma', desc: 'Design files' },
          { icon: '💳', label: 'Stripe', desc: 'Payments' },
        ]}
      />
    ),
    mcpSecurity: <MCPArchitecture />,
  },
  sections: [
    {
      id: 'intro',
      visual: 'mcpIntro',
      content: (
        <>
          <h1>MCP &amp; External Tools</h1>
          <p>
            Your agent can read files and run commands, but your work
            doesn&apos;t live entirely in code. Bugs are in Sentry. Data is
            in Postgres. Designs are in Figma. Tickets are in Linear.
          </p>
          <p>
            Model Context Protocol (MCP) bridges the gap. It gives your
            agent a standardized way to talk to external services &mdash;
            no copy-paste required.
          </p>
        </>
      ),
    },
    {
      id: 'withWithout',
      visual: 'mcpComparison',
      content: (
        <>
          <h3>The copy-paste tax</h3>
          <p>
            Without MCP, you are the middleware. You copy a stack trace
            from Sentry, paste it into the agent, then copy a query result
            from your database client and paste that too. Every round trip
            wastes time and pollutes context.
          </p>
          <p>
            With MCP, the agent calls Sentry and your database directly.
            It gets structured data, not screenshots. The entire
            investigation happens in one unbroken conversation.
          </p>
        </>
      ),
    },
    {
      id: 'setup',
      visual: 'mcpSetup',
      content: (
        <>
          <h3>Setting up MCP servers</h3>
          <p>
            MCP servers come in two flavors: <strong>remote</strong> (HTTP
            endpoints hosted by the service) and <strong>local</strong>{' '}
            (processes that run on your machine via stdio).
          </p>
          <p>
            Add them with <code>claude mcp add</code>. Environment
            variables keep secrets out of your config. Once added, the
            agent sees the server&apos;s tools automatically.
          </p>
          <p>
            Commit <code>.mcp.json</code> to share server configs with
            your team. Secrets stay local in each developer&apos;s
            environment.
          </p>
        </>
      ),
    },
    {
      id: 'servers',
      visual: 'popularServers',
      content: (
        <>
          <h3>Popular servers</h3>
          <p>
            The MCP ecosystem is growing fast. Context7 gives agents
            up-to-date library documentation. Sentry lets them
            investigate errors without leaving the terminal. PostgreSQL
            servers let them query your data directly.
          </p>
          <p>
            Start with one server that solves your biggest copy-paste
            pain. You can always add more later.
          </p>
        </>
      ),
    },
    {
      id: 'security',
      visual: 'mcpSecurity',
      content: (
        <>
          <h3>Scoping and security</h3>
          <p>
            MCP servers run at three scope levels: <strong>local</strong>{' '}
            (your machine only), <strong>project</strong> (shared via
            .mcp.json), and <strong>user</strong> (your global config).
          </p>
          <p>
            Treat MCP servers like any dependency. Audit what tools they
            expose, limit permissions where possible, and never hardcode
            secrets in config files. The agent asks permission before
            using MCP tools, just like any other action.
          </p>
        </>
      ),
    },
  ],
};

export default lesson;
