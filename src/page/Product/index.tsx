import { Header } from "@/components";

import { TbArrowBackUp } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

interface Product {
  _id: string;
  img: string;
  price: string;
  title: string;
  description: string;
}

export const Product = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [product, setProduct] = useState<Product[]>([]);
  let { id } = useParams();

  const getById = () => {
    axios<Product[]>({
      method: "get",
      baseURL: import.meta.env.VITE_URL,
      url: `/product/${id}`,
    }).then(({ data }) => {
      setProduct(data);
    });
  };

  useEffect(() => {
    getById();
  }, []);

  return (
    <>
      <Header setCurrentPage={setCurrentPage} />

      <main className="container mx-auto py-8 space-y-7">
        <div>
          <TbArrowBackUp className="text-gray-400 border-2 border-gray-400 rounded-full p-1 w-7 h-7" />
        </div>
      </main>
    </>
  );
};
