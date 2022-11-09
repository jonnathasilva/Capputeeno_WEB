import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./Home";
import { Product } from "./Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
