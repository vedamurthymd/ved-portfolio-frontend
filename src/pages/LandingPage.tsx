import { Box } from "@mui/material";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";

const LandingPage = () => {
  return (
    <Box>
      <HeroSection />
      <AboutSection />
      <Footer />
    </Box>
  );
};
export default LandingPage;
