import { Link } from "react-router-dom";
import "./ProductsCard.css";

function ProductCard({
  id,
  image,
  title,
  price,
  oldPrice,
  discount,
  rating,
}) {
  return (
    <Link to={`/product/${id}`} className="product-card">
      <div className="product-card-image">
        <img src={image} alt={title} />
      </div>

      <h3>{title}</h3>

      <div className="product-rating">
        <span className="stars">★★★★★</span>
        <span className="rating-number">{rating}/5</span>
      </div>

      <div className="product-price">
        <strong>${price}</strong>

        {oldPrice && <del>${oldPrice}</del>}

        {discount && <span>{discount}</span>}
      </div>
    </Link>
  );
}

export default ProductCard;