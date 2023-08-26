import React from "react";
import Navegacion from "./NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navegacion />
      <Outlet />
    </>
  );
};

export default Layout;
