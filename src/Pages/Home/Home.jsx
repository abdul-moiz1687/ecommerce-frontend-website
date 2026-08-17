import Hero from "../../components/Hero/Hero";
import Brands from "../../components/Brand/Brands";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import BrowseDressStyle from "../../components/BrowseDressStyle/BrowseDressStyle";
import HappyCustomers from "../../components/HappyCustomers/HappyCustomers";

import { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
// import { products } from "../../data/products";
import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Failed to load products:", error);
      });
  }, []);

 const newArrivals = products.slice(0, 4);
const topSelling = products.slice(4, 8);

  return (
    <div>
      <Hero />
      <Brands />
      <section className="new-arrivals">
        <h2>NEW ARRIVALS</h2>

        <ProductGrid products={newArrivals} />

        <Link to="/casual" className="view-all-btn">
          View All
        </Link>
      </section>
      <section className="top-selling">
        <h2>TOP SELLING</h2>

        <ProductGrid products={topSelling} />

        <Link to="/casual" className="view-all-btn">
          View All </Link>
      </section>

      <BrowseDressStyle />
      <HappyCustomers />
    </div>
  );
}

export default Home;