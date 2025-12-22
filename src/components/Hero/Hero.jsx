import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import { Helmet } from "react-helmet-async";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Image Imports
import Img1 from "../../assets/gallery/livingarea-1.png";
import Img2 from "../../assets/gallery/bedroom-1.webp";
import Img3 from "../../assets/gallery/kitchen-1.jpeg";
import Img4 from "../../assets/gallery/storage-3.png";
import Img5 from "../../assets/gallery/bedroom-2.webp";
import Img6 from "../../assets/gallery/livingarea-4.png";

const slides = [
  {
    id: 1,
    img: Img1,
    title: "Elegant Living Spaces",
    subtitle: "Designed for comfort and style",
  },
  {
    id: 2,
    img: Img2,
    title: "Cozy & Modern Bedrooms",
    subtitle: "Your personal sanctuary tailored to you",
  },
  {
    id: 3,
    img: Img3,
    title: "Functional Modular Kitchens",
    subtitle: "The heart of your home, reimagined",
  },
  {
    id: 4,
    img: Img4,
    title: "Smart Storage Solutions",
    subtitle: "Maximize space with elegant utility",
  },
  {
    id: 5,
    img: Img5,
    title: "Dreamy Bedroom Designs",
    subtitle: "Experience luxury in every detail",
  },
  {
    id: 6,
    img: Img6,
    title: "Luxury Living Rooms",
    subtitle: "Bring home beautiful interiors that fit your budget",
  },
];

const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

import ContactModal from "../ContactModal/ContactModal";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // ... existing timer logic ...
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  // ... (keeping handleNext, handlePrev, and variants same) ...

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const slideVariants = {
    initial: { x: "100%", opacity: 0, scale: 1.2 },
    animate: { x: 0, opacity: 1, scale: 1 },
    exit: { x: "-100%", opacity: 0, scale: 1 },
  };

  const textVariants = {
    initial: { y: -50, opacity: 0, filter: "blur(10px)" },
    animate: { y: 0, opacity: 1, filter: "blur(0px)" },
    exit: { y: 20, opacity: 0, filter: "blur(10px)" },
  };

  return (
    <>
      <Helmet>
        <title>Tvashta Interior - {slides[currentSlide].title}</title>
        <meta
          name="description"
          content={`Explore our ${slides[currentSlide].title}. ${slides[currentSlide].subtitle} with Tvashta Interior.`}
        />
      </Helmet>

      <ContactModal open={isModalOpen} setOpen={setIsModalOpen} />

      <Box
        // ... (keeping Box props same) ...
        sx={{
          position: "relative",
          height: "100vh",
          minHeight: 600,
          width: "100vw",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
        }}
      >
        {/* ... (keeping AnimatePresence and background Box and buttons same) ... */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={slides[currentSlide].id}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${slides[currentSlide].img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 0,
            }}
          />
        </AnimatePresence>

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%)",
            zIndex: 1,
          }}
        />

        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: { xs: 10, md: 40 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 100,
            color: "#fff",
            backgroundColor: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.3)",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.3)",
              color: "#fff",
            },
            width: 50,
            height: 50,
          }}
        >
          <ChevronLeftIcon fontSize="large" />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: { xs: 10, md: 40 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 100,
            color: "#fff",
            backgroundColor: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.3)",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.3)",
              color: "#fff",
            },
            width: 50,
            height: 50,
          }}
        >
          <ChevronRightIcon fontSize="large" />
        </IconButton>

        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            px: { xs: 2, md: 0 },
          }}
        >
          <Box sx={{ maxWidth: 900, mx: "auto", overflow: "hidden" }}>
            {/* ... (keeping text animations same) ... */}
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[currentSlide].id}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <motion.div
                  variants={textVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontWeight: 700,
                      color: "#fff",
                      fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                      lineHeight: 1.1,
                      mb: 3,
                      fontFamily: "Playfair Display, serif",
                      textShadow: "0 4px 20px rgba(0,0,0,0.5)",
                    }}
                  >
                    {slides[currentSlide].title}
                  </Typography>
                </motion.div>

                <motion.div
                  variants={textVariants}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Staggered delay
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#f0f0f0",
                      fontWeight: 400,
                      fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
                      letterSpacing: 0.5,
                      mb: 6,
                      maxWidth: "800px",
                      mx: "auto",
                      lineHeight: 1.6,
                      textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                    }}
                  >
                    {slides[currentSlide].subtitle}
                  </Typography>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <MotionButton
              variant="contained"
              size="large"
              onClick={() => setIsModalOpen(true)}
              sx={{
                background: "#4a5942",
                color: "#fff",
                fontWeight: 700,
                py: { xs: 1.5, md: 1.8 },
                px: { xs: 4, md: 6 },
                borderRadius: "50px",
                fontSize: { xs: "1rem", md: "1.1rem" },
                letterSpacing: 1.5,
                textTransform: "uppercase",
                boxShadow: "0 8px 30px rgba(74, 89, 66, 0.4)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(4px)",
                "&:hover": {
                  background: "#3d4a36",
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 40px rgba(74, 89, 66, 0.6)",
                },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Quote
            </MotionButton>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
