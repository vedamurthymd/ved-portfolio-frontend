import { Box, Typography, Button, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";

const AboutSection = () => {
  return (
    <Box
      sx={{
        px: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Stack direction={"column"} alignItems={"center"}>
        <Typography variant="h4" fontWeight="bold" gutterBottom color="primary">
          About Me
        </Typography>

        <Typography variant="h3" fontWeight={700} gutterBottom>
          I am <span style={{ color: "#3f3d56" }}>Vedamurthy</span>
        </Typography>

        <Typography variant="h6" color="text.secondary" gutterBottom>
          A Full Stack Developer based in Bengaluru, India
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 750, mt: 2 }}
        >
          I design and develop services for clients of all sizes, specializing
          in creating stylish, modern websites, web services, and online
          platforms. My passion is crafting smooth, bold interfaces and
          meaningful interactions. Check out my portfolio to learn more.
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 750, mt: 1 }}
        >
          I love working with new people and building new experiences.
        </Typography>

        <Stack direction={"row"} spacing={5} mt={5}>
          <Stack direction={"column"} alignItems={"flex-start"} spacing={2}>
            <Typography>
              <strong>Birthday:</strong> 24th Febraury 1999
            </Typography>
            <Typography>
              <strong>Age:</strong> 26 years
            </Typography>
            <Typography>
              <strong>Address:</strong> Bengaluru
            </Typography>
          </Stack>
          <Stack direction={"column"} alignItems={"flex-start"} spacing={2}>
            <Typography>
              <strong>Phone:</strong> (+91) 7090267265
            </Typography>
            <Typography>
              <strong>Email:</strong> vedamurthymd19@gmail.com
            </Typography>
            <Typography>
              <strong>Skype:</strong> ved.40
            </Typography>
          </Stack>
        </Stack>

        <Grid container spacing={3} sx={{ mt: 4, maxWidth: 750 }}>
          <Grid size={{ xs: 4, md: 2 }}>
            <Stack spacing={1}></Stack>
          </Grid>
          <Grid size={{ xs: 4, md: 2 }}>
            <Stack spacing={1}></Stack>
          </Grid>
        </Grid>
      </Stack>

      {/* Download Button */}
      <Box>
        <Button
          variant="contained"
          sx={{ mt: 5, borderRadius: 8, px: 4, py: 1.5 }}
          size="large"
        >
          Download CV
        </Button>
      </Box>
    </Box>
  );
};

export default AboutSection;
