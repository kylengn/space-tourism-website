import React from "react";
import "./Home.scss";

const Home = ({ data }) => {
  const home = data.home;
  return (
    <div className="home">
      <div className="home__content">
        <h3 className="home__content-subheading">{home.subheading}</h3>
        <h1 className="home__content-heading">{home.heading}</h1>
        <p className="home__content-desc">{home.desc}</p>
      </div>
      <a href="/destination" className="home__button">
        EXPLORE
      </a>
    </div>
  );
};

export default Home;
