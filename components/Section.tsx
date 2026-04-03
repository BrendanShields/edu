'use client';

import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  visual?: string;
  children: ReactNode;
}

export function Section({ id, visual, children }: SectionProps) {
  return (
    <div
      data-section={id}
      data-visual={visual || ''}
      className="dd-section py-12 min-h-[40vh]"
    >
      {children}
    </div>
  );
}
