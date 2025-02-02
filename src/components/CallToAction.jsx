import React from "react";

const CallToAction = () => {
  return (
    <section className="banner">
      <article>
        <div>
          <div>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis aspernatur inventore expedita, architecto sequi facilis
              beatae dignissimos officia. Odio, ad.
            </p>
          </div>
          <span>
            <button>Reserve a table</button>
          </span>
        </div>
        <img src="/assets/banner-img.jpg" width={230} height={300} />
      </article>
    </section>
  );
};

export default CallToAction;
