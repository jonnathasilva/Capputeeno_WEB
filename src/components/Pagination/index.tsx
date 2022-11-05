import { useState } from "react";

import { ButtonPagination } from "@/components";

interface Product {
  img: string;
  title: string;
  price: string;
  description: string;
  _id: string;
}

interface Props {
  product: Product[];
}

export const Pagination: React.FC<Props> = ({ product }) => {
  const [itensPerPage, setItensPerPage] = useState<number>(12);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const page = Math.ceil(product.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = product.slice(startIndex, endIndex);

  return (
    <section className="flex flex-col space-y-6">
      <ButtonPagination page={page} setCurrentPage={setCurrentPage} />

      <div className="flex flex-wrap">
        {currentItens.map((product) => (
          <div
            key={product._id}
            className=" h-96 px-4 w-full sm:w-[calc(100%/2)] md:w-[calc(100%/3)] lg:w-[calc(100%/4)] "
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-72 rounded-t-lg object-cover"
            />

            <div className="bg-white px-3 py-2 text-black-400 font-light ">
              <p className="border-b border-gray-100 pb-2">{product.title}</p>

              <p className="pt-2 font-bold to-black-500">R$ {product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <ButtonPagination page={page} setCurrentPage={setCurrentPage} />
    </section>
  );
};
