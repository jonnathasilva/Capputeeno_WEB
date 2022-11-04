import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Search } from "./search";
import { Home } from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
