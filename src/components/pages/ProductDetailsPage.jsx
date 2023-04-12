import React from 'react';
import { ProductDetails } from '../products/ProductDetails';

export const ProductDetailsPage = ({ product, addProductToCart }) => {
  return (
    <div className='page'>
      <ProductDetails product={product} addProductToCart={addProductToCart}/>
    </div>
  );
};
