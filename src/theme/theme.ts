// src/theme.ts
import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          background: {
            default: "#f5f5f5",
          },
        }
      : {
          background: {
            default: "#121212",
          },
        }),
  },
});

export const createAppTheme = (mode: PaletteMode) => createTheme(getDesignTokens(mode));
