import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import BrowsePage from "./BrowsePage";

const Body = () => {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <BrowsePage />,
    },
  ]);
  return <RouterProvider router={appRoutes}></RouterProvider>;
};

export default Body;
