import fetcher from "@/app/services/fetcher";
import { Cart } from "@/app/types/cart";
import { User } from "@/app/types/user";
import { Product } from "@/app/types/product";
import { Todo } from "@/app/types/todo";
import useSWR from "swr";

export function useTodos() {
  // error returned by fetcher
  // if there an ongoing request and no loaded data => isLoading
  // fallback data and previous data are not considered "loaded data"
  // isValidating => if there's a request or revalidation loading
  // mutate => function to mutate the cached data

  // const todosQuery = useSWR("/todos", () => fetcher("/todos"));
  // const todosQuery = useSWR("/todos", url => fetcher(url));
  // const todosQuery = useSWR('/todos', fetcher)
  const { data, error, isLoading, isValidating, mutate } = useSWR<Todo[]>(
    "/todos",
    // fetcher can be omitted if provided globally
    // fetcher,
    {
      // revalidateIfStale: true,
      // revalidateOnMount: false,
      // revalidateOnFocus,
      // revalidateOnReconnect,
      // refreshInterval = 0 by default, other than 0 => polling interval
      // refreshWhenHidden = false by default => when window is invisible
      // errorRetryCount
    }
  );

  // wrong, the arguments and key the same
  // const { data } = useSWR("/todos", (url) => fetchWithToken(url, token));

  return { data, error, isLoading };
}

export function useUser() {
  return useSWR<User>("/user");
}

export function useCart() {
  const { data } = useUser();

  // if the key is null or falsy, the query wont run
  return useSWR<Cart>(data ? "/cart" : null);
}

export function useProducts() {
  return useSWR<Product[]>("/products");
}
