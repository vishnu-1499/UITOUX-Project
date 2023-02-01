import React from 'react';

function PartItem({ image, name }) {
  return (
    <div className='partItem'>
        <div style={{ backgroundImage: `url(${image})`}}> </div>
        <p> {name} </p>
    </div>
  )
}

export default PartItem;