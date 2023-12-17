"use client";
import fetcher from "@/app/services/fetcher";
import { usePosts } from "@/app/services/queries";
import useSWR from "swr";

export default function Posts({ pageIndex }: { pageIndex: number }) {
  const { data, error, isLoading } = usePosts(pageIndex);

  //   const { data, error, isLoading } = useSWR('/api/user/123', fetcher)

  // if (error) return <div>failed to load</div>
  // if (isLoading) return <div>loading...</div>

  // return <div>hello {data.name}!</div>

  // we can use this usePosts every where in every components
  // there is only one request which reduces network traffics
  // the data gets updated on user focus or network reconnects
  // switch between tabs or refocus the page

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <ul>
      {data?.map((post) => (
        <li key={post.id}>
          <p>Title: {post.title}</p>
        </li>
      ))}
    </ul>
  );
}
