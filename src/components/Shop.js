import React from "react";
import { Link } from "react-router-dom";

export default function Shop({ items, handleClick }) {
  const shortenTitle = (title, maxChar) => {
    if (title.length > 50) {
      return title.split("").slice(0, maxChar).join("") + "...";
    }
    return title;
  };
  return (
    <section className="shop-section shop">
      <h3 className="shop-title"> Shop</h3>
      <ul className="shop-wrapper">
        {items.map((item) => {
          const { id, title, price, image } = item;
          return (
            <li key={id} className="shop-card">
              <div className="shop-card-img-wrapper">
                {" "}
                <img src={image} alt={title} className="shop-card-img" />
              </div>
              <div className="shop-card-detail-wrapper">
                <div className="link-container">
                  <Link to={`${id}`} className="shop-link">
                    {shortenTitle(title, 50)}
                  </Link>
                </div>
                <p className="shop-card-price price ">$ {price}</p>
                <button
                  className="shop-card-btn btn add-cart"
                  onClick={() => handleClick({ id, title, price, image })}
                >
                  Add to Cart
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
