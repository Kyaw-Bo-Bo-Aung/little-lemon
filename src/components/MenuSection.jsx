import React from "react";
import MenuCard from "./common/MenuCard";

const MenuSection = () => {
  return (
    <section className="menu">
      <div className="menu-title">
        <h1>Specials</h1>
        <span>
          <button>Online Menu</button>
        </span>
      </div>
      <div className="menu-card-list">
        <MenuCard
          title={"Greek Salad"}
          price={"$ 12.99"}
          description={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab quo
              at ut deserunt, maiores est accusamus libero esse corrupti saepe
              necessitatibus.`}
          imageUrl={"/assets/greek.jpg"}
        />
        <MenuCard
          title={"Italian Bread"}
          price={"$ 19.99"}
          description={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab quo
              at ut deserunt, maiores est accusamus libero esse corrupti saepe
              necessitatibus.`}
              imageUrl={"/assets/pasta.jpg"}

        />
        <MenuCard
          title={"Avogadro Bread"}
          price={"$ 14.99"}
          description={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab quo
              at ut deserunt, maiores est accusamus libero esse corrupti saepe
              necessitatibus.`}
              imageUrl={"/assets/bread.jpg"}

        />
      </div>
    </section>
  );
};

export default MenuSection;
