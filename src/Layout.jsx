// Layout.js
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

function Layout() {
  const location = useLocation();

  return (
    <>
      {/* Only show the Navbar if the current route is not /week */}
      {location.pathname !== "/week" && <Navbar />}
      <Outlet /> {/* This renders the nested routes */}
    </>
  );
}

export default Layout;
