import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout({ cartSize }) {
  return (
    <div>
      <Header cartSize={cartSize}></Header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
