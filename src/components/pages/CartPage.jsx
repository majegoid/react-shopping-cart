import React from 'react';
import { CartItem } from '../cart/CartItem';

export const CartPage = ({
  cart,
  addProductToCart,
  removeProductFromCart,
  clearProductFromCart,
  cartTotalPrice,
}) => {
  const cartItemsJsx = cart.map((cartItem) => (
    <CartItem
      key={cartItem.product.id}
      cartItem={cartItem}
      addProductToCart={addProductToCart}
      removeProductFromCart={removeProductFromCart}
      clearProductFromCart={clearProductFromCart}
    />
  ));

  console.log('cartTotalPrice');
  console.log(cartTotalPrice);

  return (
    <div className='page'>
      <h1>Cart</h1>
      <div className='page-content'>
        <table className='cart'>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity Adjust</th>
              <th>Item Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItemsJsx}
            <tr></tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Total: ${cartTotalPrice.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <button className='checkout-button'>Proceed to Checkout</button>
      </div>
    </div>
  );
};
