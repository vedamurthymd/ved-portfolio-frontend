// src/routes/Router.tsx
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
// import Home from "@ved-portfolio/pages/Home";
// import About from "@ved-portfolio/pages/About";
// import Projects from "@ved-portfolio/pages/Projects";
// import Contact from "@ved-portfolio/pages/Contact";
// import NotFound from "@ved-portfolio/pages/NotFound";

const Test = () => {
  return <h1>hai</h1>;
};

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<Test />} />
      <Route path="*" element={<Test />} />
    </Routes>
  );
}
