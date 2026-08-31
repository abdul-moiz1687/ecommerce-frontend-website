import "./TopBar.css";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div className="top-bar">
      <p>  Sign up and get 20% off to your first order.{" "}
       <Link to="/signup">Sign Up Now</Link>
      </p>

      <button className="top-bar-close" aria-label="Close"> ×</button>
    </div>
  );
}

export default TopBar;