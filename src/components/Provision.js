import React from 'react';
import "./Provision.css";
import Shipping from "../svg/free-delivery.svg";
import Support from "../svg/24-hours.svg";
import Safety from "../svg/payment-security.svg";
import Offers from "../svg/tag.svg";

function Provision() {
  return (
    <div className='provision'>
        <div className='row'>
            <div className='column'>
                <img src={ Shipping } />
                <h3> Free Shipping </h3>
            </div>
            <div className='column'>
                <img src={ Support } />
                <h3> Support 24/7 </h3>
            </div>
            <div className='column'>
                <img src={ Safety } />
                <h3> 100% Safety </h3>
            </div>
            <div className='column'>
                <img src={ Offers } />
                <h3> Hot Offers </h3>
            </div>
        </div>

    </div>
  )
}

export default Provision;