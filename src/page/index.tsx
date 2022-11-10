import { Route, Routes, useSearchParams } from "react-router-dom";
import { useState } from "react";

import { Home } from "./Home";
import { Product } from "./Product";
import { Header } from "@/components";

export const Router = () => {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(
    Number(searchParams.get("page")) || 0
  );

  return (
    <>
      <Header setCurrentPage={setCurrentPage} />

      <Routes>
        <Route
          path="/"
          element={
            <Home currentPage={currentPage} setCurrentPage={setCurrentPage} />
          }
        />

        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
};
