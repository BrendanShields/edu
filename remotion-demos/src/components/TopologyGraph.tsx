import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { useTheme } from "../theme-context";
import { fontFamily } from "../fonts";
import { radii } from "../theme";

export type GraphNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  icon?: string;
};

type Props = {
  apps: GraphNode[];
  services: GraphNode[];
  mode: "mesh" | "hub";
  appearAt?: number;
  // If set, the graph starts in the OPPOSITE mode at frame 0 and transitions
  // to `mode` over [transitionAt, transitionAt + transitionDurationFrames].
  transitionAt?: number;
  transitionDurationFrames?: number;
  hubLabel?: string;
  hubX?: number;
  hubY?: number;
  width: number;
  height: number;
};

const NODE_WIDTH = 168;
const NODE_HEIGHT = 56;

export const TopologyGraph: React.FC<Props> = ({
  apps,
  services,
  mode,
  appearAt = 0,
  transitionAt,
  transitionDurationFrames = 60,
  hubLabel = "MCP",
  hubX,
  hubY,
  width,
  height,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const theme = useTheme();

  const cx = hubX ?? width / 2;
  const cy = hubY ?? height / 2;

  const enter = spring({
    frame: frame - appearAt,
    fps,
    config: { damping: 200 },
    durationInFrames: 22,
  });

  const hubProgress =
    transitionAt != null
      ? interpolate(
          frame,
          [transitionAt, transitionAt + transitionDurationFrames],
          mode === "hub" ? [0, 1] : [1, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
        )
      : mode === "hub"
        ? 1
        : 0;

  const meshOpacity = (1 - hubProgress) * enter;
  const hubOpacity = hubProgress * enter;

  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        fontFamily,
      }}
    >
      <svg
        width={width}
        height={height}
        style={{ position: "absolute", inset: 0, overflow: "visible" }}
      >
        {/* Mesh edges: N x M */}
        <g style={{ opacity: meshOpacity }}>
          {apps.flatMap((a) =>
            services.map((s) => (
              <line
                key={`mesh-${a.id}-${s.id}`}
                x1={a.x + NODE_WIDTH / 2}
                y1={a.y + NODE_HEIGHT / 2}
                x2={s.x + NODE_WIDTH / 2}
                y2={s.y + NODE_HEIGHT / 2}
                stroke={theme.lineStrong}
                strokeWidth={1.5}
                opacity={0.65}
              />
            )),
          )}
        </g>
        {/* Hub edges: N + M */}
        <g style={{ opacity: hubOpacity }}>
          {apps.map((a) => (
            <line
              key={`hub-app-${a.id}`}
              x1={a.x + NODE_WIDTH / 2}
              y1={a.y + NODE_HEIGHT / 2}
              x2={cx}
              y2={cy}
              stroke={theme.accent}
              strokeWidth={2.5}
              strokeLinecap="round"
            />
          ))}
          {services.map((s) => (
            <line
              key={`hub-service-${s.id}`}
              x1={cx}
              y1={cy}
              x2={s.x + NODE_WIDTH / 2}
              y2={s.y + NODE_HEIGHT / 2}
              stroke={theme.accent}
              strokeWidth={2.5}
              strokeLinecap="round"
            />
          ))}
        </g>
      </svg>

      {/* Nodes */}
      {apps.map((a) => (
        <NodeChip key={a.id} node={a} opacity={enter} variant="app" />
      ))}
      {services.map((s) => (
        <NodeChip key={s.id} node={s} opacity={enter} variant="service" />
      ))}

      {/* Hub */}
      <HubChip
        cx={cx}
        cy={cy}
        opacity={hubOpacity}
        label={hubLabel}
      />
    </div>
  );
};

const NodeChip: React.FC<{
  node: GraphNode;
  opacity: number;
  variant: "app" | "service";
}> = ({ node, opacity, variant }) => {
  const theme = useTheme();
  return (
    <div
      style={{
        position: "absolute",
        left: node.x,
        top: node.y,
        width: NODE_WIDTH,
        height: NODE_HEIGHT,
        opacity,
        background: theme.file,
        border: `1.5px solid ${theme.lineStrong}`,
        borderRadius: radii.md,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        fontSize: 22,
        fontWeight: 600,
        color: theme.ink,
        boxShadow: "0 12px 24px -16px rgba(27, 26, 25, 0.25)",
      }}
    >
      {node.icon ? <span style={{ fontSize: 24 }}>{node.icon}</span> : null}
      <span>{node.label}</span>
    </div>
  );
};

const HubChip: React.FC<{
  cx: number;
  cy: number;
  opacity: number;
  label: string;
}> = ({ cx, cy, opacity, label }) => {
  const theme = useTheme();
  const size = 116;
  return (
    <div
      style={{
        position: "absolute",
        left: cx - size / 2,
        top: cy - size / 2,
        width: size,
        height: size,
        opacity,
        background: theme.accent,
        color: theme.file,
        borderRadius: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 28,
        fontWeight: 700,
        letterSpacing: 1,
        boxShadow: `0 0 0 12px ${theme.accentSoft}, 0 18px 36px -18px rgba(61, 90, 254, 0.55)`,
      }}
    >
      {label}
    </div>
  );
};
