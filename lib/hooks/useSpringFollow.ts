'use client';

import { useEffect, useRef, type PointerEvent as ReactPointerEvent } from 'react';

// Spring constants — matched to the framer-motion snippet
// (mass: 0.1, damping: 10, stiffness: 131) for the same feel.
const STIFFNESS = 131;
const DAMPING = 10;
const MASS = 0.1;

// Half the dot's box dimension (used to center the dot on the cursor).
const DOT_OFFSET = 32;

interface SpringState {
  x: number;
  y: number;
  vis: number;
  vx: number;
  vy: number;
  vvis: number;
}

/**
 * Hook that drives a single DOM element along a spring toward the cursor.
 *
 * Returns a ref to attach to the dot element and a set of pointer handlers
 * to attach to the bounding wrapper. Pointer handler attachment lives at the
 * wrapper level so the dot itself can be `pointer-events: none` and not
 * block clicks on whatever sits under it.
 *
 * The animation runs entirely outside React: a single RAF loop writes
 * `transform` and `opacity` directly to the dot via its ref. No re-renders.
 */
export function useSpringFollow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0, vis: 0 });
  const stateRef = useRef<SpringState>({ x: 0, y: 0, vis: 0, vx: 0, vy: 0, vvis: 0 });
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    // Respect the user's reduced-motion preference: skip the RAF spring loop
    // entirely so the dot never appears or animates. Also skip on
    // hover-less (touch) devices — the dot tracks the cursor and there
    // is no cursor on touch, so the spring loop is pure CPU waste.
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hoverless = window.matchMedia('(hover: none)').matches;
    if (reduced || hoverless) return;

    function tick(now: number) {
      // Cap dt so a backgrounded tab doesn't catapult the spring on resume.
      const rawDt = lastTimeRef.current === 0 ? 1 / 60 : (now - lastTimeRef.current) / 1000;
      const dt = Math.min(rawDt, 1 / 30);
      lastTimeRef.current = now;

      const s = stateRef.current;
      const t = targetRef.current;

      // Hooke's law per axis: a = (-k*(x - target) - c*v) / m
      const ax = (-STIFFNESS * (s.x - t.x) - DAMPING * s.vx) / MASS;
      s.vx += ax * dt;
      s.x += s.vx * dt;

      const ay = (-STIFFNESS * (s.y - t.y) - DAMPING * s.vy) / MASS;
      s.vy += ay * dt;
      s.y += s.vy * dt;

      const av = (-STIFFNESS * (s.vis - t.vis) - DAMPING * s.vvis) / MASS;
      s.vvis += av * dt;
      s.vis += s.vvis * dt;

      const dot = dotRef.current;
      if (dot) {
        const scale = Math.max(0, s.vis);
        const opacity = Math.max(0, Math.min(1, s.vis));
        dot.style.transform = `translate3d(${s.x - DOT_OFFSET}px, ${s.y - DOT_OFFSET}px, 0) scale(${scale})`;
        dot.style.opacity = String(opacity);
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = 0;
    };
  }, []);

  function onPointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    targetRef.current.x = e.clientX - r.left;
    targetRef.current.y = e.clientY - r.top;
  }

  function onPointerEnter(e: ReactPointerEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    const cx = e.clientX - r.left;
    const cy = e.clientY - r.top;
    targetRef.current.x = cx;
    targetRef.current.y = cy;
    // If we were fully hidden, snap state to the cursor so the dot scales up
    // *in place* instead of swooping in from (0, 0).
    if (stateRef.current.vis < 0.05) {
      stateRef.current.x = cx;
      stateRef.current.y = cy;
      stateRef.current.vx = 0;
      stateRef.current.vy = 0;
    }
    targetRef.current.vis = 1;
  }

  function onPointerLeave() {
    targetRef.current.vis = 0;
  }

  return {
    dotRef,
    handlers: { onPointerMove, onPointerEnter, onPointerLeave },
  };
}
