import TurndownService from 'turndown';
import * as cheerio from 'cheerio';
import { writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
});

// Remove nav, footer, sidebar elements
turndown.remove(['nav', 'footer', 'script', 'style', 'noscript']);

const DOCS_DIR = './docs';
const CONCURRENCY = 5;
const DELAY_MS = 200;

// ─── Claude Code ───
const CLAUDE_CODE_PAGES = [
  'overview', 'quickstart', 'changelog', 'how-claude-code-works', 'features-overview',
  'memory', 'permission-modes', 'common-workflows', 'best-practices',
  'claude-code-on-the-web', 'web-scheduled-tasks', 'desktop-quickstart', 'desktop',
  'code-review', 'github-actions', 'gitlab-ci-cd', 'platforms', 'remote-control',
  'chrome', 'vs-code', 'jetbrains', 'slack', 'sub-agents', 'agent-teams',
  'mcp', 'discover-plugins', 'plugins', 'skills', 'hooks-guide', 'channels',
  'scheduled-tasks', 'headless', 'troubleshooting', 'third-party-integrations',
  'amazon-bedrock', 'google-vertex-ai', 'microsoft-foundry', 'network-config',
  'llm-gateway', 'devcontainer', 'setup', 'authentication', 'security',
  'server-managed-settings', 'data-usage', 'zero-data-retention', 'monitoring-usage',
  'costs', 'analytics', 'plugin-marketplaces', 'settings', 'permissions', 'sandboxing',
  'terminal-config', 'model-config', 'fast-mode', 'voice-dictation', 'output-styles',
  'statusline', 'keybindings', 'cli-reference', 'commands', 'env-vars',
  'tools-reference', 'interactive-mode', 'checkpointing', 'hooks', 'plugins-reference',
  'channels-reference', 'legal-and-compliance',
];

// ─── OpenCode ───
const OPENCODE_PAGES = [
  '', 'config', 'providers', 'network', 'enterprise', 'troubleshooting',
  'windows-wsl', 'go', 'tui', 'cli', 'web', 'ide', 'zen', 'share',
  'github', 'gitlab', 'tools', 'rules', 'agents', 'models', 'themes',
  'keybinds', 'commands', 'formatters', 'permissions', 'lsp', 'mcp-servers',
  'acp', 'skills', 'custom-tools', 'sdk', 'server', 'plugins', 'ecosystem',
];

// ─── GitHub Copilot ───
const COPILOT_PAGES = [
  'get-started/what-is-github-copilot', 'get-started/quickstart', 'get-started/plans',
  'get-started/features', 'get-started/best-practices', 'get-started/choose-enterprise-plan',
  'get-started/achieve-company-goals', 'get-started/resources-for-approval',
  'concepts/completions/code-suggestions', 'concepts/completions/code-referencing',
  'concepts/chat', 'concepts/agents/coding-agent/about-coding-agent',
  'concepts/agents/coding-agent/agent-management', 'concepts/agents/coding-agent/about-custom-agents',
  'concepts/agents/coding-agent/about-hooks', 'concepts/agents/coding-agent/access-management',
  'concepts/agents/coding-agent/mcp-and-coding-agent',
  'concepts/agents/copilot-cli/about-copilot-cli', 'concepts/agents/copilot-cli/about-cli-plugins',
  'concepts/agents/copilot-cli/comparing-cli-features', 'concepts/agents/copilot-cli/autopilot',
  'concepts/agents/copilot-cli/fleet', 'concepts/agents/copilot-cli/research',
  'concepts/agents/copilot-cli/chronicle', 'concepts/agents/code-review',
  'concepts/agents/copilot-memory', 'concepts/agents/about-third-party-agents',
  'concepts/agents/openai-codex', 'concepts/agents/anthropic-claude',
  'concepts/agents/about-agent-skills', 'concepts/agents/enterprise-management',
  'concepts/spark', 'concepts/copilot-usage-metrics/copilot-metrics',
  'concepts/prompting/prompt-engineering', 'concepts/prompting/response-customization',
  'concepts/context/mcp', 'concepts/context/spaces', 'concepts/context/repository-indexing',
  'concepts/context/content-exclusion', 'concepts/tools/ai-tools',
  'concepts/tools/about-copilot-integrations', 'concepts/auto-model-selection',
  'concepts/rate-limits', 'concepts/billing/copilot-requests',
  'concepts/billing/individual-plans', 'concepts/billing/billing-for-individuals',
  'concepts/billing/organizations-and-enterprises', 'concepts/billing/premium-request-management',
  'concepts/about-enterprise-accounts-for-copilot-business',
  'concepts/policies', 'concepts/mcp-management', 'concepts/network-settings',
  'concepts/fallback-and-lts-models',
  'how-tos/set-up/set-up-for-self', 'how-tos/set-up/set-up-for-organization',
  'how-tos/set-up/set-up-for-enterprise', 'how-tos/set-up/set-up-a-dedicated-enterprise-for-copilot-business',
  'how-tos/set-up/install-copilot-extension',
  'how-tos/get-code-suggestions/get-ide-code-suggestions', 'how-tos/get-code-suggestions/find-matching-code',
  'how-tos/chat-with-copilot/get-started-with-chat', 'how-tos/chat-with-copilot/chat-in-ide',
  'how-tos/chat-with-copilot/chat-in-windows-terminal', 'how-tos/chat-with-copilot/chat-in-github',
  'how-tos/chat-with-copilot/chat-in-mobile',
  'how-tos/copilot-cli/cli-getting-started', 'how-tos/copilot-cli/cli-best-practices',
  'how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli',
  'how-tos/copilot-cli/set-up-copilot-cli/configure-copilot-cli',
  'how-tos/copilot-cli/allowing-tools',
  'how-tos/copilot-cli/automate-copilot-cli/quickstart',
  'how-tos/copilot-cli/automate-copilot-cli/run-cli-programmatically',
  'how-tos/copilot-cli/automate-copilot-cli/automate-with-actions',
  'how-tos/copilot-cli/customize-copilot/overview',
  'how-tos/copilot-cli/customize-copilot/add-custom-instructions',
  'how-tos/copilot-cli/customize-copilot/use-hooks',
  'how-tos/copilot-cli/customize-copilot/create-skills',
  'how-tos/copilot-cli/customize-copilot/add-mcp-servers',
  'how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli',
  'how-tos/copilot-cli/customize-copilot/plugins-finding-installing',
  'how-tos/copilot-cli/customize-copilot/plugins-creating',
  'how-tos/copilot-cli/customize-copilot/plugins-marketplace',
  'how-tos/copilot-cli/use-copilot-cli-agents/overview',
  'how-tos/copilot-cli/administer-copilot-cli-for-your-enterprise',
  'how-tos/copilot-cli/speeding-up-task-completion', 'how-tos/copilot-cli/chronicle',
  'how-tos/copilot-sdk/sdk-getting-started',
  'how-tos/use-copilot-agents/manage-agents',
  'how-tos/use-copilot-agents/coding-agent/create-a-pr',
  'how-tos/use-copilot-agents/coding-agent/make-changes-to-an-existing-pr',
  'how-tos/use-copilot-agents/coding-agent/provide-visual-inputs',
  'how-tos/use-copilot-agents/coding-agent/track-copilot-sessions',
  'how-tos/use-copilot-agents/coding-agent/review-copilot-prs',
  'how-tos/use-copilot-agents/coding-agent/create-custom-agents',
  'how-tos/use-copilot-agents/coding-agent/test-custom-agents',
  'how-tos/use-copilot-agents/coding-agent/create-skills',
  'how-tos/use-copilot-agents/coding-agent/extend-coding-agent-with-mcp',
  'how-tos/use-copilot-agents/coding-agent/integrate-coding-agent-with-jira',
  'how-tos/use-copilot-agents/coding-agent/integrate-coding-agent-with-slack',
  'how-tos/use-copilot-agents/coding-agent/integrate-coding-agent-with-teams',
  'how-tos/use-copilot-agents/coding-agent/integrate-coding-agent-with-linear',
  'how-tos/use-copilot-agents/coding-agent/integrate-coding-agent-with-azure-boards',
  'how-tos/use-copilot-agents/coding-agent/changing-the-ai-model',
  'how-tos/use-copilot-agents/coding-agent/configuring-agent-settings',
  'how-tos/use-copilot-agents/coding-agent/customize-the-agent-environment',
  'how-tos/use-copilot-agents/coding-agent/customize-the-agent-firewall',
  'how-tos/use-copilot-agents/coding-agent/use-hooks',
  'how-tos/use-copilot-agents/coding-agent/troubleshoot-coding-agent',
  'how-tos/use-copilot-agents/request-a-code-review/use-code-review',
  'how-tos/use-copilot-agents/request-a-code-review/configure-automatic-review',
  'how-tos/use-copilot-agents/request-a-code-review/configure-runners',
  'how-tos/use-copilot-agents/copilot-memory',
  'how-tos/use-ai-models/configure-access-to-ai-models',
  'how-tos/use-ai-models/change-the-chat-model', 'how-tos/use-ai-models/change-the-completion-model',
  'how-tos/provide-context/use-copilot-spaces/create-copilot-spaces',
  'how-tos/provide-context/use-copilot-spaces/use-copilot-spaces',
  'how-tos/provide-context/use-copilot-spaces/collaborate-with-others',
  'how-tos/provide-context/use-mcp/extend-copilot-chat-with-mcp',
  'how-tos/provide-context/use-mcp/set-up-the-github-mcp-server',
  'how-tos/provide-context/use-mcp/enterprise-configuration',
  'how-tos/provide-context/use-mcp/configure-toolsets',
  'how-tos/provide-context/use-mcp/use-the-github-mcp-server',
  'how-tos/provide-context/use-mcp/change-mcp-registry',
  'how-tos/configure-custom-instructions/add-personal-instructions',
  'how-tos/configure-custom-instructions/add-repository-instructions',
  'how-tos/configure-custom-instructions/add-organization-instructions',
  'how-tos/configure-content-exclusion/exclude-content-from-copilot',
  'how-tos/configure-content-exclusion/review-changes',
  'how-tos/use-copilot-for-common-tasks/use-copilot-to-create-or-update-issues',
  'how-tos/use-copilot-for-common-tasks/create-a-pr-summary',
  'how-tos/use-copilot-for-common-tasks/use-copilot-in-the-cli',
  'how-tos/configure-personal-settings/configure-network-settings',
  'how-tos/configure-personal-settings/configure-in-ide',
  'how-tos/configure-personal-settings/authenticate-to-ghecom',
  'how-tos/manage-and-track-spending/monitor-premium-requests',
  'how-tos/manage-and-track-spending/manage-request-allowances',
  'how-tos/manage-and-track-spending/manage-company-spending',
  'how-tos/manage-your-account/get-started-with-a-copilot-plan',
  'how-tos/manage-your-account/free-access-with-copilot-student',
  'how-tos/manage-your-account/get-free-access-to-copilot-pro',
  'how-tos/manage-your-account/view-and-change-your-copilot-plan',
  'how-tos/manage-your-account/disable-copilot-free',
  'how-tos/manage-your-account/manage-policies',
  'how-tos/administer-copilot/manage-for-organization/manage-plan/subscribe',
  'how-tos/administer-copilot/manage-for-organization/manage-plan/cancel',
  'how-tos/administer-copilot/manage-for-organization/manage-access/grant-access',
  'how-tos/administer-copilot/manage-for-organization/manage-access/manage-requests-for-access',
  'how-tos/administer-copilot/manage-for-organization/manage-access/revoke-access',
  'how-tos/administer-copilot/manage-for-organization/manage-access/manage-network-access',
  'how-tos/administer-copilot/manage-for-organization/manage-policies',
  'how-tos/administer-copilot/manage-for-organization/add-copilot-coding-agent',
  'how-tos/administer-copilot/manage-for-organization/prepare-for-custom-agents',
  'how-tos/administer-copilot/manage-for-organization/review-activity/review-user-activity-data',
  'how-tos/administer-copilot/manage-for-organization/review-activity/review-audit-logs',
  'how-tos/administer-copilot/manage-for-organization/use-your-own-api-keys',
  'how-tos/administer-copilot/manage-for-enterprise/manage-plan/subscribe',
  'how-tos/administer-copilot/manage-for-enterprise/manage-plan/cancel-plan',
  'how-tos/administer-copilot/manage-for-enterprise/manage-plan/upgrade-plan',
  'how-tos/administer-copilot/manage-for-enterprise/manage-plan/downgrade-subscription',
  'how-tos/administer-copilot/manage-for-enterprise/manage-access/grant-access',
  'how-tos/administer-copilot/manage-for-enterprise/manage-access/disable-for-organizations',
  'how-tos/administer-copilot/manage-for-enterprise/manage-access/view-license-usage',
  'how-tos/administer-copilot/manage-for-enterprise/manage-access/manage-network-access',
  'how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies',
  'how-tos/administer-copilot/manage-for-enterprise/manage-agents/prepare-for-custom-agents',
  'how-tos/administer-copilot/manage-for-enterprise/manage-agents/monitor-agentic-activity',
  'how-tos/administer-copilot/manage-for-enterprise/manage-agents/manage-copilot-coding-agent',
  'how-tos/administer-copilot/manage-for-enterprise/manage-agents/manage-copilot-code-review',
  'how-tos/administer-copilot/manage-for-enterprise/manage-spark',
  'how-tos/administer-copilot/manage-for-enterprise/use-your-own-api-keys',
  'how-tos/administer-copilot/manage-mcp-usage/configure-mcp-registry',
  'how-tos/administer-copilot/manage-mcp-usage/configure-mcp-server-access',
  'how-tos/administer-copilot/download-activity-report',
  'how-tos/administer-copilot/view-usage-and-adoption',
  'how-tos/administer-copilot/view-code-generation',
  'how-tos/troubleshoot-copilot/troubleshoot-common-issues',
  'how-tos/troubleshoot-copilot/view-logs',
  'how-tos/troubleshoot-copilot/troubleshoot-firewall-settings',
  'how-tos/troubleshoot-copilot/troubleshoot-network-errors',
  'how-tos/troubleshoot-copilot/troubleshoot-spark',
  'reference/chat-cheat-sheet', 'reference/customization-cheat-sheet',
  'reference/ai-models/supported-models', 'reference/ai-models/model-comparison',
  'reference/ai-models/model-hosting', 'reference/copilot-feature-matrix',
  'reference/keyboard-shortcuts',
  'reference/copilot-cli-reference/cli-command-reference',
  'reference/copilot-cli-reference/cli-plugin-reference',
  'reference/copilot-cli-reference/cli-programmatic-reference',
  'reference/copilot-cli-reference/acp-server',
  'reference/custom-agents-configuration', 'reference/custom-instructions-support',
  'reference/hooks-configuration', 'reference/policy-conflicts',
  'reference/copilot-allowlist-reference', 'reference/mcp-allowlist-enforcement',
  'reference/metrics-data',
  'reference/copilot-billing/billing-cycle', 'reference/copilot-billing/seat-assignment',
  'reference/copilot-billing/license-changes', 'reference/copilot-billing/azure-billing',
  'reference/agentic-audit-log-events', 'reference/review-excluded-files',
  'reference/copilot-usage-metrics/copilot-usage-metrics',
  'reference/copilot-usage-metrics/interpret-copilot-metrics',
  'reference/copilot-usage-metrics/reconciling-usage-metrics',
  'reference/copilot-usage-metrics/lines-of-code-metrics',
  'reference/copilot-usage-metrics/example-schema',
  'tutorials/copilot-chat-cookbook/communicate-effectively/creating-templates',
  'tutorials/copilot-chat-cookbook/communicate-effectively/extracting-information',
  'tutorials/copilot-chat-cookbook/communicate-effectively/synthesizing-research',
  'tutorials/copilot-chat-cookbook/communicate-effectively/creating-diagrams',
  'tutorials/copilot-chat-cookbook/communicate-effectively/generating-tables',
  'tutorials/copilot-chat-cookbook/debug-errors/debug-invalid-json',
  'tutorials/copilot-chat-cookbook/debug-errors/handle-api-rate-limits',
  'tutorials/copilot-chat-cookbook/debug-errors/diagnose-test-failures',
  'tutorials/copilot-chat-cookbook/analyze-functionality/explore-implementations',
  'tutorials/copilot-chat-cookbook/analyze-functionality/analyze-feedback',
  'tutorials/copilot-chat-cookbook/refactor-code/improve-code-readability',
  'tutorials/copilot-chat-cookbook/refactor-code/fix-lint-errors',
  'tutorials/copilot-chat-cookbook/refactor-code/refactor-for-optimization',
  'tutorials/copilot-chat-cookbook/refactor-code/refactor-for-sustainability',
  'tutorials/copilot-chat-cookbook/refactor-code/refactor-design-patterns',
  'tutorials/copilot-chat-cookbook/refactor-code/refactor-data-access-layers',
  'tutorials/copilot-chat-cookbook/refactor-code/decouple-business-logic',
  'tutorials/copilot-chat-cookbook/refactor-code/handle-cross-cutting',
  'tutorials/copilot-chat-cookbook/refactor-code/simplify-inheritance-hierarchies',
  'tutorials/copilot-chat-cookbook/refactor-code/fix-database-deadlocks',
  'tutorials/copilot-chat-cookbook/refactor-code/translate-code',
  'tutorials/copilot-chat-cookbook/document-code/creating-issues',
  'tutorials/copilot-chat-cookbook/document-code/document-legacy-code',
  'tutorials/copilot-chat-cookbook/document-code/explain-legacy-code',
  'tutorials/copilot-chat-cookbook/document-code/explain-complex-logic',
  'tutorials/copilot-chat-cookbook/document-code/sync-documentation',
  'tutorials/copilot-chat-cookbook/document-code/write-discussions-or-blog-posts',
  'tutorials/copilot-chat-cookbook/testing-code/generate-unit-tests',
  'tutorials/copilot-chat-cookbook/testing-code/create-mock-objects',
  'tutorials/copilot-chat-cookbook/testing-code/create-end-to-end-tests',
  'tutorials/copilot-chat-cookbook/testing-code/update-unit-tests',
  'tutorials/copilot-chat-cookbook/analyze-security/secure-your-repository',
  'tutorials/copilot-chat-cookbook/analyze-security/manage-dependency-updates',
  'tutorials/copilot-chat-cookbook/analyze-security/find-vulnerabilities',
  'tutorials/customization-library/custom-instructions/your-first-custom-instructions',
  'tutorials/customization-library/custom-instructions/concept-explainer',
  'tutorials/customization-library/custom-instructions/debugging-tutor',
  'tutorials/customization-library/custom-instructions/code-reviewer',
  'tutorials/customization-library/custom-instructions/github-actions-helper',
  'tutorials/customization-library/custom-instructions/pull-request-assistant',
  'tutorials/customization-library/custom-instructions/issue-manager',
  'tutorials/customization-library/custom-instructions/accessibility-auditor',
  'tutorials/customization-library/custom-instructions/testing-automation',
  'tutorials/customization-library/prompt-files/your-first-prompt-file',
  'tutorials/customization-library/prompt-files/create-readme',
  'tutorials/customization-library/prompt-files/onboarding-plan',
  'tutorials/customization-library/prompt-files/document-api',
  'tutorials/customization-library/prompt-files/review-code',
  'tutorials/customization-library/prompt-files/generate-unit-tests',
  'tutorials/customization-library/custom-agents/your-first-custom-agent',
  'tutorials/customization-library/custom-agents/implementation-planner',
  'tutorials/customization-library/custom-agents/bug-fix-teammate',
  'tutorials/customization-library/custom-agents/cleanup-specialist',
  'tutorials/coding-agent/get-the-best-results',
  'tutorials/coding-agent/pilot-coding-agent',
  'tutorials/coding-agent/improve-a-project',
  'tutorials/spark/your-first-spark', 'tutorials/spark/prompt-tips',
  'tutorials/spark/build-apps-with-spark', 'tutorials/spark/deploy-from-cli',
  'tutorials/use-custom-instructions', 'tutorials/enhance-agent-mode-with-mcp',
  'tutorials/compare-ai-models', 'tutorials/speed-up-development-work',
  'tutorials/roll-out-at-scale/assign-licenses/set-up-self-serve-licenses',
  'tutorials/roll-out-at-scale/assign-licenses/track-usage-and-adoption',
  'tutorials/roll-out-at-scale/assign-licenses/remind-inactive-users',
  'tutorials/roll-out-at-scale/establish-ai-managers',
  'tutorials/roll-out-at-scale/enable-developers/drive-adoption',
  'tutorials/roll-out-at-scale/enable-developers/integrate-ai-agents',
  'tutorials/roll-out-at-scale/drive-downstream-impact/increase-test-coverage',
  'tutorials/roll-out-at-scale/drive-downstream-impact/accelerate-pull-requests',
  'tutorials/roll-out-at-scale/drive-downstream-impact/reduce-security-debt',
  'tutorials/roll-out-at-scale/measure-success',
  'tutorials/roll-out-at-scale/maintain-codebase-standards',
  'tutorials/explore-a-codebase', 'tutorials/explore-issues-and-discussions',
  'tutorials/explore-pull-requests', 'tutorials/write-tests',
  'tutorials/refactor-code', 'tutorials/optimize-code-reviews',
  'tutorials/reduce-technical-debt', 'tutorials/review-ai-generated-code',
  'tutorials/learn-a-new-language', 'tutorials/modernize-legacy-code',
  'tutorials/modernize-java-applications', 'tutorials/migrate-a-project',
  'tutorials/plan-a-project', 'tutorials/vibe-coding', 'tutorials/upgrade-projects',
  'tutorials/copilot-cli-hooks',
  'responsible-use/copilot-code-completion', 'responsible-use/chat-in-your-ide',
  'responsible-use/chat-in-github', 'responsible-use/chat-in-github-mobile',
  'responsible-use/copilot-cli', 'responsible-use/copilot-in-windows-terminal',
  'responsible-use/copilot-in-github-desktop', 'responsible-use/pull-request-summaries',
  'responsible-use/copilot-commit-message-generation', 'responsible-use/code-review',
  'responsible-use/copilot-coding-agent', 'responsible-use/spark',
  'responsible-use/copilot-spaces',
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (documentation-scraper)' },
        signal: AbortSignal.timeout(30000),
      });
      if (res.status === 429) {
        const wait = Math.pow(2, i + 1) * 1000;
        console.log(`  Rate limited on ${url}, waiting ${wait}ms...`);
        await sleep(wait);
        continue;
      }
      if (!res.ok) {
        console.log(`  HTTP ${res.status} for ${url}`);
        return null;
      }
      return await res.text();
    } catch (err) {
      if (i === retries - 1) {
        console.log(`  Failed: ${url} - ${err.message}`);
        return null;
      }
      await sleep(1000);
    }
  }
  return null;
}

async function scrapeClaudeCode() {
  console.log(`\n=== Claude Code: ${CLAUDE_CODE_PAGES.length} pages ===`);
  const dir = join(DOCS_DIR, 'claude-code');
  let ok = 0, fail = 0;

  for (let i = 0; i < CLAUDE_CODE_PAGES.length; i += CONCURRENCY) {
    const batch = CLAUDE_CODE_PAGES.slice(i, i + CONCURRENCY);
    const results = await Promise.all(
      batch.map(async (page) => {
        const url = `https://code.claude.com/docs/en/${page}.md`;
        const content = await fetchWithRetry(url);
        if (content) {
          const filePath = join(dir, `${page}.md`);
          await writeFile(filePath, content, 'utf-8');
          ok++;
          return true;
        }
        fail++;
        return false;
      })
    );
    if (i + CONCURRENCY < CLAUDE_CODE_PAGES.length) await sleep(DELAY_MS);
    process.stdout.write(`\r  Progress: ${Math.min(i + CONCURRENCY, CLAUDE_CODE_PAGES.length)}/${CLAUDE_CODE_PAGES.length}`);
  }
  console.log(`\n  Done: ${ok} saved, ${fail} failed`);
}

async function scrapeOpenCode() {
  console.log(`\n=== OpenCode: ${OPENCODE_PAGES.length} pages ===`);
  const dir = join(DOCS_DIR, 'opencode');
  let ok = 0, fail = 0;

  for (let i = 0; i < OPENCODE_PAGES.length; i += CONCURRENCY) {
    const batch = OPENCODE_PAGES.slice(i, i + CONCURRENCY);
    await Promise.all(
      batch.map(async (page) => {
        const slug = page || 'index';
        const url = `https://opencode.ai/docs/${page}`;
        const html = await fetchWithRetry(url);
        if (html) {
          const $ = cheerio.load(html);
          // Remove sidebar nav, mobile menu, etc.
          $('nav, footer, header, .sidebar, [data-pagefind-ignore]').remove();
          const mainContent = $('main').html() || $.html();
          const md = turndown.turndown(mainContent);
          const filePath = join(dir, `${slug}.md`);
          await writeFile(filePath, md, 'utf-8');
          ok++;
        } else {
          fail++;
        }
      })
    );
    if (i + CONCURRENCY < OPENCODE_PAGES.length) await sleep(DELAY_MS);
    process.stdout.write(`\r  Progress: ${Math.min(i + CONCURRENCY, OPENCODE_PAGES.length)}/${OPENCODE_PAGES.length}`);
  }
  console.log(`\n  Done: ${ok} saved, ${fail} failed`);
}

async function scrapeCopilot() {
  console.log(`\n=== GitHub Copilot: ${COPILOT_PAGES.length} pages ===`);
  const baseDir = join(DOCS_DIR, 'github-copilot');
  let ok = 0, fail = 0;

  for (let i = 0; i < COPILOT_PAGES.length; i += CONCURRENCY) {
    const batch = COPILOT_PAGES.slice(i, i + CONCURRENCY);
    await Promise.all(
      batch.map(async (page) => {
        const url = `https://docs.github.com/en/copilot/${page}`;
        const html = await fetchWithRetry(url);
        if (html) {
          const $ = cheerio.load(html);
          // Remove sidebar, header, footer, and non-content elements
          $('nav, footer, header, .sidebar, [data-testid="sidebar"], [data-testid="header"]').remove();
          const mainContent = $('main').html() || $('article').html() || $.html();
          const md = turndown.turndown(mainContent);
          // Flatten path for filename: get-started/quickstart -> get-started_quickstart.md
          const filename = page.replace(/\//g, '_') + '.md';
          const filePath = join(baseDir, filename);
          await writeFile(filePath, md, 'utf-8');
          ok++;
        } else {
          fail++;
        }
      })
    );
    if (i + CONCURRENCY < COPILOT_PAGES.length) await sleep(DELAY_MS);
    process.stdout.write(`\r  Progress: ${Math.min(i + CONCURRENCY, COPILOT_PAGES.length)}/${COPILOT_PAGES.length}`);
  }
  console.log(`\n  Done: ${ok} saved, ${fail} failed`);
}

async function main() {
  console.log('Starting documentation scrape...');

  const target = process.argv[2]; // 'claude', 'opencode', 'copilot', or undefined for all
  const tasks = [];
  if (!target || target === 'claude') tasks.push(scrapeClaudeCode());
  if (!target || target === 'opencode') tasks.push(scrapeOpenCode());
  if (!target || target === 'copilot') tasks.push(scrapeCopilot());
  await Promise.all(tasks);

  console.log('\n=== Complete! ===');
}

main().catch(console.error);
