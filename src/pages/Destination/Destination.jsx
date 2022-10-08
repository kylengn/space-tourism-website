import React, { useState } from "react";
import "./Destination.scss";

const Destination = ({ data }) => {
  const destination = data.destination;

  const [currentTab, setCurrentTab] = useState("1");

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="destination">
      {/* A resuable component */}
      <div className="destination__title">
        <span>01</span>
        {destination.title}
      </div>
      <div className="destination__wrapper">
        <div className="destination__image">
          {destination.content.map((tab, i) => {
            const image = require(`../../assets/destination/${tab.imgUrl}`);

            return (
              <>
                {currentTab === `${tab.id}` && (
                  <img src={image} alt="" key={i} />
                )}
              </>
            );
          })}
        </div>

        <div className="destination__content">
          <div className="destination__tabs">
            {/* Tabs */}
            {destination.content.map((tab, index) => (
              <div
                id={tab.id}
                className="destination__tab-item"
                key={index}
                onClick={handleTabClick}
              >
                {tab.name}
              </div>
            ))}
          </div>

          {destination.content.map((tab, i) => (
            <>
              {currentTab === `${tab.id}` && (
                <div className="destination__tab-content" key={i}>
                  <h1 className="destination__name">
                    {/* Planet Name */}
                    {tab.name}
                  </h1>

                  <p className="destination__desc">
                    {/* Description */}
                    {tab.desc}
                  </p>

                  <div className="destination__line"></div>

                  <div className="destination__dist-time-wrapper">
                    <div className="destination__distance">
                      {/* Distance */}
                      <h3>Avg. Distance</h3>
                      <h2>{tab.distance}</h2>
                    </div>

                    <div className="destination__travel-time">
                      {/* Travel Time */}
                      <h3>Est. travel time</h3>
                      <h2>{tab.travel_time}</h2>
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;
