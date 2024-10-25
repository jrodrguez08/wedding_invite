import { createTheme } from "@mui/material/styles";

import {colors} from "../constants/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.norway
    },
    action: {
      active: colors.white
    },
  },
  typography: {
    fontFamily: "Tinos, serif", // Default font for all text
    h1: {
      fontFamily: "Tangerine, cursive", // Use Tangerine for headings
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Tangerine, cursive",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "Tangerine, cursive",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "Tinos, serif",
      fontWeight: 700,
    },
    // Continue for other headings (h4, h5, h6) if needed
    body1: {
      fontFamily: "Tinos, serif", // Body text uses Tinos
    },
    body2: {
      fontFamily: "Tinos, serif", // Secondary body text
    },
    buttonText: {
      fontFamily: "Tinos, serif", // Button text uses Tinos
      textTransform: "none",
      textDecoration: "none",
      color: colors.black
    }
  },
});

export default theme;
