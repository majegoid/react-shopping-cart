import React from 'react';
import { ProductCard } from './ProductCard';

export const ProductCardList = ({ productList }) => {
  const productCardsJsx = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return <div className='product-card-list'>{productCardsJsx}</div>;
};
