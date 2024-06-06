import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Product() {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    "https://dummyjson.com/products/" + id
  );
  console.log(id);
  console.log(data);
  console.log(isPending);
  console.log(error);

  return;
}

export default Product;
