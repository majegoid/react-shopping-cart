import React from 'react';

export const CartItem = ({
  cartItem,
  addProductToCart,
  removeProductFromCart,
  clearProductFromCart,
}) => {
  const { product, quantity } = cartItem;
  const { id, title, price } = product;

  return (
    <tr className='cart-item'>
      <td>{title}</td>
      <td>
        <button onClick={() => removeProductFromCart(id)}>-</button>
        <span>Quantity: {quantity}</span>
        <button onClick={() => addProductToCart(product)}>+</button>
      </td>
      <td>Price: ${price.toFixed(2) * quantity}</td>
      <td>
        <button onClick={() => clearProductFromCart(id)}>REMOVE</button>
      </td>
    </tr>
  );
};
