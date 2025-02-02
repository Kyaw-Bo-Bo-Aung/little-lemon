import React from "react";
import AboutSection from "./AboutSection";
import TestimonialSection from "./TestimonialSection";
import MenuSection from "./MenuSection";
import CallToAction from "./CallToAction";

const Main = () => {
  return (
    <main>
      <CallToAction />
      <MenuSection />
      <TestimonialSection />
      <AboutSection />
    </main>
  );
};

export default Main;
