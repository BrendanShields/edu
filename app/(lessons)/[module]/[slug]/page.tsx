import { notFound } from 'next/navigation';
import { ScrollLayout } from '@/components/ScrollLayout';
import { ReferenceLayout } from '@/components/ReferenceLayout';
import { Section } from '@/components/Section';
import { getLesson, getNavigation, getAllParams, getCourseOutline } from '@/lib/lessons';

export function generateStaticParams() {
  return getAllParams();
}

export default async function LessonPage({ params }: { params: Promise<{ module: string; slug: string }> }) {
  const { module, slug } = await params;
  const lesson = getLesson(module, slug);

  if (!lesson) {
    notFound();
  }

  const nav = getNavigation(module, slug);
  const outline = getCourseOutline(module, slug);

  // Reference pages use single-column centered layout (no canvas)
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
          <div key={section.id}>
            {section.content}
          </div>
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
      {lesson.sections.map((section) => (
        <Section key={section.id} id={section.id} visual={section.visual}>
          {section.content}
        </Section>
      ))}
    </ScrollLayout>
  );
}
