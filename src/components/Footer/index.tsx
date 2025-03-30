import { Box, Typography, Link, Stack } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        textAlign: "center",
        borderTop: "1px solid",
        borderColor: "divider",
        mt: 8,
        backgroundColor: "background.default",
      }}
    >
      <Stack spacing={1} alignItems="center">
        <Typography variant="body2" color="text.secondary">
          Built with ❤️ by Ved using React + Vite + MUI
        </Typography>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Ved.dev. All rights reserved.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener"
            underline="hover"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener"
            underline="hover"
          >
            LinkedIn
          </Link>
          <Link href="mailto:you@example.com" underline="hover">
            Email
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}
