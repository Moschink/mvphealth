import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";
import { motion } from "framer-motion";

function About() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const steps = [
    {
      title: "Choose a Specialist",
      description:
        "Find your perfect specialist and book with ease at Health Plus. Expert doctors prioritize your health, offering tailored care.",
    },
    {
      title: "Make a Schedule",
      description:
        "Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being with personalized care.",
    },
    {
      title: "Get Your Solutions",
      description:
        "Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health.",
    },
  ];

  return (
    <div className="about-section" id="about">
      {/* Image Section */}
      <motion.div
        className="about-image-content"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src={Doctor}
          alt="Doctor Group"
          className="about-image1"
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

      {/* Text Section */}
      <div className="about-text-content">
        <motion.h3
          className="about-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true }}
        >
          <span>About Us</span>
        </motion.h3>

        <motion.p
          className="about-description"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true }}
        >
          Welcome to Health Plus, your trusted partner for accessible and
          personalized healthcare. Our expert doctors offer online consultations
          and specialized services, prioritizing your well-being. Join us on
          this journey towards a healthier you.
        </motion.p>

        <motion.h4
          className="about-text-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true }}
        >
          Your Solutions
        </motion.h4>

        {/* Solution Steps */}
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={idx + 3}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, x: 5 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <SolutionStep title={step.title} description={step.description} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default About;
