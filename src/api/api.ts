import axios from "axios";

import { Product, Item, Cart } from "@/models";

const getProduct = async (
  currentPage: number,
  searchParams: string | null
): Promise<Product> => {
  const res = await axios<Product>({
    method: "get",
    baseURL: import.meta.env.VITE_URL,
    params: { offset: currentPage, q: searchParams },
  });

  return res.data;
};

const getProductById = async (id: string | undefined): Promise<Item> => {
  const res = await axios<Item>({
    method: "get",
    baseURL: import.meta.env.VITE_URL,
    url: `/product/${id}`,
  });

  return res.data;
};

const addCart = async (id: string | undefined): Promise<Cart> => {
  const res = await axios<Cart>({
    method: "post",
    baseURL: import.meta.env.VITE_URL,
    url: "/new",
    data: { id },
  });

  return res.data;
};

const cartAll = async (): Promise<Cart> => {
  const res = await axios<Cart>({
    method: "get",
    baseURL: import.meta.env.VITE_URL,
    url: "/cartall",
  });

  return res.data;
};

const deleteOneItem = async (id: string) => {
  const res = await axios({
    method: "delete",
    baseURL: import.meta.env.VITE_URL,
    url: "/delete",
    data: { id },
  });
};

export const api = {
  getProduct,
  getProductById,
  addCart,
  cartAll,
  deleteOneItem,
};
