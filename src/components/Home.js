import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Hello Home</h1>
      <p>Display some hero image and accent button </p>
      <Link to="shop">Shop Now</Link>
    </div>
  );
}
