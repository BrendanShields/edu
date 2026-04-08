'use client';

import { useState, useEffect, useRef } from 'react';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [showLoop, setShowLoop] = useState(false);
  const [completed, setCompleted] = useState(false);

  const totalSteps = steps.length;

  // `advance` reads `showLoop` from closure, so it has to be re-created when
  // `showLoop` changes. We stash the latest copy in a ref so the auto-advance
  // interval can call it WITHOUT being torn down and re-created on every
  // `showLoop` flip.
  const advanceRef = useRef<() => void>(() => {});
  advanceRef.current = () => {
    setActiveIndex((prev) => {
      // If we're showing all steps (completed, non-loop), do nothing
      if (!loop && prev >= totalSteps - 1 && !showLoop) {
        setCompleted(true);
        return prev;
      }

      // If showing loop indicator, restart
      if (loop && showLoop) {
        setShowLoop(false);
        return 0;
      }

      // If at last step with loop, show loop indicator
      if (loop && prev >= totalSteps - 1) {
        setShowLoop(true);
        return prev;
      }

      return prev + 1;
    });
  };

  // Auto-advance timer — only torn down when pause/completion actually change.
  useEffect(() => {
    if (paused || completed) return;
    const timer = setInterval(() => advanceRef.current(), 1800);
    return () => clearInterval(timer);
  }, [paused, completed]);

  // Pause timeout - resume after 5s
  useEffect(() => {
    if (!paused) return;

    const timer = setTimeout(() => setPaused(false), 5000);
    return () => clearTimeout(timer);
  }, [paused]);

  const handleStepClick = (index: number) => {
    setActiveIndex(index);
    setShowLoop(false);
    setCompleted(false);
    setPaused(true);
  };

  const progressFraction = (activeIndex + 1) / totalSteps;

  return (
    <div className="space-y-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted animate-[fadeIn_0.3s_ease-out_both]">
        {title}
      </p>

      {/* Progress bar */}
      <div className="h-1 w-full rounded-full bg-border overflow-hidden">
        <div
          className="h-full rounded-full bg-accent"
          style={{
            width: `${progressFraction * 100}%`,
            transition: 'width 0.4s ease-out',
          }}
        />
      </div>

      <div className="relative p-6 rounded-xl border border-border bg-surface">
        <div className="space-y-4 font-mono text-sm">
          {steps.map((step, i) => {
            const isVisible = i <= activeIndex;
            const isActive = i === activeIndex;

            if (!isVisible) return null;

            return (
              <button
                key={step.n}
                type="button"
                className="animate-[fadeSlideIn_0.4s_ease-out_both] cursor-pointer text-left bg-transparent border-none p-0 w-full block"
                style={{
                  opacity: isActive || completed ? 1 : 0.5,
                  transition: 'opacity 0.3s ease-out',
                  font: 'inherit',
                }}
                onClick={() => handleStepClick(i)}
                aria-label={`Jump to step ${step.n}: ${step.label}`}
                aria-pressed={isActive}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0"
                    style={{
                      backgroundColor: isActive
                        ? 'var(--color-accent)'
                        : 'color-mix(in srgb, var(--color-accent) 20%, transparent)',
                      color: isActive
                        ? 'var(--color-surface)'
                        : 'var(--color-accent)',
                      transition: 'background-color 0.3s ease-out, color 0.3s ease-out',
                    }}
                  >
                    {step.n}
                  </span>
                  <div>
                    <span className="text-text-primary font-semibold">{step.label}</span>
                    <span className="text-text-muted ml-2">{step.desc}</span>
                  </div>
                </div>
                {i < activeIndex && <div className="ml-4 border-l border-border h-4 mt-1" />}
                {i === activeIndex && i < steps.length - 1 && !completed && (
                  <div className="ml-4 border-l border-border h-4 mt-1" />
                )}
                {completed && i < steps.length - 1 && (
                  <div className="ml-4 border-l border-border h-4 mt-1" />
                )}
              </button>
            );
          })}

          {/* Loop indicator */}
          {loop && showLoop && (
            <div className="animate-[fadeIn_0.4s_ease-out_both]">
              <div className="ml-4 border-l border-dashed border-accent h-4" />
              <div className="text-xs text-accent text-center">
                &larrhk; repeat until done
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
