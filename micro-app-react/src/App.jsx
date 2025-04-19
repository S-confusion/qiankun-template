import React from "react";
import { RouterProvider, Link } from "react-router-dom";
import { router } from "@/router/index.jsx";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
