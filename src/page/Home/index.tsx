import { Pagination } from "@/components";
import { useProduct } from "@/hooks";

import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

export const Home = () => {
  const [searchParams] = useSearchParams();
  const [active, setActive] = useState<number>(0);

  const { isLoading, data } = useProduct(
    Number(searchParams.get("page")),
    searchParams.get("q")
  );

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <main className="container mx-auto p-8 space-y-7  md:px-0 lg:py-8">
        <div className="flex flex-col justify-between space-y-10 lg:space-y-0 lg:flex-row">
          <ul className="flex space-x-4 md:space-x-10">
            <li
              className={
                active === 0
                  ? "text-black-400 font-semibold uppercase border-b-2 border-orange"
                  : "text-black-400 font-semibold uppercase"
              }
              onClick={() => setActive(0)}
            >
              <Link to="/">Todos os produtos</Link>
            </li>

            <li
              className={
                active === 1
                  ? "text-black-300 uppercase border-b-2 border-orange"
                  : "text-black-300 uppercase"
              }
              onClick={() => setActive(1)}
            >
              <Link to="/?q=camisetas">Camisetas</Link>
            </li>

            <li
              className={
                active === 2
                  ? "text-black-300 uppercase border-b-2 border-orange"
                  : "text-black-300 uppercase"
              }
              onClick={() => setActive(2)}
            >
              <Link to="/?q=canecas">Canecas</Link>
            </li>
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

        <Pagination currentItens={data?.currentItens} page={data?.page} />
      </main>
    </>
  );
};
