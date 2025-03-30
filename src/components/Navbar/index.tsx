import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Container,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useState } from "react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

type NavbarProps = {
  mode: "light" | "dark";
  toggleColorMode: () => void;
};
const Navbar = ({ mode, toggleColorMode }: NavbarProps) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            {/* Logo */}
            <Typography
              variant="h6"
              onClick={() => navigate("/")}
              sx={{
                cursor: "pointer",
                fontWeight: "bold",
                color: "primary.main",
              }}
            >
              Ved.dev
            </Typography>

            {isMobile ? (
              <>
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
              </>
            ) : (
              <Stack direction="row" spacing={3} alignItems="center">
                {navLinks.map((link) => (
                  <Button
                    key={link.label}
                    color="inherit"
                    onClick={() => handleNavClick(link.path)}
                    sx={{ fontWeight: 500 }}
                  >
                    {link.label}
                  </Button>
                ))}
                <Button
                  variant="contained"
                  onClick={() => window.open("mailto:you@example.com")}
                >
                  Hire Me
                </Button>
                <IconButton onClick={toggleColorMode} color="inherit">
                  {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
              </Stack>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, mt: 4 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton onClick={() => handleNavClick(link.path)}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => window.open("mailto:you@example.com")}
              >
                <ListItemText primary="Hire Me" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={toggleColorMode}>
                <ListItemText
                  primary={mode === "dark" ? "Light Mode" : "Dark Mode"}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};
export default Navbar;
