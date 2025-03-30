import { Box, Button, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography variant="h2" gutterBottom>
        Hi, I'm Ved 👋
      </Typography>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Full-Stack Developer | React + TypeScript Enthusiast
      </Typography>
      <Button variant="contained" size="large" sx={{ mt: 4 }} href="#projects">
        See My Work
      </Button>
    </Box>
  );
};
export default HeroSection;
