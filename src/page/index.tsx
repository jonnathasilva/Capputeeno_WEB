import { Route, Routes, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";

import { Home } from "./Home";
import { Product } from "./Product";
import { Header } from "@/components";

interface Item {
  img: string;
  title: string;
  price: string;
  description: string;
  _id: string;
}

interface Cart {
  _id: string;
  product: Item[];
}

export const Router = () => {
  const [searchParams] = useSearchParams();
  const [cart, setCart] = useState<Cart>({} as Cart);
  const [currentPage, setCurrentPage] = useState<number>(
    Number(searchParams.get("page")) || 0
  );

  const getAllCart = () => {
    axios<Cart>({
      method: "get",
      baseURL: import.meta.env.VITE_URL,
      url: "/cartall",
    }).then(({ data }) => {
      setCart(data);
    });
  };

  useEffect(() => {
    getAllCart();
  }, []);

  return (
    <>
      <ToastContainer />

      <Header
        setCurrentPage={setCurrentPage}
        cartLength={cart?.product?.length}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home currentPage={currentPage} setCurrentPage={setCurrentPage} />
          }
        />

        <Route
          path="/product/:id"
          element={<Product getAllCart={getAllCart} />}
        />
      </Routes>
    </>
  );
};
