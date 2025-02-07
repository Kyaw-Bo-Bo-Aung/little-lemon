import React from "react";
import CallToAction from "./components/CallToAction";
import MenuSection from "./components/MenuSection";
import TestimonialSection from "./components/TestimonialSection";
import AboutSection from "./components/AboutSection";

const HomePage = () => {
  return (
    <main>
      <CallToAction />
      <MenuSection />
      <TestimonialSection />
      <AboutSection />
    </main>
  );
};

export default HomePage;
