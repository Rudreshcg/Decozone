import React, { useState } from 'react';
import {
    Box,
    Typography,
    Avatar,
    Button,
    useMediaQuery,
    useTheme,
    Container
} from "@mui/material";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import ContactModal from "../ContactModal/ContactModal";
import Payement2 from "../../assets/icons8-rocket-64.png";
import Payement from "../../assets/icons8-gavel-50.png";
import BookRenovation from "../../assets/icons8-booking-50.png";
import MeetDesigner from "../../assets/icons8-working-48.png";
import MoveEnjoy from "../../assets/icons8-traveler-50.png";
import { Helmet } from "react-helmet-async";

const BRAND_GREEN = "#4a5942";
const BRAND_GREEN_LIGHT = "#e8f0e6";
const goldGradient = "linear-gradient(135deg, #9f8033 0%, #c5a059 50%, #9f8033 100%)";

const steps = [
    { icon: MeetDesigner, label: "Meet a designer" },
    { icon: BookRenovation, label: "Initial design advance" },
    { icon: Payement, label: "Execution begins" },
    { icon: Payement2, label: "Final installations" },
    { icon: MoveEnjoy, label: "Move in and enjoy!" },
];

const HowItWorksMobile = () => {
    return (
        <Box sx={{ position: "relative", pl: 2, pr: 2 }}>
            {/* Vertical Line */}
            <Box
                component={motion.div}
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1.5 }}
                sx={{
                    position: "absolute",
                    top: 20,
                    bottom: 20,
                    left: "39px",
                    width: "2px",
                    background: `linear-gradient(to bottom, ${BRAND_GREEN} 50%, transparent 100%)`,
                    zIndex: 0,
                    opacity: 0.3
                }}
            />
            {steps.map((step, index) => (
                <Box
                    key={index}
                    component={motion.div}
                    variants={SlideUp(0.2 + index * 0.1)}
                    initial="initial"
                    whileInView="animate"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 4,
                        position: "relative",
                        zIndex: 1
                    }}
                >
                    <Avatar
                        sx={{
                            bgcolor: "#fff",
                            border: `2px solid ${BRAND_GREEN_LIGHT}`,
                            width: 56,
                            height: 56,
                            p: 1.5,
                            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                            mr: 3,
                            flexShrink: 0
                        }}
                    >
                        <Box component="img" src={step.icon} alt={step.label} sx={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </Avatar>
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1rem", color: "#2c3e50", fontFamily: "Playfair Display, serif" }}>
                            {step.label}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

const HowItWorksDesktop = () => {
    const isTab = useMediaQuery("(max-width:960px)");

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>

            <Box
                component={motion.div}
                variants={SlideUp(0.5)}
                initial="initial"
                whileInView="animate"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    position: "relative",
                    paddingX: 2,
                    marginTop: 2,
                    minWidth: "75%",
                    width: "85%", // Ensure consistent width container
                    maxWidth: "1200px"
                }}
            >
                {/* Connecting Line - Restored Original Alignment Logic */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "28%", // Original Top Position
                        left: "8%", // Original Left Position
                        width: "85%", // Original Width
                        height: "2px",
                        backgroundColor: "#e0e0e0",
                        zIndex: 1,
                    }}
                />

                {steps.map((step, index) => (
                    <Box
                        key={index}
                        sx={{
                            textAlign: "center",
                            position: "relative",
                            zIndex: 2,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "150px" // Fixed width for alignment stability
                        }}
                    >
                        <Avatar
                            sx={{
                                bgcolor: "#fff",
                                border: `2px solid #e0e0e0`,
                                width: isTab ? 60 : 80,
                                height: isTab ? 60 : 80,
                                margin: "0 auto",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    borderColor: BRAND_GREEN,
                                    transform: "scale(1.05)",
                                    boxShadow: "0 8px 24px rgba(74, 89, 66, 0.2)",
                                }
                            }}
                        >
                            <Box component="img" src={step.icon} alt={step.label} sx={{ width: isTab ? 30 : 40, height: isTab ? 30 : 40, objectFit: "contain" }} />
                        </Avatar>

                        <Typography
                            variant="h6"
                            sx={{
                                mt: 2,
                                fontWeight: 700,
                                fontSize: "1rem",
                                fontFamily: "Playfair Display, serif",
                                color: "#2c3e50",
                                lineHeight: 1.3
                            }}
                        >
                            {step.label}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

const HowItWorks = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [open, setOpen] = useState(false);

    return (
        <>
            <Helmet>
                <title>How It Works - Interior Design Process | Tvashta Interior</title>
                <meta name="description" content="Our simple 5-step interior design process: Meet, Design, Execute, Install, and Enjoy." />
            </Helmet>

            <Box sx={{ py: 10, bgcolor: "#fff", overflow: "hidden" }}>
                <Container maxWidth="lg">
                    {/* Header */}
                    <Box sx={{ textAlign: "center", mb: 8 }}>
                        <motion.div
                            variants={SlideUp(0.2)}
                            initial="initial"
                            whileInView="animate"
                            className="section-badge-global"
                        >
                            SIMPLE & TRANSPARENT
                        </motion.div>
                        <Typography
                            component={motion.h2}
                            variants={SlideUp(0.3)}
                            initial="initial"
                            whileInView="animate"
                            variant="h3"
                            className="section-title-global"
                            sx={{ mt: 1, textAlign: "center" }}
                        >
                            How It Works
                        </Typography>
                    </Box>

                    {/* Content */}
                    <Box sx={{ mb: 8 }}>
                        {isMobile ? <HowItWorksMobile /> : <HowItWorksDesktop />}
                    </Box>

                    {/* CTA */}
                    <Box
                        component={motion.div}
                        variants={SlideUp(0.5)}
                        initial="initial"
                        whileInView="animate"
                        sx={{ textAlign: "center" }}
                    >
                        <Button
                            variant="contained"
                            onClick={() => setOpen(true)}
                            sx={{
                                bgcolor: BRAND_GREEN, // Fallback
                                background: "linear-gradient(135deg, #4a5942 0%, #3d4a36 100%)",
                                border: "2px solid #9f8033", // Gold Border
                                color: "#fff",
                                px: 5,
                                py: 1.5,
                                borderRadius: "50px",
                                fontWeight: 700,
                                fontFamily: "Montserrat, sans-serif",
                                textTransform: "uppercase",
                                letterSpacing: 1,
                                boxShadow: "0 10px 20px rgba(74, 89, 66, 0.3)",
                                "&:hover": {
                                    background: "#3d4a36",
                                    border: "2px solid #c5a059",
                                    transform: "translateY(-2px)",
                                    boxShadow: "0 15px 30px rgba(159, 128, 51, 0.4)",
                                }
                            }}
                        >
                            Start Your Journey
                        </Button>
                    </Box>
                </Container >
                <ContactModal open={open} setOpen={setOpen} />
            </Box >
        </>
    );
};

export default HowItWorks;
