import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { useTheme } from "../theme-context";
import { monoFontFamily } from "../fonts";
import { radii } from "../theme";

type Props = {
  appearAt: number;
  x: number;
  y: number;
  rotation?: number;
  width?: number;
  label?: string;
  children: React.ReactNode;
};

// A flat tilted "index card" representing a chunk of context the user pasted
// into the chat. Deliberately NOT crumpled-paper-textured — kept flat to fit
// the clean Delba house style.
export const PastedScrap: React.FC<Props> = ({
  appearAt,
  x,
  y,
  rotation = -3,
  width = 280,
  label,
  children,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const theme = useTheme();

  const enter = spring({
    frame: frame - appearAt,
    fps,
    config: { damping: 14, stiffness: 140 },
    durationInFrames: 24,
  });

  const opacity = interpolate(enter, [0, 1], [0, 1]);
  const translateY = interpolate(enter, [0, 1], [-30, 0]);
  const scale = interpolate(enter, [0, 1], [0.86, 1]);

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width,
        opacity,
        transform: `translateY(${translateY}px) rotate(${rotation}deg) scale(${scale})`,
        transformOrigin: "center top",
        background: theme.file,
        border: `1.5px solid ${theme.lineStrong}`,
        borderRadius: radii.sm,
        padding: "16px 18px",
        boxShadow:
          "0 22px 36px -22px rgba(27, 26, 25, 0.35), 0 4px 8px -4px rgba(27, 26, 25, 0.18)",
      }}
    >
      {label ? (
        <div
          style={{
            fontSize: 12,
            letterSpacing: 1.4,
            textTransform: "uppercase",
            color: theme.inkSoft,
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          {label}
        </div>
      ) : null}
      <div
        style={{
          fontFamily: monoFontFamily,
          fontSize: 14,
          lineHeight: 1.45,
          color: theme.ink,
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        {children}
      </div>
    </div>
  );
};
