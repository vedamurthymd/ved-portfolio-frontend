import { useMemo, useState } from "react";
import "./App.css";
import { CssBaseline, IconButton, ThemeProvider } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import getTheme from "@ved-portfolio/theme/theme";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "@ved-portfolio/routes/Router";
import Navbar from "./components/Navbar";

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
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
