import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
