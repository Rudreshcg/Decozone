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
        { name: "Dhanush N Gowda", title: "Founder & CEO", image: null },
        { name: "Chandrashekar.K", title: "Founder and Interior design COO", image: null },
        { name: "Shree Bhagwat Mishra", title: "Founder and interior Factory COO", image: null },
        { name: "VISHWANATH RAVEENDRA ALUR", title: "Interior site engg", image: null },
        { name: "Mohan S", title: "Sales and Marketing Head", image: null },
        { name: "Kavana A", title: "Jr Interior designer", image: null },
        { name: "Manasa N", title: "Head of office manager", image: null },
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
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 40, damping: 15 },
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
                    <Box sx={{ textAlign: "center", mb: { xs: 8, md: 10 } }}>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="section-badge-global"
                        >
                            OUR EXPERTS
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="section-title-global"
                        >
                            Meet The Team
                        </motion.h2>
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
                                mt: 3,
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
                        spacing={5}
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
                                        p: 4,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        textAlign: "center",
                                        background: "linear-gradient(to bottom, #ffffff 0%, #fcfcfc 100%)",
                                        border: "1px solid rgba(159, 128, 51, 0.2)",
                                        borderRadius: 2,
                                        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                                        position: "relative",
                                        overflow: "hidden",
                                        "&:hover": {
                                            transform: "translateY(-12px)",
                                            boxShadow: "0 25px 50px rgba(74, 89, 66, 0.12)",
                                            border: `1px solid ${ACCENT_GOLD}`,
                                            "& .team-avatar-ring": {
                                                borderColor: ACCENT_GOLD,
                                                transform: "scale(1.05)",
                                            },
                                        },
                                    }}
                                >
                                    {/* Avatar Container with Ring Effect */}
                                    <Box
                                        className="team-avatar-container"
                                        sx={{
                                            mb: 4,
                                            position: "relative",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box
                                            className="team-avatar-ring"
                                            sx={{
                                                position: "absolute",
                                                width: 156,
                                                height: 156,
                                                borderRadius: "50%",
                                                border: "1px solid rgba(159, 128, 51, 0.3)",
                                                transition: "all 0.5s ease",
                                            }}
                                        />
                                        <Avatar
                                            src={member.image}
                                            alt={member.name}
                                            sx={{
                                                width: 140,
                                                height: 140,
                                                background: `linear-gradient(135deg, ${BRAND_GREEN} 0%, #2c3e50 100%)`, // Deep premium gradient
                                                color: "#f4f1ea",
                                                fontSize: "2.8rem",
                                                fontFamily: "'Playfair Display', serif",
                                                border: `4px solid #fff`,
                                                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                                            }}
                                        >
                                            {member.name.charAt(0)}
                                        </Avatar>
                                    </Box>

                                    {/* Content */}
                                    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontFamily: "'Playfair Display', serif",
                                                fontWeight: 700,
                                                color: BRAND_DARK,
                                                textTransform: "uppercase",
                                                letterSpacing: "1px",
                                                mb: 1.5,
                                                fontSize: "1rem",
                                                lineHeight: 1.4,
                                                minHeight: "44px", // Ensure consistent height for 2-line names
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                        >
                                            {member.name}
                                        </Typography>

                                        {/* Decorative Divider */}
                                        <Box
                                            sx={{
                                                width: 40,
                                                height: "2px",
                                                bgcolor: ACCENT_GOLD,
                                                opacity: 0.5,
                                                mb: 2
                                            }}
                                        />

                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                fontFamily: "'Montserrat', sans-serif",
                                                fontWeight: 500,
                                                color: "#888",
                                                textTransform: "uppercase",
                                                fontSize: "0.7rem",
                                                letterSpacing: "1.5px",
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            {member.title}
                                        </Typography>
                                    </Box>
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
