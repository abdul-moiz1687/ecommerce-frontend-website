import { Search, ShoppingCart, UserRound, Menu } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-btn" aria-label="Open menu">
          <Menu size={24} />
        </button>

        <a href="/" className="logo">
          SHOP.CO
        </a>

        <div className="nav-links">
          <a href="#">Shop</a>
          <a href="#">On Sale</a>
          <a href="#">New Arrivals</a>
          <a href="#">Brands</a>
        </div>
      </div>

      <div className="navbar-search">
        <Search size={20} />
        <input type="text" placeholder="Search for products..." />
      </div>

      <div className="navbar-actions">
        <button aria-label="Search" className="mobile-search">
          <Search size={22} />
        </button>

        <button aria-label="Cart">
          <ShoppingCart size={22} />
        </button>

        <button aria-label="Account">
          <UserRound size={22} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;