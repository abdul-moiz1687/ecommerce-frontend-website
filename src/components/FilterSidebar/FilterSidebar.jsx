import "./FilterSidebar.css";

const categories = ["T-shirts", "Shirts", "Jeans", "Shorts"];
const sizes = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large"];

const colors = [
  { name: "Green", value: "#16b84e" },
  { name: "Red", value: "#ff2d2d" },
  { name: "Yellow", value: "#ffd600" },
  { name: "Orange", value: "#ff7a00" },
  { name: "Blue", value: "#247cff" },
  { name: "Purple", value: "#7225e8" },
  { name: "Pink", value: "#ef1bc7" },
  { name: "White", value: "#ffffff" },
  { name: "Black", value: "#111111" },
];

const dressStyles = ["Casual", "Formal", "Party", "Gym"];

function FilterSidebar({
   selectedCategory,
   setSelectedCategory,
  maxPrice,
  setMaxPrice,
  selectedSize,
   setSelectedSize,
  selectedColor,
  setSelectedColor,
     selectedDressStyle,
      setSelectedDressStyle,
   resetFilters,
}) {
  return (
       <aside className="filter-sidebar">
      <div className="filter-header">
        <h3>Filters</h3>
               <span>☷</span>
      </div>

      <div className="filter-group">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-title ${
              selectedCategory === category ? "selected" : ""
            }`}
            onClick={() =>
              setSelectedCategory(
                selectedCategory === category ? "" : category
              )
            }  >
            {category}
            <span>›</span>   </button>
        ))}
      </div>

      <div className="filter-section">
        <div className="filter-section-title">
          <strong>Price</strong>
          <span>⌃</span>
        </div>

        <input
          type="range"
          min="50"
          max="300"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />

        <div className="price-values">
          <span>$50</span>
          <span>${maxPrice}</span>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-section-title">
          <strong>Colors</strong>
          <span>⌃</span>
        </div>

        <div className="color-options">
          {colors.map((color) => (
            <button
              key={color.name}
              className={`color-button ${
                selectedColor === color.value ? "active" : ""
              }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
              onClick={() =>
                setSelectedColor(
                  selectedColor === color.value ? "" : color.value
                )  }/>
      ))}
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-section-title">
          <strong>Size</strong>
          <span>⌃</span>
        </div>

        <div className="size-options">
          {sizes.map((size) => (
            <button
              key={size}
              className={selectedSize === size ? "active" : ""}
              onClick={() =>
                setSelectedSize(selectedSize === size ? "" : size)
              }
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-section-title">
          <strong>Dress Style</strong>
          <span>⌃</span>
        </div>

        {dressStyles.map((style) => (
          <button
        key={style}
            className={`filter-title ${
       selectedDressStyle === style ? "selected" : ""
        }`}
            onClick={() =>
        setSelectedDressStyle(
                selectedDressStyle === style ? "" : style
              )
            }  >
            {style}
            <span>›</span>
          </button>  ))}
      </div>

      <button className="apply-filter-btn" onClick={resetFilters}>
        Reset Filter
      </button>
    </aside>
  );
}
export default FilterSidebar;