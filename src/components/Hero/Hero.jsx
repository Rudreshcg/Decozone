import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container, IconButton, Stack } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Image Imports
import Img1 from "../../assets/gallery/livingarea-1.png";
import Img2 from "../../assets/gallery/bedroom-1.webp";
import Img3 from "../../assets/gallery/kitchen-1.jpeg";
import Img4 from "../../assets/gallery/storage-3.png";
import Img5 from "../../assets/gallery/bedroom-2.webp";
import Img6 from "../../assets/gallery/livingarea-4.png";
import ContactModal from "../ContactModal/ContactModal";

const slides = [
  {
    id: 1,
    img: Img6,
    badge: "SIGNATURE RESIDENCES",
    title: "Grand Living & Reception Salons",
    subtitle: "Statement residential interiors crafted with artisanal millwork and timeless elegance",
  },
  {
    id: 2,
    img: Img2,
    badge: "PRIVATE RETREATS",
    title: "Bespoke Contemporary Bedrooms",
    subtitle: "Where tranquil serenity harmonizes with handpicked textures and tailored joinery",
  },
  {
    id: 3,
    img: Img3,
    badge: "CULINARY EXCELLENCE",
    title: "Artisanal Modular Kitchens",
    subtitle: "Seamless fusion of German hardware precision, Italian finishes, and ergonomic luxury",
  },
  {
    id: 4,
    img: Img4,
    badge: "SPATIAL ARCHITECTURE",
    title: "Walk-In Closets & Smart Storage",
    subtitle: "Maximized spatial functionality with bespoke European veneers and ambient lighting",
  },
  {
    id: 5,
    img: Img5,
    badge: "MASTER SUITES",
    title: "Opulent Master Suite Enclaves",
    subtitle: "Curated for discerning homeowners seeking uncompromising craftsmanship and comfort",
  },
];

const trustMetrics = [
  {
    icon: <PrecisionManufacturingOutlinedIcon sx={{ fontSize: "1.2rem", color: "#dfcfb8" }} />,
    title: "100% In-House Factory",
    subtitle: "German CNC Precision",
  },
  {
    icon: <VerifiedOutlinedIcon sx={{ fontSize: "1.2rem", color: "#dfcfb8" }} />,
    title: "10-Year Warranty",
    subtitle: "Comprehensive Protection",
  },
  {
    icon: <AccessTimeOutlinedIcon sx={{ fontSize: "1.2rem", color: "#dfcfb8" }} />,
    title: "45-Day Delivery",
    subtitle: "Guaranteed Move-In",
  },
  {
    icon: <HomeWorkOutlinedIcon sx={{ fontSize: "1.2rem", color: "#dfcfb8" }} />,
    title: "500+ Homes Handed Over",
    subtitle: "Across Bangalore & Beyond",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const textVariants = {
    initial: { y: 30, opacity: 0, filter: "blur(4px)" },
    animate: { y: 0, opacity: 1, filter: "blur(0px)" },
    exit: { y: -20, opacity: 0, filter: "blur(4px)" },
  };

  return (
    <>
      <Helmet>
        <title>Tvashta Interior | {slides[currentSlide].title}</title>
        <meta
          name="description"
          content={`Explore our ${slides[currentSlide].title}. ${slides[currentSlide].subtitle} with Tvashta Interior.`}
        />
      </Helmet>

      <ContactModal open={isModalOpen} setOpen={setIsModalOpen} />

      <Box
        component="section"
        sx={{
          position: "relative",
          minHeight: { xs: "88vh", md: "92vh" },
          width: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#161d15",
        }}
      >
        {/* Background Image Carousel with Smooth Fade & Scale */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={slides[currentSlide].id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
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

        {/* Sophisticated Architectural Dark Gradient Overlays */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(22, 29, 21, 0.45) 0%, rgba(22, 29, 21, 0.7) 60%, rgba(22, 29, 21, 0.95) 100%)",
            zIndex: 1,
          }}
        />

        {/* Navigation Arrow Left */}
        <IconButton
          onClick={handlePrev}
          aria-label="Previous slide"
          sx={{
            position: "absolute",
            left: { xs: 12, md: 36 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            color: "#ffffff",
            backgroundColor: "rgba(22, 29, 21, 0.4)",
            border: "1px solid rgba(178, 152, 115, 0.35)",
            backdropFilter: "blur(10px)",
            width: { xs: 42, md: 52 },
            height: { xs: 42, md: 52 },
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "rgba(66, 82, 62, 0.8)",
              borderColor: "#b29873",
              transform: "translateY(-50%) scale(1.05)",
            },
          }}
        >
          <ChevronLeftIcon sx={{ fontSize: { xs: 26, md: 32 } }} />
        </IconButton>

        {/* Navigation Arrow Right */}
        <IconButton
          onClick={handleNext}
          aria-label="Next slide"
          sx={{
            position: "absolute",
            right: { xs: 12, md: 36 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            color: "#ffffff",
            backgroundColor: "rgba(22, 29, 21, 0.4)",
            border: "1px solid rgba(178, 152, 115, 0.35)",
            backdropFilter: "blur(10px)",
            width: { xs: 42, md: 52 },
            height: { xs: 42, md: 52 },
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "rgba(66, 82, 62, 0.8)",
              borderColor: "#b29873",
              transform: "translateY(-50%) scale(1.05)",
            },
          }}
        >
          <ChevronRightIcon sx={{ fontSize: { xs: 26, md: 32 } }} />
        </IconButton>

        {/* Main Content Area */}
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
            pt: { xs: 12, md: 16 },
            pb: { xs: 4, md: 6 },
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Animated Slide Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentSlide].id}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={textVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ maxWidth: "860px", margin: "0 auto" }}
            >
              {/* Luxury Badge */}
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.5,
                  background: "rgba(178, 152, 115, 0.15)",
                  border: "1px solid rgba(178, 152, 115, 0.4)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "50px",
                  px: { xs: 2.5, md: 3 },
                  py: 0.8,
                  mb: 3,
                }}
              >
                <span
                  style={{
                    color: "#dfcfb8",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  ✦ {slides[currentSlide].badge} ✦
                </span>
              </Box>

              {/* Title */}
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 600,
                  fontSize: { xs: "2.3rem", sm: "3.6rem", md: "4.4rem" },
                  lineHeight: { xs: 1.18, md: 1.1 },
                  color: "#ffffff",
                  letterSpacing: "-0.01em",
                  mb: { xs: 2, md: 3 },
                  textShadow: "0 4px 24px rgba(0,0,0,0.6)",
                }}
              >
                {slides[currentSlide].title}
              </Typography>

              {/* Subtitle */}
              <Typography
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  fontSize: { xs: "0.95rem", sm: "1.15rem", md: "1.25rem" },
                  lineHeight: 1.65,
                  color: "rgba(240, 245, 239, 0.9)",
                  letterSpacing: "0.02em",
                  maxWidth: "680px",
                  mx: "auto",
                  mb: { xs: 4, md: 5 },
                  textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                }}
              >
                {slides[currentSlide].subtitle}
              </Typography>
            </motion.div>
          </AnimatePresence>

          {/* Dual Action Luxury Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              maxWidth: "500px",
              mb: { xs: 5, md: 6 },
            }}
          >
            <Button
              variant="contained"
              onClick={() => setIsModalOpen(true)}
              endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem !important" }} />}
              sx={{
                width: { xs: "100%", sm: "auto" },
                background: "linear-gradient(135deg, #42523e 0%, #2c3829 100%)",
                border: "1px solid rgba(178, 152, 115, 0.5)",
                color: "#ffffff",
                px: { xs: 3.5, md: 4.5 },
                py: 1.6,
                borderRadius: "50px",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                boxShadow: "0 10px 30px rgba(44, 56, 41, 0.4)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                "&:hover": {
                  background: "linear-gradient(135deg, #4d6048 0%, #354432 100%)",
                  borderColor: "#b29873",
                  transform: "translateY(-2px)",
                  boxShadow: "0 15px 35px rgba(178, 152, 115, 0.4)",
                },
              }}
            >
              Get Free Design Quote
            </Button>

            <Button
              variant="outlined"
              href="/portfolio"
              sx={{
                width: { xs: "100%", sm: "auto" },
                color: "#f5f5f5",
                borderColor: "rgba(255, 255, 255, 0.35)",
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(8px)",
                px: { xs: 3, md: 4 },
                py: 1.6,
                borderRadius: "50px",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.82rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.18)",
                  borderColor: "#b29873",
                  color: "#ffffff",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Explore Signature Work
            </Button>
          </Stack>

          {/* Slide Pagination Indicator */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
            <span style={{ color: "#dfcfb8", fontFamily: "Montserrat", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em" }}>
              0{currentSlide + 1}
            </span>
            <Box sx={{ display: "flex", gap: 1 }}>
              {slides.map((s, idx) => (
                <Box
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  sx={{
                    width: idx === currentSlide ? 32 : 8,
                    height: 4,
                    borderRadius: "4px",
                    backgroundColor: idx === currentSlide ? "#b29873" : "rgba(255, 255, 255, 0.25)",
                    cursor: "pointer",
                    transition: "all 0.4s ease",
                  }}
                />
              ))}
            </Box>
            <span style={{ color: "rgba(255, 255, 255, 0.4)", fontFamily: "Montserrat", fontSize: "0.75rem", fontWeight: 500 }}>
              0{slides.length}
            </span>
          </Box>
        </Container>

        {/* Floating Frosted Trust Bar at Bottom of Hero */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            background: "rgba(22, 29, 21, 0.75)",
            backdropFilter: "blur(18px)",
            borderTop: "1px solid rgba(178, 152, 115, 0.2)",
            py: { xs: 2.5, md: 3 },
            px: { xs: 2, md: 6 },
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
                gap: { xs: 2.5, md: 4 },
              }}
            >
              {trustMetrics.map((metric, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    borderRight: {
                      xs: i % 2 === 0 ? "1px solid rgba(178, 152, 115, 0.15)" : "none",
                      md: i < 3 ? "1px solid rgba(178, 152, 115, 0.15)" : "none",
                    },
                    pr: { xs: 1, md: 2 },
                  }}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      backgroundColor: "rgba(178, 152, 115, 0.15)",
                      border: "1px solid rgba(178, 152, 115, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {metric.icon}
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: "#ffffff",
                        fontSize: { xs: "0.82rem", md: "0.9rem" },
                        fontWeight: 700,
                        fontFamily: "'Montserrat', sans-serif",
                        lineHeight: 1.2,
                      }}
                    >
                      {metric.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(223, 207, 184, 0.85)",
                        fontSize: { xs: "0.72rem", md: "0.78rem" },
                        fontFamily: "'Montserrat', sans-serif",
                        lineHeight: 1.3,
                        mt: 0.3,
                      }}
                    >
                      {metric.subtitle}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
