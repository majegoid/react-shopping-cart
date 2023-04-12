import React from 'react';
import { NavLink } from 'react-router-dom';
import { categoriesData } from '../../api/categoriesData';
import { getCategoryProducts } from '../../api/getCategoryProducts';
import { productsData } from '../../api/productsData';
import { kebabCaseToCapWords } from '../../utils/strings';

export const Navbar = ({ cartTotalItems }) => {
  const categoryNavLinks = categoriesData.map((category) => {
    const categoryName = kebabCaseToCapWords(category);
    const categoryProducts = getCategoryProducts(category, productsData.data);
    if (categoryProducts.length === 0) return null;
    return (
      <NavLink key={category} to={`/${category}`}>
        <li>{categoryName}</li>
      </NavLink>
    );
  });

  return (
    <nav>
      <div className='logo'>LOGO</div>
      <ul>
        <NavLink to='/products'>
          <li>Products</li>
        </NavLink>
        {categoryNavLinks}
      </ul>
      <ul>
        <NavLink to='/cart'>
          <li>Cart {cartTotalItems > 0 && `(${cartTotalItems})`}</li>
        </NavLink>
      </ul>
    </nav>
  );
};
