import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Fragment } from 'react';
import { ScrollLayout } from '@/components/ScrollLayout';
import { ReferenceLayout } from '@/components/ReferenceLayout';
import { Section } from '@/components/Section';
import {
  loadLesson,
  getLessonMeta,
  getNavigation,
  getAllParams,
  getCourseOutline,
} from '@/lib/lessons';

interface LessonPageProps {
  params: Promise<{ module: string; slug: string }>;
}

export function generateStaticParams() {
  return getAllParams();
}

export async function generateMetadata({ params }: LessonPageProps): Promise<Metadata> {
  const { module, slug } = await params;
  // Metadata only needs the title — pull it from the light registry instead
  // of loading the lesson's visual chunk.
  const meta = getLessonMeta(module, slug);
  if (!meta) return { title: 'Not found' };
  return {
    title: meta.title,
    description: `${meta.title} — part of the AI Coding Tools Workshop.`,
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { module, slug } = await params;
  const lesson = await loadLesson(module, slug);

  if (!lesson) {
    notFound();
  }

  const nav = getNavigation(module, slug);
  const outline = getCourseOutline(module, slug);

  // Reference pages use a single-column centered layout (no canvas).
  if (module === 'reference') {
    return (
      <ReferenceLayout
        key={`${module}/${slug}`}
        title={lesson.title}
        prevHref={nav.prev?.href}
        prevTitle={nav.prev?.title}
        nextHref={nav.next?.href}
        nextTitle={nav.next?.title}
        courseOutline={outline}
      >
        {lesson.sections.map((section) => (
          <Fragment key={section.id}>{section.content}</Fragment>
        ))}
      </ReferenceLayout>
    );
  }

  return (
    <ScrollLayout
      key={`${module}/${slug}`}
      visuals={lesson.visuals}
      title={lesson.title}
      prevHref={nav.prev?.href}
      prevTitle={nav.prev?.title}
      nextHref={nav.next?.href}
      nextTitle={nav.next?.title}
      courseOutline={outline}
    >
      {lesson.sections.map((section, i) => {
        // On mobile we render the section's visual inline. When several
        // adjacent sections share the same visual (e.g. the four agentic-loop
        // phases all reusing one ScrollSyncedTerminal), only render it once
        // for the first of the run so the mobile reader doesn't see the
        // same thing four times in a row.
        const prevVisual = i > 0 ? lesson.sections[i - 1].visual : null;
        const inlineVisual =
          section.visual !== prevVisual ? lesson.visuals[section.visual] : undefined;
        return (
          <Section
            key={section.id}
            id={section.id}
            visual={section.visual}
            visualNode={inlineVisual}
          >
            {section.content}
          </Section>
        );
      })}
    </ScrollLayout>
  );
}
