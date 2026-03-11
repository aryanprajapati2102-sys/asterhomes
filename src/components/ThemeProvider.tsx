"use client";

import { ReactNode } from "react";
import { CssBaseline, ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0B3C6D"
    },
    secondary: {
      main: "#E07A24"
    },
    background: {
      default: "#F4F7FB"
    }
  },
  shape: {
    borderRadius: 12
  },
  typography: {
    fontFamily: "var(--font-body), system-ui, sans-serif"
  }
});

type Props = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
