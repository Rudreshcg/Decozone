import React from "react";
import {
    Container,
    Typography,
    Box,
    useMediaQuery,
    useTheme,
    Grid,
    Paper,
    Avatar,
    Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import {
    LocalShipping,
    AccessTime,
    DesignServices,
    RemoveCircle,
    ReceiptLong,
    VisibilityOff,
    Category,
    MenuBook,
    Verified,
    GppBad,
    SupportAgent,
    PhoneDisabled
} from "@mui/icons-material";
import { Helmet } from "react-helmet-async";

// Custom green color from the brand
const BRAND_GREEN = "#4a5942";
const BRAND_GREEN_LIGHT = "#e8f0e6";
const goldGradient = "linear-gradient(135deg, #9f8033 0%, #c5a059 50%, #9f8033 100%)";

const comparisonData = [
    {
        feature: "Timely Deliveries",
        marketIcon: <AccessTime sx={{ fontSize: "inherit", color: "#d32f2f" }} />, // Red for negative
        tvashtaIcon: <LocalShipping sx={{ fontSize: "inherit", color: BRAND_GREEN }} />,
        marketLabel: "Delays Common",
        tvashtaLabel: "On-Time Guarantee",
    },
    {
        feature: "Customization",
        marketIcon: <RemoveCircle sx={{ fontSize: "inherit", color: "#9e9e9e" }} />, // Grey for limited
        tvashtaIcon: <DesignServices sx={{ fontSize: "inherit", color: "#9f8033" }} />, // Gold for Premium
        marketLabel: "Limited Options",
        tvashtaLabel: "Fully Personalized",
    },
    {
        feature: "Cost Efficiency",
        marketIcon: <VisibilityOff sx={{ fontSize: "inherit", color: "#d32f2f" }} />,
        tvashtaIcon: <ReceiptLong sx={{ fontSize: "inherit", color: BRAND_GREEN }} />,
        marketLabel: "Hidden Costs",
        tvashtaLabel: "Transparent Pricing",
    },
    {
        feature: "Product Variety",
        marketIcon: <MenuBook sx={{ fontSize: "inherit", color: "#9e9e9e" }} />,
        tvashtaIcon: <Category sx={{ fontSize: "inherit", color: "#1976d2" }} />, // Blue for variety
        marketLabel: "Standard Catalog",
        tvashtaLabel: "Endless Choices",
    },
    {
        feature: "Quality Assurance",
        marketIcon: <GppBad sx={{ fontSize: "inherit", color: "#d32f2f" }} />,
        tvashtaIcon: <Verified sx={{ fontSize: "inherit", color: "#9f8033" }} />, // Gold
        marketLabel: "Inconsistent",
        tvashtaLabel: "Premium Checks",
    },
    {
        feature: "Customer Support",
        marketIcon: <PhoneDisabled sx={{ fontSize: "inherit", color: "#9e9e9e" }} />,
        tvashtaIcon: <SupportAgent sx={{ fontSize: "inherit", color: BRAND_GREEN }} />,
        marketLabel: "Unresponsive",
        tvashtaLabel: "Dedicated Support",
    },
];

const WhyPartnerWithUs = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            <Helmet>
                <title>Why Partner With Tvashta Interior | Trusted Interior Design Bangalore</title>
                <meta
                    name="description"
                    content="Discover why Tvashta Interior outshines market competitors with timely deliveries, customization, cost-efficiency, quality, and customer support."
                />
            </Helmet>

            <Box
                sx={{
                    py: 8,
                    background: "linear-gradient(180deg, #ffffff 0%, #f7f9f6 100%)",
                    overflow: "hidden",
                }}
            >
                <Container maxWidth="lg">
                    {/* Header Section */}
                    <Box
                        component={motion.div}
                        variants={SlideUp(0.2)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        sx={{ textAlign: "center", mb: 8 }}
                    >
                        <motion.div
                            className="section-badge-global"
                            style={{ margin: "0 auto" }}
                        >
                            THE TVASHTA DIFFERENCE
                        </motion.div>
                        <Typography
                            variant="h3"
                            className="section-title-global"
                            sx={{ mt: 1, mb: 2 }}
                        >
                            Why Partner With Us?
                        </Typography>
                    </Box>

                    {/* Desktop Headers */}
                    {!isMobile && (
                        <Grid
                            container
                            sx={{
                                mb: 4,
                                px: 4,
                                alignItems: "center",
                            }}
                        >
                            <Grid item xs={4} sx={{ textAlign: "center" }}>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: "700", color: "#888", opacity: 0.8, fontFamily: "Montserrat, sans-serif", fontSize: "1rem" }}
                                >
                                    Market Standard
                                </Typography>
                            </Grid>
                            <Grid item xs={4} sx={{ textAlign: "center" }}>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: "700", color: "#333", fontFamily: "Montserrat, sans-serif", fontSize: "1rem" }}
                                >
                                    Feature
                                </Typography>
                            </Grid>
                            <Grid item xs={4} sx={{ textAlign: "center" }}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: "800",
                                        background: goldGradient,
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        fontFamily: "Montserrat, sans-serif",
                                        fontSize: "1.1rem",
                                        letterSpacing: "0.5px"
                                    }}
                                >
                                    The Tvashta Advantage
                                </Typography>
                            </Grid>
                        </Grid>
                    )}

                    {/* Comparison Rows */}
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        {comparisonData.map((item, index) => (
                            <Paper
                                key={index}
                                component={motion.div}
                                variants={SlideUp(0.3 + index * 0.1)}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                elevation={0}
                                sx={{
                                    p: 0, // Reset padding to handle inner layout better
                                    borderRadius: 4,
                                    border: "1px solid",
                                    borderColor: "rgba(0,0,0,0.04)",
                                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                    background: "#fff",
                                    overflow: "hidden",
                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                        boxShadow: "0 20px 40px rgba(159, 128, 51, 0.15)", // Premium Gold Shadow
                                        borderColor: "rgba(197, 160, 89, 0.3)", // Subtle Gold Border
                                    },
                                    display: "flex",
                                    alignItems: "stretch", // Stretch to full height for background coloring
                                }}
                            >
                                <Grid container alignItems="center" spacing={2}>

                                    {/* Market Experience (Left) */}
                                    <Grid
                                        item
                                        xs={4}
                                        sx={{
                                            borderRight: { md: "1px dashed #e0e0e0" },
                                            // Flex and padding moved to inner Box to avoid Grid conflict
                                        }}
                                    >
                                        <Box sx={{
                                            width: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            py: 2, // Safe explicit padding
                                        }}>
                                            <Avatar
                                                variant="rounded"
                                                sx={{
                                                    width: { xs: 40, md: 56 },
                                                    height: { xs: 40, md: 56 },
                                                    bgcolor: "#f5f5f5",
                                                    fontSize: { xs: "24px", md: "32px" }
                                                }}
                                            >
                                                {item.marketIcon}
                                            </Avatar>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    mt: { xs: 0.5, md: 1 },
                                                    color: "#666",
                                                    fontWeight: 600,
                                                    fontSize: { xs: "0.7rem", md: "0.85rem" },
                                                    textAlign: "center",
                                                    fontFamily: "Montserrat, sans-serif",
                                                    lineHeight: 1.2
                                                }}
                                            >
                                                {item.marketLabel}
                                            </Typography>
                                        </Box>
                                    </Grid>

                                    {/* Feature Name (Center) */}
                                    <Grid
                                        item
                                        xs={4}
                                        sx={{
                                            textAlign: "center",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center", // Center vertically
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 700,
                                                color: "#2c3e50",
                                                fontFamily: "Playfair Display, serif",
                                                fontSize: { xs: "0.85rem", md: "1.25rem" },
                                                lineHeight: 1.2
                                            }}
                                        >
                                            {item.feature}
                                        </Typography>
                                    </Grid>

                                    {/* Tvashta Experience (Right) */}
                                    <Grid
                                        item
                                        xs={4}
                                        sx={{
                                            borderLeft: { md: `1px solid ${BRAND_GREEN_LIGHT}` },
                                            background: "linear-gradient(to bottom, #fafaf5, #fff)",
                                            // Flex and padding moved to inner Box
                                        }}
                                    >
                                        <Box sx={{
                                            width: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            py: 2, // Safe explicit padding
                                        }}>
                                            <Avatar
                                                variant="rounded"
                                                sx={{
                                                    width: { xs: 40, md: 56 },
                                                    height: { xs: 40, md: 56 },
                                                    bgcolor: BRAND_GREEN_LIGHT,
                                                    fontSize: { xs: "24px", md: "32px" },
                                                    boxShadow: "0 4px 15px rgba(159, 128, 51, 0.2)",
                                                    border: "1px solid rgba(159, 128, 51, 0.2)",
                                                    color: "#4a5942"
                                                }}
                                            >
                                                {item.tvashtaIcon}
                                            </Avatar>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    mt: { xs: 0.5, md: 1 },
                                                    color: BRAND_GREEN,
                                                    fontWeight: 700,
                                                    fontSize: { xs: "0.75rem", md: "1rem" },
                                                    textAlign: "center",
                                                    fontFamily: "Montserrat, sans-serif",
                                                    lineHeight: 1.2
                                                }}
                                            >
                                                {item.tvashtaLabel}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Paper>
                        ))}
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default WhyPartnerWithUs;


