import React from "react";

import { Link } from "react-router-dom";

export default function CartItem({ cart, handleChange }) {
  const { title, id, price, quantity } = cart;
  return (
    <li>
      <p>{price}</p>
      <Link to={`shop/${id}`}>{title}</Link>
      {/*  adjust number */}
      <button onClick={() => handleChange({ amount: -1, id })}>-</button>
      <div>{quantity}</div>
      <button onClick={() => handleChange({ amount: 1, id })}>+</button>
    </li>
  );
}
