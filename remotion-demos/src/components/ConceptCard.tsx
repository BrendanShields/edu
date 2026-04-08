import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { useTheme } from "../theme-context";
import { fontFamily } from "../fonts";
import { radii } from "../theme";

type Variant = "default" | "good" | "bad";

type Props = {
  icon: React.ReactNode;
  title: string;
  body?: string;
  variant?: Variant;
  appearAt: number;
  width?: number;
  highlight?: boolean;
};

export const ConceptCard: React.FC<Props> = ({
  icon,
  title,
  body,
  variant = "default",
  appearAt,
  width = 280,
  highlight = false,
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

  const opacity = interpolate(enter, [0, 1], [0, 1]);
  const translateY = interpolate(enter, [0, 1], [16, 0]);

  const palette = {
    default: { bg: theme.file, border: theme.lineStrong, accent: theme.accent },
    good: { bg: theme.goodSoft, border: theme.good, accent: theme.good },
    bad: { bg: theme.badSoft, border: theme.bad, accent: theme.bad },
  }[variant];

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        width,
        background: palette.bg,
        border: `2px solid ${palette.border}`,
        borderRadius: radii.lg,
        padding: "22px 24px",
        fontFamily,
        boxShadow: highlight
          ? `0 0 0 4px ${theme.accentSoft}, 0 24px 48px -24px rgba(61, 90, 254, 0.45)`
          : "0 18px 36px -24px rgba(27, 26, 25, 0.22)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          fontSize: 32,
          color: palette.accent,
        }}
      >
        {icon}
      </div>
      <div
        style={{
          fontSize: 26,
          fontWeight: 700,
          color: theme.ink,
          letterSpacing: -0.3,
        }}
      >
        {title}
      </div>
      {body ? (
        <div
          style={{
            fontSize: 18,
            lineHeight: 1.45,
            color: theme.inkSoft,
            fontWeight: 500,
          }}
        >
          {body}
        </div>
      ) : null}
    </div>
  );
};
