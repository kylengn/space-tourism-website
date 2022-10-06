import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__content">
        <h3 className="home__content-subheading">SO, YOU WANT TO TRAVEL TO</h3>
        <h1 className="home__content-heading">SPACE</h1>
        <p className="home__content-desc">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="home__button">EXPLORE</div>
    </div>
  );
};

export default Home;
