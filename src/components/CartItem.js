import React from "react";

import { Link } from "react-router-dom";

export default function CartItem({ cart, handleChange }) {
  const { image, title, id, price, quantity } = cart;
  const shortenTitle = (title, maxChar) => {
    if (title.length > 50) {
      return title.split("").slice(0, maxChar).join("") + "...";
    }
    return title;
  };

  return (
    <li className="cart-item">
      <div className="cart-item-img--wrapper">
        <img className="cart-item-img--img" src={image} alt={title} />
      </div>
      <div className="cart-item-details">
        <div className="cart-item-title title-link">
          <Link to={`shop/${id}`}>{shortenTitle(title, 40)}</Link>
        </div>
        <p className="cart-item-price">Price: $ {price}</p>

        <div className="cart-item-btn-wrapper">
          <button
            className="btn cart-change-btn"
            onClick={() => handleChange({ amount: -1, id })}
          >
            -
          </button>
          <div className="cart-item-quantity item-quantity">
            <p>{quantity}</p>
          </div>
          <button
            className="btn cart-change-btn"
            onClick={() => handleChange({ amount: 1, id })}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
}
