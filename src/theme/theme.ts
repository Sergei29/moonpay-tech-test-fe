import { createTheme } from "@mui/material/styles"
import { grey, teal } from "@mui/material/colors"

/**
 * @description Theme extension: https://mui.com/customization/theming/#custom-variables
 */
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string
    }
    bg: {
      main: string
      inverse: string
      secondary: string
    }
    text: {
      main: string
      inverse: string
      accent: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string
    }
    bg?: {
      main?: string
      inverse?: string
      secondary?: string
    }
    text?: {
      main?: string
      inverse?: string
      accent?: string
    }
  }
}

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      dark: teal[800],
      main: teal.A700,
      light: teal.A400,
    },
    secondary: {
      dark: grey[500],
      main: grey[200],
      light: grey[50],
    },
  },
  bg: {
    main: "#fff",
    inverse: "#212934",
    secondary: "#e9eef5",
  },
  text: {
    main: grey[900],
    inverse: "#cfd6e1",
    accent: "#000",
  },
  typography: {
    fontFamily: [
      "Open Sans Condensed",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
})
