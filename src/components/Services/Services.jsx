import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Collapse,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  Avatar,
  Fade
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  CheckCircleOutline,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import ServicesIcon from "../../assets/icons8-service-48.png";
import WarrantyIcon from "../../assets/icons8-warranty-48.png";
import TechnologyIcon from "../../assets/icons8-technology-50.png";
import PriceIcon from "../../assets/icons8-get-a-discount-50.png";
import ContactModal from "../ContactModal/ContactModal";
import { Helmet } from "react-helmet-async";

const BRAND_GREEN = "#4a5942";
const BRAND_GREEN_LIGHT = "#e8f0e6";

const offerings = [
  {
    title: "Complete Interiors",
    icon: ServicesIcon,
    details: [
      "Modular kitchens",
      "Modular wardrobes",
      "Premium lighting solutions",
      "Luxury flooring",
      "End-to-end electrical work",
      "Civil work & renovations",
      "Designer false ceilings",
      "Wall design, textures & painting",
    ],
  },
  {
    title: "Unmatched Warranty",
    icon: WarrantyIcon,
    details: [
      "FLAT 10-year warranty - Stay worry-free with our comprehensive warranty on all modular products.",
      "1-year on-site service warranty - Covers painting, electrical, plumbing, and installation services.",
    ],
  },
  {
    title: "Advanced Technology",
    icon: TechnologyIcon,
    details: [
      "AquaBloc® Technology - Hermetically sealed edges preventing moisture damage.",
      "AntiBubble® Technology - Seamless, bubble-free panels for a flawless finish.",
      "DuraBuild™ Technology - Robust cabinets designed for longevity and strength.",
      "Scientific Ergonomics - Layouts designed to reduce physical strain and maximize efficiency.",
    ],
  },
  {
    title: "Transparent Pricing",
    icon: PriceIcon,
    details: [
      "Price-match guarantee - We match valid quotes from branded competitors for the exact scope.",
      "No hidden costs - What you see is what you pay. No last-minute surprises.",
      "Value-driven packages - Tailored solutions to fit your budget without compromising quality.",
    ],
  },
];

const Services = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleExpandClick = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <Helmet>
        <title>Interior Services | Modular Kitchens, Wardrobes, Warranty – Tvashta Interior</title>
        <meta name="description" content="Discover modular kitchens, wardrobes, advanced technology, unbeatable warranty, and price benefits. Tvashta Interior offers complete interior solutions." />
      </Helmet>

      <Box sx={{ backgroundColor: "#fafbfc", py: 10 }}>
        <Container maxWidth="lg">
          {/* Section Header */}
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              component={motion.h4}
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              variant="overline"
              sx={{ color: BRAND_GREEN, fontWeight: 700, letterSpacing: 1.5 }}
            >
              COMPREHENSIVE SOLUTIONS
            </Typography>
            <Typography
              component={motion.h2}
              variants={SlideUp(0.3)}
              initial="initial"
              whileInView="animate"
              variant="h3"
              sx={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 700,
                color: "#2c3e50",
                mt: 1,
                fontSize: { xs: "2rem", md: "3rem" }
              }}
            >
              What We Offer
            </Typography>
            <Box
              sx={{
                width: 60,
                height: 4,
                bgcolor: BRAND_GREEN,
                mx: "auto",
                mt: 2,
                borderRadius: 2
              }}
            />
          </Box>

          <Grid container spacing={4}>
            {offerings.map((offering, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  variants={SlideUp(0.2 + index * 0.1)}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                      borderRadius: 4,
                      border: "1px solid rgba(0,0,0,0.03)",
                      transition: "all 0.4s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 12px 30px rgba(74, 89, 66, 0.15)",
                        borderColor: BRAND_GREEN_LIGHT
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box
                        display="flex"
                        alignItems="center"
                        mb={3}
                        onClick={() => handleExpandClick(index)}
                        sx={{ cursor: "pointer" }}
                      >
                        <Avatar
                          variant="rounded"
                          src={offering.icon}
                          alt={`${offering.title} Icon`}
                          sx={{
                            width: 64,
                            height: 64,
                            mr: 3,
                            bgcolor: BRAND_GREEN_LIGHT,
                            p: 1.5,
                            img: { objectFit: "contain" }
                          }}
                        />
                        <Box flexGrow={1}>
                          <Typography
                            variant="h5"
                            sx={{
                              fontFamily: "Playfair Display, serif",
                              fontWeight: 700,
                              color: "#2c3e50"
                            }}
                          >
                            {offering.title}
                          </Typography>
                        </Box>
                        <Button
                          disableRipple
                          onClick={(e) => {
                            e.stopPropagation();
                            handleExpandClick(index);
                          }}
                          sx={{
                            minWidth: "auto",
                            color: BRAND_GREEN,
                            bgcolor: alpha => alpha.palette.mode === 'light' ? BRAND_GREEN_LIGHT : "rgba(255,255,255,0.1)",
                            borderRadius: "50%",
                            p: 1
                          }}
                        >
                          {expandedSections[index] ? <ExpandLess /> : <ExpandMore />}
                        </Button>
                      </Box>

                      {/* Always show the first detail as a teaser if not expanded */}
                      {!expandedSections[index] && (
                        <Fade in={!expandedSections[index]}>
                          <Typography variant="body2" color="text.secondary" sx={{ ml: 11 }}>
                            {offering.details[0]}...
                            <Box component="span" sx={{ color: BRAND_GREEN, fontWeight: 600, ml: 1, fontSize: "0.8rem" }}>
                              Read More
                            </Box>
                          </Typography>
                        </Fade>
                      )}

                      <Collapse in={expandedSections[index]} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ mt: 1, ml: { xs: 0, sm: 11 } }}>
                          {offering.details.map((detail, detailIndex) => (
                            <ListItem key={detailIndex} alignItems="flex-start" sx={{ px: 0, py: 0.5 }}>
                              <ListItemIcon sx={{ minWidth: 28, mt: 0.5 }}>
                                <CheckCircleOutline sx={{ fontSize: 18, color: BRAND_GREEN }} />
                              </ListItemIcon>
                              <ListItemText
                                primary={detail}
                                primaryTypographyProps={{
                                  variant: "body2",
                                  color: "text.secondary",
                                  lineHeight: 1.6
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box
            component={motion.div}
            variants={SlideUp(0.6)}
            initial="initial"
            whileInView="animate"
            sx={{ display: "flex", justifyContent: "center", mt: 8 }}
          >
            <Button
              variant="contained"
              onClick={handleOpen}
              sx={{
                bgcolor: BRAND_GREEN,
                color: "#fff",
                px: 5,
                py: 1.5,
                borderRadius: "50px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 1,
                boxShadow: "0 10px 20px rgba(74, 89, 66, 0.3)",
                "&:hover": {
                  bgcolor: "#3d4a36",
                  transform: "translateY(-2px)",
                  boxShadow: "0 15px 30px rgba(74, 89, 66, 0.4)",
                }
              }}
            >
              Get Free Quote
            </Button>
          </Box>

        </Container>
        <ContactModal open={open} setOpen={setOpen} />
      </Box>
    </>
  );
};

export default Services;
