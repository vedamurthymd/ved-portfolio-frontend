import { useMemo, useState } from "react";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
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
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
