import type { ReactNode } from 'react';

export interface SectionDef {
  id: string;
  visual: string;
  content: ReactNode;
}

export interface LessonDef {
  slug: string;
  module: string;
  title: string;
  visuals: Record<string, ReactNode>;
  sections: SectionDef[];
}

export interface ModuleDef {
  slug: string;
  title: string;
  lessons: string[];
}

export interface NavLink {
  href: string;
  title: string;
}

export interface Navigation {
  prev?: NavLink;
  next?: NavLink;
}

export interface CourseOutlineLesson {
  slug: string;
  module: string;
  title: string;
  href: string;
  active: boolean;
}

export interface CourseOutlineModule {
  slug: string;
  title: string;
  lessons: CourseOutlineLesson[];
}
