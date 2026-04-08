import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { loadFont as loadJetBrains } from "@remotion/google-fonts/JetBrainsMono";

const inter = loadInter("normal", {
  weights: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const mono = loadJetBrains("normal", {
  weights: ["400", "500", "700"],
  subsets: ["latin"],
});

export const fontFamily = inter.fontFamily;
export const monoFontFamily = mono.fontFamily;
