import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import apotek from "../../img/apotek.png";
import apochecker from "../../img/apochecker.png";
import sisbat from "../../img/sisbat.png";
import gorent from "../../img/gorent.png";
import kitabantuin from "../../img/kitabantuin.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={apotek} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sisbat} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={apochecker} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gorent} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={kitabantuin} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
