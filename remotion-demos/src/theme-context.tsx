import React, { createContext, useContext } from "react";
import { lightTheme, type Theme } from "./theme";

const ThemeContext = createContext<Theme>(lightTheme);

export const ThemeProvider: React.FC<{
  value: Theme;
  children: React.ReactNode;
}> = ({ value, children }) => (
  <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
);

export const useTheme = (): Theme => useContext(ThemeContext);
