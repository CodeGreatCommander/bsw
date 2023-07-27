import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './slides.css'
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import Slide from '../../../assets/slide_image.jpg'

export default function Slides() {
  return (
    <>
      <div className="slides">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide><div className="slide"><img src={Slide} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="slide"><img src={Slide} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="slide"><img src={Slide} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="slide"><img src={Slide} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="slide"><img src={Slide} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="slide"><img src={Slide} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="slide"><img src={Slide} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="slide"><img src={Slide} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="slide"><img src={Slide} alt="" /></div></SwiperSlide>
        
      </Swiper>
      </div>
    </>
  );
}
