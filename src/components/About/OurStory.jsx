
import React from "react";
import { motion } from "framer-motion";
import {
    Box,
    Container,
    Typography,
    Grid,
} from "@mui/material";
import SEOHead from "../SEO/SEOHead";
import InternalLinks from "../SEO/InternalLinks";
import teamPhoto from "../../assets/landing_page_Image.avif";
import { SlideUp } from "../../animation/animate";

const BRAND_GREEN = "#4a5942";
const BRAND_DARK = "#0f1f15";

const OurStory = () => {
    const stats = [
        { title: "PEOPLE", number: "30+" },
        { title: "YEARS", number: "5+" },
        { title: "PROJECTS", number: "50+" },
    ];

    return (
        <>
            <SEOHead
                title="Our Story - Tvashta Interior"
                description="Discover Our Story at Tvashta Interior. Learn about our mission, values, and commitment to delivering exceptional interior design services in Bangalore."
                keywords="Tvashta interior story, interior design company Bangalore, interior mission, interior values"
                canonical="/about"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "mainEntity": {
                        "@type": "Organization",
                        "name": "Tvashta Interior",
                        "description": "Premier interior design company in Bangalore specializing in modular kitchens and luxury interiors.",
                        "url": "https://Rudreshcg.github.io/tvashta-interior/about"
                    }
                }}
            />

            <Box sx={{ bgcolor: "#fff", overflowX: "hidden" }}>
                {/* Full Width Parallax Hero Image */}
                <Box
                    sx={{
                        width: "100%",
                        height: { xs: "50vh", md: "70vh" },
                        backgroundImage: `url(${teamPhoto})`,
                        backgroundAttachment: { xs: "scroll", md: "fixed" }, // Fixed attachment for parallax feel on desktop
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        "&::after": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0,0,0,0.3)" // Overlay for text readability if needed
                        }
                    }}
                >
                    <motion.div
                        variants={SlideUp(0.2)}
                        initial="initial"
                        whileInView="animate"
                        style={{ position: "relative", zIndex: 1, textAlign: "center" }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontFamily: "Playfair Display, serif",
                                fontWeight: 700,
                                color: "#fff",
                                fontSize: { xs: "3rem", md: "5rem" },
                                letterSpacing: -1,
                                textShadow: "0 4px 10px rgba(0,0,0,0.3)"
                            }}
                        >
                            Our Story
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: "rgba(255,255,255,0.9)",
                                mt: 2,
                                fontWeight: 400,
                                letterSpacing: 1,
                                textTransform: "uppercase"
                            }}
                        >
                            Designing with Passion, Building with Integrity
                        </Typography>
                    </motion.div>
                </Box>

                {/* Content Section */}
                <Container maxWidth="lg" sx={{ py: 10 }}>
                    <Grid container spacing={8} justifyContent="center">
                        <Grid item xs={12} md={10}>
                            <motion.div
                                variants={SlideUp(0.3)}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                            >
                                <Box sx={{ textAlign: "center", mb: 6 }}>
                                    <motion.div
                                        variants={SlideUp(0.2)}
                                        initial="initial"
                                        whileInView="animate"
                                        className="section-badge-global"
                                        style={{ display: "inline-block" }}
                                    >
                                        WHO WE ARE
                                    </motion.div>
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontFamily: "Playfair Display, serif",
                                            fontWeight: 700,
                                            mt: 1,
                                            color: BRAND_DARK,
                                            fontSize: { xs: "2rem", md: "3rem" }
                                        }}
                                    >
                                        Crafting Dreams into Reality
                                    </Typography>
                                    <Box
                                        sx={{
                                            width: 60,
                                            height: 4,
                                            background: "linear-gradient(135deg, #9f8033 0%, #c5a059 50%, #9f8033 100%)",
                                            mx: "auto",
                                            mt: 3,
                                            borderRadius: 2
                                        }}
                                    />
                                </Box>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "#4a4a4a",
                                        mb: 4,
                                        lineHeight: 1.9,
                                        fontSize: "1.125rem",
                                        textAlign: "center"
                                    }}
                                >
                                    Founded in Bangalore with a vision to transform the interior design landscape, Tvashta Interior emerged from a passion for creating spaces that blend functionality with aesthetic excellence. What started as a modest venture has grown into one of Bangalore's most trusted names in residential and commercial interiors.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "#4a4a4a",
                                        mb: 6,
                                        lineHeight: 1.9,
                                        fontSize: "1.125rem",
                                        textAlign: "center"
                                    }}
                                >
                                    Our approach to design has always been client-centric. We believe in understanding each client's unique vision before we start. By integrating modern trends with timeless utility, we create spaces that not only look beautiful but also tell your personal story. At the heart of Tvashta Interior lies our commitment to quality, integrity, and innovation.
                                </Typography>

                                {/* Stats Row */}
                                <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
                                    {stats.map((stat, index) => (
                                        <Grid item xs={4} md={3} key={index}>
                                            <Box sx={{ textAlign: "center" }}>
                                                <Typography
                                                    variant="h2"
                                                    sx={{
                                                        color: BRAND_GREEN,
                                                        fontWeight: 700,
                                                        fontFamily: "Playfair Display, serif",
                                                        fontSize: { xs: "2.5rem", md: "3.5rem" }
                                                    }}
                                                >
                                                    {stat.number}
                                                </Typography>
                                                <Typography
                                                    variant="subtitle2"
                                                    sx={{
                                                        letterSpacing: 2,
                                                        color: "#666",
                                                        fontWeight: 600,
                                                        mt: 1,
                                                        fontSize: { xs: "0.7rem", md: "0.875rem" }
                                                    }}
                                                >
                                                    {stat.title}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>

                {/* Internal Links */}
                <Box sx={{ bgcolor: "#f8f9fa", py: 8, borderTop: "1px solid rgba(0,0,0,0.05)" }}>
                    <Container maxWidth="lg">
                        <InternalLinks currentPage="about" />
                    </Container>
                </Box>
            </Box>
        </>
    );
};

export default OurStory;
