import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: {
        darkBlue: string;
        dark: string;
        light: string;
        green: string;
      };
      secondary: {
        lightGrey?: string;
        darkGrey: string;
        white: string;
        darkGreen: string;
      };
      extra: {
        extraColor?: string;
      };
    };
  }
}
