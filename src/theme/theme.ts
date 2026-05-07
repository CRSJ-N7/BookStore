import { createTheme, type Theme as MuiTheme } from "@mui/material/styles";

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Theme extends MuiTheme {}
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#344966",
      dark: "#0d1821",
      light: "#F0F4EF",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#8D9F4F",
      light: "#BFCC94",
      dark: "#B9BAC3",
      contrastText: "#ffffff", //
    },
    info: {
      main: "#A0A3BD",
    },
  },
});

export type AppTheme = typeof theme;
