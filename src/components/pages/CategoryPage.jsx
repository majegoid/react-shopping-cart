import React from 'react';
import { kebabCaseToCapWords } from '../../utils/strings';
import { ProductCardList } from '../products/ProductCardList';

export const CategoryPage = ({ category, categoryProducts }) => {
  const categoryName = kebabCaseToCapWords(category);

  const categoryJsx = (
    <div key={category} className='category'>
      <h2>{categoryName}</h2>
      <ProductCardList productList={categoryProducts} />
    </div>
  );

  return (
    <div className='page'>
      <h1>{categoryName}</h1>
      {categoryJsx}
    </div>
  );
};
