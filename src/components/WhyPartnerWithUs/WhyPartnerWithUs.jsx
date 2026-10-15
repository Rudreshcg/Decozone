import React from "react";
import {
    Container,
    Typography,
    Box,
    Grid,
    Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import { Helmet } from "react-helmet-async";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import ContactModal from "../ContactModal/ContactModal";

const comparativePoints = [
    {
        feature: "Project Timeline & Handover",
        conventional: "Frequent multi-week delays, uncoordinated subcontractors, and unpredictable site delays.",
        tvashta: "Guaranteed 45-day handover with structured milestone tracking and dedicated project managers.",
    },
    {
        feature: "Pricing Integrity & BOQ",
        conventional: "Attractive initial quote followed by surprise material markups and site cost escalations.",
        tvashta: "100% Transparent, itemized BOQ with guaranteed zero hidden costs or post-agreement escalations.",
    },
    {
        feature: "Manufacturing & Joinery",
        conventional: "Messy onsite carpenter fabrication with manual uneven cuts, glue fumes, and termite risks.",
        tvashta: "100% In-house factory fabrication with German CNC machinery and zero-joint moisture-proof edge banding.",
    },
    {
        feature: "Design & Customization",
        conventional: "Restricted to standard modular box sizes and limited catalog laminates.",
        tvashta: "Unrestricted bespoke architectural freedom with handpicked European veneers, Italian marble, and custom joinery.",
    },
    {
        feature: "Warranty & Accountability",
        conventional: "Verbal promises from freelancers or contractors who disappear after final payment.",
        tvashta: "Comprehensive 10-year corporate warranty certificate backed by dedicated lifetime maintenance care.",
    },
];

const WhyPartnerWithUs = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    return (
        <>
            <Helmet>
                <title>Why Partner With Tvashta Interior | Trusted Luxury Design Bangalore</title>
                <meta
                    name="description"
                    content="Experience the Tvashta Atelier Standard: Guaranteed 45-day handover, German factory millwork, zero-escalation BOQ, and 10-year warranty in Bangalore."
                />
            </Helmet>

            <ContactModal open={isModalOpen} setOpen={setIsModalOpen} />

            <Box
                component="section"
                sx={{
                    py: { xs: 8, md: 12 },
                    background: "#f4f0e8",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <Container maxWidth="lg">
                    {/* Header Section */}
                    <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
                        <motion.div
                            variants={SlideUp(0.1)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="section-badge-global"
                        >
                            ✦ THE TVASHTA ATELIER STANDARD ✦
                        </motion.div>
                        <motion.h2
                            variants={SlideUp(0.2)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="section-title-global"
                        >
                            Why Bangalore's Discerning Homeowners Choose Us
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
                                maxWidth: "720px",
                                margin: "0 auto",
                                lineHeight: 1.7,
                            }}
                        >
                            Building a luxury residence is an intimate journey. See how our integrated studio & factory ecosystem eliminates typical contractor compromises.
                        </motion.p>
                    </Box>

                    {/* Comparison Cards Split Layout */}
                    <Grid container spacing={3} alignItems="stretch">
                        {/* Left Card: Conventional Market */}
                        <Grid item xs={12} md={5.5}>
                            <motion.div
                                variants={SlideUp(0.3)}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                style={{ height: "100%" }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: "#ffffff",
                                        borderRadius: "20px",
                                        p: { xs: 3.5, md: 4.5 },
                                        height: "100%",
                                        border: "1px solid rgba(0, 0, 0, 0.08)",
                                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.03)",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Box sx={{ pb: 3, borderBottom: "1px solid rgba(0, 0, 0, 0.06)", mb: 3 }}>
                                        <Typography
                                            sx={{
                                                color: "#8a9488",
                                                fontFamily: "'Montserrat', sans-serif",
                                                fontSize: "0.75rem",
                                                fontWeight: 700,
                                                letterSpacing: "0.18em",
                                                textTransform: "uppercase",
                                                mb: 1,
                                            }}
                                        >
                                            Standard Industry Practice
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: "'Playfair Display', Georgia, serif",
                                                fontSize: "1.45rem",
                                                color: "#576355",
                                                fontWeight: 600,
                                            }}
                                        >
                                            Conventional Contractors
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, flexGrow: 1 }}>
                                        {comparativePoints.map((item, idx) => (
                                            <Box key={idx} sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                                                <CancelOutlinedIcon sx={{ color: "#b37b7b", fontSize: 20, mt: 0.3, flexShrink: 0 }} />
                                                <Box>
                                                    <Typography
                                                        sx={{
                                                            fontFamily: "'Montserrat', sans-serif",
                                                            fontSize: "0.85rem",
                                                            fontWeight: 600,
                                                            color: "#6b7768",
                                                            mb: 0.3,
                                                        }}
                                                    >
                                                        {item.feature}
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            fontFamily: "'Montserrat', sans-serif",
                                                            fontSize: "0.82rem",
                                                            color: "#859182",
                                                            lineHeight: 1.55,
                                                        }}
                                                    >
                                                        {item.conventional}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                            </motion.div>
                        </Grid>

                        {/* Right Card: The Tvashta Atelier Standard (Highlighted) */}
                        <Grid item xs={12} md={6.5}>
                            <motion.div
                                variants={SlideUp(0.4)}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                style={{ height: "100%" }}
                            >
                                <Box
                                    sx={{
                                        background: "linear-gradient(135deg, #1e281e 0%, #2b392a 100%)",
                                        borderRadius: "20px",
                                        p: { xs: 3.5, md: 4.5 },
                                        height: "100%",
                                        border: "1.5px solid rgba(178, 152, 115, 0.45)",
                                        boxShadow: "0 20px 45px rgba(30, 40, 30, 0.25), 0 0 0 1px rgba(178, 152, 115, 0.2)",
                                        display: "flex",
                                        flexDirection: "column",
                                        position: "relative",
                                        overflow: "hidden",
                                    }}
                                >
                                    {/* Top decorative badge */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 20,
                                            right: 20,
                                            background: "rgba(178, 152, 115, 0.2)",
                                            border: "1px solid rgba(178, 152, 115, 0.4)",
                                            color: "#dfcfb8",
                                            px: 1.8,
                                            py: 0.6,
                                            borderRadius: "50px",
                                            fontSize: "0.72rem",
                                            fontWeight: 700,
                                            letterSpacing: "0.14em",
                                            fontFamily: "'Montserrat', sans-serif",
                                            display: { xs: "none", sm: "inline-flex" },
                                            alignItems: "center",
                                            gap: 0.8,
                                        }}
                                    >
                                        <WorkspacePremiumOutlinedIcon sx={{ fontSize: 16, color: "#dfcfb8" }} />
                                        RECOMMENDED
                                    </Box>

                                    <Box sx={{ pb: 3, borderBottom: "1px solid rgba(178, 152, 115, 0.2)", mb: 3 }}>
                                        <Typography
                                            sx={{
                                                color: "#b29873",
                                                fontFamily: "'Montserrat', sans-serif",
                                                fontSize: "0.75rem",
                                                fontWeight: 700,
                                                letterSpacing: "0.18em",
                                                textTransform: "uppercase",
                                                mb: 1,
                                            }}
                                        >
                                            The Atelier Advantage
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: "'Playfair Display', Georgia, serif",
                                                fontSize: { xs: "1.5rem", md: "1.65rem" },
                                                color: "#ffffff",
                                                fontWeight: 600,
                                            }}
                                        >
                                            The Tvashta Signature Standard
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, flexGrow: 1 }}>
                                        {comparativePoints.map((item, idx) => (
                                            <Box key={idx} sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                                                <CheckCircleRoundedIcon sx={{ color: "#b29873", fontSize: 22, mt: 0.2, flexShrink: 0 }} />
                                                <Box>
                                                    <Typography
                                                        sx={{
                                                            fontFamily: "'Montserrat', sans-serif",
                                                            fontSize: "0.9rem",
                                                            fontWeight: 700,
                                                            color: "#ffffff",
                                                            mb: 0.3,
                                                        }}
                                                    >
                                                        {item.feature}
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            fontFamily: "'Montserrat', sans-serif",
                                                            fontSize: "0.84rem",
                                                            color: "rgba(235, 242, 233, 0.85)",
                                                            lineHeight: 1.6,
                                                        }}
                                                    >
                                                        {item.tvashta}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        ))}
                                    </Box>

                                    {/* Action Button inside Atelier Card */}
                                    <Box sx={{ mt: 4, pt: 3, borderTop: "1px solid rgba(178, 152, 115, 0.2)" }}>
                                        <Button
                                            fullWidth
                                            onClick={() => setIsModalOpen(true)}
                                            sx={{
                                                background: "linear-gradient(135deg, #b29873 0%, #9e825c 100%)",
                                                color: "#ffffff",
                                                py: 1.6,
                                                borderRadius: "50px",
                                                fontFamily: "'Montserrat', sans-serif",
                                                fontSize: "0.82rem",
                                                fontWeight: 700,
                                                letterSpacing: "0.15em",
                                                textTransform: "uppercase",
                                                boxShadow: "0 8px 24px rgba(178, 152, 115, 0.35)",
                                                transition: "all 0.3s ease",
                                                "&:hover": {
                                                    background: "linear-gradient(135deg, #c5a880 0%, #b29873 100%)",
                                                    transform: "translateY(-2px)",
                                                    boxShadow: "0 12px 30px rgba(178, 152, 115, 0.5)",
                                                },
                                            }}
                                        >
                                            Experience the Difference — Free Consultation
                                        </Button>
                                    </Box>
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default WhyPartnerWithUs;
