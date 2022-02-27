import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home home-section">
      <h2>Get your wallets ready</h2>
      <p>lorem ipsum something something </p>
      <Link to="shop" className="btn btn-action btn-accent btn-animation">
        Shop Now
      </Link>
    </section>
  );
}
