"use client";
import { Post } from "@/app/types/post";
import { useEffect, useState } from "react";

export default function Old() {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    fetch("http://localhost:8080/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  });

  if (!posts) return <p>Loading...</p>;

  // if we want to handle errors, timeouts, retries, refetch, windows focus and many other things related to requests, we must handle them one by one which is so hard to do and maintain
  // and if we want to use this data in another component, we must pass it to children

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
