import React from 'react';
import { ProductList } from "./ProductList";
import ProductItem from './ProductItem';
import "./Product.css";

function Product() {
  return (
    <div className='product'>
        <h1> Featured Product </h1>
        
        <div className='productList'>
            {ProductList.map((productItem, key) => {
                    return(
                        <ProductItem
                        key={key}
                        image={productItem.image}
                        model={productItem.model}
                        name={productItem.name}
                        price={productItem.price}
                        />
                    );
            })}
        </div>
    </div>
  )
}

export default Product;