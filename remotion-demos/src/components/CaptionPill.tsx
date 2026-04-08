import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { useTheme } from "../theme-context";
import { fontFamily } from "../fonts";

type Props = {
  text: string;
  appearAt: number;
  exitAt?: number;
  variant?: "default" | "cta";
};

export const CaptionPill: React.FC<Props> = ({
  text,
  appearAt,
  exitAt,
  variant = "default",
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
  const translateY = interpolate(enter, [0, 1], [12, 0]);

  const isCta = variant === "cta";
  const fontSize = isCta ? 28 : 22;
  const padX = isCta ? 34 : 26;
  const padY = isCta ? 18 : 14;

  return (
    <div
      style={{
        position: "absolute",
        bottom: isCta ? 90 : 70,
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
          display: "inline-block",
          padding: `${padY}px ${padX}px`,
          borderRadius: 999,
          background: theme.accentSoft,
          color: theme.accent,
          fontWeight: 600,
          fontSize,
        }}
      >
        {text}
      </div>
    </div>
  );
};
