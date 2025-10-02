import React, { useState } from "react";
import { customerReviews } from "../Scripts/reviews";
import "../Styles/Reviews.css";
import { motion, AnimatePresence } from "framer-motion";

function Reviews() {
  const reviewsLength = customerReviews.length - 1;
  const [review, setReview] = useState(0);

  const backBtnClick = () => {
    setReview(review <= 0 ? reviewsLength : review - 1);
  };

  const frontBtnClick = () => {
    setReview(review >= reviewsLength ? 0 : review + 1);
  };

  const { name: rName, location: rLocation, message: rMessage } =
    customerReviews[review];

  // Variants for text animation
  const reviewVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

  return (
    <div className="review-section" id="reviews">
      <motion.div
        className="rw-text-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <p className="rw-text-title">
          More over <span className="rw-text-num">1500+ Customers</span>
        </p>

        <p className="rw-text-desc">Don't believe us, Check clients word</p>

        <div className="rw-text-format">
          <span className="rw-text-quote1">''</span>

          {/* AnimatePresence lets us animate review changes */}
          <AnimatePresence mode="wait">
            <motion.span
              key={review}
              className="rw-review"
              variants={reviewVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {rMessage}
            </motion.span>
          </AnimatePresence>

          <span className="rw-text-quote2">''</span>
        </div>

        <div className="rw-authors">
          <AnimatePresence mode="wait">
            <motion.div
              key={rName + rLocation}
              className="rw-names"
              variants={reviewVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <p className="rw-reviewer-name">{rName}</p>
              <p className="rw-reviewer-place">{rLocation}</p>
            </motion.div>
          </AnimatePresence>

          <div className="rw-btns">
            <motion.button
              className="rw-next-btn"
              type="button"
              onClick={backBtnClick}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              ←
            </motion.button>
            <motion.button
              className="rw-next-btn"
              type="button"
              onClick={frontBtnClick}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              →
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Reviews;
