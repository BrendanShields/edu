'use client';

import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';

interface RemotionPlayerProps {
  component: ComponentType<Record<string, unknown>>;
  durationInFrames: number;
  fps?: number;
  width?: number;
  height?: number;
  loop?: boolean;
  autoPlay?: boolean;
  inputProps?: Record<string, unknown>;
}

// Dynamically load @remotion/player only on the client. The Player package is
// large (~200KB+) and only needed when a Remotion-backed visual is rendered,
// so we keep it out of the initial route bundle.
const Player = dynamic(
  () => import('@remotion/player').then((mod) => mod.Player),
  {
    ssr: false,
    loading: () => <div className="remotion-fallback" aria-hidden />,
  },
);

export function RemotionPlayer({
  component,
  durationInFrames,
  fps = 30,
  width = 380,
  height = 380,
  loop = true,
  autoPlay = true,
  inputProps = {},
}: RemotionPlayerProps) {
  return (
    <Player
      component={component}
      compositionWidth={width}
      compositionHeight={height}
      durationInFrames={durationInFrames}
      fps={fps}
      loop={loop}
      autoPlay={autoPlay}
      style={{ width: '100%', borderRadius: 12 }}
      inputProps={inputProps}
      acknowledgeRemotionLicense
    />
  );
}
