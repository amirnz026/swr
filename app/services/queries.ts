import fetcher from "@/app/fetcher";
import useSWR from "swr";

export function useTodos() {
  // error returned by fetcher
  // if there an ongoing request and no loaded data => isLoading
  // fallback data and previous data are not considered "loaded data"
  // isValidating => if there's a request or revalidation loading
  // mutate => function to mutate the cached data
  const { data, error, isLoading, isValidating, mutate } = useSWR(
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

  return { todos: data, error, isLoading };
}
