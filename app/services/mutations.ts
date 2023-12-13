import { createProduct } from "@/app/services/api";
import { useProducts } from "@/app/services/queries";
import useSWRMutation from "swr/mutation";

export function useCreateProduct() {
  const { mutate, data } = useProducts();

  return useSWRMutation("/products", createProduct, {
    onError: () => {
      console.error("error");
    },
    onSuccess: () => {
      mutate();
    },
  });
}
