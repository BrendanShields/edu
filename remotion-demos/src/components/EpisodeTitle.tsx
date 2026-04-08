import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { useTheme } from "../theme-context";
import { fontFamily } from "../fonts";

type Props = {
  eyebrow: string;
  title: string;
  appearAt?: number;
  exitAt?: number;
};

export const EpisodeTitle: React.FC<Props> = ({
  eyebrow,
  title,
  appearAt = 0,
  exitAt,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const theme = useTheme();

  const enter = spring({
    frame: frame - appearAt,
    fps,
    config: { damping: 200 },
    durationInFrames: 22,
  });

  const exit =
    exitAt != null
      ? spring({
          frame: frame - exitAt,
          fps,
          config: { damping: 200 },
          durationInFrames: 18,
        })
      : 0;

  const opacity = interpolate(enter - exit, [0, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(enter, [0, 1], [16, 0]);

  return (
    <div
      style={{
        position: "absolute",
        top: 56,
        left: 0,
        right: 0,
        textAlign: "center",
        opacity,
        transform: `translateY(${translateY}px)`,
        fontFamily,
      }}
    >
      <div
        style={{
          fontSize: 22,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: theme.inkSoft,
          fontWeight: 600,
        }}
      >
        {eyebrow}
      </div>
      <div
        style={{
          marginTop: 12,
          fontSize: 56,
          color: theme.ink,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        {title}
      </div>
    </div>
  );
};
