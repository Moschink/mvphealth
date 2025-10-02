import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  return (
    <motion.div
      className="navbar-section"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <motion.h1
        className="navbar-title"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Link to="/">
          Health <span className="navbar-sign">+</span>
        </Link>
      </motion.h1>

      {/* Desktop */}
      <ul className="navbar-items">
        {["Home", "Services", "About", "Reviews", "Doctors"].map((item, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.1, color: "#38bdf8" }}
          >
            {item === "Home" ? (
              <Link to="/" className="navbar-links">
                {item}
              </Link>
            ) : (
              <a href={`#${item.toLowerCase()}`} className="navbar-links">
                {item}
              </a>
            )}
          </motion.li>
        ))}
      </ul>

      {/* Chat button */}
      <motion.button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleChatBtnClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FontAwesomeIcon icon={faCommentDots} /> Live Chat
      </motion.button>

      {/* Mobile Nav */}
      <AnimatePresence>
        {nav && (
          <motion.div
            key="mobileNav"
            className="mobile-navbar open-nav"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div onClick={openNav} className="mobile-navbar-close">
              <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
            </div>

            <ul className="mobile-navbar-links">
              {["Home", "Services", "About", "Reviews", "Doctors", "Contact"].map(
                (item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {item === "Home" ? (
                      <Link onClick={openNav} to="/">
                        {item}
                      </Link>
                    ) : (
                      <a onClick={openNav} href={`#${item.toLowerCase()}`}>
                        {item}
                      </a>
                    )}
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hamburger */}
      <motion.div
        className="mobile-nav"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <FontAwesomeIcon icon={faBars} onClick={openNav} className="hamb-icon" />
      </motion.div>
    </motion.div>
  );
}

export default Navbar;
