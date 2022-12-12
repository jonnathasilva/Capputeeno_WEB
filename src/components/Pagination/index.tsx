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
  page: number | any;
}

export const Pagination: React.FC<Product> = ({ currentItens, page }) => {
  return (
    <section className="flex flex-col space-y-6">
      {page > 1 ? <ButtonPagination page={page} /> : ""}

      <div className="grid grid-cols-1 flex-wrap gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentItens?.map((product) => (
          <div key={product._id} className="h-96 px-0 w-full shadow-lg">
            <Link
              to={`/product/${product._id}`}
              className="cursor-pointer h-96 block"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-72 rounded-t-lg object-cover"
              />

              <div className="bg-white-500 px-3 py-2 text-black-400 font-light h-24">
                <p className="border-b border-gray-100 pb-2">{product.title}</p>

                <p className="pt-2 font-bold to-black-500">
                  R$ {product.price}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {page > 1 ? <ButtonPagination page={page} /> : ""}
    </section>
  );
};
