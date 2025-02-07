import React from "react";

const AboutImage = () => {
  return (
    <div class="about-images">
      <div
        className="img-main"
        style={{
          backgroundImage: `url('/assets/chef2.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        className="img-overlay"
        style={{
          backgroundImage: `url('/assets/chef1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default AboutImage;
