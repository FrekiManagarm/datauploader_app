import { Roboto, Inter } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const DEFAULT_MAIN_COLOR = "#55BBD2";
const DEFAULT_TYPOGRAPHY_COLOR = "#1A2634";

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

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: DEFAULT_TYPOGRAPHY_COLOR,
          fontFamily: inter.style.fontFamily,
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
          fontFamily: inter.style.fontFamily,
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
          fontFamily: inter.style.fontFamily,
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
