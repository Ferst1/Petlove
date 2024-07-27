// import { createBrowserRouter } from "react-router-dom";
// import React from "react";
// import FindPetPage from "./pages/FindPetPage/FindPetPage";
// import HomePage from "./pages/HomePage/HomePage";
// import NewsPage from "./pages/NewsPage/NewsPage";
// import Layout from "./components/Layout/Layout";
// import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
// import LoginPage from "./pages/LoginPage/LoginPage";
// import ProfilePage from "./pages/ProfilePage/ProfilePage";
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
// import OurFriendsPage from "./pages/OurFriendsPage/OurFriendsPage";
// import FavoritePetsPage from "./pages/FavoritePetsPage/FavoritePetsPage";
// import AddPetPage from "./pages/AddPetPage/AddPetPage";

// const router = createBrowserRouter([
//   {
//     element: <Layout />,
//     children: [
//       {
//         path: "/petlove",
//         index: true,
//         element: <HomePage />,
//       },
//       {
//         path: "/news",
//         element: <NewsPage />,
//       },
//       {
//         path: "/find_pet",
//         element: <FindPetPage />,
//       },
//       {
//         path: "/our_friends",
//         element: <OurFriendsPage />,
//       },
//       {
//         path: "/registration",
//         element: <RegistrationPage />,
//       },
//       {
//         path: "/login",
//         element: <LoginPage />,
//       },
//       {
//         path: "/profile",
//         element: <PrivateRoute><ProfilePage /></PrivateRoute>,
//       },
//       {
//         path: "/favorites",
//         element: <PrivateRoute><FavoritePetsPage /></PrivateRoute>,
//       },
//       {
//         path: "/add_pet",
//         element: <PrivateRoute><AddPetPage /></PrivateRoute>, 
//       },
//       {
//         path: "*",
//         element: <NotFoundPage />,
//       },
//     ],
//   },
// ]);

// export default router;


import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
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

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/petlove",
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
          <Suspense fallback={<div>Loading...</div>}>
            <PrivateRoute><ProfilePage /></PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: "/favorites",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PrivateRoute><FavoritePetsPage /></PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: "/add_pet",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PrivateRoute><AddPetPage /></PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
