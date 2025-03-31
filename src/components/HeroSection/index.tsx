import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        background: isLight
          ? "linear-gradient(to right,rgb(235, 242, 247),rgb(192, 214, 239))"
          : "linear-gradient(to right, #232526, #414345)",
      }}
    >
      <Stack direction="column">
        <Typography variant="h5" gutterBottom>
          👋HELLO, I AM
        </Typography>
        <Typography variant="h1" fontWeight={600}>
          Ved
        </Typography>
        <Typography variant="h5" color="primary" gutterBottom>
          <ReactTyped
            strings={[
              "Full-Stack Developer",
              "React + TypeScript Enthusiast",
              "Lover of Clean UI",
            ]}
            typeSpeed={60}
            backSpeed={40}
            backDelay={1000}
            loop
          />
        </Typography>
      </Stack>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button variant="contained" size="large">
          See My Work
        </Button>
      </Box>
    </Box>
  );
};
export default HeroSection;
