import { Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Brands from './components/Brand/Brands'
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Casual from "./Pages/Casual/Casual";

function App() {
  return (   
    <div>
               <TopBar/> 
              <Navbar/>
              
        <Routes>
         <Route path="/" element={<Home />} />
       <Route path="/casual" element={<Casual />} />
        <Route path="/product/:id" element={<h1>Product Details</h1>} />
      </Routes>


      <div className="footer-wrapper">
      <Newsletter/>
      <Footer/>
      </div>
      </div> 

  );
}

export default App;