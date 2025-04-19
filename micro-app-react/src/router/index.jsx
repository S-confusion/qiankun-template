import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/index.jsx";
import About from "../pages/About/index.jsx";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ],
  {
    basename: qiankunWindow.__POWERED_BY_QIANKUN__
      ? import.meta.env.VITE_APP_BASE_URL
      : "/",
  }
);
