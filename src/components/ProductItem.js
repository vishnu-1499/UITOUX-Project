import React from 'react';

function ProductItem({ image, model, name, price }) {
  return (
    <div className='productItem'>
        <div style={{ backgroundImage: `url(${image})`}}> </div>
        <p> {model} </p>
        <h4> {name} </h4>
        <h3> ${price} </h3>
    </div>
  )
}

export default ProductItem;