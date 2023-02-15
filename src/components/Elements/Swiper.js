import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import classes from '../../scss/components/swiper.module.scss';
import Card from "../Global/Card";


function Swipers() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className={classes.mySwiper}
      >
        <SwiperSlide className={classes.SwiperSlide}>
          <div>
            <Card />
            <Card />
          </div>
          <div>
            <Card />
            <Card />
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.SwiperSlide}>
        <div>
            <Card />
            <Card />
          </div>
          <div>
            <Card />
            <Card />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Swipers