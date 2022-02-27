import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Item({ handleClick }) {
  const { productID } = useParams();
  const [detail, setDetail] = useState({
    rating: {},
  });

  const [loading, setLoading] = useState(true);

  const fetchItem = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${productID}`);
      const data = await res.json();
      setDetail(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchItem();
  }, []);

  return loading ? (
    <div>Loading</div>
  ) : (
    <section className="product-section product">
      <div className="product-overview">
        <div className="item img-wrapper product-img-wrapper">
          <img src={detail.image} alt={detail.title} />
        </div>
        <div className="product">
          <h4 className="product-title">{detail.title}</h4>
          <p className="product-price">$ {detail.price}</p>
          <div className="rating-wrapper">
            <p class="product-rate">Rating: ⭐ {detail.rating.rate}/5</p>
            <p class="product-count">Count: {detail.rating.count}</p>
          </div>
          <button
            className="btn product-btn btn-product"
            onClick={() =>
              handleClick({
                id: detail.id,
                title: detail.title,
                price: detail.price,
                image: detail.image,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="product-extended-details">
        <p className="product-category">Category: {detail.category}</p>
        <p className="product-description">Description: {detail.description}</p>
        <p className="product-number">Product Number: {productID}</p>
      </div>
    </section>
  );
}
