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
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import ArchitectureOutlinedIcon from '@mui/icons-material/ArchitectureOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Logo-matched Colors
const brandGreen = "#42523e";
const brandGold = "#b29873";

const offerings = [
  {
    step: "01",
    tag: "OWN FACTORY",
    title: "In-House Precision Millwork",
    desc: "Automated German CNC routing and zero-joint edge-banding ensuring millimeter precision, termite-proof joinery, and lasting structural integrity.",
    icon: <PrecisionManufacturingOutlinedIcon sx={{ fontSize: 32 }} />,
  },
  {
    step: "02",
    tag: "ARTISANAL GRADE",
    title: "Curated Luxury Materials",
    desc: "Handpicked Italian marbles, natural European veneers, BWP 710 architectural marine-grade ply, and Hafele / Blum soft-close hardware.",
    icon: <WorkspacePremiumOutlinedIcon sx={{ fontSize: 32 }} />,
  },
  {
    step: "03",
    tag: "PEACE OF MIND",
    title: "10-Year Comprehensive Warranty",
    desc: "Unconditional 10-year warranty certificate covering all modular installations, backed by dedicated lifetime maintenance audits.",
    icon: <VerifiedUserOutlinedIcon sx={{ fontSize: 32 }} />,
  },
  {
    step: "04",
    tag: "VIRTUAL TWIN",
    title: "4K Photorealistic Previews",
    desc: "Experience every corner, lighting fixture, and texture in realistic 4K 3D before execution begins, ensuring zero surprises at handover.",
    icon: <ArchitectureOutlinedIcon sx={{ fontSize: 32 }} />,
  },
  {
    step: "05",
    tag: "FIXED BOQ",
    title: "100% Transparent Pricing",
    desc: "Completely itemized bill of quantities with zero hidden clauses, surprise site expenses, or post-commencement cost escalations.",
    icon: <ReceiptLongOutlinedIcon sx={{ fontSize: 32 }} />,
  },
];

const Services = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Interior Craftsmanship & Delivery Pillars | Tvashta Interior Bangalore</title>
        <meta
          name="description"
          content="Discover Tvashta Interior's 5 craftsmanship pillars: In-house German production, curated luxury materials, 10-year warranty, 4K 3D design, and transparent pricing in Bangalore."
        />
      </Helmet>

      <Box
        component="section"
        sx={{
          background: "linear-gradient(180deg, #faf8f5 0%, #f4f0e8 100%)",
          py: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          {/* Section Header */}
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <motion.div
              variants={SlideUp(0.1)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="section-badge-global"
            >
              ✦ ARCHITECTURAL EXCELLENCE ✦
            </motion.div>
            <motion.h2
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="section-title-global"
            >
              The Tvashta Delivery Pillars
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
                maxWidth: "680px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              From raw architectural blueprints to immaculate handover, our integrated studio & factory ecosystem guarantees world-class craftsmanship.
            </motion.p>
          </Box>

          {/* Cards Grid */}
          <Grid container spacing={{ xs: 3, md: 3 }} justifyContent="center">
            {offerings.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  variants={SlideUp(0.15 * index)}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  style={{ height: "100%" }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#ffffff",
                      borderRadius: "18px",
                      p: { xs: 3.5, md: 4 },
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      border: "1px solid rgba(178, 152, 115, 0.22)",
                      boxShadow: "0 10px 30px -10px rgba(44, 56, 41, 0.06)",
                      position: "relative",
                      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        borderColor: "rgba(178, 152, 115, 0.55)",
                        boxShadow: "0 20px 40px -12px rgba(44, 56, 41, 0.12), 0 0 0 1px rgba(178, 152, 115, 0.2)",
                        "& .icon-wrap": {
                          background: `linear-gradient(135deg, ${brandGreen} 0%, #2f3c2c 100%)`,
                          color: "#ffffff",
                          transform: "scale(1.08) rotate(4deg)",
                        },
                      },
                    }}
                  >
                    {/* Top Row: Number & Tag */}
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                      <Box
                        className="icon-wrap"
                        sx={{
                          width: 58,
                          height: 58,
                          borderRadius: "14px",
                          backgroundColor: "#f4f7f3",
                          border: "1px solid rgba(178, 152, 115, 0.3)",
                          color: brandGreen,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.4s ease",
                        }}
                      >
                        {item.icon}
                      </Box>
                      <span
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          letterSpacing: "0.16em",
                          color: "#917753",
                          backgroundColor: "rgba(178, 152, 115, 0.12)",
                          padding: "4px 12px",
                          borderRadius: "50px",
                        }}
                      >
                        {item.tag}
                      </span>
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontWeight: 600,
                        fontSize: "1.25rem",
                        color: "#1e281e",
                        mb: 1.5,
                        lineHeight: 1.35,
                      }}
                    >
                      {item.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "0.88rem",
                        color: "#576355",
                        lineHeight: 1.65,
                        flexGrow: 1,
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Bottom Consultation Strip */}
          <Box
            sx={{
              mt: { xs: 6, md: 8 },
              p: { xs: 3, md: 4 },
              borderRadius: "20px",
              background: "linear-gradient(135deg, #1e281e 0%, #293828 100%)",
              border: "1px solid rgba(178, 152, 115, 0.3)",
              boxShadow: "0 15px 40px rgba(30, 40, 30, 0.25)",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 3,
            }}
          >
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                sx={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: { xs: "1.3rem", md: "1.6rem" },
                  color: "#ffffff",
                  fontWeight: 600,
                  mb: 0.5,
                }}
              >
                Planning a Villa, Penthouse, or Apartment Interior in Bangalore?
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.88rem",
                  color: "rgba(223, 207, 184, 0.9)",
                }}
              >
                Get a comprehensive 3D moodboard and itemized BOQ estimate with our Principal Architect.
              </Typography>
            </Box>

            <Button
              onClick={() => setOpen(true)}
              endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem !important" }} />}
              sx={{
                background: "linear-gradient(135deg, #b29873 0%, #9e825c 100%)",
                color: "#ffffff",
                px: 4,
                py: 1.6,
                borderRadius: "50px",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                boxShadow: "0 8px 24px rgba(178, 152, 115, 0.35)",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "linear-gradient(135deg, #c5a880 0%, #b29873 100%)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 30px rgba(178, 152, 115, 0.5)",
                },
              }}
            >
              Talk to Our Designer
            </Button>
          </Box>
        </Container>

        <ContactModal open={open} setOpen={setOpen} />
      </Box>
    </>
  );
};

export default Services;
