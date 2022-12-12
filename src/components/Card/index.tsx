import { BsTrash } from "react-icons/bs";

import { useDelete } from "@/hooks";

interface Item {
  img: string;
  title: string;
  price: string;
  description: string;
  _id: string;
}

interface Props {
  item: Item;
}

const Loading = () => (
  <div data-testid="loading">
    <div className="border-t-transparent border-solid animate-spin rounded-full border-red border-4 h-5 w-5"></div>
  </div>
);

export const Card: React.FC<Props> = ({ item }) => {
  const { mutate, isLoading } = useDelete();

  return (
    <div className="flex">
      <div className="w-32 h-52 md:w-60 ">
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

            {isLoading ? (
              <Loading />
            ) : (
              <BsTrash
                className="text-red cursor-pointer"
                onClick={() => mutate(item._id)}
              />
            )}
          </div>
        </div>

        <p className="text-xs font-normal text-black-400 overflow-hidden h-11">
          {item.description}
        </p>

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
