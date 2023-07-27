import React, { useRef, useState } from 'react';

import './slides.css'




// import required modules

import Slide from '../../../assets/slide_image.jpg'

export default function Slides() {
  return (
    <>
      <div className="slides">
        <div className="slide"><img src={Slide} alt="" /></div>
        <div className="slide"><img src={Slide} alt="" /></div>
        <div className="slide"><img src={Slide} alt="" /></div>
        <div className="slide"><img src={Slide} alt="" /></div>
        <div className="slide"><img src={Slide} alt="" /></div>
        <div className="slide"><img src={Slide} alt="" /></div>
        <div className="slide"><img src={Slide} alt="" /></div>
        <div className="slide"><img src={Slide} alt="" /></div>
        <div className="slide"><img src={Slide} alt="" /></div>
        <div className="slide"><img src={Slide} alt="" /></div>
      </div>
    </>
  );
}
