import { useMemo, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import { products } from "../../data/products";

import "./Casual.css";

function Casual() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState(300);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedDressStyle, setSelectedDressStyle] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    result = result.filter((product) => product.price <= maxPrice);

    if (selectedSize) {
      result = result.filter((product) =>
        product.sizes?.includes(selectedSize)
      );
    }

    if (selectedColor) {
      result = result.filter((product) =>
        product.colors?.includes(selectedColor)
      );
    }

    if (selectedDressStyle) {
      result = result.filter(
        (product) => product.dressStyle === selectedDressStyle
      );
    }

    if (sortBy === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [
    selectedCategory,
    maxPrice,
    selectedSize,
    selectedColor,
    selectedDressStyle,
    sortBy,
  ]);

  const resetFilters = () => {
    setSelectedCategory("");
    setMaxPrice(300);
    setSelectedSize("");
    setSelectedColor("");
    setSelectedDressStyle("");
    setSortBy("popular");
  };

  return (
    <main className="casual-page">
      <div className="breadcrumb">
        Home <span>›</span> Casual
      </div>

      <div className="casual-layout">
        <FilterSidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedDressStyle={selectedDressStyle}
          setSelectedDressStyle={setSelectedDressStyle}
          resetFilters={resetFilters}
        />

        <section className="casual-content">
          <div className="casual-heading">
            <div>
              <h1>Casual</h1>
              <p>Showing {filteredProducts.length} Products</p>
            </div>

            <div className="sort-area">
              <span>Sort by</span>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popular">Most Popular</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          <div className="casual-grid">
            {filteredProducts.map((product) => (
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

          {filteredProducts.length === 0 && (
            <div className="no-products">
              No products found.
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default Casual;