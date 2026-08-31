import "./TopBar.css";

function TopBar() {
  return (
    <div className="top-bar">
      <p>  Sign up and get 20% off to your first order.{" "}
        <a href="/Signup">Sign Up Now</a>
      </p>

      <button className="top-bar-close" aria-label="Close"> ×</button>
    </div>
  );
}

export default TopBar;