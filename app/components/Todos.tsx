"use client";
import fetcher from "@/app/services/fetcher";
import { useTodos } from "@/app/services/queries";
import useSWR from "swr";

export default function Todos() {
  //   const { data, error, isLoading } = useSWR('/api/user/123', fetcher)

  // if (error) return <div>failed to load</div>
  // if (isLoading) return <div>loading...</div>

  // return <div>hello {data.name}!</div>

  const { error, isLoading, todos } = useTodos();
  // we can use this useTodos every where in every components
  // there is only one request which reduces network traffics
  // the data gets updated on user focus or network reconnects
  // switch between tabs or refocus the page

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return <p>{JSON.stringify(todos)}</p>;
}
