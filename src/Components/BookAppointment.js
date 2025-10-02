import React from "react";
import Doctor from "../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  // Reusable fade-up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const checklist = [
    "Best Professional Doctors",
    "Emergency Care",
    "24/7 Support Live Chat",
    "Enrollment Easy and Quick",
  ];

  return (
    <div className="ba-section">
      {/* Doctor Image */}
      <motion.div
        className="ba-image-content"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src={Doctor}
          alt="Doctor Group"
          className="ba-image1"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </motion.div>

      {/* Text Content */}
      <div className="ba-text-content">
        <motion.h3
          className="ba-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true }}
        >
          <span>Why Choose Health</span>
        </motion.h3>

        <motion.p
          className="ba-description"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true }}
        >
          Discover the reasons to choose Health Plus for your healthcare needs.
          Experience expert care, convenience, and personalized solutions,
          making your well-being our top priority. Join us on a journey to
          better health and a happier life.
        </motion.p>

        {/* Checklist */}
        {checklist.map((item, idx) => (
          <motion.p
            key={idx}
            className={`ba-checks ${
              idx === 0 ? "ba-check-first" : idx === checklist.length - 1 ? "ba-check-last" : ""
            }`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={idx + 2}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, x: 5 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> {item}
          </motion.p>
        ))}

        {/* Button */}
        <motion.button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={checklist.length + 2}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
        </motion.button>
      </div>
    </div>
  );
}

export default BookAppointment;
