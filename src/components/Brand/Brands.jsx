import "./Brand.css";

const brands = ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"];

function BrandStrip() {
  return (
    <section className="brand-strip">
      {brands.map((brand) => (
        <span key={brand}>{brand}</span>
      ))}
    </section>
  );
}

export default BrandStrip;