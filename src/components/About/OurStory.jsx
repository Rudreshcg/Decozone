
import React from "react";
import { motion } from "framer-motion";
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SEOHead from "../SEO/SEOHead";
import InternalLinks from "../SEO/InternalLinks";
import teamPhoto from "../../assets/landing_page_Image.avif";
import { SlideUp } from "../../animation/animate";

// Brand Colors
const BRAND_GREEN = "#42523e";
const BRAND_DARK = "#121a12";
const ACCENT_GOLD = "#b29873";
const ACCENT_GOLD_LIGHT = "#dfcfb8";

const OurStory = () => {
    const navigate = useNavigate();

    const stats = [
        { title: "LUXURY HOMES DELIVERED", number: "500+" },
        { title: "GERMAN CNC FACTORY", number: "12,000 sq.ft" },
        { title: "UNCONDITIONAL WARRANTY", number: "10-Year" },
        { title: "GUARANTEED HANDOVER", number: "45 Days" },
    ];

    const pillars = [
        {
            icon: <PrecisionManufacturingIcon sx={{ fontSize: 32, color: ACCENT_GOLD }} />,
            title: "In-House German Millwork",
            desc: "Every carcass, shutter, and fluted panel is crafted on automated German CNC machines at our Rampura manufacturing plant, ensuring zero site dust and flawless millimeter tolerances."
        },
        {
            icon: <ArchitectureIcon sx={{ fontSize: 32, color: ACCENT_GOLD }} />,
            title: "Architectural Virtual Twin",
            desc: "Before a single panel is cut, you walk through your finished residence in calibrated 3D lighting, exact veneer grain finishes, and authentic spatial dimensions."
        },
        {
            icon: <ReceiptLongIcon sx={{ fontSize: 32, color: ACCENT_GOLD }} />,
            title: "Guaranteed Fixed BOQ",
            desc: "No hidden variations or budget escalations mid-project. Our itemized Bill of Quantities specifies every hinge, substrate, and finish upfront with complete transparency."
        },
        {
            icon: <VerifiedUserIcon sx={{ fontSize: 32, color: ACCENT_GOLD }} />,
            title: "Direct Factory Backing",
            desc: "Because we manufacture our own joinery, our 10-year warranty is backed directly by our factory, powered by authentic European fittings from Hafele, Blum, and Hettich."
        }
    ];

    return (
        <Box sx={{ bgcolor: "#faf8f5", overflowX: "hidden" }}>
            <SEOHead
                title="Our Story - Tvashta Interior | Bespoke Architectural Heritage"
                description="Discover the story of Tvashta Interior Bangalore. Where architectural design meets our in-house German CNC factory for turnkey luxury home interiors."
                keywords="Tvashta interior story, luxury interior design Bangalore, modular interior factory Bangalore, custom home interiors"
                canonical="/about"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "mainEntity": {
                        "@type": "Organization",
                        "name": "Tvashta Interior",
                        "description": "Premier luxury interior design atelier and in-house manufacturing company in Bangalore.",
                        "url": "https://Rudreshcg.github.io/tvashta-interior/about"
                    }
                }}
            />

            {/* Parallax Hero Header */}
            <Box
                sx={{
                    width: "100%",
                    height: { xs: "55vh", md: "72vh" },
                    backgroundImage: `url(${teamPhoto})`,
                    backgroundAttachment: { xs: "scroll", md: "fixed" },
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "linear-gradient(to bottom, rgba(18, 26, 18, 0.6) 0%, rgba(18, 26, 18, 0.85) 100%)",
                    }
                }}
            >
                <motion.div
                    variants={SlideUp(0.2)}
                    initial="initial"
                    whileInView="animate"
                    style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 20px" }}
                >
                    <Box
                        sx={{
                            display: "inline-block",
                            border: "1px solid rgba(178, 152, 115, 0.6)",
                            bgcolor: "rgba(18, 26, 18, 0.6)",
                            backdropFilter: "blur(8px)",
                            px: 2.5,
                            py: 0.6,
                            borderRadius: "50px",
                            mb: 2.5
                        }}
                    >
                        <Typography
                            sx={{
                                color: ACCENT_GOLD_LIGHT,
                                fontSize: "0.8rem",
                                letterSpacing: "2.5px",
                                fontWeight: 700,
                                textTransform: "uppercase"
                            }}
                        >
                            ✦ OUR ARCHITECTURAL HERITAGE ✦
                        </Typography>
                    </Box>

                    <Typography
                        variant="h1"
                        sx={{
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 700,
                            color: "#ffffff",
                            fontSize: { xs: "2.8rem", md: "4.8rem" },
                            letterSpacing: "-0.5px",
                            textShadow: "0 4px 20px rgba(0,0,0,0.5)",
                            mb: 2,
                        }}
                    >
                        Crafting Living Legacies
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: "'Montserrat', sans-serif",
                            color: "rgba(238, 243, 236, 0.9)",
                            maxWidth: 680,
                            mx: "auto",
                            fontWeight: 400,
                            letterSpacing: "1.5px",
                            textTransform: "uppercase",
                            fontSize: { xs: "0.85rem", md: "1rem" },
                            lineHeight: 1.6,
                        }}
                    >
                        Where Visionary Spatial Design Harmonizes With German Factory Millwork
                    </Typography>
                </motion.div>
            </Box>

            {/* Narrative & Atelier Philosophy */}
            <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
                <Grid container spacing={8} justifyContent="center">
                    <Grid item xs={12} md={10}>
                        <Box>
                            <Box sx={{ textAlign: "center", mb: 6 }}>
                                <div className="section-badge-global">
                                    ✦ OUR ESSENCE ✦
                                </div>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontWeight: 700,
                                        mt: 1.5,
                                        color: BRAND_DARK,
                                        fontSize: { xs: "2.2rem", md: "3.2rem" }
                                    }}
                                >
                                    Refining Luxury Living Across Bangalore
                                </Typography>
                                <Box
                                    sx={{
                                        width: 60,
                                        height: "2px",
                                        background: ACCENT_GOLD,
                                        mx: "auto",
                                        mt: 2.5,
                                    }}
                                />
                            </Box>

                            <Typography
                                sx={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    color: BRAND_GREEN,
                                    mb: 3.5,
                                    lineHeight: 2,
                                    fontSize: { xs: "1rem", md: "1.15rem" },
                                    textAlign: "center",
                                    fontWeight: 400
                                }}
                            >
                                Founded in Bangalore with a mission to eliminate the compromises and delays of conventional interior contractors, Tvashta Interior unites high-concept architectural design with dedicated in-house German CNC fabrication. We believe true luxury isn't merely surface-deep—it lies in the invisible alignment of a seamless joint, the whisper-soft glide of European hardware, and spaces calibrated around your daily rituals.
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    color: "#5b6d57",
                                    mb: 6,
                                    lineHeight: 2,
                                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                                    textAlign: "center"
                                }}
                            >
                                Unlike traditional interior agencies that outsource carpentry to unpredictable third-party laborers, every kitchen carcass, bespoke wardrobe, and fluted acoustic wall panel from Tvashta is fabricated in our own 12,000 sq.ft facility under rigorous quality oversight.
                            </Typography>

                            {/* Elevated Stats Row */}
                            <Grid container spacing={3} justifyContent="center" sx={{ mt: 3, mb: 8 }}>
                                {stats.map((stat, index) => (
                                    <Grid item xs={6} md={3} key={index}>
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                p: 3,
                                                textAlign: "center",
                                                background: "#ffffff",
                                                border: "1px solid rgba(178, 152, 115, 0.25)",
                                                borderRadius: "14px",
                                                boxShadow: "0 8px 24px rgba(66, 82, 62, 0.05)",
                                                transition: "all 0.3s ease",
                                                "&:hover": {
                                                    transform: "translateY(-4px)",
                                                    borderColor: ACCENT_GOLD,
                                                    boxShadow: "0 14px 30px rgba(66, 82, 62, 0.1)",
                                                }
                                            }}
                                        >
                                            <Typography
                                                variant="h3"
                                                sx={{
                                                    color: BRAND_GREEN,
                                                    fontWeight: 700,
                                                    fontFamily: "'Playfair Display', serif",
                                                    fontSize: { xs: "1.8rem", md: "2.4rem" },
                                                    mb: 0.8
                                                }}
                                            >
                                                {stat.number}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontFamily: "'Montserrat', sans-serif",
                                                    letterSpacing: "1.2px",
                                                    color: "#7a8a77",
                                                    fontWeight: 600,
                                                    fontSize: { xs: "0.68rem", md: "0.75rem" },
                                                    textTransform: "uppercase"
                                                }}
                                            >
                                                {stat.title}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>

                {/* The 4 Architectural Pillars */}
                <Box sx={{ mt: 4, mb: 10 }}>
                    <Box sx={{ textAlign: "center", mb: 6 }}>
                        <div className="section-badge-global">
                            ✦ OUR FOUNDATION ✦
                        </div>
                        <Typography
                            variant="h3"
                            sx={{
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 700,
                                mt: 1.5,
                                color: BRAND_DARK,
                                fontSize: { xs: "2rem", md: "2.8rem" }
                            }}
                        >
                            The Tvashta Architectural Standard
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {pillars.map((pillar, idx) => (
                            <Grid item xs={12} sm={6} key={idx}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4.5,
                                        height: "100%",
                                        borderRadius: "16px",
                                        background: "#ffffff",
                                        border: "1px solid rgba(178, 152, 115, 0.25)",
                                        boxShadow: "0 8px 24px rgba(66, 82, 62, 0.04)",
                                        display: "flex",
                                        flexDirection: "column",
                                        transition: "all 0.35s ease",
                                        "&:hover": {
                                            transform: "translateY(-6px)",
                                            borderColor: ACCENT_GOLD,
                                            boxShadow: "0 18px 36px rgba(66, 82, 62, 0.1)",
                                        }
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 58,
                                            height: 58,
                                            borderRadius: "12px",
                                            bgcolor: "#faf8f5",
                                            border: "1px solid rgba(178, 152, 115, 0.3)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            mb: 3
                                        }}
                                    >
                                        {pillar.icon}
                                    </Box>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontFamily: "'Playfair Display', serif",
                                            fontWeight: 700,
                                            fontSize: "1.3rem",
                                            color: BRAND_DARK,
                                            mb: 1.5
                                        }}
                                    >
                                        {pillar.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontFamily: "'Montserrat', sans-serif",
                                            color: "#5b6d57",
                                            lineHeight: 1.75,
                                            fontSize: "0.92rem",
                                            fontWeight: 400
                                        }}
                                    >
                                        {pillar.desc}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Private Atelier Consultation Banner */}
                <Box
                    sx={{
                        p: { xs: 4, md: 6 },
                        borderRadius: "20px",
                        background: "linear-gradient(135deg, #182418 0%, #121a12 100%)",
                        border: "1px solid rgba(178, 152, 115, 0.35)",
                        textAlign: "center",
                        color: "#fff",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "0.8rem",
                            letterSpacing: "2.5px",
                            textTransform: "uppercase",
                            color: ACCENT_GOLD,
                            fontWeight: 700,
                            mb: 1.5,
                        }}
                    >
                        ✦ BEGIN YOUR RESIDENTIAL JOURNEY ✦
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 700,
                            fontSize: { xs: "1.8rem", md: "2.6rem" },
                            mb: 2,
                            color: "#ffffff",
                        }}
                    >
                        Experience Bespoke Interiors In Person
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "'Montserrat', sans-serif",
                            color: "rgba(238, 243, 236, 0.8)",
                            maxWidth: 640,
                            mx: "auto",
                            fontSize: { xs: "0.95rem", md: "1.05rem" },
                            lineHeight: 1.7,
                            mb: 4
                        }}
                    >
                        Schedule a private walkthrough at our Bangalore experience center or arrange an in-depth design consultation with our principal architects.
                    </Typography>
                    <Button
                        onClick={() => navigate("/contact")}
                        className="gold-btn"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                            px: 5,
                            py: 1.6,
                            fontSize: "0.95rem",
                            letterSpacing: "1px",
                            fontWeight: 700,
                        }}
                    >
                        Book A Private Consultation
                    </Button>
                </Box>

                {/* Internal Links */}
                <InternalLinks currentPage="about" />
            </Container>
        </Box>
    );
};

export default OurStory;

