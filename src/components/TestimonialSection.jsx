import React from "react";
import TestimonialCard from "./common/TestimonialCard";

const TestimonialSection = () => {
  return (
    <section className="testimonial">
      <h1>Testimonials</h1>
      <section className="testimonial-card-list">
        <TestimonialCard
          starCount={5}
          userName={"Sarah Lynn"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis."
          }
          imageUrl={"/assets/a1.jpg"}
        />
        <TestimonialCard
          starCount={5}
          userName={"John Doe"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis."
          }
          imageUrl={"/assets/a2.png"}
        />
        <TestimonialCard
          starCount={5}
          userName={"Soufu Ryan"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis."
          }
          imageUrl={"/assets/a1.jpg"}
        />
        <TestimonialCard
          starCount={4}
          userName={"Martin Grix"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis."
          }
          imageUrl={"/assets/a3.jpg"}
        />
      </section>
    </section>
  );
};

export default TestimonialSection;
