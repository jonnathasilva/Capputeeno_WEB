import { Header, Pagination } from "@/components";

export const Home = () => {
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

        <Pagination />
      </main>
    </>
  );
};
