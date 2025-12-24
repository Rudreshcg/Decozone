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
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  FiberManualRecord as BulletIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
// import ServicesIcon from "../../assets/services.png";
import ServicesIcon from "../../assets/icons8-service-48.png";
import WarrantyIcon from "../../assets/icons8-warranty-48.png";
import TechnologyIcon from "../../assets/icons8-technology-50.png";
import PriceIcon from "../../assets/icons8-get-a-discount-50.png";
import ContactModal from "../ContactModal/ContactModal";
import { Helmet } from "react-helmet-async";


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
        <title>Interior Services | Modular Kitchens, Wardrobes, Warranty – Tvashta Interior Bangalore</title>
        <meta name="description" content="Discover modular kitchens, wardrobes, advanced technology, unbeatable warranty, and price benefits. Tvashta Interior offers complete interior solutions in Bangalore and all India." />
        <meta name="keywords" content="interior services, modular kitchens, wardrobe, interior warranty, interior technology, price match, Bangalore, India, Tvashta Interior" />
        <link rel="canonical" href="https://tvashtainterior.com/" />
        <meta property="og:title" content="Complete Interior Services - Tvashta Interior" />
        <meta property="og:description" content="Get modular kitchens, wardrobes, warranty, and more with Tvashta Interior. Free quote, transparent pricing, and advanced tech for homes and offices." />
        <meta property="og:url" content="https://tvashtainterior.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Box sx={{ backgroundColor: "#f2f2f2" }}>
        <Container sx={{ py: 5 }}>
          <Typography
            variant="h4"
            sx={{
              my: 4,
              fontWeight: "bold",
              fontFamily: "Arial, sans-serif",
              color: "#333",
              textAlign: "center",
            }}
          >
            What we offer
          </Typography>
          <Grid container spacing={3} direction="column">
            {offerings.map((offering, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  variants={SlideUp(1.6)}
                  initial="hidden"
                  animate="visible"
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
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Box display="flex" alignItems="center">
                          <Avatar
                            src={offering.icon}
                            alt={`${offering.title} Icon`}
                            sx={{ width: 32, height: 32, marginRight: 2 }}
                          />
                          <Typography fontSize="18px" fontWeight={600}>
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
                      <Collapse
                        in={expandedSections[index]}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List>
                          {offering.details.map((detail, detailIndex) => (
                            <ListItem key={detailIndex}>
                              <ListItemIcon sx={{ minWidth: "28px" }}>
                                <span
                                  style={{ fontSize: "12px", color: "black" }}
                                >
                                  ➤
                                </span>
                              </ListItemIcon>
                              <ListItemText primary={detail} />
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
          <motion.Box
            variants={SlideUp(1.6)}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#4a5942",
                my: 4,
                fontWeight: "bold",
                p: "10px 16px",
                borderRadius: "10px",
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
              onClick={handleOpen}
            >
              GET FREE QUOTE
            </Button>
          </motion.Box>
        </Container>
        <ContactModal open={open} setOpen={setOpen} />
      </Box>
    </>

  );
};

export default Services;
