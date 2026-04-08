import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme, radii } from "../theme";
import { fontFamily, monoFontFamily } from "../fonts";

type Node =
  | { kind: "folder"; name: string; appearAt: number; children?: Node[] }
  | { kind: "file"; name: string; appearAt: number };

type Props = {
  nodes: Node[];
};

const ROW_HEIGHT = 64;
const INDENT = 44;

export const FileTree: React.FC<Props> = ({ nodes }) => {
  return (
    <div
      style={{
        background: theme.file,
        border: `2px solid ${theme.line}`,
        borderRadius: radii.lg,
        padding: "32px 36px",
        minWidth: 460,
        boxShadow: "0 30px 60px -30px rgba(27, 26, 25, 0.18)",
        fontFamily,
      }}
    >
      <TreeRows nodes={nodes} depth={0} />
    </div>
  );
};

const TreeRows: React.FC<{ nodes: Node[]; depth: number }> = ({
  nodes,
  depth,
}) => {
  return (
    <>
      {nodes.map((node, idx) => (
        <TreeRow key={`${depth}-${idx}-${node.name}`} node={node} depth={depth} />
      ))}
    </>
  );
};

const TreeRow: React.FC<{ node: Node; depth: number }> = ({ node, depth }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - node.appearAt,
    fps,
    config: { damping: 200 },
    durationInFrames: 22,
  });

  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const translateY = interpolate(progress, [0, 1], [12, 0]);

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        marginLeft: depth * INDENT,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          height: ROW_HEIGHT,
          fontSize: 26,
          color: theme.ink,
          fontWeight: node.kind === "folder" ? 600 : 500,
          fontFamily: node.kind === "file" ? monoFontFamily : fontFamily,
        }}
      >
        {node.kind === "folder" ? <FolderIcon /> : <FileIcon />}
        <span>{node.name}</span>
      </div>
      {node.kind === "folder" && node.children ? (
        <TreeRows nodes={node.children} depth={depth + 1} />
      ) : null}
    </div>
  );
};

const FolderIcon: React.FC = () => (
  <svg width={36} height={28} viewBox="0 0 36 28">
    <path
      d="M2 6 C2 3.8 3.8 2 6 2 H14 L17 5 H30 C32.2 5 34 6.8 34 9 V22 C34 24.2 32.2 26 30 26 H6 C3.8 26 2 24.2 2 22 Z"
      fill={theme.folder}
      stroke={theme.folderShadow}
      strokeWidth={1.5}
    />
  </svg>
);

const FileIcon: React.FC = () => (
  <svg width={28} height={32} viewBox="0 0 28 32">
    <path
      d="M4 2 H18 L26 10 V28 C26 29.1 25.1 30 24 30 H4 C2.9 30 2 29.1 2 28 V4 C2 2.9 2.9 2 4 2 Z"
      fill={theme.file}
      stroke={theme.lineStrong}
      strokeWidth={1.5}
    />
    <path
      d="M18 2 V10 H26"
      fill="none"
      stroke={theme.lineStrong}
      strokeWidth={1.5}
    />
  </svg>
);
