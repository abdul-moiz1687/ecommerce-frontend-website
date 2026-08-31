import { useState } from "react";
import { Search, ShoppingCart, UserRound, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

function Navbar() {
  const { cartCount } = useCart();
   const { user, logout } = useAuth();
      const [accountOpen, setAccountOpen] = useState(false);
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

{/* ACCOUNT */}
<div className="account-area">

  {user ? (
    <>
      <button
        className="account-link"
        aria-label="Account"
        onClick={() => setAccountOpen(!accountOpen)}
      >
        <span className="user-circle">
          {user.name.charAt(0).toUpperCase()}
        </span>
      </button>

      {accountOpen && (
        <div className="account-menu">
          <Link
            to="/signup"
            onClick={() => setAccountOpen(false)}
          >
            Create Account
          </Link>

          <Link
            to="/login"
            onClick={() => setAccountOpen(false)}
          >
            Login
          </Link>

          <button
            className="logout-btn"
            onClick={() => {
              logout();
              setAccountOpen(false);
            }}
          >
            Logout
          </button>
        </div>
      )}
    </>
  ) : (
    <Link
      to="/signup"
      className="account-link"
      aria-label="Create Account"
    >
      <UserRound size={22} />
    </Link>
  )}

</div>
      
      </div>
    </nav>
  );
}

export default Navbar;