import React from 'react'
import Img from "../../../assets/AboutUs.png";
import './header_img.css'

const Header_img = () => {
  return (
    <>
    <div className="h-img">

      <img src={Img} alt="" />
      <h1>CONTACT US</h1>
      <div className="headerSpace"></div>
    </div>
        
    
  </>)
}

export default Header_img