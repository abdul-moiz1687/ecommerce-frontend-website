import { Search, ShoppingCart, UserRound, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const { cartCount } = useCart();
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-btn" aria-label="Open menu">
          <Menu size={24} />
        </button>

             <Link to="/" className="logo">
          SHOP.CO
        </Link>

        <div className="nav-links">
          <Link to="#">Shop</Link>
             <Link to="#">On Sale</Link>
          <Link to="#">New Arrivals</Link>
          <Link to="#">Brands</Link>
        </div>
      </div>

      <div className="navbar-search">
        <Search size={20} />
        <input type="text" placeholder="Search for products..." />
      </div>

       <div className="navbar-actions">
        <Link to="/cart" className="cart-link" aria-label="Cart">
          <i className="fa-solid fa-cart-shopping"></i>

            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span> )}
        </Link>

        <button aria-label="Account">
          <UserRound size={22} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;