import { getCollection } from 'astro:content';

export interface NavItem {
  title: string;
  slug: string;
  href: string;
  tools: string[];
  order: number;
}

export interface NavSection {
  title: string;
  slug: string;
  label: string;
  items: NavItem[];
}

export type Navigation = NavSection[];

const MODULES: { key: string; title: string; label: string }[] = [
  { key: 'foundations', title: 'Foundations', label: 'Block 1' },
  { key: 'productivity', title: 'Getting Productive', label: 'Block 2' },
  { key: 'mastery', title: 'Tool Deep Dives', label: 'Block 3' },
  { key: 'advanced', title: 'Customization & Scale', label: 'Block 4' },
  { key: 'reference', title: 'Reference', label: 'Reference' },
];

export async function getNavigation(): Promise<Navigation> {
  const collections = await Promise.all(
    MODULES.map((m) => getCollection(m.key as any))
  );

  return MODULES.map((mod, i) => ({
    title: mod.title,
    slug: mod.key,
    label: mod.label,
    items: collections[i]
      .filter((e: any) => !e.data.draft)
      .sort((a: any, b: any) => a.data.order - b.data.order)
      .map((e: any) => ({
        title: e.data.title,
        slug: e.id,
        href: `/${mod.key}/${e.id}`,
        tools: e.data.tools,
        order: e.data.order,
      })),
  }));
}

export async function getAllOrderedEntries() {
  const nav = await getNavigation();
  return nav.flatMap((section) =>
    section.items.map((item) => ({
      ...item,
      section: section.slug,
      sectionTitle: section.title,
    }))
  );
}

export async function getPrevNext(currentHref: string) {
  const all = await getAllOrderedEntries();
  const idx = all.findIndex((item) => item.href === currentHref);
  return {
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx < all.length - 1 ? all[idx + 1] : null,
  };
}
