"use client";

import { useCreateProduct } from "@/app/services/mutations";
import { useProducts } from "@/app/services/queries";
import { ChangeEvent, useState } from "react";

export default function Product() {
  const [inputValue, setInputValue] = useState("");

  const { data, mutate, isValidating } = useProducts();

  const { trigger, isMutating } = useCreateProduct();

  const handleUpdateInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCreateProduct = async () => {
    // await axiosInstance.post("/products", { title: "new product" });
    // mutate();

    trigger(
      { title: inputValue },
      {
        optimisticData: data && [
          ...data,
          { title: `${inputValue} (optimistic data)` },
        ],
        rollbackOnError: true,
      }
    );
  };

  return (
    <div>
      <p>Products:</p>
      <ul>
        {data?.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      <input
        placeholder="Todo title"
        value={inputValue}
        onChange={handleUpdateInputValue}
      />
      <button
        onClick={handleCreateProduct}
        disabled={isMutating || isValidating}
      >
        {isMutating || isValidating ? "Creating" : "Create Product"}
      </button>
    </div>
  );
}
