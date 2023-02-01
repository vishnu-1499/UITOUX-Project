import React from 'react';

function RatedProductItem({ image, name, price }) {
  return (
    <div className='ratedProductItem'>
        <div style={{ backgroundImage: `url(${image})`}}> </div>
        <h4> {name} </h4>
        <p> ${price} </p>
    </div>
  )
}

export default RatedProductItem;