import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme, radii } from "../theme";
import { fontFamily, monoFontFamily } from "../fonts";

type Props = {
  url: React.ReactNode;
  appearAt: number;
  width?: number;
  height?: number;
  children?: React.ReactNode;
};

export const BrowserFrame: React.FC<Props> = ({
  url,
  appearAt,
  width = 720,
  height = 460,
  children,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({
    frame: frame - appearAt,
    fps,
    config: { damping: 200 },
    durationInFrames: 28,
  });

  const opacity = interpolate(enter, [0, 1], [0, 1]);
  const translateY = interpolate(enter, [0, 1], [40, 0]);
  const scale = interpolate(enter, [0, 1], [0.94, 1]);

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        transformOrigin: "center bottom",
        width,
        background: theme.file,
        border: `2px solid ${theme.line}`,
        borderRadius: radii.lg,
        boxShadow: "0 40px 80px -40px rgba(27, 26, 25, 0.25)",
        overflow: "hidden",
        fontFamily,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "16px 22px",
          borderBottom: `1.5px solid ${theme.line}`,
          background: theme.bg,
        }}
      >
        <TrafficLight color="#FF6058" />
        <TrafficLight color="#FFBE2E" />
        <TrafficLight color="#28C941" />
        <div
          style={{
            marginLeft: 18,
            flex: 1,
            background: theme.file,
            border: `1.5px solid ${theme.line}`,
            borderRadius: 999,
            padding: "10px 20px",
            fontSize: 18,
            color: theme.inkSoft,
            fontFamily: monoFontFamily,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span style={{ color: theme.inkSoft, opacity: 0.6 }}>localhost:3000</span>
          <span style={{ color: theme.ink, fontWeight: 500, display: "inline-flex", alignItems: "center" }}>
            {url}
          </span>
        </div>
      </div>
      <div
        style={{
          height: height - 70,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 32,
        }}
      >
        {children}
      </div>
    </div>
  );
};

const TrafficLight: React.FC<{ color: string }> = ({ color }) => (
  <div
    style={{
      width: 14,
      height: 14,
      borderRadius: 999,
      background: color,
    }}
  />
);
