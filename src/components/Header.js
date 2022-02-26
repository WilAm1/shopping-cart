import React from "react";
import { Link } from "react-router-dom";

export default function Header({ cartSize }) {
  return (
    <header>
      <h1>My Logo</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
        </ul>
      </nav>
      <Link to="cart">Cart {cartSize}</Link>
    </header>
  );
}
