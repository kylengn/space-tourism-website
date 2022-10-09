import React from "react";
import "./Technology.scss";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Technology = ({ data }) => {
  const technology = data.technology;

  const pagination = {
    clickable: true,
    bulletClass: `swiper-pagination-bullet`,
    renderBullet: (index, className) => {
      return `<span class="${className} technology-pagination">${
        index + 1
      }</span>`;
    },
  };

  return (
    <div className="technology">
      {/* A resuable component */}
      <div className="page__title">
        <span>0{technology._id}</span>
        {technology.title}
      </div>

      <Swiper
        className="technology__wrapper mySwiper"
        pagination={pagination}
        modules={[Pagination]}
        loop
        slidesPerView={1}
      >
        {technology.content.map((item, i) => {
          const image = require(`../../assets/technology/${item.imgUrl}-landscape.jpg`);

          return (
            <SwiperSlide className="technology__slide" key={i}>
              <div
                className="technology__image"
                style={{ backgroundImage: `url(${image})` }}
              >
                {/* technology Image */}
              </div>
              <div className="technology__content">
                <h2 className="technology__subheading">THE TERMINOLOGY…</h2>

                <h1 className="technology__name">{item.name}</h1>
                <p className="technology__desc">{item.desc}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Technology;
