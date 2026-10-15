import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    Avatar,
    Chip,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import EngineeringIcon from "@mui/icons-material/Engineering";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PaletteIcon from "@mui/icons-material/Palette";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import TerminalIcon from "@mui/icons-material/Terminal";
import SEOHead from "../SEO/SEOHead";
import InternalLinks from "../SEO/InternalLinks";

// --- Brand Logo Palette ---
const BRAND_GREEN = "#42523e";
const BRAND_DARK = "#121a12";
const ACCENT_GOLD = "#b29873";
const ACCENT_GOLD_LIGHT = "#dfcfb8";
const BG_CREAM = "#faf8f5";

const Teams = () => {
    // Executive leadership & atelier team with refined titles and departments
    const leadership = [
        {
            name: "Dhanush N Gowda",
            title: "Founder & Chief Executive Officer",
            department: "Executive Leadership",
            initials: "DG",
            bio: "Visionary leader driving architectural design innovation and bespoke client experiences across South India.",
            icon: <VerifiedIcon sx={{ fontSize: 16 }} />
        },
        {
            name: "Chandrashekar K",
            title: "Co-Founder & COO – Interior Design",
            department: "Design Atelier",
            initials: "CK",
            bio: "Master of spatial design, curating high-end bespoke residences and luxurious bespoke styling.",
            icon: <ArchitectureIcon sx={{ fontSize: 16 }} />
        },
        {
            name: "Shree Bhagwat Mishra",
            title: "Co-Founder & COO – In-House Manufacturing",
            department: "Factory & Fabrication",
            initials: "SM",
            bio: "Directs Tvashta's German CNC factory, ensuring German-grade joinery and micrometric millwork precision.",
            icon: <PrecisionManufacturingIcon sx={{ fontSize: 16 }} />
        },
    ];

    const specialists = [
        {
            name: "Vishwanath Raveendra Alur",
            title: "Head of Site Execution & Engineering",
            department: "Site Engineering",
            initials: "VA",
            bio: "Oversees site civil works, turnkey structural integrity, and 45-day guaranteed handover timelines.",
            icon: <EngineeringIcon sx={{ fontSize: 16 }} />
        },
        {
            name: "Mohan S",
            title: "Head of Client Relations & Advisory",
            department: "Client Advisory",
            initials: "MS",
            bio: "Guiding homeowners through transparent fixed BOQs and dedicated project consulting from day one.",
            icon: <HandshakeIcon sx={{ fontSize: 16 }} />
        },
        {
            name: "Kavana A",
            title: "Architectural Interior Designer",
            department: "Spatial Design",
            initials: "KA",
            bio: "Specializing in 3D photorealistic virtual twins, lighting physics, and tailored European materials.",
            icon: <PaletteIcon sx={{ fontSize: 16 }} />
        },
        {
            name: "Manasa N",
            title: "Studio & Project Operations Lead",
            department: "Project Operations",
            initials: "MN",
            bio: "Coordinates supply chains, procurement, and seamless communication between architects and craftsmen.",
            icon: <DomainVerificationIcon sx={{ fontSize: 16 }} />
        },
        {
            name: "Rudresh CG",
            title: "Software Engineer",
            department: "Software Engineering",
            initials: "RC",
            bio: "Architecting high-performance digital platforms, interactive 3D web experiences, and seamless client portals for Tvashta Interior.",
            icon: <TerminalIcon sx={{ fontSize: 16 }} />
        },
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
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <React.Fragment>
            <SEOHead
                title="Our Team - Tvashta Interior | Masters of Bespoke Design"
                description="Meet the expert team of architects, designers, and site engineers at Tvashta Interior Bangalore. 100% in-house expertise delivering luxury residences."
                keywords="Tvashta interior team, interior designers Bangalore, luxury interior architects, modular factory team"
                canonical="/teams"
            />

            <Box
                component="section"
                sx={{
                    py: { xs: 8, md: 12 },
                    background: `linear-gradient(to bottom, #faf8f5 0%, #ffffff 50%, #faf8f5 100%)`,
                    minHeight: "100vh",
                }}
            >
                <Container maxWidth="lg">
                    {/* Header Section */}
                    <Box sx={{ textAlign: "center", mb: { xs: 6, md: 9 } }}>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="section-badge-global"
                        >
                            ✦ THE ATELIER EXPERTS ✦
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="section-title-global"
                        >
                            The Minds Behind The Craft
                        </motion.h2>
                        <Typography
                            variant="body1"
                            component={motion.p}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            sx={{
                                fontFamily: "'Montserrat', sans-serif",
                                color: "#556353",
                                maxWidth: 720,
                                mx: "auto",
                                mt: 3,
                                lineHeight: 1.8,
                                fontSize: { xs: "0.95rem", md: "1.05rem" },
                            }}
                        >
                            Every bespoke residence is brought to life through seamless harmony between our design atelier, our master site engineers, and our state-of-the-art German CNC manufacturing facility.
                        </Typography>
                    </Box>

                    {/* Section 1: Executive Leadership (Top 3) */}
                    <Box sx={{ mb: 7 }}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, mb: 4 }}>
                            <Box sx={{ width: 40, height: "1px", bgcolor: ACCENT_GOLD, opacity: 0.6 }} />
                            <Typography
                                sx={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "1.2rem",
                                    fontWeight: 600,
                                    letterSpacing: "2px",
                                    textTransform: "uppercase",
                                    color: BRAND_DARK,
                                }}
                            >
                                Executive Leadership
                            </Typography>
                            <Box sx={{ width: 40, height: "1px", bgcolor: ACCENT_GOLD, opacity: 0.6 }} />
                        </Box>

                        <Grid
                            container
                            spacing={4}
                            justifyContent="center"
                            component={motion.div}
                            variants={containerVariants}
                            initial="hidden"
                            animate={isVisible ? "visible" : "hidden"}
                        >
                            {leadership.map((member, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index} component={motion.div} variants={cardVariants}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: { xs: 3.5, md: 4.5 },
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            textAlign: "center",
                                            background: "#ffffff",
                                            border: "1px solid rgba(178, 152, 115, 0.25)",
                                            borderRadius: "16px",
                                            boxShadow: "0 10px 30px rgba(66, 82, 62, 0.05)",
                                            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                                            position: "relative",
                                            overflow: "hidden",
                                            "&:hover": {
                                                transform: "translateY(-8px)",
                                                borderColor: ACCENT_GOLD,
                                                boxShadow: "0 22px 45px rgba(66, 82, 62, 0.12)",
                                                "& .avatar-halo": {
                                                    borderColor: ACCENT_GOLD,
                                                    transform: "scale(1.08)",
                                                },
                                            },
                                        }}
                                    >
                                        {/* Department Pill */}
                                        <Chip
                                            icon={member.icon}
                                            label={member.department}
                                            size="small"
                                            sx={{
                                                mb: 3,
                                                bgcolor: "#eef3ec",
                                                color: BRAND_GREEN,
                                                fontWeight: 700,
                                                fontSize: "0.72rem",
                                                letterSpacing: "1.2px",
                                                textTransform: "uppercase",
                                                border: "1px solid rgba(66, 82, 62, 0.15)",
                                                "& .MuiChip-icon": { color: ACCENT_GOLD },
                                            }}
                                        />

                                        {/* Luxury Monogram Avatar with Double Ring */}
                                        <Box sx={{ position: "relative", mb: 3, display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <Box
                                                className="avatar-halo"
                                                sx={{
                                                    position: "absolute",
                                                    width: 130,
                                                    height: 130,
                                                    borderRadius: "50%",
                                                    border: "1.5px dashed rgba(178, 152, 115, 0.4)",
                                                    transition: "all 0.5s ease",
                                                }}
                                            />
                                            <Avatar
                                                sx={{
                                                    width: 110,
                                                    height: 110,
                                                    background: `linear-gradient(145deg, #1e281e 0%, #121a12 100%)`,
                                                    color: ACCENT_GOLD_LIGHT,
                                                    fontSize: "2rem",
                                                    fontWeight: 600,
                                                    fontFamily: "'Playfair Display', serif",
                                                    letterSpacing: "1px",
                                                    border: `2px solid ${ACCENT_GOLD}`,
                                                    boxShadow: "0 10px 25px rgba(18, 26, 18, 0.25)",
                                                }}
                                            >
                                                {member.initials}
                                            </Avatar>
                                        </Box>

                                        {/* Member Info */}
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontFamily: "'Playfair Display', serif",
                                                fontWeight: 700,
                                                color: BRAND_DARK,
                                                fontSize: "1.25rem",
                                                mb: 1,
                                            }}
                                        >
                                            {member.name}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontFamily: "'Montserrat', sans-serif",
                                                fontWeight: 600,
                                                color: ACCENT_GOLD,
                                                textTransform: "uppercase",
                                                fontSize: "0.78rem",
                                                letterSpacing: "1.2px",
                                                mb: 2,
                                                lineHeight: 1.4,
                                            }}
                                        >
                                            {member.title}
                                        </Typography>

                                        <Box sx={{ width: 36, height: "1px", bgcolor: ACCENT_GOLD, opacity: 0.35, mb: 2 }} />

                                        <Typography
                                            sx={{
                                                fontFamily: "'Montserrat', sans-serif",
                                                color: "#6b7a69",
                                                fontSize: "0.85rem",
                                                lineHeight: 1.6,
                                                fontWeight: 400,
                                            }}
                                        >
                                            {member.bio}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    {/* Section 2: Studio & Execution Specialists (4 Columns) */}
                    <Box sx={{ mb: 6 }}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, mb: 4, mt: 3 }}>
                            <Box sx={{ width: 40, height: "1px", bgcolor: ACCENT_GOLD, opacity: 0.6 }} />
                            <Typography
                                sx={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "1.2rem",
                                    fontWeight: 600,
                                    letterSpacing: "2px",
                                    textTransform: "uppercase",
                                    color: BRAND_DARK,
                                }}
                            >
                                Atelier, Site & Tech Specialists
                            </Typography>
                            <Box sx={{ width: 40, height: "1px", bgcolor: ACCENT_GOLD, opacity: 0.6 }} />
                        </Box>

                        <Grid
                            container
                            spacing={3}
                            justifyContent="center"
                            component={motion.div}
                            variants={containerVariants}
                            initial="hidden"
                            animate={isVisible ? "visible" : "hidden"}
                        >
                            {specialists.map((member, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index} component={motion.div} variants={cardVariants}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 3.5,
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            textAlign: "center",
                                            background: "#ffffff",
                                            border: "1px solid rgba(178, 152, 115, 0.2)",
                                            borderRadius: "14px",
                                            boxShadow: "0 6px 20px rgba(66, 82, 62, 0.04)",
                                            transition: "all 0.35s ease",
                                            "&:hover": {
                                                transform: "translateY(-6px)",
                                                borderColor: ACCENT_GOLD,
                                                boxShadow: "0 18px 35px rgba(66, 82, 62, 0.09)",
                                                "& .specialist-halo": {
                                                    borderColor: ACCENT_GOLD,
                                                    transform: "scale(1.06)",
                                                },
                                            },
                                        }}
                                    >
                                        {/* Department Pill */}
                                        <Chip
                                            icon={member.icon}
                                            label={member.department}
                                            size="small"
                                            sx={{
                                                mb: 2.5,
                                                bgcolor: "#faf8f5",
                                                color: BRAND_GREEN,
                                                fontWeight: 600,
                                                fontSize: "0.68rem",
                                                letterSpacing: "1px",
                                                textTransform: "uppercase",
                                                border: "1px solid rgba(178, 152, 115, 0.25)",
                                                "& .MuiChip-icon": { color: ACCENT_GOLD },
                                            }}
                                        />

                                        {/* Monogram */}
                                        <Box sx={{ position: "relative", mb: 2.5, display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <Box
                                                className="specialist-halo"
                                                sx={{
                                                    position: "absolute",
                                                    width: 104,
                                                    height: 104,
                                                    borderRadius: "50%",
                                                    border: "1px solid rgba(178, 152, 115, 0.35)",
                                                    transition: "all 0.4s ease",
                                                }}
                                            />
                                            <Avatar
                                                sx={{
                                                    width: 90,
                                                    height: 90,
                                                    background: `linear-gradient(135deg, ${BRAND_GREEN} 0%, #2c3829 100%)`,
                                                    color: "#ffffff",
                                                    fontSize: "1.5rem",
                                                    fontWeight: 600,
                                                    fontFamily: "'Playfair Display', serif",
                                                    border: `2px solid rgba(255, 255, 255, 0.9)`,
                                                    boxShadow: "0 8px 18px rgba(66, 82, 62, 0.15)",
                                                }}
                                            >
                                                {member.initials}
                                            </Avatar>
                                        </Box>

                                        {/* Content */}
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontFamily: "'Playfair Display', serif",
                                                fontWeight: 700,
                                                color: BRAND_DARK,
                                                fontSize: "1.05rem",
                                                mb: 0.8,
                                                minHeight: "48px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            {member.name}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontFamily: "'Montserrat', sans-serif",
                                                fontWeight: 600,
                                                color: ACCENT_GOLD,
                                                textTransform: "uppercase",
                                                fontSize: "0.7rem",
                                                letterSpacing: "1px",
                                                mb: 1.5,
                                                minHeight: "34px",
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            {member.title}
                                        </Typography>

                                        <Box sx={{ width: 28, height: "1px", bgcolor: ACCENT_GOLD, opacity: 0.3, mb: 1.5 }} />

                                        <Typography
                                            sx={{
                                                fontFamily: "'Montserrat', sans-serif",
                                                color: "#6b7a69",
                                                fontSize: "0.8rem",
                                                lineHeight: 1.55,
                                            }}
                                        >
                                            {member.bio}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    {/* Bottom Craftsmanship Banner */}
                    <Box
                        sx={{
                            mt: 8,
                            p: { xs: 4, md: 5 },
                            borderRadius: "16px",
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
                            ✦ 100% IN-HOUSE CRAFTSMANSHIP GUARANTEE ✦
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 700,
                                fontSize: { xs: "1.6rem", md: "2.2rem" },
                                mb: 2,
                                color: "#ffffff",
                            }}
                        >
                            Zero Subcontracting. Total Accountability.
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "'Montserrat', sans-serif",
                                color: "rgba(238, 243, 236, 0.8)",
                                maxWidth: 700,
                                mx: "auto",
                                fontSize: { xs: "0.9rem", md: "0.98rem" },
                                lineHeight: 1.7,
                            }}
                        >
                            From initial 3D architectural renders to CNC computerized edge-banding in our Rampura factory, our core leadership personally manages every step of your residence.
                        </Typography>
                    </Box>

                    {/* Internal Links */}
                    <Box sx={{ mt: 8 }}>
                        <InternalLinks currentPage="teams" />
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    );
};

export default Teams;

