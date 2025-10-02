import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  // Stagger parent
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

 
  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="footer-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="footer-container">
        {/* Info & Newsletter */}
        <motion.div className="ft-info" variants={item}>
          <div className="ft-info-p1">
            <p className="ft-title">
              Health <span className="ft-sign">+</span>
            </p>
            <p className="ft-description">
              Talk to online doctors and get medical advice, online
              prescriptions, refills and medical notes within minutes. On-demand
              healthcare services at your fingertips.
            </p>
          </div>

          <SubscribeNewsletter />
        </motion.div>

        {/* Services List */}
        <motion.div className="ft-list" variants={item}>
          <p className="ft-list-title">Services</p>
          <ul className="ft-list-items">
            <li><a href="#services">Emergency Care</a></li>
            <li><a href="#services">Heart Disease</a></li>
            <li><a href="#services">Dental Care</a></li>
            <li><a href="#services">Prescription</a></li>
            <li><a href="#services">Insights for doctors</a></li>
          </ul>
        </motion.div>

        {/* Legal List */}
        <motion.div className="ft-list" variants={item}>
          <p className="ft-list-title">Legal</p>
          <ul className="ft-list-items">
            <li><Link to={"/legal"}>General Info</Link></li>
            <li><Link to={"/legal"}>Privacy Policy</Link></li>
            <li><Link to={"/legal"}>Terms of Services</Link></li>
            <li><Link to={"/legal"}>Consultations</Link></li>
            <li><Link to={"/legal"}>How it Works</Link></li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div className="ft-list" id="contact" variants={item}>
          <p className="ft-list-title">Talk To Us</p>
        </motion.div>
      </div>

      {/* Copyright + Socials */}
      <motion.div
        className="ft-copyright"
        variants={item}
      >
        <p>© 2025-2028 Health+. All rights reserved.</p>

        <ul className="ft-social-links">
          {["LinkedIn", "Facebook", "Twitter"].map((platform, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.3, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {/* Keep your same <a> and <svg> structure here */}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default Footer;
