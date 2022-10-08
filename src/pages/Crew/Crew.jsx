import React from "react";
import "./Crew.scss";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Crew = ({ data }) => {
  const crew = data.crew;

  return (
    <div className="crew">
      {/* A resuable component */}
      <div className="page__title">
        <span>0{crew._id}</span>
        {crew.title}
      </div>

      <Swiper
        className="crew__wrapper mySwiper"
        pagination={{ clickable: true }}
        modules={[Pagination]}
        loop
        slidesPerView={1}
      >
        {crew.content.map((item, i) => {
          const image = require(`../../assets/crew/${item.imgUrl}`);

          return (
            <SwiperSlide className="crew__slide" key={i}>
              <div className="crew__image">
                {/* Crew Image */}
                <img src={image} alt="" />
              </div>
              <div className="crew__content">
                <h2 className="crew__occupation">{item.occupation}</h2>
                <h1 className="crew__name">{item.name}</h1>
                <p className="crew__desc">{item.desc}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Crew;
