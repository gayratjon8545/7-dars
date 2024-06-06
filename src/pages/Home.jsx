import { useFetch } from "../hooks/useFetch";

import ProductList from "../components/ProductList";

function Home() {
  const { data, isPending, error } = useFetch("https://dummyjson.com/products");
  return (
    <>
      {isPending && (
        <div>
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      {data && <ProductList data={data} />}
    </>
  );
}

export default Home;
