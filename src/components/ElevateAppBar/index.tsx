import { AppBar, useScrollTrigger, useTheme } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ElevateAppBar({ children }: Props) {
  const trigger = useScrollTrigger({ threshold: 1 });
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      elevation={trigger ? 4 : 0}
      sx={{
        transition: "background-color 0.1s ease, box-shadow 0.1s ease",
        backgroundColor: trigger
          ? theme.palette.mode === "light"
            ? "#ffffff"
            : "#121212"
          : "rgba(255,255,255,0)",
        color: trigger ? "text.primary" : "inherit",
      }}
    >
      {children}
    </AppBar>
  );
}
