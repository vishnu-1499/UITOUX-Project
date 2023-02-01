import React from 'react';
import BannerImage from "../Images/slides.jpeg";
import "./Home.css";

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }} >

        <div className='header' >
            <h2> 30% OFF </h2>
            <h1> When Buying Parts </h1>
            <h1> With Installation </h1>
            <p> Installation of parts in the services of our partners. </p>
            <button>
                Shop Now
            </button>
        </div>

    </div>
  )
}

export default Home;
