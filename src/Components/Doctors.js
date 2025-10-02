import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Doctors.css";
import { motion } from "framer-motion";

function Doctors() {
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };


  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const doctors = [
    {
      img: profile1,
      name: "Dr. Kathryn Murphy",
      title: "General Surgeons",
      stars: "4.9",
      reviews: "1800",
    },
    {
      img: profile2,
      name: "Dr. Jacob Jones",
      title: "Hematologists",
      stars: "4.8",
      reviews: "700",
    },
    {
      img: profile3,
      name: "Dr. Jenny Wilson",
      title: "Endocrinologists",
      stars: "4.7",
      reviews: "450",
    },
    {
      img: profile4,
      name: "Dr. Albert Flores",
      title: "Hematologists",
      stars: "4.8",
      reviews: "500",
    },
  ];

  return (
    <div className="doctor-section" id="doctors">
      {/* Title & Description */}
      <motion.div
        className="dt-title-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="dt-title">
          <span>Meet Our Doctors</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at Health Plus. Trust in their
          knowledge and experience to lead you towards a healthier and happier
          life.
        </p>
      </motion.div>

      {/* Doctors Cards */}
      <motion.div
        className="dt-cards-content"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {doctors.map((doc, i) => (
          <motion.div
            key={i}
            variants={cardVariant}
            whileHover={{
              scale: 1.05,
              y: -10,
              boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <DoctorCard
              img={doc.img}
              name={doc.name}
              title={doc.title}
              stars={doc.stars}
              reviews={doc.reviews}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Doctors;
