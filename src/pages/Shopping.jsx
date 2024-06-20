import { GlobalContext } from "../context/GlobalContext";
import { useGlobalContext } from "../hooks/useGlobalContext";
import CartItem from "../components/CartItem";

function Shopping() {
  const { total, products, deleteProduct } = useGlobalContext();
  return (
    <div className="site-container">
      <ul>
        {products.length > 0 &&
          products.map((product) => {
            return <CartItem key={product.id} product={product} />;
          })}
      </ul>
    </div>
  );
}

export default Shopping;
