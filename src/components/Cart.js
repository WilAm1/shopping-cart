import React from "react";
import CartItem from "./CartItem";

export default function Cart({ cart, handleChange }) {
  const getOrderTotal = () => {
    return Object.keys(cart).reduce((accum, id) => {
      return accum + cart[id].quantity * cart[id].price;
    }, 0);
  };

  return (
    <section className="cart-section cart">
      <h3>My Cart</h3>
      <div className="user-cart">
        <ul className="cart-list-wrapper">
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
        <div className="order-checkout">
          <p className="order-total-price">
            Total: $ {Math.round(getOrderTotal() * 100) / 100}
          </p>
          <button className="checkout-btn btn order-checkout-btn">
            checkout
          </button>
        </div>
      </div>
    </section>
  );
}
