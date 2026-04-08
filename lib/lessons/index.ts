import type { ModuleDef, LessonDef, Navigation, CourseOutlineModule } from './types';

// Lesson imports — preface
import welcome from './preface/welcome';
import whatIsAnLlm from './preface/what-is-an-llm';

// Lesson imports — foundations
import howToolsWork from './foundations/how-tools-work';
import toolLandscape from './foundations/tool-landscape';
import permissionsAndSafety from './foundations/permissions-and-safety';
import understandingContext from './foundations/understanding-context';

// Lesson imports — productivity
import effectivePrompting from './productivity/effective-prompting';
import explorePlanBuild from './productivity/explore-plan-build';
import contextManagement from './productivity/context-management';
import verificationDrivenDev from './productivity/verification-driven-dev';

// Lesson imports — mastery
import claudeCode from './mastery/claude-code';
import opencode from './mastery/opencode';
import githubCopilot from './mastery/github-copilot';

// Lesson imports — advanced
import projectConfiguration from './advanced/project-configuration';
import mcpExternalTools from './advanced/mcp-external-tools';
import skillsAndWorkflows from './advanced/skills-and-workflows';
import subagentsAndParallelization from './advanced/subagents-and-parallelization';
import hooksAndAutomation from './advanced/hooks-and-automation';

// Lesson imports — reference
import claudeCodeCheatsheet from './reference/claude-code-cheatsheet';
import opencodeCheatsheet from './reference/opencode-cheatsheet';
import copilotCheatsheet from './reference/copilot-cheatsheet';
import toolComparison from './reference/tool-comparison';

export const COURSE_ORDER: ModuleDef[] = [
  {
    slug: 'preface',
    title: 'Before You Start',
    lessons: ['welcome', 'what-is-an-llm'],
  },
  {
    slug: 'foundations',
    title: 'Foundations',
    lessons: ['tool-landscape', 'how-tools-work', 'understanding-context', 'permissions-and-safety'],
  },
  {
    slug: 'productivity',
    title: 'Productivity',
    lessons: ['effective-prompting', 'explore-plan-build', 'context-management', 'verification-driven-dev'],
  },
  {
    slug: 'mastery',
    title: 'Tool Deep Dives',
    lessons: ['claude-code', 'opencode', 'github-copilot'],
  },
  {
    slug: 'advanced',
    title: 'Advanced',
    lessons: ['hooks-and-automation', 'project-configuration', 'mcp-external-tools', 'skills-and-workflows', 'subagents-and-parallelization'],
  },
  {
    slug: 'reference',
    title: 'Reference',
    lessons: ['claude-code-cheatsheet', 'opencode-cheatsheet', 'copilot-cheatsheet', 'tool-comparison'],
  },
];

const ALL_LESSONS: Record<string, LessonDef> = {
  'welcome': welcome,
  'what-is-an-llm': whatIsAnLlm,
  'how-tools-work': howToolsWork,
  'tool-landscape': toolLandscape,
  'permissions-and-safety': permissionsAndSafety,
  'understanding-context': understandingContext,
  'effective-prompting': effectivePrompting,
  'explore-plan-build': explorePlanBuild,
  'context-management': contextManagement,
  'verification-driven-dev': verificationDrivenDev,
  'claude-code': claudeCode,
  'opencode': opencode,
  'github-copilot': githubCopilot,
  'project-configuration': projectConfiguration,
  'mcp-external-tools': mcpExternalTools,
  'skills-and-workflows': skillsAndWorkflows,
  'subagents-and-parallelization': subagentsAndParallelization,
  'hooks-and-automation': hooksAndAutomation,
  'claude-code-cheatsheet': claudeCodeCheatsheet,
  'opencode-cheatsheet': opencodeCheatsheet,
  'copilot-cheatsheet': copilotCheatsheet,
  'tool-comparison': toolComparison,
};

// Flat ordered list for navigation
const FLAT_ORDER: { module: string; slug: string }[] = COURSE_ORDER.flatMap((mod) =>
  mod.lessons.map((slug) => ({ module: mod.slug, slug }))
);

export function getLesson(module: string, slug: string): LessonDef | undefined {
  const lesson = ALL_LESSONS[slug];
  if (lesson && lesson.module === module) return lesson;
  return undefined;
}

export function getNavigation(module: string, slug: string): Navigation {
  const idx = FLAT_ORDER.findIndex((e) => e.module === module && e.slug === slug);
  if (idx === -1) return {};

  const prev = idx > 0 ? FLAT_ORDER[idx - 1] : undefined;
  const next = idx < FLAT_ORDER.length - 1 ? FLAT_ORDER[idx + 1] : undefined;

  return {
    prev: prev ? { href: `/${prev.module}/${prev.slug}`, title: ALL_LESSONS[prev.slug].title } : undefined,
    next: next ? { href: `/${next.module}/${next.slug}`, title: ALL_LESSONS[next.slug].title } : undefined,
  };
}

export function getAllParams(): { module: string; slug: string }[] {
  return FLAT_ORDER;
}

export function getCourseOutline(activeModule: string, activeSlug: string): CourseOutlineModule[] {
  return COURSE_ORDER.map((mod) => ({
    slug: mod.slug,
    title: mod.title,
    lessons: mod.lessons.map((slug) => ({
      slug,
      module: mod.slug,
      title: ALL_LESSONS[slug].title,
      href: `/${mod.slug}/${slug}`,
      active: mod.slug === activeModule && slug === activeSlug,
    })),
  }));
}
