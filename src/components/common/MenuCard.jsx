import React from "react";

const MenuCard = ({title, price, description, imageUrl}) => {
  return (
    <article className="card">
      <div className="card-img">
        <img src={imageUrl} />
      </div>
      <div className="card-body">
        <div className="card-title">
          <h4>{title}</h4>
          <span>{price}</span>
        </div>
        <div className="card-description">
          {description}
        </div>
        <div className="card-action">
          <span>Order a delivery</span> &gt;
        </div>
      </div>
    </article>
  );
};

export default MenuCard;
