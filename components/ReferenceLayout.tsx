import type { ReactNode } from 'react';
import { NavIsland } from '@/components/NavIsland';
import { PrevNextNav } from '@/components/PrevNextNav';
import type { CourseOutlineModule } from '@/lib/lessons/types';

interface ReferenceLayoutProps {
  children: ReactNode;
  title: string;
  prevHref?: string;
  prevTitle?: string;
  nextHref?: string;
  nextTitle?: string;
  courseOutline?: CourseOutlineModule[];
}

export function ReferenceLayout({
  children,
  title,
  prevHref,
  prevTitle,
  nextHref,
  nextTitle,
  courseOutline,
}: ReferenceLayoutProps) {
  return (
    <>
      <main className="reference-layout">
        <div className="reference-layout__inner">
          <article className="dd-prose">{children}</article>
          <PrevNextNav
            prevHref={prevHref}
            prevTitle={prevTitle}
            nextHref={nextHref}
            nextTitle={nextTitle}
          />
        </div>
      </main>
      <NavIsland title={title} courseOutline={courseOutline} />
    </>
  );
}
