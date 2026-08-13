import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          oldPrice={product.oldPrice}
          discount={product.discount}
          rating={product.rating}
        />
      ))}
    </div>
  );
}

export default ProductGrid;