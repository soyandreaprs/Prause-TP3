import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: { fontFamily: "DM Sans", fontSize: 10 },
  MuiContainer: {
    styleOverrides: {
      root: {
        paddingLeft: 0,
        paddingRight: 0,
        margin: 0,
      },
    },
  },
});

export default theme;