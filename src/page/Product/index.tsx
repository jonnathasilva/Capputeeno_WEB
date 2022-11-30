import { TbArrowBackUp } from "react-icons/tb";
import { FiShoppingBag } from "react-icons/fi";
import { useParams, Link } from "react-router-dom";

import { useAddCart, useProductById } from "@/hooks";

export const Product = () => {
  const { id } = useParams();

  const { data, isLoading } = useProductById(id);

  const addCartMutation = useAddCart(id);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <main className="container mx-auto py-8 space-y-7 px-4 lg:px-0">
        <div className="w-24 h-7 flex justify-between items-center">
          <Link to="/">
            <TbArrowBackUp className="text-gray-400 border-2 border-gray-400 rounded-full p-1 w-full h-full" />
          </Link>

          <span className="text-gray-400 text-lg order-1 font-medium capitalize">
            Voltar
          </span>
        </div>

        <div className="flex flex-col space-y-8 lg:space-x-8 lg:flex-row ">
          <div className="flex-1 lg:w-[640px] h-[580px]">
            <img
              src={data?.img}
              alt={data?.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className=" flex flex-1 flex-col justify-between lg:max-h-[546px]">
            <div className="lg:h-[92%]">
              <p className="text-blacl-400">{data?.category}</p>

              <h1 className="text-blacl-400 text-3xl font-light mt-3 mb-1">
                {data?.title}
              </h1>

              <span className="text-black-500 text-xl font-semibold mb-6">
                R$ {data?.price}
              </span>

              <p className="text-blacl-400 text-xs font-normal mb-14">
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00.
              </p>

              <div className="text-black-300 uppercase font-medium mb-2">
                Descrição
              </div>

              <p className="break-all overflow-hidden h-[47%]">
                {data?.description}
              </p>
            </div>

            <button
              className="flex justify-center items-center bg-blue text-white-400 w-full h-11 space-x-3.5 rounded"
              onClick={() => addCartMutation.mutate()}
            >
              <FiShoppingBag />

              <span className="font-medium uppercase">
                {addCartMutation.isLoading
                  ? "Carregando"
                  : "Adicionar ao carrinho"}
              </span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
