import { Cart } from "@/app/types/cart";
import { User } from "@/app/types/user";
import { Product } from "@/app/types/product";
import useSWR from "swr";
import { Post } from "@/app/types/post";
import useSWRInfinite from "swr/infinite";
import { Todo } from "@/app/types/todo";
import { logger } from "@/app/utils/logger";

export function usePosts(pageIndex: number) {
  // error returned by fetcher
  // if there an ongoing request and no loaded data => isLoading
  // fallback data and previous data are not considered "loaded data"
  // isValidating => if there's a request or revalidation loading
  // mutate => function to mutate the cached data

  // const postsQuery = useSWR("/posts", () => fetcher("/posts"));
  // const postsQuery = useSWR("/posts", url => fetcher(url));
  // const postsQuery = useSWR('/posts', fetcher)
  const { data, error, isLoading, isValidating, mutate } = useSWR<Post[]>(
    `/posts?_limit=3&_page=${pageIndex}`,
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
  // const { data } = useSWR("/posts", (url) => fetchWithToken(url, token));
  // devtools

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
  return useSWR<Product[]>("/products", { use: [logger] });
}

export function useTodos() {
  const getKey = (pageIndex: number, previousPageData: Todo[]) => {
    if (previousPageData && !previousPageData.length) return null;
    return `/todos?_page=${pageIndex}&_limit=3`;
  };
  return useSWRInfinite<Todo[]>(getKey);
}
