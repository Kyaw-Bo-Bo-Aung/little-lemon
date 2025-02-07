import React from "react";

const TestimonialCard = ({starCount = 5, userName, description, imageUrl}) => {
  return (
    <div className="testimonial-card">
      <div className="rating">
        <span>Rating</span>
        {[...Array(starCount)].map((count) => <img src="/assets/star.svg" alt="" width={20} />)}
      </div>
      <div className="name">
        <img src={imageUrl} alt="" width={80} />
        <span>
          <b>{userName}</b>
        </span>
      </div>
      <div className="review-text">
        <i>{description}</i>
      </div>
    </div>
  );
};

export default TestimonialCard;
