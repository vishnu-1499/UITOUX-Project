import React from 'react';
import Payments from "../Images/payments.png";
import Facebook from "../png/facebook.png";
import Twitter from "../png/twitter.png";
import Youtube from "../png/youtube.png";
import Instagram from "../png/instagram.png";
import Wifi from "../png/wifi.png";
import "./Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='footer1'>
            <h2 class="class1"> Contact Us </h2>
            <p class="class1"> Hi, we are always open for cooperation and suggestions,<br/>contact us in one of the ways below: </p>

            <div className='row'>
                <div className='column'>
                    <p> PHONE NUMBER <br/> <span> 089252 97807 </span> </p>

                    <p> EMAIL ADDRESS <br/> <span> careers@uitouxsolution.com </span> </p>
                     
                    <p> OUR LOCATION <br/> <span> 102, Athipalayam Rd,<br/>Ramakrishnapuram,<br/>Chinnavedampatti,<br/>Coimbatore, Tamil Nadu<br/>641049 </span> </p>
                 
                    <p> WORKING HOURS <br/> <span> Mon-Fri 10:00pm - 6:00pm </span> </p>
                </div>
            </div>

            <div className='down'>
                <p> Powered by <span> React/Next.js </span> - Designed by <span> UITOUX Solution </span> </p>

            </div>
        </div>

        <div className='footer2'>
            <h2> Information </h2>
            <a href='#'> About Us </a>
            <a href='#'> Delivery Information </a>
            <a href='#'> Privacy Policy </a>
            <a href='#'> Brands </a>
            <a href='#'> Contact Us </a>
            <a href='#'> Returns </a>
            <a href='#'> Site Map </a>
        </div>

        <div className='footer3'>
            <h2> My Account </h2>
            <a href='#'> Store Location </a>
            <a href='#'> Order History </a>
            <a href='#'> Wish List </a>
            <a href='#'> Newsletter </a>
            <a href='#'> Special Offers </a>
            <a href='#'> Gift Certificates </a>
            <a href='#'> Affiliate </a>
        </div>

        <div className='footer4'>
            <h2> Newsletter </h2>
            <p> Enter your email address below to subscribe to our newsletter <br/> and keep upto date with discounts and special offers. </p>
            <form>
                <input type="text" placeholder="user@example.com" name="search" />
                    <button> Subscribe </button>
            </form>
            <p> Follow us on social networks. </p>
            <div className='media'>
                <img src={Facebook} />
                <img src={Twitter} />
                <img src={Youtube} />
                <img src={Instagram} />
                <img src={Wifi} />
            </div><br/><br/><br/><br/>
            <div className='payment'>
                <img src={ Payments } />
            </div>
        </div>


    </div>
  )
}

export default Footer;