import { Box, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400
    }
  },
  palette: {
    primary: {
      main: "hsl(228, 39%, 23%)",
      light: "hsl(227, 12%, 61%)",
      dark: "hsl(233, 12%, 13%)"
    },
    secondary: {
      main: "hsl(12, 88%, 59%) ",
      light: "hsl(13, 100%, 96%)"
    },
    neutral: {
      main: "hsl(0, 0%, 98%)"
    },
  }
})

function App() {
  return (
    <Box className="App">
      <ThemeProvider theme={theme}>
        <Navbar/>
      </ThemeProvider>
      
    </Box>
  );
}

export default App;