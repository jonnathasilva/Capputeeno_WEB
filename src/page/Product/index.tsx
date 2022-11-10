import { TbArrowBackUp } from "react-icons/tb";
import { FiShoppingBag } from "react-icons/fi";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

interface Product {
  _id: string;
  img: string;
  price: string;
  title: string;
  description: string;
  category: string;
}

export const Product = () => {
  const [product, setProduct] = useState<Product>({} as Product);
  let { id } = useParams();

  const getById = () => {
    axios<Product>({
      method: "get",
      baseURL: import.meta.env.VITE_URL,
      url: `/product/${id}`,
    }).then(({ data }) => {
      setProduct(data);
    });
  };

  useEffect(() => {
    getById();
  }, []);

  return (
    <>
      <main className="container mx-auto py-8 space-y-7 px-4 lg:px-0">
        <div className="w-7 h-7">
          <Link to="/">
            <TbArrowBackUp className="text-gray-400 border-2 border-gray-400 rounded-full p-1 w-full h-full" />
          </Link>
        </div>

        <div className="flex flex-col space-y-8 lg:space-x-8 lg:flex-row ">
          <div className="flex-[2] h-[580px]">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div>
              <p className="text-blacl-400">{product.category}</p>

              <h1 className="text-blacl-400 text-3xl font-light mt-3 mb-1">
                {product.title}
              </h1>

              <span className="text-black-500 text-xl font-semibold mb-6">
                R$ {product.price}
              </span>

              <p className="text-blacl-400 text-xs font-normal mb-14">
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00.
              </p>

              <div className="text-black-300 uppercase font-medium mb-2">
                Descrição
              </div>

              <p className="break-all">{product.description}</p>
            </div>

            <button className="flex justify-center items-center bg-blue text-white-400 w-full h-11 space-x-3.5 rounded">
              <FiShoppingBag />

              <span className="font-medium uppercase">
                Adicionar ao carrinho
              </span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
