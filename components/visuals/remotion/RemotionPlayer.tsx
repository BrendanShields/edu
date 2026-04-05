'use client';

import { Player } from '@remotion/player';
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
