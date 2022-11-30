import { useMutation, useQueryClient } from "react-query";
import { api } from "@/api/api";

export const useDelete = () => {
  const queryClient = useQueryClient();

  return useMutation((id: string) => api.deleteOneItem(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("carts");
    },
  });
};
