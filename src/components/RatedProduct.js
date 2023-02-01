import React from 'react';
import { RatedProductList } from './RatedProductList';
import RatedProductItem from './RatedProductItem';
import "./RatedProduct.css";

function RatedProduct() {
  return (
    <div className='ratedProduct' >
        <h2> Top Rated Products </h2>
        <h2> Special Offers </h2>
        <h2> Bestsellers </h2>
        <hr/>

        <div className='ratedProductList'>
            {RatedProductList.map((ratedProductItem, key) => {
                    return(
                        <RatedProductItem
                        key={key}
                        image={ratedProductItem.image}
                        name={ratedProductItem.name}
                        price={ratedProductItem.price}
                        />
                    );
            })}
        </div>

    </div>
  )
}

export default RatedProduct;