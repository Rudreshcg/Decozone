import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    Avatar,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import SEOHead from "../SEO/SEOHead";
import InternalLinks from "../SEO/InternalLinks";

// --- Constants & Premium Colors ---
const BRAND_GREEN = "#4a5942";
const BRAND_DARK = "#2c3e50";
const ACCENT_GOLD = "#9f8033";
const BG_CREAM = "#f4f1ea";
const GOLD_GRADIENT = "linear-gradient(135deg, #9f8033 0%, #c5a059 50%, #9f8033 100%)";

const Teams = () => {
    // Placeholder team members
    const teamMembers = [
        { name: "Dhanush N Gowda", title: "FOUNDER & CEO", image: null },
        { name: "PRIYA SHARMA", title: "CHIEF ARCHITECT", image: null },
        { name: "AMIT PATEL", title: "Senior Project Manager", image: null },
        { name: "SUNITA REDDY", title: "Head of Design", image: null },
        { name: "VIKRAM SINGH", title: "Senior Site Engineer", image: null },
        { name: "ANJALI MENON", title: "Interior Design Specialist", image: null },
        { name: "ROHIT MALHOTRA", title: "Quality Assurance Lead", image: null },
        { name: "MEERA KRISHNAN", title: "Client Relations Manager", image: null },
    ];

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 50, damping: 20 },
        },
    };

    return (
        <React.Fragment>
            <SEOHead
                title="Our Team - Tvashta Interior"
                description="Meet the expert team at Tvashta Interior. Our architects, designers, and engineers bring years of experience to deliver exceptional interior projects in Bangalore."
                keywords="Tvashta interior team, interior designers Bangalore, Bangalore interior experts"
                canonical="/teams"
            />

            <Box
                component="section"
                sx={{
                    py: { xs: 8, md: 12 },
                    background: `linear-gradient(to bottom, ${BG_CREAM} 0%, #ffffff 100%)`,
                    minHeight: "100vh",
                }}
            >
                <Container maxWidth="lg">
                    {/* Header Section */}
                    <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
                        <Typography
                            variant="h2"
                            component={motion.h2}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            sx={{
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 700,
                                color: BRAND_GREEN,
                                mb: 2,
                                position: "relative",
                                display: "inline-block",
                                "&::after": {
                                    content: '""',
                                    position: "absolute",
                                    bottom: -10,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: 80,
                                    height: 4,
                                    background: GOLD_GRADIENT,
                                    borderRadius: 2,
                                },
                            }}
                        >
                            Our Team
                        </Typography>
                        <Typography
                            variant="body1"
                            component={motion.p}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            sx={{
                                fontFamily: "'Montserrat', sans-serif",
                                color: "#666",
                                maxWidth: 700,
                                mx: "auto",
                                mt: 4,
                                lineHeight: 1.8,
                                fontSize: { xs: "1rem", md: "1.1rem" },
                            }}
                        >
                            At Tvashta Interior, our success is built on the foundation of our exceptional team.
                            Each member brings unique expertise, dedication, and passion to every project.
                        </Typography>
                    </Box>

                    {/* Team Grid */}
                    <Grid
                        container
                        spacing={4}
                        component={motion.div}
                        variants={containerVariants}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                    >
                        {teamMembers.map((member, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index} component={motion.div} variants={cardVariants}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        textAlign: "center",
                                        background: "#ffffff",
                                        border: "1px solid rgba(159, 128, 51, 0.1)", // Subtle gold border
                                        borderRadius: 4,
                                        transition: "all 0.4s ease",
                                        "&:hover": {
                                            transform: "translateY(-10px)",
                                            boxShadow: "0 20px 40px rgba(74, 89, 66, 0.15)", // Greenish shadow
                                            border: `1px solid ${ACCENT_GOLD}`,
                                            "& .team-avatar": {
                                                borderColor: ACCENT_GOLD,
                                                transform: "scale(1.05)",
                                            },
                                            "& .team-role": {
                                                color: BRAND_GREEN,
                                            }
                                        },
                                    }}
                                >
                                    <Box
                                        className="team-avatar-container"
                                        sx={{
                                            mb: 3,
                                            position: "relative",
                                        }}
                                    >
                                        <Avatar
                                            className="team-avatar"
                                            src={member.image}
                                            alt={member.name}
                                            sx={{
                                                width: 140,
                                                height: 140,
                                                bgcolor: BRAND_GREEN,
                                                color: "#fff",
                                                fontSize: "3rem",
                                                fontFamily: "'Playfair Display', serif",
                                                border: `3px solid rgba(159, 128, 51, 0.3)`, // Muted gold border initally
                                                transition: "all 0.4s ease",
                                                boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                                            }}
                                        >
                                            {member.name.charAt(0)}
                                        </Avatar>
                                    </Box>

                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontFamily: "'Playfair Display', serif",
                                            fontWeight: 700,
                                            color: BRAND_DARK,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.5px",
                                            mb: 1,
                                            fontSize: "1.1rem",
                                        }}
                                    >
                                        {member.name}
                                    </Typography>

                                    <Typography
                                        className="team-role"
                                        variant="subtitle2"
                                        sx={{
                                            fontFamily: "'Montserrat', sans-serif",
                                            fontWeight: 600,
                                            color: ACCENT_GOLD,
                                            textTransform: "uppercase",
                                            fontSize: "0.75rem",
                                            letterSpacing: "1px",
                                            transition: "color 0.3s ease",
                                        }}
                                    >
                                        {member.title}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Internal Links - Kept subtle */}
                    <Box sx={{ mt: 10 }}>
                        <InternalLinks currentPage="teams" />
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    );
};

export default Teams;
