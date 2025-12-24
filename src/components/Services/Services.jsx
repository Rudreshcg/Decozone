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
    title: "What is Interior Design?",
    icon: ServicesIcon,
    details: [
      "Interior design is the art and science of enhancing the interior of a building to create a healthier, safer, and more aesthetically pleasing environment for its occupants.",
      "Unlike simple decoration, interior design is a multifaceted profession that combines creative vision with technical knowledge of human behavior, building codes, and structural systems.",
      "Our expert designers transform spaces into functional works of art that reflect your personality while optimizing comfort, efficiency, and style.",
      "From concept to completion, we handle every aspect - space planning, color schemes, lighting design, material selection, and furniture placement.",
    ],
  },
  {
    title: "In-house Production",
    icon: TechnologyIcon,
    details: [
      "Complete Factory Process - We manage the entire production cycle in our state-of-the-art manufacturing facility, ensuring quality at every step.",
      "Know Your Components (KYC) - Full transparency in our production process. We document and track every component used in your project.",
      "Factory Assembly - All modular units are pre-assembled and quality-tested in our factory before delivery to your site.",
      "Quality Control - Multi-stage inspection process ensures that only the finest products reach your home.",
      "Precision Manufacturing - Advanced machinery and skilled craftsmen work together to deliver products with perfect finishes.",
    ],
  },
  {
    title: "Premium Quality Standards",
    icon: WarrantyIcon,
    details: [
      "CENTURY MAXIMA - We exclusively use Century Maxima plywood with OME (One More Extra) material for superior strength and durability.",
      "CENTURY CLUB BWB - For applications requiring boiling water resistance, we use only Century Club BWB grade plywood.",
      "Tried & Tested Materials - Every material we use has been rigorously tested to ensure long-lasting performance.",
      "After-Sales Care - We care for your home even after project completion. Our commitment doesn't end at handover - we provide ongoing support and maintenance guidance.",
    ],
  },
  {
    title: "Unmatched Warranty",
    icon: WarrantyIcon,
    details: [
      "FLAT 10-year warranty - Stay worry-free with our comprehensive warranty policy on all modular products.",
      "Up to 1-year on-site service warranty - Warranty coverage on on-site services such as painting, electrical, plumbing and more.",
    ],
  },
  {
    title: "Advanced Technology",
    icon: TechnologyIcon,
    details: [
      "AquaBloc® Technology - Hermetically sealed edges preventing moisture damage to ensure your modular cabinets stay pristine for years.",
      "AntiBubble® Technology - Super seamless panels without air bubbles for flawless modular cabinet surfaces.",
      "DuraBuild™ Technology - Robust structural engineering for modular cabinets, making them exceptionally strong and long-lasting.",
      "Design Science - Ergonomically designed modular kitchens with improved accessibility that makes daily tasks more efficient and reduces physical strain.",
    ],
  },
  {
    title: "Transparent Pricing",
    icon: PriceIcon,
    details: [
      "Price-match guarantee - We match valid quotes from branded competitors for the exact same scope of work.",
      "No hidden costs - Completely transparent costing with no last-minute surprises or additions.",
      "Detailed quotations - Every item and service is clearly itemized so you know exactly what you're paying for.",
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
                      boxShadow: 3,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: 6,
                        transform: 'translateY(-2px)',
                      }
                    }}
                    onClick={() => handleExpandClick(index)}
                  >
                    <CardContent
                      sx={{ "&:last-child": { paddingBottom: "16px" } }}
                    >
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
                        <Box sx={{ display: 'flex', alignItems: 'center', color: '#666' }}>
                          {expandedSections[index] ? (
                            <ExpandLess />
                          ) : (
                            <ExpandMore />
                          )}
                        </Box>
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
