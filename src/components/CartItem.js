import React from "react";

import { Link } from "react-router-dom";

export default function CartItem({ cart, handleChange }) {
  const { image, title, id, price, quantity } = cart;
  console.log(image);
  return (
    <li>
      <Link to={`shop/${id}`}>{title}</Link>
      <img src={image} alt={title} />
      <p>{price}</p>

      {/*  adjust number */}
      <button onClick={() => handleChange({ amount: -1, id })}>-</button>
      <div>{quantity}</div>
      <button onClick={() => handleChange({ amount: 1, id })}>+</button>
    </li>
  );
}
