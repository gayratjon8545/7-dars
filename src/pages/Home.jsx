import { useFetch } from "../hooks/useFetch";

import ProductList from "../components/ProductList";

function Home() {
  const { todos, isPending, error } = useFetch(
    "https://dummyjson.com/products"
  );
  return (
    <>
      {isPending && (
        <div>
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      {todos && <ProductList todos={todos} />}
    </>
  );
}

export default Home;
