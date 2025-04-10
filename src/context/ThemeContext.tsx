import { createContext, useMemo, useState, useContext, ReactNode, useEffect } from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { createAppTheme } from "../theme/theme";

type ThemeMode = "light" | "dark";

interface ThemeContextProps {
  toggleTheme: () => void;
  mode: ThemeMode;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useThemeMode must be used within ThemeProvider");
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const savedMode = localStorage.getItem("themeMode") as ThemeMode | null;
  const [mode, setMode] = useState<ThemeMode>(savedMode || "light");

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("themeMode", newMode);
  };

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
