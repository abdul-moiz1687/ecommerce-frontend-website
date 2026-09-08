import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductById, getProducts } from "../../services/productService";
import { reviews } from "../../data/reviews";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useCart } from "../../context/CartContext";

import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("reviews");
  const [visibleReviews, setVisibleReviews] = useState(6);
  const [selectedImage, setSelectedImage] = useState(null);

  const { addToCart } = useCart();

  useEffect(() => {
    getProductById(id)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Failed to load product:", error);
        setProduct(null);
      });

    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Failed to load products:", error);
      });
  }, [id]);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes?.[2] || product.sizes?.[0] || "");
      setSelectedColor(product.colors?.[0] || "");
      setSelectedImage(product.image || "");
    }
  }, [product]);

  useEffect(() => {
  getProductById(id)
    .then((data) => {
      setProduct(data);
    })
    .catch((error) => {
      console.error("Failed to load product:", error);
      setProduct(null);
    });

  getProducts()
    .then((data) => {
      setProducts(data);
    })
    .catch((error) => {
      console.error("Failed to load products:", error);
    });
}, [id]);

useEffect(() => {
  if (product) {
    setSelectedSize(product.sizes?.[2] || product.sizes?.[0] || "");
    setSelectedColor(product.colors?.[0] || "");
    setSelectedImage(product.image || "");
  }
}, [product]);

useEffect(() => {
  if (!product) return;

  document.title = `${product.title} | SHOP.CO`;

  const description =
    `${product.title} from SHOP.CO. Shop this stylish ${product.category || "fashion"} item with quality design, available in multiple sizes and colors.`;

  let metaDescription = document.querySelector(
    'meta[name="description"]'
  );

  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    document.head.appendChild(metaDescription);
  }

  metaDescription.setAttribute(
    "content",
    description
  );

  let canonical = document.querySelector(
    'link[rel="canonical"]'
  );

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute(
    "href",
    window.location.href
  );
}, [product]);

  if (!product) {
    return (
      <main className="product-not-found">
        <h1>Loading product...</h1>
      </main>
    );
  }

  const productReviews = reviews.slice(0, visibleReviews);

  const relatedProducts = products
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleLoadMore = () => {
    setVisibleReviews((prev) => prev + 3);
  };

  return (
    <main className="product-details-page">
      <div className="product-breadcrumb">
        Home <span>›</span> Shop <span>›</span> Men{" "}
        <span>›</span> T-shirts
      </div>

      <section className="product-main">
        <div className="product-gallery">
          <div className="product-thumbnails">
            {[product.image, product.image, product.image].map(
              (image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${
                    selectedImage === image && index === 0
                      ? "active"
                      : ""
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                  />
                </button>
              )
            )}
          </div>

          <div className="product-main-image">
           <img
  src={selectedImage || product.image}
  alt={product.title}
/>
          </div>
        </div>

        <div className="product-info">
          <h1>{product.title}</h1>

          <div className="product-rating">
            <span className="stars">★★★★★</span>
            <span>{product.rating}/5</span>
          </div>

          <div className="detail-price">
            <strong>${product.price}</strong>

            {product.oldPrice && <del>${product.oldPrice}</del>}

            {product.discount && <span>{product.discount}</span>}
          </div>

          <p className="product-description">
  {product.description ||
    `${product.title} is designed for everyday comfort and style. Explore its available colors, sizes and modern design.`}
</p>

          <div className="product-option">
            <h3>Select Colors</h3>

            <div className="detail-colors">
              {product.colors?.map((color) => (
                <button
                  key={color}
                  className={`detail-color ${
                    selectedColor === color ? "selected" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                  aria-label={`Select color ${color}`}
                />
              ))}
            </div>
          </div>

          <div className="product-option">
            <h3>Choose Size</h3>

            <div className="detail-sizes">
              {product.sizes?.map((size) => (
                <button
                  key={size}
                  className={selectedSize === size ? "selected" : ""}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="product-actions">
            <div className="quantity-control">
              <button onClick={decreaseQuantity}>−</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>

            <button
              className="add-cart-btn"
              onClick={() =>
                addToCart(
                  product,
                  quantity,
                  selectedSize,
                  selectedColor
                )
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      <section className="product-tabs">
        <div className="tabs-header">
          <button
            className={activeTab === "details" ? "active" : ""}
            onClick={() => setActiveTab("details")}
          >
            Product Details
          </button>

          <button
            className={activeTab === "reviews" ? "active" : ""}
            onClick={() => setActiveTab("reviews")}
          >
            Rating & Reviews
          </button>

          <button
            className={activeTab === "faq" ? "active" : ""}
            onClick={() => setActiveTab("faq")}
          >
            FAQs
          </button>
        </div>

        {activeTab === "details" && (
          <div className="tab-content">
            <h2>Product Details</h2>

          <p className="product-description">
  {product.description ||
    `${product.title} is designed for everyday comfort and style. Explore its available colors, sizes and modern design.`}
</p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="reviews-content">
            <div className="reviews-heading">
              <div>
                <h2>
                  All Reviews <span>({reviews.length})</span>
                </h2>
              </div>

              <div className="review-actions">
                <button>Sort</button>
                <button>Latest⌄</button>
                <button className="write-review-btn">
                  Write a Review
                </button>
              </div>
            </div>

            <div className="product-reviews-grid">
              {productReviews.map((review) => (
                <article
                  className="product-review-card"
                  key={review.id}
                >
                  <div className="review-stars">
                    {"★".repeat(review.rating)}
                  </div>

                  <h3>
                    {review.name}
                    <span>✓</span>
                  </h3>

                  <p>{review.text}</p>

                  <small>{review.date}</small>
                </article>
              ))}
            </div>

            {visibleReviews < reviews.length && (
              <button
                className="load-more-btn"
                onClick={handleLoadMore}
              >
                Load More Reviews
              </button>
            )}
          </div>
        )}

        {activeTab === "faq" && (
          <div className="tab-content">
            <h2>Frequently Asked Questions</h2>

            <div className="faq-item">
              <strong>What sizes are available?</strong>
              <p>
                Sizes depend on the selected product and are shown
                above.
              </p>
            </div>

            <div className="faq-item">
              <strong>Can I return the product?</strong>
              <p>
                Please check the store return policy for details.
              </p>
            </div>
          </div>
        )}
      </section>

      <section className="related-products">
        <h2>YOU MIGHT ALSO LIKE</h2>

        <div className="related-grid">
          {relatedProducts.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              oldPrice={item.oldPrice}
              discount={item.discount}
              rating={item.rating}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;