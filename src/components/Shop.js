import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Shop({ handleClick }) {
  const shortenTitle = (title, maxChar) => {
    if (title.length > 50) {
      return title.split("").slice(0, maxChar).join("") + "...";
    }
    return title;
  };

  const [api, setApi] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setApi(data);
    } catch (err) {
      throw err;
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="shop-section shop">
      <h3 className="shop-title"> Shop</h3>
      <ul className="shop-wrapper">
        {api.map((item) => {
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
