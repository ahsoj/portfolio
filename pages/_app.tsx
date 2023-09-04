import * as React from "react";
import "@components/styles/globals.css";
import type { AppProps } from "next/app";
import { amber, deepOrange, grey, blue, blueGrey } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ParallaxProvider } from "react-scroll-parallax";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

// #23f94 #1b2277

const background = {
  dark100: "linear-gradient(to top, #23f94, #1b2277)",
};

export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: blue,
                divider: blue[500],
                text: {
                  primary: grey[900],
                  secondary: grey[800],
                },
                background: {
                  default: "#ffffff",
                  paper: "#ffffff",
                },
              }
            : {
                // palette values for dark mode
                primary: blue,
                divider: blue[500],
                background: {
                  default: blueGrey[900],
                  paper: blueGrey[900], // deepOrange[900]
                },

                text: {
                  primary: "#fff",
                  secondary: grey[500],
                },
              }),
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
