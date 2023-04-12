import React from 'react';
import { ImageCarousel } from '../generic/ImageCarousel';

export const ProductDetails = ({ product, addProductToCart }) => {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    // thumbnail,
    images,
  } = product;

  return (
    <div id={id} className='product-details'>
      <ImageCarousel images={images} title={title} />
      <div className='details'>
        <h2>{title}</h2>
        <h3>Brand: {brand}</h3>
        <h4>Category: {category}</h4>
        <h4>Rating: {rating}/5 Stars</h4>
        <h4>
          ${price.toFixed(2)}{' '}
          {discountPercentage && (
            <span className='discount'>-{discountPercentage}%</span>
          )}
        </h4>
        <h4>{stock > 0 ? `In stock - ${stock} units` : 'Out of stock'}</h4>
        <p>{description}</p>
        <button
          onClick={() => {
            addProductToCart(product);
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
