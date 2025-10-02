import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";
import { motion } from "framer-motion";

function Info() {
  // Animation variants for cards
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3, // stagger
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const services = [
    {
      title: "Emergency Care",
      description:
        "Our Emergency Care service is designed to be your reliable support in critical situations. Whether it's a sudden illness, injury, or any medical concern that requires immediate attention, our team of dedicated healthcare professionals is available 24/7 to provide prompt and efficient care.",
      icon: faTruckMedical,
    },
    {
      title: "Heart Disease",
      description:
        "Our team of experienced cardiologists and medical experts use state-of-the-art technology to assess your cardiovascular health and design personalized treatment plans. From comprehensive screenings to advanced interventions, we are committed to helping you maintain a healthy heart and lead a fulfilling life.",
      icon: faHeartPulse,
    },
    {
      title: "Dental Care",
      description:
        "Smile with confidence as our Dental Care services cater to all your oral health needs. Our skilled dentists provide a wide range of treatments, from routine check-ups and cleanings to cosmetic procedures and restorative treatments.",
      icon: faTooth,
    },
  ];

  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p>
      </div>

      <div className="info-cards-content">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={idx}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.97 }}
          >
            <InformationCard
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Info;
