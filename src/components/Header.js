import React from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/icons/cart-icon.svg";

export default function Header({ cartSize }) {
  return (
    <header>
      <h1>Willie's</h1>
      <div className="header-links">
        <nav>
          <ul className="nav-link-wrapper">
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="shop">Shop</Link>
            </li>
          </ul>
        </nav>
        <div className="cart-wrapper">
          <Link to="cart">
            <div className="cart--icon">
              <img src={cartIcon} alt="cart" />{" "}
            </div>
            {!!cartSize && <div className="cart--size">{cartSize}</div>}
          </Link>
        </div>
      </div>
    </header>
  );
}
