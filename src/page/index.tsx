import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { Home } from "./Home";
import { Product } from "./Product";
import { Cart } from "./Cart";
import { Header } from "@/components";

export const Router = () => {
  return (
    <>
      <ToastContainer />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/product/:id" element={<Product />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};
