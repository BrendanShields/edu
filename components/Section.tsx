import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  visual?: string;
  children: ReactNode;
}

export function Section({ id, visual, children }: SectionProps) {
  return (
    <section
      data-section={id}
      data-visual={visual || ''}
      className="dd-section"
    >
      {children}
    </section>
  );
}
