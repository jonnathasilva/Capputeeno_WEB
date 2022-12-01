import { TbArrowBackUp } from "react-icons/tb";
import { Link } from "react-router-dom";

import { Card, Loading } from "@/components";
import { useCarts } from "@/hooks";

export const Cart = () => {
  const { data, isLoading } = useCarts();

  const price = data?.product.reduce(
    (previous, current) => previous + Number(current.price),
    0
  );

  const total =
    data?.product.reduce(
      (previous, current) => previous + 1 * Number(current.price),
      0
    ) || 0;

  const delivery = 40;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="flex flex-col px-4 container mx-auto h-4/5 mt-10 space-y-8 md:space-y-0 md:px-0 md:space-x-8 md:flex-row">
      <section className="flex-1 md:flex-[2] space-y-6">
        <div className="w-24 h-7 flex justify-between items-center">
          <Link to="/">
            <TbArrowBackUp className="text-gray-400 border-2 border-gray-400 rounded-full p-1 w-full h-full" />
          </Link>

          <span className="text-gray-400 text-lg order-1 font-medium capitalize">
            Voltar
          </span>
        </div>

        <div className="space-y-1.5">
          <h2 className="text-2xl text-black-400 font-medium uppercase">
            Seu carrinho
          </h2>

          <span>
            Total ({data?.product?.length} produtos) <strong>R$ {total}</strong>
          </span>
        </div>

        <div className="h-[79%] overflow-auto space-y-4">
          {data?.product.map((item) => (
            <Card item={item} key={item._id} />
          ))}
        </div>
      </section>

      <section className="flex-1 h-full bg-white-500 p-6 mb-4 flex flex-col justify-between">
        <div className="space-y-9">
          <h2 className="uppercase font-semibold text-xl text-black-400">
            Resumo do pedido
          </h2>

          <div className="pb-6 border-b border-gray-100 space-y-3">
            <div className="flex justify-between text-black-400">
              <p>Subtotal de produtos</p>
              <span data-testid="subtotal">R$ {price}</span>
            </div>

            <div className="flex justify-between text-black-400 ">
              <p>Entrega</p>
              <span>R$ 40,00</span>
            </div>
          </div>

          <div className="flex justify-between text-black-400 mt-2">
            <p>Total</p>
            <span data-testid="total">R$ {total + delivery}</span>
          </div>

          <button className="bg-green w-full h-11 rounded text-white-400 font-medium uppercase">
            Finalizar a compra
          </button>
        </div>

        <div>
          <ul className="space-y-3">
            <li className="underline text-black-300 text-sm font-medium">
              Ajuda
            </li>
            <li className="underline text-black-300 text-sm font-medium">
              reembolsos
            </li>
            <li className="underline text-black-300 text-sm font-medium">
              entregas e frete
            </li>
            <li className="underline text-black-300 text-sm font-medium">
              trocas e devoluções
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
