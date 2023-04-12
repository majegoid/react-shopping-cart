import React from 'react';
import { Link } from 'react-router-dom';

export const ProductCard = ({ product }) => {
  const {
    id,
    title,
    // description,
    price,
    discountPercentage,
    // rating,
    // stock,
    // brand,
    // category,
    thumbnail,
    // images,
  } = product;

  return (
    <Link to={`/product/${product.id}`}>
      <div id={id} className='product-card'>
        <div className='img-container'>
          <img src={thumbnail} alt={title} />
        </div>
        <div className='card-info'>
          <h2>{title}</h2>
          <h4>
            ${price.toFixed(2)}{' '}
            {discountPercentage && (
              <span className='discount'>-{discountPercentage}%</span>
            )}
          </h4>
        </div>
      </div>
    </Link>
  );
};
