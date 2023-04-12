import React from 'react';
import { getCategoryProducts } from '../../api/getCategoryProducts';
import { kebabCaseToCapWords } from '../../utils/strings';
import { ProductCardList } from '../products/ProductCardList';

export const ProductsPage = ({ productList, categoryList }) => {
  const categoriesJsx = categoryList.map((category) => {
    const categoryProducts = getCategoryProducts(category, productList);
    if (categoryProducts.length === 0) return null;
    return (
      <div key={category} className='category'>
        <h2>{kebabCaseToCapWords(category)}</h2>
        <ProductCardList productList={categoryProducts} />
      </div>
    );
  });

  return (
    <div className='page'>
      <h1>Products</h1>
      {categoriesJsx}
    </div>
  );
};
