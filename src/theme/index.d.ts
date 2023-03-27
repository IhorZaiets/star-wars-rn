import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      ebonyClay: string;
      gray: string;
      red: string;
      brightBlue: string;
    };
    fontSizes: {
      xl: number;
      l: number;
      m: number;
      s: number;
      xs: number;
    };
  }
}
