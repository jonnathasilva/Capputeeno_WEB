import { ButtonPagination } from "@/components";
import { Link } from "react-router-dom";

interface Item {
  img: string;
  title: string;
  price: string;
  description: string;
  _id: string;
}

interface Product {
  currentItens: Item[] | undefined;
  page: number | undefined;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination: React.FC<Product> = ({
  currentItens,
  page,
  setCurrentPage,
}) => {
  return (
    <section className="flex flex-col space-y-6">
      <ButtonPagination page={page} setCurrentPage={setCurrentPage} />

      <div className="flex flex-wrap">
        {currentItens?.map((product) => (
          <div
            key={product._id}
            className=" h-96 px-0 w-full sm:w-[calc(100%/2)] sm:px-2 md:w-[calc(100%/3)] lg:px-4 lg:w-[calc(100%/4)]  "
          >
            <Link to={`/product/${product._id}`} className="cursor-pointer ">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-72 rounded-t-lg object-cover"
              />

              <div className="bg-white-500 px-3 py-2 text-black-400 font-light">
                <p className="border-b border-gray-100 pb-2">{product.title}</p>

                <p className="pt-2 font-bold to-black-500">
                  R$ {product.price}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <ButtonPagination page={page} setCurrentPage={setCurrentPage} />
    </section>
  );
};
