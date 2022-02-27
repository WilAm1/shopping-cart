import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import Item from "./components/Item";
import "./styles/main.scss";

function App() {
  const [api, setApi] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddCart = ({ id, title, price, image }) => {
    const newItem = cart[id]
      ? { ...cart[id], quantity: ++cart[id].quantity }
      : { title, id, quantity: 1, price, image };
    setCart({ ...cart, [id]: newItem });
  };

  const handleCartChange = ({ amount, id }) => {
    const adjustedQuantity = amount + cart[id].quantity;

    if (adjustedQuantity === 0) {
      const updatedCart = { ...cart };
      delete updatedCart[id];
      setCart(updatedCart);
    } else {
      const adjustedItem = {
        ...cart[id],
        quantity: adjustedQuantity,
      };
      setCart({ ...cart, [id]: adjustedItem });
    }
  };

  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setApi(data);
  };

  const getCartSize = () => {
    return Object.keys(cart).reduce((accum, id) => {
      return accum + cart[id].quantity;
    }, 0);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout cartSize={getCartSize()} />}>
          <Route index element={<Home />} />
          <Route
            path="shop"
            element={<Shop items={api} handleClick={handleAddCart} />}
          />
          <Route
            path="/shop/:productID"
            element={<Item handleClick={handleAddCart} />}
          />
          <Route
            path="cart"
            element={<Cart cart={cart} handleChange={handleCartChange} />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
