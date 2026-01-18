import React, { useRef } from "react";
import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../animation/animate";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Card,
  CardContent,
  Avatar,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { ChevronLeft, ChevronRight, Star } from "@mui/icons-material";
import Man from "../../assets/man.png";
import Women from "../../assets/women.png";

const goldGradient = "linear-gradient(135deg, #9f8033 0%, #c5a059 50%, #9f8033 100%)";

const TestimonialData = [
  {
    id: 1,
    name: "Mohan Kumar",
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
  const scrollRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#f9f9f9",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6, maxWidth: 700, mx: "auto" }}>
          <Typography
            component={motion.h2}
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            variant="h3"
            className="section-title-global"
            sx={{ mb: 2, textAlign: "center" }}
          >
            Words From Our Customers
          </Typography>
          <Typography
            component={motion.p}
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            variant="body1"
            sx={{ color: "#666", fontSize: "1.1rem", lineHeight: 1.6, fontFamily: "Montserrat, sans-serif" }}
          >
            Bring your dream home to life with one-on-one design help & hand-picked products
          </Typography>
        </Box>

        {/* Slider Container */}
        <Box sx={{ position: "relative" }}>
          {/* Default Arrows (Desktop) */}
          {!isMobile && (
            <>
              <IconButton
                onClick={scrollLeft}
                sx={{
                  position: "absolute",
                  left: -20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                  bgcolor: "#fff",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  "&:hover": { bgcolor: "#4a5942", color: "#fff" },
                  width: 48,
                  height: 48,
                }}
              >
                <ChevronLeft />
              </IconButton>
              <IconButton
                onClick={scrollRight}
                sx={{
                  position: "absolute",
                  right: -20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                  bgcolor: "#fff",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  "&:hover": { bgcolor: "#4a5942", color: "#fff" },
                  width: 48,
                  height: 48,
                }}
              >
                <ChevronRight />
              </IconButton>
            </>
          )}

          {/* Cards Scroll Area */}
          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              gap: 3,
              overflowX: "auto",
              pb: 4,
              scrollSnapType: "x mandatory",
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none",
            }}
          >
            {TestimonialData.map((card) => (
              <Box
                key={card.id}
                component={motion.div}
                variants={SlideLeft(card.delay)}
                initial="initial"
                whileInView="animate"
                sx={{
                  minWidth: { xs: 280, md: 350 },
                  scrollSnapAlign: "center",
                }}
              >
                <Card
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 3,
                    border: "1px solid rgba(0,0,0,0.05)",
                    background: "#fff",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                      borderColor: "#4a5942",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                    <Avatar
                      src={card.img}
                      alt={card.name}
                      sx={{ width: 60, height: 60, border: "2px solid #f0f0f0" }}
                    />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1rem", fontFamily: "Montserrat, sans-serif" }}>
                        {card.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#888", display: "block", fontFamily: "Montserrat, sans-serif" }}>
                        {card.designation}
                      </Typography>
                      <Box sx={{ display: "flex", color: "#4a5942", mt: 0.5 }}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} sx={{ fontSize: 16 }} />
                        ))}
                      </Box>
                    </Box>
                  </Box>

                  <Divider sx={{ mb: 2, opacity: 0.6 }} />

                  <Typography
                    variant="body2"
                    sx={{
                      fontStyle: "italic",
                      color: "#555",
                      lineHeight: 1.7,
                      lineHeight: 1.7,
                      fontSize: "0.95rem",
                      fontFamily: "Montserrat, sans-serif"
                    }}
                  >
                    "{card.text}"
                  </Typography>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonial;
