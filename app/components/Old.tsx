"use client";
import { Todo } from "@/app/types/Todo";
import { useEffect, useState } from "react";

export default function Old() {
  const [todos, setTodos] = useState<Todo[]>();

  useEffect(() => {
    fetch("http://localhost:8080/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  });

  if (!todos) return <p>Loading...</p>;

  // if we want to handle errors, timeouts, retries, refetch, windows focus and many other things related to requests, we must handle them one by one which is so hard to do and maintain
  // and if we want to use this data in another component, we must pass it to children

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
