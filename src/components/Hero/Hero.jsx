import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import landingPageImage from "../../assets/landing_page_Image.avif";

const HomePage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "70vh", sm: "85vh", md: "100vh" }, // Adjust height based on screen size
        backgroundImage: `url(${landingPageImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2, // Padding for smaller screens
      }}
    >
      {/* Centered Content */}
      <Box
        component={motion.div}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: 1, // Smaller gap for mobile, larger for desktop
          maxWidth: { xs: "90%", sm: "70%", md: "45%" }, // Adjust width based on screen size
        }}
      >
        <motion.div variants={SlideUp(0.8)} initial="initial" animate="animate">

<Typography
  variant="h3"
  sx={{
    fontSize: { xs: "36px", sm: "38px", md: "45px" },
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
</Typography>


        </motion.div>
        <motion.div
          variants={SlideUp(1)}
          initial="initial"
          animate="animate"
          sx={{ mt: 3 }}
        >
          <Typography
            variant="h6"
            color="white"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" }, // Responsive font size
            }}
          >
            Experience unmatched quality & timely delivery with Decozone
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default HomePage;
