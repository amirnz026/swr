import fetcher from "@/app/fetcher";
import useSWR from "swr";

export function useTodos() {
  const { data, error, isLoading } = useSWR("/todos", fetcher);

  return { todos: data, error, isLoading };
}
