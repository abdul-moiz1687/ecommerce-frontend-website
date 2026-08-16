import { useState } from "react";
import { reviews } from "../../data/reviews";
import "./HappyCustomers.css";

function HappyCustomers() {
     const [currentIndex, setCurrentIndex] = useState(0);

  const nextReviews = () => {
    setCurrentIndex((prev) => {
      if (prev + 3 >= reviews.length) {
        return 0;
  }

      return prev + 1;
    });
  };

  const previousReviews = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return reviews.length - 3;
     }

   return prev - 1;
    });
  };

  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length],
  ];

  return (
    <section className="happy-customers">
      <div className="happy-customers-header">
        <h2>OUR HAPPY CUSTOMERS</h2>

        <div className="review-arrows">
          <button
            onClick={previousReviews}
            aria-label="Previous reviews"  >
            ←   </button>

          <button
            onClick={nextReviews}
            aria-label="Next reviews"  >
            →   </button>
        </div>
      </div>

      <div className="reviews-wrapper">
        <div className="reviews-track">
    {visibleReviews.map((review) => (
            <article className="review-card" key={review.id}>
        <div className="review-stars">
                {"★".repeat(review.rating)}
          </div>

              <div className="review-name">
       <strong>{review.name}</strong>
                <span>✓</span>
          </div>

           <p>{review.text}</p>
       <small>{review.date}</small>
         </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HappyCustomers;