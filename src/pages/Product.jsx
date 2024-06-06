import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Product() {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    "https://dummyjson.com/products/" + id
  );

  return (
    <>
      {data && (
        <div className="mb-6 mt-6 ">
          <div className="card card-compact w-3/4 bg-base-100 shadow-xl">
            <figure>
              <img src={data.thumbnail} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="font-bold text-3xl ">{data.title}</h2>
              <p className="text-xl font-semibold">Price : ${data.price}</p>
              <p className="text-xl font-semibold"> Brand: {data.brand}</p>
              <p className="text-xl font-semibold">
                AvailabilityStatus: {data.availabilityStatus}
              </p>
              <p className="text-xl ">{data.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
