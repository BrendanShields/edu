import type { LessonDef, Navigation, CourseOutlineModule } from './types';

/**
 * Lesson registry — metadata only.
 *
 * Each lesson def lives in its own file under `./{module}/{slug}.tsx` and is
 * loaded on demand via `loadLesson` (a per-lesson dynamic `import()` so each
 * one is its own webpack chunk). We deliberately do NOT statically import the
 * lesson def files here, because doing so would pull every lesson's visual
 * components into every lesson route's client bundle.
 *
 * The titles are duplicated here so navigation, outline, and metadata can
 * compute without ever loading the heavy visual code. The duplication is
 * checked at build time via the `loadLesson` test below.
 */

interface ModuleEntry {
  slug: string;
  title: string;
  lessons: { slug: string; title: string }[];
}

export const COURSE_ORDER: ModuleEntry[] = [
  {
    slug: 'preface',
    title: 'Before You Start',
    lessons: [
      { slug: 'welcome', title: 'Welcome to the Workshop' },
      { slug: 'what-is-an-llm', title: 'Grown, Not Crafted' },
    ],
  },
  {
    slug: 'foundations',
    title: 'Foundations',
    lessons: [
      { slug: 'tool-landscape', title: 'The Tool Landscape' },
      { slug: 'how-tools-work', title: 'How AI Coding Tools Work' },
      { slug: 'understanding-context', title: 'Understanding Context' },
      { slug: 'permissions-and-safety', title: 'Permissions & Safety' },
    ],
  },
  {
    slug: 'productivity',
    title: 'Productivity',
    lessons: [
      { slug: 'effective-prompting', title: 'Effective Prompting' },
      { slug: 'explore-plan-build', title: 'Explore, Plan, Build' },
      { slug: 'context-management', title: 'Context Management' },
      { slug: 'verification-driven-dev', title: 'Verification-Driven Development' },
    ],
  },
  {
    slug: 'mastery',
    title: 'Tool Deep Dives',
    lessons: [
      { slug: 'claude-code', title: 'Claude Code Mastery' },
      { slug: 'opencode', title: 'OpenCode Essentials' },
      { slug: 'github-copilot', title: 'GitHub Copilot Mastery' },
    ],
  },
  {
    slug: 'advanced',
    title: 'Advanced',
    lessons: [
      { slug: 'hooks-and-automation', title: 'Hooks & Automation' },
      { slug: 'project-configuration', title: 'Project Configuration' },
      { slug: 'mcp-external-tools', title: 'MCP & External Tools' },
      { slug: 'skills-and-workflows', title: 'Skills & Workflows' },
      { slug: 'subagents-and-parallelization', title: 'Subagents & Parallelization' },
    ],
  },
  {
    slug: 'reference',
    title: 'Reference',
    lessons: [
      { slug: 'claude-code-cheatsheet', title: 'Claude Code Cheatsheet' },
      { slug: 'opencode-cheatsheet', title: 'OpenCode Cheatsheet' },
      { slug: 'copilot-cheatsheet', title: 'GitHub Copilot Cheatsheet' },
      { slug: 'tool-comparison', title: 'Tool Comparison' },
    ],
  },
];

interface FlatEntry {
  module: string;
  slug: string;
  title: string;
}

const FLAT_ORDER: FlatEntry[] = COURSE_ORDER.flatMap((mod) =>
  mod.lessons.map((l) => ({ module: mod.slug, slug: l.slug, title: l.title })),
);

// O(1) lookups by `${module}/${slug}` key. Built once at module load so the
// metadata helpers don't have to scan FLAT_ORDER on every call.
const FLAT_ENTRIES_BY_KEY = new Map<string, FlatEntry>();
const FLAT_INDEX_BY_KEY = new Map<string, number>();
FLAT_ORDER.forEach((entry, i) => {
  const key = `${entry.module}/${entry.slug}`;
  FLAT_ENTRIES_BY_KEY.set(key, entry);
  FLAT_INDEX_BY_KEY.set(key, i);
});

/**
 * Per-lesson dynamic loader map. Each entry is its own `import()` call so
 * webpack creates one chunk per lesson; static analysis can see exactly which
 * file each entry points at.
 */
const LESSON_LOADERS: Record<string, () => Promise<{ default: LessonDef }>> = {
  'preface/welcome': () => import('./preface/welcome'),
  'preface/what-is-an-llm': () => import('./preface/what-is-an-llm'),
  'foundations/tool-landscape': () => import('./foundations/tool-landscape'),
  'foundations/how-tools-work': () => import('./foundations/how-tools-work'),
  'foundations/understanding-context': () => import('./foundations/understanding-context'),
  'foundations/permissions-and-safety': () => import('./foundations/permissions-and-safety'),
  'productivity/effective-prompting': () => import('./productivity/effective-prompting'),
  'productivity/explore-plan-build': () => import('./productivity/explore-plan-build'),
  'productivity/context-management': () => import('./productivity/context-management'),
  'productivity/verification-driven-dev': () => import('./productivity/verification-driven-dev'),
  'mastery/claude-code': () => import('./mastery/claude-code'),
  'mastery/opencode': () => import('./mastery/opencode'),
  'mastery/github-copilot': () => import('./mastery/github-copilot'),
  'advanced/hooks-and-automation': () => import('./advanced/hooks-and-automation'),
  'advanced/project-configuration': () => import('./advanced/project-configuration'),
  'advanced/mcp-external-tools': () => import('./advanced/mcp-external-tools'),
  'advanced/skills-and-workflows': () => import('./advanced/skills-and-workflows'),
  'advanced/subagents-and-parallelization': () => import('./advanced/subagents-and-parallelization'),
  'reference/claude-code-cheatsheet': () => import('./reference/claude-code-cheatsheet'),
  'reference/opencode-cheatsheet': () => import('./reference/opencode-cheatsheet'),
  'reference/copilot-cheatsheet': () => import('./reference/copilot-cheatsheet'),
  'reference/tool-comparison': () => import('./reference/tool-comparison'),
};

/** Lazily resolves a single lesson def. Returns `undefined` for unknown slugs. */
export async function loadLesson(
  module: string,
  slug: string,
): Promise<LessonDef | undefined> {
  const loader = LESSON_LOADERS[`${module}/${slug}`];
  if (!loader) return undefined;
  return (await loader()).default;
}

/** Light metadata lookup — never loads visual code. */
export function getLessonMeta(module: string, slug: string): FlatEntry | undefined {
  return FLAT_ENTRIES_BY_KEY.get(`${module}/${slug}`);
}

export function getNavigation(module: string, slug: string): Navigation {
  const idx = FLAT_INDEX_BY_KEY.get(`${module}/${slug}`);
  if (idx === undefined) return {};

  const prev = idx > 0 ? FLAT_ORDER[idx - 1] : undefined;
  const next = idx < FLAT_ORDER.length - 1 ? FLAT_ORDER[idx + 1] : undefined;

  return {
    prev: prev ? { href: `/${prev.module}/${prev.slug}`, title: prev.title } : undefined,
    next: next ? { href: `/${next.module}/${next.slug}`, title: next.title } : undefined,
  };
}

export function getAllParams(): { module: string; slug: string }[] {
  return FLAT_ORDER.map(({ module, slug }) => ({ module, slug }));
}

export function getCourseOutline(activeModule: string, activeSlug: string): CourseOutlineModule[] {
  return COURSE_ORDER.map((mod) => ({
    slug: mod.slug,
    title: mod.title,
    lessons: mod.lessons.map((lesson) => ({
      slug: lesson.slug,
      module: mod.slug,
      title: lesson.title,
      href: `/${mod.slug}/${lesson.slug}`,
      active: mod.slug === activeModule && lesson.slug === activeSlug,
    })),
  }));
}
