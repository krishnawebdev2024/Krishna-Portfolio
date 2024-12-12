import React, { useState, useEffect } from "react";
import NavBar from "../../commonComponents/nav/NavBar";
import Footer from "../../commonComponents/footer/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Correct import

import Preloader from "../../designSystem/preloader/Preloader.jsx";
import ScrollToTop from "../../designSystem/ScrollToTop/ScrollToTop";
import { AnimatePresence } from "framer-motion";

import HeroSection from "../1-herosection/HeroSection.jsx";
import Skills from "../2-skills/Skills.jsx";
import WorkExperience from "../3-workexperience/WorkExperience.jsx";
import Project from "../4-project/Project.jsx";

import Certifications from "../6-certifications/Certifications.jsx";

const AllPages = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading behavior
  useEffect(() => {
    // Disable scroll while preloader is active
    document.body.style.overflow = "hidden";

    // Simulate loading state for a few seconds
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide preloader after loading is complete
      document.body.style.overflow = "auto"; // Re-enable scroll
    }, 2000); // You can change the duration here to match your needs

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto"; // Ensure scroll is re-enabled when component unmounts
    };
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default AllPages;
