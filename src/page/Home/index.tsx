import { Header, Pagination } from "@/components";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface Item {
  img: string;
  title: string;
  price: string;
  description: string;
  _id: string;
}

interface Product {
  currentItens: Item[];
  page: number;
}

export const Home = () => {
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState<Product>({} as Product);
  const [currentPage, setCurrentPage] = useState<number>(
    Number(searchParams.get("page")) || 0
  );

  const getProducts = () => {
    axios<Product>({
      method: "get",
      baseURL: import.meta.env.VITE_URL,
      params: { offset: currentPage },
    }).then(({ data }) => {
      setProduct(data);
    });
  };

  const getSearch = () => {
    axios<Product>({
      method: "get",
      baseURL: import.meta.env.VITE_URL,
      url: "/search",
      params: { offset: currentPage, q: searchParams.get("q") },
    }).then(({ data }) => {
      setProduct(data);
    });
  };

  useEffect(() => {
    if (searchParams.get("q")) {
      console.log(searchParams.get("q"));
      return getSearch();
    }

    getProducts();
  }, [searchParams.get("q"), searchParams.get("page")]);

  return (
    <>
      <Header />
      <main className="container mx-auto py-8 space-y-7">
        <div className="flex justify-between">
          <ul className="flex space-x-10">
            <li className="text-black-400 font-semibold uppercase">
              Todos os produtos
            </li>
            <li className="text-black-300 uppercase">Camisetas</li>
            <li className="text-black-300 uppercase">Canecas</li>
          </ul>

          <form>
            <select
              defaultValue="0"
              className="bg-transparent outline-none text-black-300 w-44 rounded-xl"
            >
              <option value="0">Novidades</option>
              <option value="1">Preço: Maior - menor</option>
              <option value="2">Preço: Menor - maior</option>
              <option value="3">Mais vendidos</option>
            </select>
          </form>
        </div>

        <Pagination
          currentItens={product?.currentItens}
          page={product.page}
          setCurrentPage={setCurrentPage}
        />
      </main>
    </>
  );
};
