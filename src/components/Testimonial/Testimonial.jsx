import React from "react";
import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../animation/animate";
import { Box, Container, IconButton, Typography, useMediaQuery } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Man from "../../assets/man.png"
import Women from "../../assets/women.png"
import "./Testimonial.css";

const TestimonialData = [
  {
    id: 1,
    name: "Mohan kumar",
    designation: "Premium Client",
    img: Man,
    text: "Tvashta Interior exceeded all my expectations. The level of sophistication they brought to my penthouse is unparalleled. A truly beautiful and seamless experience!",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Ramesh Kumar",
    designation: "Homeowner",
    img: Man,
    text: "The team transformed our living room into a space that feels modern yet cozy. Their attention to detail was amazing!",
    delay: 0.3,
  },
  {
    id: 3,
    name: "Priya Sharma",
    designation: "Apartment Owner",
    img: Women,
    text: "Our kitchen renovation was flawless. The designs were practical yet stylish, and everything was delivered on time.",
    delay: 0.4,
  },
  {
    id: 4,
    name: "Vishwanath Iyer",
    designation: "Villa Owner",
    img: Man,
    text: "They brought elegance and functionality to our villa. Their creative approach and professionalism were outstanding.",
    delay: 0.5,
  },
  {
    id: 5,
    name: "Lakshmi Narayan",
    designation: "Homeowner",
    img: Man,
    text: "We wanted a unique design for our bedroom, and they delivered exactly that. Absolutely love their work!",
    delay: 0.6,
  },
];


const Testimonial = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  const scrollLeft = () => {
    document.getElementById("testimonialScroll").scrollLeft -= 380;
  };

  const scrollRight = () => {
    document.getElementById("testimonialScroll").scrollLeft += 380;
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <motion.h2
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
        >
          Words From Our Customers
        </motion.h2>
        <motion.p
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
        >
          Bring your dream home to life with one-on-one design help & hand-picked products
        </motion.p>
      </div>

      <div className="testimonial-slider-container">
        {!isMobile && (
          <>
            <button className="nav-button prev" onClick={scrollLeft}>
              <ChevronLeft />
            </button>
            <button className="nav-button next" onClick={scrollRight}>
              <ChevronRight />
            </button>
          </>
        )}

        <Container>
          <div id="testimonialScroll" className="testimonial-scroll-area">
            {TestimonialData.map((card) => (
              <motion.div
                key={card.id}
                className="testimonial-card"
                variants={SlideLeft(card.delay)}
                initial="initial"
                whileInView="animate"
              >
                <div className="card-top">
                  <div className="avatar-wrapper">
                    <img src={card.img} alt={card.name} />
                  </div>
                  <div className="info-content">
                    <h4>{card.name}</h4>
                    <span>{card.designation}</span>
                    <div className="star-rating">
                      ★★★★★
                    </div>
                  </div>
                </div>

                <div className="divider"></div>

                <p className="testimonial-text">
                  "{card.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Testimonial;
