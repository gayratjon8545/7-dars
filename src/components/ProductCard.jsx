import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const {
    title,
    id,
    brand,
    availabilityStatus,
    description,
    category,
    thumbnail,
    price,
  } = product;
  return (
    <Link className="block w-full" to={`/product/${id}`}>
      <div className="block w-full">
        <br />
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body ">
            <h2 className="card-title">{title}</h2>

            <p className="font-bold">${price}</p>
            <p className="font-semibold">
              <span className="font-bold">Category:</span> {category}
            </p>
            <p className="font-semibold">
              <span className="font-bold">Brand: </span>
              {brand}
            </p>
            <p className="font-semibold">
              <span className="font-bold">AvailabilityStatus: </span>
              {availabilityStatus}
            </p>
            <p className="">{description}</p>
          </div>
          <figure>
            <img src={thumbnail} alt="Shoes" />
          </figure>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
