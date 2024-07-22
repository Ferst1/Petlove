import { createBrowserRouter } from "react-router-dom";
import React from "react";
import FindPetPage from "./pages/FindPetPage/FindPetPage";
import HomePage from "./pages/HomePage/HomePage";
import NewsPage from "./pages/NewsPage/NewsPage";
import Layout from "./components/Layout/Layout";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import OurFriendsPage from "./pages/OurFriendsPage/OurFriendsPage";
import FavoritePetsPage from "./pages/FavoritePetsPage/FavoritePetsPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />,
      },
      {
        path: "/news",
        element: <NewsPage />,
      },
      {
        path: "/find_pet",
        element: <FindPetPage />,
      },
      {
        path: "/our_friends",
        element: <OurFriendsPage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/profile",
        element: <PrivateRoute><ProfilePage /></PrivateRoute>,
      },
      {
        path: "/favorites",
        element: <PrivateRoute><FavoritePetsPage /></PrivateRoute>,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
