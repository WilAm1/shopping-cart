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
    <div>
      <h3>{detail.title}</h3>
      <p>{productID}</p>
      <img src={detail.image} alt={detail.title} />
      <p>{detail.price}</p>
      <p>
        Rate: {detail.rating.rate}
        Count: {detail.rating.count}
      </p>
      <p>{detail.category}</p>
      <p>{detail.description}</p>
      <button
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
  );
}
