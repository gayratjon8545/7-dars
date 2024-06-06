import ProductCard from "./ProductCard";

function ProductList({ todos }) {
  return (
    <div>
      {todos.products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductList;
