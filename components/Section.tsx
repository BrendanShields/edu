import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  visual?: string;
  /**
   * Resolved visual node for this section. Rendered inline on narrow
   * viewports (where the sticky right canvas is hidden) so the prose still
   * has its companion visual nearby. Hidden on desktop via CSS.
   */
  visualNode?: ReactNode;
  children: ReactNode;
}

export function Section({ id, visual, visualNode, children }: SectionProps) {
  return (
    <section
      data-section={id}
      data-visual={visual || ''}
      className="dd-section"
    >
      {children}
      {visualNode ? (
        <div className="dd-section__inline-visual" aria-hidden>
          {visualNode}
        </div>
      ) : null}
    </section>
  );
}
