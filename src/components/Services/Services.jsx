import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import ContactModal from "../ContactModal/ContactModal";
import { Helmet } from "react-helmet-async";

// MUI Icons
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ScienceIcon from '@mui/icons-material/Science';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

// Premium colors & Gradients
const goldColor = "#9f8033";
const brandColor = "#4a5942"; // Logo Green
const goldGradient = "linear-gradient(135deg, #9f8033 0%, #c5a059 50%, #9f8033 100%)";

const offerings = [
  {
    title: "In-house Production",
    icon: <PrecisionManufacturingIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Premium Quality",
    icon: <WorkspacePremiumIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Unmatched Warranty",
    icon: <VerifiedUserIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Advanced Technology",
    icon: <ScienceIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Transparent Pricing",
    icon: <CurrencyRupeeIcon sx={{ fontSize: 40 }} />,
  },
];

const Services = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Interior Services | Modular Kitchens, Wardrobes, Warranty – Tvashta Interior Bangalore</title>
        <meta name="description" content="Discover modular kitchens, wardrobes, advanced technology, unbeatable warranty, and price benefits. Tvashta Interior offers complete interior solutions in Bangalore and all India." />
      </Helmet>
      {/* Luminous Background */}
      <Box sx={{ background: "radial-gradient(circle at 50% 50%, #ffffff 0%, #fcfbf7 100%)", py: 12 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            className="section-title-global" // Global Class
            sx={{ mb: 10, textAlign: "center" }}
          >
            What We Deliver
          </Typography>

          <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
            {offerings.map((offering, index) => (
              <Grid item xs={6} sm={4} md={2.4} key={index}>
                <motion.div
                  variants={SlideUp(0.2 * index)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      cursor: "pointer",
                      "&:hover .icon-box": {
                        // Brighter Hover: No dark fill, just glow
                        transform: "translateY(-10px)",
                        boxShadow: `0 20px 40px ${brandColor}25`, // Soft Green Glow
                        borderColor: "transparent", // Hide solid border to show gradient pseduo
                        background: "#fff",
                      },
                      "&:hover .icon-box::after": {
                        opacity: 1 // Show full gradient border on hover
                      },
                      "&:hover .icon-svg": {
                        color: goldColor, // Icon turns Gold
                        filter: "drop-shadow(0 2px 4px rgba(212, 175, 55, 0.3))"
                      },
                      "&:hover .inner-circle": {
                        borderColor: `${goldColor}40`,
                        transform: "translate(-50%, -50%) scale(1.1) rotate(180deg)",
                      }
                    }}
                  >
                    <Box
                      className="icon-box"
                      sx={{
                        width: 110,
                        height: 110,
                        borderRadius: "50%",
                        backgroundColor: "#fff",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 3,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)", // Soft ambient shadow
                        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        zIndex: 1,
                        // Gradient Border Mockup
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          inset: 0,
                          borderRadius: "50%",
                          padding: "2px", // Border width
                          background: `linear-gradient(135deg, ${brandColor} 0%, ${goldColor} 100%)`,
                          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          WebkitMaskComposite: "xor",
                          maskComposite: "exclude",
                          opacity: 0.5, // Subtle by default
                          transition: "opacity 0.4s ease"
                        }
                      }}
                    >
                      <Box
                        className="inner-circle"
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: "85%",
                          height: "85%",
                          borderRadius: "50%",
                          border: `1px dashed ${brandColor}30`,
                          transition: "all 0.6s ease",
                        }}
                      />
                      <Box className="icon-svg" sx={{ color: brandColor, transition: "all 0.3s ease" }}>
                        {offering.icon}
                      </Box>
                    </Box>
                    <Typography
                      variant="body1"
                      fontWeight="600"
                      color="#2c3e50"
                      sx={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "0.95rem",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        transition: "color 0.3s",
                        "&:hover": { color: brandColor }
                      }}
                    >
                      {offering.title}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <motion.Box
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "48px"
            }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#4a5942", // Brand Green Base
                background: "linear-gradient(135deg, #4a5942 0%, #3d4a36 100%)",
                border: "2px solid #9f8033", // Gold Border
                fontWeight: "bold",
                px: 5,
                py: 1.8,
                borderRadius: "50px",
                fontSize: "1rem",
                textTransform: "uppercase",
                color: "#fff",
                boxShadow: "0 10px 25px rgba(74, 89, 66, 0.3)",
                "&:hover": {
                  background: "#3d4a36",
                  border: "2px solid #c5a059",
                  transform: "translateY(-3px)",
                  boxShadow: "0 15px 35px rgba(159, 128, 51, 0.4)", // Gold Hover Glow
                }
              }}
              onClick={handleOpen}
            >
              Talk to our designer
            </Button>
          </motion.Box>
        </Container>
        <ContactModal open={open} setOpen={setOpen} />
      </Box >
    </>
  );
};

export default Services;
