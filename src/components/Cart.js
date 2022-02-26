import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

export default function Cart({ cart, handleChange }) {
  const getOrderTotal = () => {
    return Object.keys(cart).reduce((accum, id) => {
      return accum + cart[id].quantity * cart[id].price;
    }, 0);
  };

  return (
    <div>
      <h3>My Cart</h3>
      <div className="cart-wrapper">
        add some map function to display added to cart items. add some number to
        adjust item quantity.
        <ul>
          {Object.keys(cart).map((item) => {
            return (
              <CartItem
                key={cart[item].id}
                cart={cart[item]}
                handleChange={handleChange}
              />
            );
          })}
        </ul>
        <p>Total: {getOrderTotal()}</p>
      </div>
    </div>
  );
}
