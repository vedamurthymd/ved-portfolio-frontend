import { useMemo, useState } from "react";
import "./App.css";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./routes/Router";
import getTheme from "./theme/theme";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <Navbar mode={mode} toggleColorMode={toggleColorMode} />
        <Box
          sx={{
            pt: { xs: "56px", md: "64px" }, // push content below AppBar height
          }}
        >
          <AppRouter />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
