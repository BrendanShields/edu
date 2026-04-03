interface Step {
  n: string;
  label: string;
  desc: string;
}

interface StepFlowProps {
  title: string;
  steps: Step[];
  loop?: boolean;
}

export function StepFlow({ title, steps, loop }: StepFlowProps) {
  return (
    <div className="space-y-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">{title}</p>
      <div className="relative p-6 rounded-xl border border-border bg-surface">
        <div className="space-y-4 font-mono text-sm">
          {steps.map((step, i) => (
            <div key={step.n}>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center text-xs font-bold shrink-0">
                  {step.n}
                </span>
                <div>
                  <span className="text-text-primary font-semibold">{step.label}</span>
                  <span className="text-text-muted ml-2">{step.desc}</span>
                </div>
              </div>
              {i < steps.length - 1 && <div className="ml-4 border-l border-border h-4 mt-1" />}
            </div>
          ))}
          {loop && (
            <>
              <div className="ml-4 border-l border-dashed border-accent h-4" />
              <div className="text-xs text-accent text-center">&larrhk; repeat until done</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
