import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Container,
    Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import ContactModal from "../ContactModal/ContactModal";
import { Helmet } from "react-helmet-async";

// High-end Architectural SVG Icons
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import ArchitectureOutlinedIcon from '@mui/icons-material/ArchitectureOutlined';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BRAND_GREEN = "#42523e";
const BRAND_GOLD = "#b29873";

const steps = [
    {
        num: "01",
        label: "Spatial Discovery",
        subtitle: "Vision & Consultation",
        desc: "In-depth lifestyle interview, laser site measurements, and tailored moodboards aligned with your architectural preferences.",
        icon: <DesignServicesOutlinedIcon sx={{ fontSize: 28 }} />,
    },
    {
        num: "02",
        label: "Virtual 4K Walkthrough",
        subtitle: "Design & Fixed BOQ",
        desc: "Photorealistic 3D rendering of every room, material palette finalization, and transparent zero-escalation pricing agreement.",
        icon: <ArchitectureOutlinedIcon sx={{ fontSize: 28 }} />,
    },
    {
        num: "03",
        label: "Precision Fabrication",
        subtitle: "German In-House Millwork",
        desc: "Automated CNC cutting, drilling, and PUR zero-joint edge banding in our Bangalore manufacturing facility.",
        icon: <PrecisionManufacturingOutlinedIcon sx={{ fontSize: 28 }} />,
    },
    {
        num: "04",
        label: "White-Glove Fitment",
        subtitle: "Master Craftsmen Assembly",
        desc: "Quick, clean, and dust-controlled turnkey installation supervised by a dedicated site architect under strict 150-point QC.",
        icon: <HandymanOutlinedIcon sx={{ fontSize: 28 }} />,
    },
    {
        num: "05",
        label: "Pristine Handover",
        subtitle: "10-Year Warranty Issued",
        desc: "Post-installation deep cleaning, milestone walkthrough, ceremonial key handover, and long-term peace of mind certification.",
        icon: <KeyOutlinedIcon sx={{ fontSize: 28 }} />,
    },
];

const HowItWorks = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Helmet>
                <title>Our Seamless 5-Step Architectural Process | Tvashta Interior Bangalore</title>
                <meta
                    name="description"
                    content="Explore Tvashta Interior's 5-stage turnkey journey: Discovery, 3D Walkthrough, Factory Millwork, White-glove fitment, and 10-year warranty handover."
                />
            </Helmet>

            <Box
                component="section"
                sx={{
                    py: { xs: 8, md: 12 },
                    bgcolor: "#ffffff",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <Container maxWidth="lg">
                    {/* Header */}
                    <Box sx={{ textAlign: "center", mb: { xs: 6, md: 9 } }}>
                        <motion.div
                            variants={SlideUp(0.1)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="section-badge-global"
                        >
                            ✦ ARCHITECTURAL JOURNEY ✦
                        </motion.div>
                        <motion.h2
                            variants={SlideUp(0.2)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="section-title-global"
                        >
                            The Seamless 5-Stage Turnkey Journey
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
                                maxWidth: "700px",
                                margin: "0 auto",
                                lineHeight: 1.7,
                            }}
                        >
                            From conceptual visualization to ceremonial key handover, experience an impeccably structured interior process with zero site friction.
                        </motion.p>
                    </Box>

                    {/* Timeline Grid */}
                    <Grid container spacing={{ xs: 3, md: 2.5 }} justifyContent="center">
                        {steps.map((step, index) => (
                            <Grid item xs={12} sm={6} md={2.4} key={index}>
                                <motion.div
                                  variants={SlideUp(0.12 * index)}
                                  initial="initial"
                                  whileInView="animate"
                                  viewport={{ once: true }}
                                  style={{ height: "100%" }}
                                >
                                    <Box
                                        sx={{
                                            backgroundColor: "#faf8f5",
                                            borderRadius: "18px",
                                            p: { xs: 3, md: 3 },
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            border: "1px solid rgba(178, 152, 115, 0.22)",
                                            boxShadow: "0 8px 24px -10px rgba(44, 56, 41, 0.05)",
                                            position: "relative",
                                            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                                            "&:hover": {
                                                transform: "translateY(-6px)",
                                                borderColor: "rgba(178, 152, 115, 0.55)",
                                                boxShadow: "0 18px 36px -10px rgba(44, 56, 41, 0.12)",
                                                "& .step-avatar": {
                                                    background: `linear-gradient(135deg, ${BRAND_GREEN} 0%, #293828 100%)`,
                                                    color: "#ffffff",
                                                    borderColor: BRAND_GOLD,
                                                    transform: "scale(1.06)",
                                                },
                                            },
                                        }}
                                    >
                                        {/* Top Badge: Number & Icon */}
                                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2.5 }}>
                                            <span
                                                style={{
                                                    fontFamily: "'Playfair Display', Georgia, serif",
                                                    fontSize: "1.25rem",
                                                    fontWeight: 700,
                                                    color: BRAND_GOLD,
                                                }}
                                            >
                                                {step.num}
                                            </span>
                                            <Box
                                                className="step-avatar"
                                                sx={{
                                                    width: 48,
                                                    height: 48,
                                                    borderRadius: "12px",
                                                    backgroundColor: "#ffffff",
                                                    border: "1px solid rgba(178, 152, 115, 0.3)",
                                                    color: BRAND_GREEN,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    transition: "all 0.3s ease",
                                                }}
                                            >
                                                {step.icon}
                                            </Box>
                                        </Box>

                                        {/* Label */}
                                        <Typography
                                            sx={{
                                                fontFamily: "'Playfair Display', Georgia, serif",
                                                fontSize: "1.1rem",
                                                fontWeight: 600,
                                                color: "#1e281e",
                                                mb: 0.5,
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            {step.label}
                                        </Typography>

                                        {/* Subtitle */}
                                        <Typography
                                            sx={{
                                                fontFamily: "'Montserrat', sans-serif",
                                                fontSize: "0.72rem",
                                                fontWeight: 700,
                                                letterSpacing: "0.12em",
                                                textTransform: "uppercase",
                                                color: "#917753",
                                                mb: 1.5,
                                            }}
                                        >
                                            {step.subtitle}
                                        </Typography>

                                        {/* Description */}
                                        <Typography
                                            sx={{
                                                fontFamily: "'Montserrat', sans-serif",
                                                fontSize: "0.82rem",
                                                color: "#576355",
                                                lineHeight: 1.6,
                                                flexGrow: 1,
                                            }}
                                        >
                                            {step.desc}
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Bottom CTA Button */}
                    <Box sx={{ textAlign: "center", mt: { xs: 6, md: 8 } }}>
                        <Button
                            variant="contained"
                            onClick={() => setOpen(true)}
                            endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem !important" }} />}
                            sx={{
                                background: "linear-gradient(135deg, #42523e 0%, #2c3829 100%)",
                                border: "1px solid rgba(178, 152, 115, 0.4)",
                                color: "#ffffff",
                                px: 5,
                                py: 1.6,
                                borderRadius: "50px",
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: "0.82rem",
                                fontWeight: 700,
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                boxShadow: "0 10px 28px rgba(44, 56, 41, 0.25)",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    background: "linear-gradient(135deg, #354432 0%, #20281e 100%)",
                                    borderColor: "#b29873",
                                    transform: "translateY(-2px)",
                                    boxShadow: "0 14px 34px rgba(178, 152, 115, 0.4)",
                                },
                            }}
                        >
                            Schedule Your Design Session
                        </Button>
                    </Box>
                </Container>

                <ContactModal open={open} setOpen={setOpen} />
            </Box>
        </>
    );
};

export default HowItWorks;
