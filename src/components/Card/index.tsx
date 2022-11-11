import { BsTrash } from "react-icons/bs";

export const Card = () => (
  <div className="flex">
    <div className="w-60 h-52 ">
      <img
        src="https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
        className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg"
      />
    </div>

    <div className="flex-1 p-5 bg-white-500 rounded-tr-lg rounded-br-lg space-y-6 ">
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-light text-black-400">
            Caneca de cerâmica rústica
          </h3>

          <BsTrash className="text-red" />
        </div>
      </div>

      <p className="text-xs font-normal text-black-400">
        Aqui vem um texto descritivo do produto, esta caixa de texto servirá
        apenas de exemplo para que simule algum texto que venha a ser inserido
        nesse campo, descrevendo tal produto.
      </p>

      <div className="flex justify-between">
        <form>
          <label htmlFor="amount" className=" sr-only">
            Quantidade do produto
          </label>

          <select
            name="amount"
            id="amount"
            className="w-16 h-10 bg-gray-500 rounded-lg px-3"
          >
            <option value="1">1</option>
          </select>
        </form>

        <strong>R$ 40,00</strong>
      </div>
    </div>
  </div>
);
