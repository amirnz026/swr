import Cart from "@/app/components/Cart";
import Old from "@/app/components/Old";
import Product from "@/app/components/Product";
import Todos from "@/app/components/Todos";

export default function Home() {
  return (
    <>
      <Old />
      <br />
      <Todos />
      <br />
      <Cart />
      <br />
      <Product />
    </>
  );
}
