// Shared design tokens for Delba-style explainer demos.
// `lightTheme` is the default warm off-white palette.
// `darkTheme` is reserved for episodes that depict terminal/server internals.
// Both themes share the same shape so components can swap them via `useTheme()`.

export type Theme = {
  bg: string;
  ink: string;
  inkSoft: string;
  line: string;
  lineStrong: string;
  accent: string;
  accentSoft: string;
  folder: string;
  folderShadow: string;
  file: string;
  fileBorder: string;
  highlight: string;
  good: string;
  goodSoft: string;
  bad: string;
  badSoft: string;
};

export const lightTheme: Theme = {
  bg: "#F5F1EA",
  ink: "#1B1A19",
  inkSoft: "#5C5853",
  line: "#E2DCD0",
  lineStrong: "#C9C1B0",
  accent: "#3D5AFE",
  accentSoft: "#E7ECFF",
  folder: "#F4B95A",
  folderShadow: "#D89A2A",
  file: "#FFFFFF",
  fileBorder: "#D9D2C2",
  highlight: "#FFE9A8",
  good: "#1B8A50",
  goodSoft: "#D9F2E3",
  bad: "#B83C2C",
  badSoft: "#F8DDD7",
};

export const darkTheme: Theme = {
  bg: "#0B0C0F",
  ink: "#F2EEE5",
  inkSoft: "#9B968A",
  line: "#1F2127",
  lineStrong: "#2C2F38",
  accent: "#FF8A4C",
  accentSoft: "#3A1F12",
  folder: "#FF8A4C",
  folderShadow: "#C95F22",
  file: "#14161B",
  fileBorder: "#2C2F38",
  highlight: "#3A2F10",
  good: "#4ADE80",
  goodSoft: "#0F2A1A",
  bad: "#FF6058",
  badSoft: "#2A1010",
};

// Back-compat: existing components (FileTree, BrowserFrame, CreatingRoutes)
// import `theme` directly. Keep that working without churn.
export const theme: Theme = lightTheme;

export const radii = {
  sm: 8,
  md: 14,
  lg: 22,
  xl: 32,
} as const;
