import { createTheme } from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  fallback: ["wrap"],
});

const DEFAULT_MAIN_COLOR = "#55BBD2";
const DEFAULT_TYPOGRAPHY_COLOR = "#1A2634";
export const DEFAULT_FONT_FAMILY = "Inter";

export const primaryPalette = {
  grey: "#767D85",
  lightGrey: "#48515D",
  errorColor: "#fe6847",
  dangerColor: "#E41E1E",
  white: "#fff",
};

export const fontWeight = {
  REGULAR: 400,
  BOLD: 600,
};

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  palette: {
    primary: {
      main: DEFAULT_MAIN_COLOR,
    },
    secondary: {
      main: primaryPalette.grey,
      light: primaryPalette.lightGrey,
    },
    error: {
      main: primaryPalette.errorColor,
      dark: primaryPalette.dangerColor,
    },
    text: {
      primary: DEFAULT_TYPOGRAPHY_COLOR,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: DEFAULT_TYPOGRAPHY_COLOR,
          fontFamily: DEFAULT_FONT_FAMILY,
        },
        h1: {
          fontSize: "24px",
          fontWeight: fontWeight.BOLD,
        },
        h2: {
          fontSize: "20px",
          fontWeight: fontWeight.BOLD,
        },
        h3: {
          fontSize: "18px",
          fontWeight: fontWeight.BOLD,
        },
        h5: {
          fontSize: "14px",
          fontWeight: fontWeight.BOLD,
        },
        body1: {
          fontSize: "14px",
        },
        body2: {
          fontSize: "12px",
          color: primaryPalette.lightGrey,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: DEFAULT_FONT_FAMILY,
          textTransform: "none",
          borderRadius: 6,
        },
        contained: {
          color: primaryPalette.white,
          boxShadow: "0px 12px 12px -8px rgba(68, 150, 168, 0.25)",
        },
        outlined: {
          color: DEFAULT_MAIN_COLOR,
          boxShadow: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: DEFAULT_FONT_FAMILY,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {},
    },
    MuiInputBase: {
      styleOverrides: {
        multiline: {
          padding: "0px !important",
        },
        input: {
          padding: "14px !important",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
  },
});

export default theme;
