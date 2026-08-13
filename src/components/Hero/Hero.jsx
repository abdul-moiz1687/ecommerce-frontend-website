import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>

        <p>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        <button className="hero-btn">Shop Now</button>

        <div className="hero-stats">
          <div>
            <strong>200+</strong>
            <span>International Brands</span>
          </div>

          <div>
            <strong>2,000+</strong>
            <span>High-Quality Products</span>
          </div>

          <div>
            <strong>30,000+</strong>
            <span>Happy Customers</span>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="images/hero.png" alt="Fashion models" />
      </div>
    </section>
  );
}

export default Hero;