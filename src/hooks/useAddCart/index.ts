import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "react-query";
import { api } from "@/api/api";

export const useAddCart = (id: string | undefined) => {
  const client = useQueryClient();

  return useMutation(() => api.addCart(id), {
    onSuccess: () => {
      client.invalidateQueries(["carts"]);
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });
};
