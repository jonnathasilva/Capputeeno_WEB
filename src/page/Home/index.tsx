import { Pagination } from "@/components";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

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

interface Props {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Home: React.FC<Props> = ({ currentPage, setCurrentPage }) => {
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState<Product>({} as Product);

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
      return getSearch();
    }

    getProducts();
  }, [searchParams.get("q"), searchParams.get("page")]);

  return (
    <>
      <main className="container mx-auto p-8 space-y-7  md:px-0 lg:py-8">
        <div className="flex flex-col justify-between space-y-10 lg:space-y-0 lg:flex-row">
          <ul className="flex space-x-4 md:space-x-10">
            <li className="text-black-400 font-semibold uppercase">
              <Link to="/">Todos os produtos</Link>
            </li>

            <li className="text-black-300 uppercase">Camisetas</li>

            <li className="text-black-300 uppercase">Canecas</li>
          </ul>

          <form className="flex justify-end">
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
