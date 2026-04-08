import React from "react";
import { Freeze } from "remotion";

export type BeatProps = {
  activeBeat?: number;
};

// FreezeAtBeat lets a composition support both autoplay (Studio / render CLI)
// and scroll-pinned embedding (future @remotion/player + DD scroll layout).
//
// When `activeBeat` is undefined, children render normally and `useCurrentFrame()`
// returns the live timeline frame.
//
// When `activeBeat` is a number, the children are wrapped in <Freeze> and pinned
// to `beats[activeBeat]`. All `useCurrentFrame()` calls inside the subtree return
// that frozen frame, so springs and interpolations resolve to their values at
// the start of that beat.
export const FreezeAtBeat: React.FC<{
  beats: readonly number[];
  activeBeat: number | undefined;
  children: React.ReactNode;
}> = ({ beats, activeBeat, children }) => {
  if (activeBeat == null) return <>{children}</>;
  const i = Math.max(0, Math.min(beats.length - 1, activeBeat));
  return <Freeze frame={beats[i]}>{children}</Freeze>;
};
