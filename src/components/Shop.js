import React from "react";
import { Link } from "react-router-dom";

export default function Shop({ items, handleClick }) {
  return (
    <div>
      <h2> Shop</h2>
      <ul>
        {items.map((item) => {
          const { id, title, price } = item;
          return (
            <li key={id}>
              {" "}
              <Link to={`${id}`}>{title}</Link>
              <button onClick={() => handleClick({ id, title, price })}>
                Add to Cart
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
