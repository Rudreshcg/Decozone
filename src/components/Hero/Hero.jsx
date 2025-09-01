import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import landingPageImage from "../../assets/landing-image.jpeg";
import { Helmet } from "react-helmet-async";


const MotionTypography = motion(Typography);


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
          height: { xs: "100vh", sm: "100vh", md: "100vh" },
          backgroundImage: `url(${landingPageImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          },
        }}
      >
        <Box
          component={motion.div}
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: 1,
            maxWidth: { xs: "90%", sm: "70%", md: "45%" },
          }}
        >
          <MotionTypography
            variant="h3"
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            sx={{
              fontSize: { xs: "32px", sm: "38px", md: "45px" },
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              display: "inline",
            }}
          >
            Bring home beautiful interiors{" "}
            <Typography
              variant="h3"
              component="span"
              sx={{
                fontSize: { xs: "36px", sm: "38px", md: "45px" },
                fontWeight: "bold",
                color: "#FFD700", // Gold color for the second part
              }}
            >
              that fit your budget
            </Typography>
          </MotionTypography>

          <MotionTypography
            variants={SlideUp(0.8)}
            initial="initial"
            whileInView="animate"
            variant="h6"
            color="white"
            sx={{
              fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.35rem" }, // Responsive font size
            }}
          >
            Experience unmatched quality & timely delivery with Tvashta Interior
          </MotionTypography>
        </Box>
      </Box>

    </>

  );
};

export default HomePage;
