"use client";
import { usePosts } from "@/app/services/queries";

export default function Posts({ pageIndex }: { pageIndex: number }) {
  const { data } = usePosts(pageIndex);
  return (
    <div>
      {data?.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
