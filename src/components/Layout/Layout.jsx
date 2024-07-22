import React, { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div>
      <Header isHomePage={isHomePage} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
