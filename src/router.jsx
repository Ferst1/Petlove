import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const FindPetPage = lazy(() => import("./pages/FindPetPage/FindPetPage"));
const NewsPage = lazy(() => import("./pages/NewsPage/NewsPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage/ProfilePage"));
const OurFriendsPage = lazy(() => import("./pages/OurFriendsPage/OurFriendsPage"));
const FavoritePetsPage = lazy(() => import("./pages/FavoritePetsPage/FavoritePetsPage"));
const AddPetPage = lazy(() => import("./pages/AddPetPage/AddPetPage"));

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          index: true,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          ),
        },
        {
          path: "/news",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <NewsPage />
            </Suspense>
          ),
        },
        {
          path: "/find_pet",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <FindPetPage />
            </Suspense>
          ),
        },
        {
          path: "/our_friends",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <OurFriendsPage />
            </Suspense>
          ),
        },
        {
          path: "/registration",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <RegistrationPage />
            </Suspense>
          ),
        },
        {
          path: "/login",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <LoginPage />
            </Suspense>
          ),
        },
        {
          path: "/profile",
          element: (
            <PrivateRoute>
              <Suspense fallback={<div>Loading...</div>}>
                <ProfilePage />
              </Suspense>
            </PrivateRoute>
          ),
        },
        {
          path: "/favorites",
          element: (
            <PrivateRoute>
              <Suspense fallback={<div>Loading...</div>}>
                <FavoritePetsPage />
              </Suspense>
            </PrivateRoute>
          ),
        },
        {
          path: "/add_pet",
          element: (
            <PrivateRoute>
              <Suspense fallback={<div>Loading...</div>}>
                <AddPetPage />
              </Suspense>
            </PrivateRoute>
          ),
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ],

);

export default router;
