import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import landingPageImage from "../../assets/landing-image.jpeg";

const MotionTypography = motion(Typography);


const HomePage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "100vh", sm: "100vh", md: "100vh" }, // Adjust height based on screen size
        backgroundImage: `url(${landingPageImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2, // Padding for smaller screens
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
          zIndex: 1, // Ensure overlay is above the image
        },
      }}
    >
      <Box
        component={motion.div}
        sx={{
          position: "relative",
          zIndex: 2, // Ensure content is above the overlay
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: 1, // Smaller gap for mobile, larger for desktop
          maxWidth: { xs: "90%", sm: "70%", md: "45%" }, // Adjust width based on screen size
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
            display: "inline", // Ensure inline behavior
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
          Experience unmatched quality & timely delivery with Decozone
        </MotionTypography>
      </Box>
    </Box>
  );
};

export default HomePage;
