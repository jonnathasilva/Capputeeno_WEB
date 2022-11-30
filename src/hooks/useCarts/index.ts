import { useQuery } from "react-query";
import { api } from "@/api/api";

export const useCarts = () => {
  return useQuery(["carts"], () => api.cartAll());
};
