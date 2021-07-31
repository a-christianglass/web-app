import { createTheme } from "@material-ui/core/styles"

const theme = createTheme({
  navHeight: 74,
  sectionPadding: "padding-top: 1.5em; padding-bottom: 1.5em;",
  fonts: {
    primary: "Inter, sans-serif",
    secondary: "Inter, sans-serif",
  },
  layout: {
    contentWidth: 1236,
  },
  palette: {
    primary: {
      // contrastText: "rgba(0, 0, 0, 0.87)",
      main: "#1593CD",
      light: "#FFFFFF",
      dark: "#0D5C80",
    },
    secondary: {
      // contrastText: "rgba(0, 0, 0, 0.87)",
      main: "#F0F5F7" /*gray*/,
      light: "#0D2E4D" /*text gray*/,
      dark: "#00447B" /*text dark*/,
    },
    tertiary: {
      main: "#F89928",
    },
    text: {
      primary: "#FAFAFA",
      secondary: "#0D5C80" /*green*/,
      content: "#1D3845",
      tertiary: "#1593CD",
      disabled: "#10355A",
      hint: "#10355A",
      light: "#FFFFFF",
    },
    alternate: {
      main: "rgb(247, 249, 250)",
      dark: "#e8eaf6",
    },
  },
  typography: {
    fontFamily: `"Inter", "Open Sans", "Arial", sans-serif`,
  },
})
export default theme
