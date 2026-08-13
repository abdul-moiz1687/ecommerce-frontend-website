import Hero from "../../components/Hero/Hero";
import Brands from "../../components/Brand/Brands";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import BrowseDressStyle from "../../components/BrowseDressStyle/BrowseDressStyle";
import HappyCustomers from "../../components/HappyCustomers/HappyCustomers";

import { products } from "../../data/products";

import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
 const newArrivals = products.slice(0, 4);
const topSelling = products.slice(4, 8);

  return (
    <>
      <Hero />
      <Brands />

      {/* New Arrivals */}
      <section className="new-arrivals">
        <h2>NEW ARRIVALS</h2>

        <ProductGrid products={newArrivals} />

        <Link to="/casual" className="view-all-btn">
          View All
        </Link>
      </section>

      {/* Top Selling */}
      <section className="top-selling">
        <h2>TOP SELLING</h2>

        <ProductGrid products={topSelling} />

        <Link to="/casual" className="view-all-btn">
          View All
        </Link>
      </section>

      <BrowseDressStyle />
      <HappyCustomers />
    </>
  );
}

export default Home;