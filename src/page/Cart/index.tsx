import { TbArrowBackUp } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Card } from "@/components";

export const Cart = () => {
  return (
    <main className="flex container mx-auto space-x-8 h-4/5 mt-10">
      <section className="flex-[2] space-y-6">
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
            Total (3 produtos) <strong>R$161,00</strong>{" "}
          </span>
        </div>

        <div className="overflow-auto">
          <Card />
        </div>
      </section>

      <section className="flex-1 h-full bg-white-500 p-6">
        <h2 className="uppercase font-semibold text-xl text-black-400">
          Resumo do pedido
        </h2>

        <div>
          <div className="flex justify-between text-black-400">
            <p>Subtotal de produtos</p>
            <span>R$ 161,00</span>
          </div>

          <div className="flex justify-between text-black-400">
            <p>Entrega</p>
            <span>R$ 40,00</span>
          </div>
        </div>
      </section>
    </main>
  );
};
