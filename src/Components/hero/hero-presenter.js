import React from "react";
import devHeroBg from "../../assets/images/web-1935737_1920.jpg"

const HeroPresenter = () => {
  return (
    <section id={"hero"}>
      <h1 className={"title"}>EXPLORE Git Refs</h1>

      <div className={"hero-bg"}>
        <img
          src={
              devHeroBg
          }
          alt={""}
        />
      </div>

      <div className={"overlay"} />
    </section>
  );
};

export default HeroPresenter;
