import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";
import { motion, AnimatePresence } from "framer-motion";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  // Variants for staggered animations
  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const statVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.5 },
    }),
  };

  return (
    <div className="section-container">
      <div className="hero-section">
        {/* Text Section */}
        <div className="text-section">
          <motion.p
            className="text-headline"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            ❤️ Health comes first
          </motion.p>

          <motion.h2
            className="text-title"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Find your Doctor and make an Appointments
          </motion.h2>

          <motion.p
            className="text-descritpion"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Talk to online doctors and get medical advice, online prescriptions,
            refills and medical notes within minutes. On-demand healthcare
            services at your fingertips.
          </motion.p>

          <motion.button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </motion.button>

          {/* Stats */}
          <div className="text-stats">
            {[
              { num: "145k+", label: "Receive Patients" },
              { num: "50+", label: "Expert Doctors" },
              { num: "10+", label: "Years of Experience" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-stats-container"
                variants={statVariant}
                initial="hidden"
                animate="visible"
                custom={idx}
                whileHover={{ scale: 1.1 }}
              >
                <p>{stat.num}</p>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Section with floating animation */}
        <div className="hero-image-section">
          <motion.img
            className="hero-image1"
            src={Doctor}
            alt="Doctor"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -15, 0], // floating effect
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: 0,
            }}
          />
        </div>
      </div>

      {/* Scroll-to-top button */}
      <AnimatePresence>
        {goUp && (
          <motion.div
            onClick={scrollToTop}
            className="scroll-up show-scroll"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FontAwesomeIcon icon={faAngleUp} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Hero;
