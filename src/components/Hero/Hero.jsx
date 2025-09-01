import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate"; // your animation utility
import landingPageImage from "../../assets/landing-image.jpeg";
import { Helmet } from "react-helmet-async";

const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Tvashta Interior - Beautiful, Budget-Friendly Interiors in Bangalore & India</title>
        <meta name="description" content="Experience unmatched quality, timely delivery, and elegant interior design with Tvashta Interior. Transform homes and offices in Bangalore & across India—always within your budget." />
        <meta name="keywords" content="interior design, Bangalore interiors, budget interiors, Tvashta Interior, modular kitchen, home renovation, commercial interiors, India" />
        <link rel="canonical" href="https://tvashtainterior.com/" />
        <meta property="og:title" content="Tvashta Interior - Transform Your Spaces in Bangalore & Across India" />
        <meta property="og:description" content="Bring home beautiful interiors that fit your budget. Trusted for quality design and seamless delivery." />
        <meta property="og:url" content="https://tvashtainterior.com/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Box
        sx={{
          position: "relative",
          height: "100vh",
          minHeight: 520,
          backgroundImage: `url(${landingPageImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          overflow: "hidden",
          "::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: "linear-gradient(115deg, rgba(30,38,47,0.82) 42%, rgba(255,215,0,0.07) 100%)",
            zIndex: 1,
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            maxWidth: { xs: "94vw", sm: 600, md: 760 },
            mx: "auto",
          }}
        >
          <MotionTypography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: "#fff",
              fontSize: { xs: "2.1rem", sm: "2.5rem", md: "3rem" },
              letterSpacing: 1.2,
              mb: 2,
              lineHeight: 1.14,
              textShadow: "0 4px 32px rgba(0,0,0,0.38)",
            }}
            variants={SlideUp(0)}
            initial="initial"
            animate="animate"
          >
            Bring home beautiful interiors{" "}
            <Box
              component="span"
              sx={{
                color: "#FFD700",
                display: "block",
                textShadow: "0 2px 18px rgba(220,180,25,0.16)",
              }}
            >
              that fit your budget
            </Box>
          </MotionTypography>

          <MotionTypography
            variant="h6"
            sx={{
              color: "#fff",
              opacity: 0.93,
              fontWeight: 500,
              fontSize: { xs: "1.08rem", sm: "1.23rem", md: "1.35rem" },
              letterSpacing: 0.8,
              mb: 5,
              mt: 2,
              textShadow: "0 3px 10px rgba(25,25,25,0.22)",
            }}
            variants={SlideUp(0.2)}
            initial="initial"
            animate="animate"
          >
            Experience unmatched quality & timely delivery with Tvashta Interior
          </MotionTypography>

          <MotionButton
            variant="contained"
            size="large"
            sx={{
              background: "linear-gradient(90deg, #4a5942 0%, #7cc7a0 100%)",
              color: "#fff",
              fontWeight: 700,
              py: 1.3,
              px: 5,
              borderRadius: 2,
              fontSize: "1.1rem",
              letterSpacing: 1,
              boxShadow: "0 4px 16px 0 rgba(44, 75, 60, 0.15)",
              textTransform: "uppercase",
              transition: "background 0.22s",
              "&:hover": {
                background: "linear-gradient(90deg, #7cc7a0 0%, #4a5942 100%)",
              },
            }}
            variants={SlideUp(0.4)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Free Quote
          </MotionButton>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
