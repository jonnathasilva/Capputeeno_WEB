import { useQuery } from "react-query";
import { api } from "@/api/api";

export const useProductById = (id: string | undefined) => {
  return useQuery(["productById"], () => api.getProductById(id));
};
