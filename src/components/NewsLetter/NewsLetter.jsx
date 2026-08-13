import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <h2>
          STAY UPTO DATE ABOUT
          <br />
          OUR LATEST OFFERS
        </h2>

        <form className="newsletter-form">
          <div className="newsletter-input">
            <span>✉</span>

            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
            />
          </div>

          <button type="submit">
            Subscribe to Newsletter
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;