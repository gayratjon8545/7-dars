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
        <div className="card card-compact mb-6 mt-6 w-max text-center site-container bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="font-bold text-4xl site-container">{data.title}</h2>
            <p className="text-xl font-normal">
              <p className="text-xl font-normal"> Brand: {data.brand}</p>
              <p className="text-xl font-normal">Price : ${data.price}</p>
              AvailabilityStatus: {data.availabilityStatus}
            </p>

            <p className="card-normal w-4/6 mb-2 site-container">
              {data.description}
            </p>
            <figure>
              <img src={data.thumbnail} alt="Shoes" />
            </figure>
            <div className="flex mt-5 mb-5 w-32 gap-5 items-center site-container">
              <button className="btn w-14 h-14 btn-secondary">+</button>
              <p>{0}</p>
              <button className="btn w-14 h-14 btn-secondary">-</button>
            </div>
            <button className="btn btn-primary items-center">Add shop</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
