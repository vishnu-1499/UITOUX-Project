import React from 'react';
import Banner1 from "../Images/banner1.jpeg";
import Banner2 from "../Images/banner2.jpeg";
import "./Banner.css";

function Banner() {
  return (
    <div className='banner'>
        <div className='leftBanner' style={{ backgroundImage: `url(${Banner1})` }}>
            <h2> MOTOR OILS </h2>
            <p> Synthetic motor oil with free shipping </p>
            <p> Friction free life guaranteed </p><br/>
            <button> Shop Now </button>
        </div>
        <div className='rightBanner' style={{ backgroundImage: `url(${Banner2})`, paddingRight:"10px" }}>
            <h2> SAVE UPTO $40 </h2>
            <p> Luxurious interior part for real aesthetes </p>
            <p> Leather, fabric, ivory and more </p><br/>
            <button> Shop Now </button>
        </div>
    </div>
  )
}

export default Banner;