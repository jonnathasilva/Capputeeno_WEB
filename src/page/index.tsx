import { Route, Routes, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { Home } from "./Home";
import { Product } from "./Product";
import { Cart } from "./Cart";
import { Header } from "@/components";

export const Router = () => {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(
    Number(searchParams.get("page")) || 0
  );

  return (
    <>
      <ToastContainer />

      <Header setCurrentPage={setCurrentPage} />

      <Routes>
        <Route
          path="/"
          element={
            <Home currentPage={currentPage} setCurrentPage={setCurrentPage} />
          }
        />

        <Route path="/product/:id" element={<Product />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};
