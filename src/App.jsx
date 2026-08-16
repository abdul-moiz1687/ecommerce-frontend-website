import {  Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import Navbar from "./components/Navbar/Navbar";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";

import Home from "./Pages/Home/Home";
import Casual from "./Pages/Casual/Casual";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <div>
        <TopBar />
            <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/casual" element={<Casual />} />
       <Route path="/product/:id"
  element={<ProductDetails />}/>
  <Route path="/cart" element={<Cart />} />
      </Routes>

      <div className="footer-wrapper">
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
}

export default App;