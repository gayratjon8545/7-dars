import { FaTrash } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";

function CartItem({ product }) {
  const {
    deleteProduct,
    decreaseAmount,
    increaseAmount,
    ayrAmount,
    qoshAmount,
  } = useGlobalContext();
  const [amount, setAmout] = useState(0);
  useEffect(() => {}, [amount]);

  return (
    <li className="grid grid-cols-3 items-center site-container">
      <img src={product.thumbnail} alt="" className="w-20 h-20" />

      <h3>{product.title}</h3>

      <div className="flex items-center gap-3 ">
        <div>
          <button onClick={() => deleteProduct(product.id)}>
            <FaTrash />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button
            className="btn w-10 h-10"
            onClick={() => increaseAmount(product.id)}
          >
            +
          </button>
          <p>{product.amount}</p>
          <button
            className="btn w-10 h-10"
            onClick={() => decreaseAmount(product.id)}
          >
            -
          </button>
        </div>
        <div className="ml-5">
          <p>{product.price}$</p>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
