import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Card,
  Avatar,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { ChevronLeft, ChevronRight, Star } from "@mui/icons-material";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const BRAND_GREEN = "#42523e";
const BRAND_GOLD = "#b29873";

const TestimonialData = [
  {
    id: 1,
    name: "Mr. Raghavendra",
    initials: "RG",
    residence: "Mr. Raghavendra's European Home",
    projectCategory: "European Luxury Residence",
    location: "Banswadi, Bangalore • 2,400 sq.ft",
    projectId: 1,
    projectLink: "/portfolio/1",
    text: "Tvashta Interior exceeded all expectations for our European luxury home in Banswadi. The precision of their German millwork, seamless fluted paneling, and Italian marble integration create an ambiance of quiet, timeless luxury. The 45-day handover was met to the exact date with zero budget escalations.",
  },
  {
    id: 2,
    name: "Mr. Rakesh Chandra",
    initials: "RC",
    residence: "Mr. Rakesh Chandra's Traditional Residence",
    projectCategory: "Bespoke Traditional Residence",
    location: "RR Nagar, Bangalore • 4,000 sq.ft",
    projectId: 2,
    projectLink: "/portfolio/2",
    text: "Blending traditional aesthetics with modern functionality was our highest priority for our 4,000 sq.ft residence in RR Nagar. The Tvashta team crafted bespoke teak finishes, pooja room joinery, and expansive living spaces with unmatched structural integrity. Zero site dust and zero cost escalations.",
  },
  {
    id: 3,
    name: "Mr. Srinivas Reddy",
    initials: "SR",
    residence: "Mr. Srinivas Reddy's Contemporary Sanctuary",
    projectCategory: "Contemporary Luxury Sanctuary",
    location: "HSR Layout, Bangalore • 4,000 sq.ft",
    projectId: 3,
    projectLink: "/portfolio/3",
    text: "From the 4K photorealistic 3D virtual twin to the final turnkey handover, our HSR Layout sanctuary was handled with supreme professionalism. The island modular kitchen, integrated bar unit, and acoustic lighting turn heads every time guests arrive. Truly in a league of their own.",
  },
  {
    id: 4,
    name: "Mr. Dilip",
    initials: "DL",
    residence: "Mr. Dilip's Residence",
    projectCategory: "Modern Elegance Residence",
    location: "Mysore • 3,000 sq.ft",
    projectId: 4,
    projectLink: "/portfolio/4",
    text: "Even executing our 3,000 sq.ft home in Mysore was completely frictionless because every modular component was pre-engineered at Tvashta's German CNC factory in Bangalore. The customized wardrobes, sleek bedroom paneling, and 10-year factory warranty gave our family total peace of mind.",
  },
  {
    id: 5,
    name: "Kiran & Deepa Gowda",
    initials: "KG",
    residence: "Signature Farmhouse Tour",
    projectCategory: "Bespoke Farmhouse Villa",
    location: "Bangalore Countryside • 5,200 sq.ft",
    projectId: null,
    projectLink: "https://www.youtube.com/watch?v=mLex6ktxNig",
    isVideoTour: true,
    text: "We had high expectations, but the outcome was breathtaking! An idyllic blend of rustic warmth and ultra-modern German joinery. The open-plan living, custom outdoor deck, and bespoke master suite were delivered with zero compromises on quality.",
  },
];

const Testimonial = () => {
  const scrollRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#faf8f5",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 }, maxWidth: 780, mx: "auto" }}>
          <motion.div
            variants={SlideUp(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="section-badge-global"
          >
            ✦ CLIENT ACCLAIM & TRUST ✦
          </motion.div>
          <motion.h2
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="section-title-global"
          >
            Words From Discerning Homeowners
          </motion.h2>
          <motion.p
            variants={SlideUp(0.3)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "1rem",
              color: "#576355",
              lineHeight: 1.7,
            }}
          >
            Read authentic experiences from homeowners whose residences were designed, manufactured, and turnkey delivered by our atelier.
          </motion.p>

          {/* Google Rating Pill */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              mt: 2.5,
              backgroundColor: "#ffffff",
              border: "1px solid rgba(178, 152, 115, 0.3)",
              px: 2.5,
              py: 0.8,
              borderRadius: "50px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.04)",
            }}
          >
            <Box sx={{ display: "flex", color: "#b29873" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} sx={{ fontSize: 16 }} />
              ))}
            </Box>
            <Typography
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "#1e281e",
              }}
            >
              4.9 / 5.0 Rating • 200+ Verified Homeowners
            </Typography>
          </Box>
        </Box>

        {/* Slider Container */}
        <Box sx={{ position: "relative" }}>
          {/* Controls */}
          {!isMobile && (
            <>
              <IconButton
                onClick={scrollLeft}
                aria-label="Previous testimonial"
                sx={{
                  position: "absolute",
                  left: -24,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                  bgcolor: "#ffffff",
                  border: "1px solid rgba(178, 152, 115, 0.35)",
                  boxShadow: "0 8px 24px rgba(44, 56, 41, 0.1)",
                  color: BRAND_GREEN,
                  "&:hover": {
                    bgcolor: BRAND_GREEN,
                    color: "#ffffff",
                    borderColor: BRAND_GOLD,
                  },
                  width: 48,
                  height: 48,
                  transition: "all 0.3s ease",
                }}
              >
                <ChevronLeft />
              </IconButton>
              <IconButton
                onClick={scrollRight}
                aria-label="Next testimonial"
                sx={{
                  position: "absolute",
                  right: -24,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                  bgcolor: "#ffffff",
                  border: "1px solid rgba(178, 152, 115, 0.35)",
                  boxShadow: "0 8px 24px rgba(44, 56, 41, 0.1)",
                  color: BRAND_GREEN,
                  "&:hover": {
                    bgcolor: BRAND_GREEN,
                    color: "#ffffff",
                    borderColor: BRAND_GOLD,
                  },
                  width: 48,
                  height: 48,
                  transition: "all 0.3s ease",
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
              gap: 3.5,
              overflowX: "auto",
              py: 2,
              px: 1,
              scrollSnapType: "x mandatory",
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none",
            }}
          >
            {TestimonialData.map((card) => (
              <Box
                key={card.id}
                sx={{
                  minWidth: { xs: 300, sm: 380, md: 420 },
                  maxWidth: { xs: 320, sm: 400, md: 440 },
                  scrollSnapAlign: "center",
                }}
              >
                <Card
                  elevation={0}
                  sx={{
                    p: { xs: 3.5, md: 4.5 },
                    height: "100%",
                    borderRadius: "20px",
                    border: "1px solid rgba(178, 152, 115, 0.22)",
                    background: "#ffffff",
                    boxShadow: "0 10px 30px -10px rgba(44, 56, 41, 0.06)",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 20px 45px -10px rgba(44, 56, 41, 0.12)",
                      borderColor: "rgba(178, 152, 115, 0.55)",
                    },
                  }}
                >
                  {/* Top Quote Icon & Rating */}
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                    <FormatQuoteRoundedIcon sx={{ fontSize: 36, color: "#dfcfb8", transform: "rotate(180deg)" }} />
                    <Box sx={{ display: "flex", color: BRAND_GOLD }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} sx={{ fontSize: 16 }} />
                      ))}
                    </Box>
                  </Box>

                  {/* Testimonial Quote */}
                  <Typography
                    sx={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontStyle: "italic",
                      color: "#2a3628",
                      lineHeight: 1.7,
                      fontSize: "1.02rem",
                      mb: 4,
                      flexGrow: 1,
                    }}
                  >
                    "{card.text}"
                  </Typography>

                  {/* Client Info with Monogram */}
                  <Box
                    sx={{
                      pt: 2.5,
                      borderTop: "1px solid rgba(178, 152, 115, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 48,
                        height: 48,
                        bgcolor: "rgba(178, 152, 115, 0.12)",
                        color: BRAND_GREEN,
                        border: "1.5px solid rgba(178, 152, 115, 0.35)",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                      }}
                    >
                      {card.initials}
                    </Avatar>
                    <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          fontFamily: "'Montserrat', sans-serif",
                          color: "#1e281e",
                        }}
                      >
                        {card.name}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#8a9787",
                          fontSize: "0.76rem",
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 500,
                          mt: 0.2,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {card.residence}
                      </Typography>
                      <Typography
                        sx={{
                          color: BRAND_GOLD,
                          fontSize: "0.72rem",
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        {card.location}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Verified Project Link Strip */}
                  <Box
                    sx={{
                      mt: 2.5,
                      pt: 2,
                      borderTop: "1px dashed rgba(178, 152, 115, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.68rem",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        color: BRAND_GREEN,
                        display: "flex",
                        alignItems: "center",
                        gap: 0.6,
                        textTransform: "uppercase",
                      }}
                    >
                      <Box component="span" sx={{ color: BRAND_GOLD }}>✦</Box> Verified Project
                    </Typography>

                    {card.isVideoTour ? (
                      <Button
                        component="a"
                        href={card.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        endIcon={<ArrowForwardIcon sx={{ fontSize: "14px !important" }} />}
                        sx={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: BRAND_GOLD,
                          textTransform: "none",
                          p: 0,
                          minWidth: 0,
                          "&:hover": {
                            bgcolor: "transparent",
                            color: BRAND_GREEN,
                          },
                        }}
                      >
                        Watch Video
                      </Button>
                    ) : (
                      <Button
                        component={Link}
                        to={card.projectLink}
                        size="small"
                        endIcon={<ArrowForwardIcon sx={{ fontSize: "14px !important" }} />}
                        sx={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: BRAND_GOLD,
                          textTransform: "none",
                          p: 0,
                          minWidth: 0,
                          "&:hover": {
                            bgcolor: "transparent",
                            color: BRAND_GREEN,
                          },
                        }}
                      >
                        View Residence
                      </Button>
                    )}
                  </Box>
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
