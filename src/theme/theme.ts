export const theme = {
  colors: {
    primary: {
      darkBlue: "#344966",
      dark: "#0d1821",
      light: "#F0F4EF",
      green: "#BFCC94",
    },
    secondary: {
      lightGrey: undefined as string | undefined,
      darkGrey: "#B9BAC3",
      white: "#ffffff",
      darkGreen: "#8D9F4F",
    },
    extra: {
      extraColor: undefined as string | undefined,
    },
  },
};

export type AppTheme = typeof theme;
