import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./App.css";
import Loader from "./components/Loader/Loader.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <React.Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </React.Suspense>
  );
}

export default App;
