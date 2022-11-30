import { useQuery } from "react-query";
import { api } from "@/api/api";

export const useProduct = (page: number, search: string | null) => {
  return useQuery(["Products", page, search], () =>
    api.getProduct(page, search)
  );
};
