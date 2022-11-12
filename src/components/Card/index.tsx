import { BsTrash } from "react-icons/bs";
import axios from "axios";

interface Item {
  img: string;
  title: string;
  price: string;
  description: string;
  _id: string;
}

interface Props {
  item: Item;
  getAllCart: () => void;
}

export const Card: React.FC<Props> = ({ item, getAllCart }) => {
  const deleteOneItem = (id: string) => {
    axios({
      method: "delete",
      baseURL: import.meta.env.VITE_URL,
      url: "/delete",
      data: { id },
    }).then(() => getAllCart());
  };

  return (
    <div className="flex">
      <div className="w-60 h-52 ">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg"
        />
      </div>

      <div className="flex-1 p-5 bg-white-500 rounded-tr-lg rounded-br-lg space-y-6 ">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-light text-black-400">{item.title}</h3>

            <BsTrash
              className="text-red cursor-pointer"
              onClick={() => deleteOneItem(item._id)}
            />
          </div>
        </div>

        <p className="text-xs font-normal text-black-400">{item.description}</p>

        <div className="flex justify-between">
          <form className="relative">
            <label htmlFor="amount" className=" sr-only">
              Quantidade do produto
            </label>

            <select
              name="amount"
              id="amount"
              className="w-16 h-10 bg-gray-500 rounded-lg px-3 border border-black-200"
            >
              <option value="1">1</option>
            </select>
          </form>

          <strong>R$ {item.price}</strong>
        </div>
      </div>
    </div>
  );
};
