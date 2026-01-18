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
import OnTime from "../../assets/order.png";
import Delay from "../../assets/expired.png";
import Customization from "../../assets/web-design.png";
import NoIcon from "../../assets/no.png";
import HighCost from "../../assets/cost.png";
import LowCost from "../../assets/reduce-cost.png";
import MoreOptions from "../../assets/more-options.png";
import LessOptions from "../../assets/negative.png";
import QualityAssurance from "../../assets/quality-assurance.png";
import LowQuality from "../../assets/low-quality.png";
import CustomerSupport from "../../assets/customer-support.png";
import { Helmet } from "react-helmet-async";

// Custom green color from the brand
const BRAND_GREEN = "#4a5942";
const BRAND_GREEN_LIGHT = "#e8f0e6";
const goldGradient = "linear-gradient(135deg, #9f8033 0%, #c5a059 50%, #9f8033 100%)";

const comparisonData = [
    {
        feature: "Timely Deliveries",
        marketExperience: Delay,
        tvashtaExperience: OnTime,
        marketLabel: "Delays Common",
        tvashtaLabel: "On-Time Guarantee",
    },
    {
        feature: "Customization",
        marketExperience: NoIcon,
        tvashtaExperience: Customization,
        marketLabel: "Limited Options",
        tvashtaLabel: "Fully Personalized",
    },
    {
        feature: "Cost Efficiency",
        marketExperience: HighCost,
        tvashtaExperience: LowCost,
        marketLabel: "Hidden Costs",
        tvashtaLabel: "Transparent Pricing",
    },
    {
        feature: "Product Variety",
        marketExperience: LessOptions,
        tvashtaExperience: MoreOptions,
        marketLabel: "Standard Catalog",
        tvashtaLabel: "Endless Choices",
    },
    {
        feature: "Quality Assurance",
        marketExperience: LowQuality,
        tvashtaExperience: QualityAssurance,
        marketLabel: "Inconsistent",
        tvashtaLabel: "Premium Checks",
    },
    {
        feature: "Customer Support",
        marketExperience: NoIcon,
        tvashtaExperience: CustomerSupport,
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
                            style={{ display: "block", width: "fit-content", margin: "0 auto" }}
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
                                    sx={{ fontWeight: "700", color: BRAND_GREEN, fontFamily: "Montserrat, sans-serif", fontSize: "1rem" }}
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
                                    p: { xs: 2.5, md: 3 },
                                    borderRadius: 3,
                                    border: "1px solid",
                                    borderColor: "rgba(0,0,0,0.06)",
                                    transition: "all 0.3s ease",
                                    background: "#fff",
                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                        boxShadow: "0 10px 20px rgba(74, 89, 66, 0.1)",
                                        borderColor: BRAND_GREEN_LIGHT,
                                    },
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Grid container alignItems="center" spacing={2}>

                                    {/* Market Experience (Left) */}
                                    <Grid
                                        item
                                        xs={4}
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            opacity: 0.6,
                                            borderRight: { md: "1px dashed #e0e0e0" },
                                        }}
                                    >
                                        <Avatar
                                            src={item.marketExperience}
                                            variant="rounded"
                                            sx={{
                                                width: { xs: 32, md: 48 },
                                                height: { xs: 32, md: 48 },
                                                bgcolor: "transparent",
                                                img: { objectFit: "contain" }
                                            }}
                                        />
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                mt: 1,
                                                color: "#666",
                                                fontWeight: 500,
                                                fontSize: { xs: "0.7rem", md: "0.875rem" },

                                                textAlign: "center",
                                                fontFamily: "Montserrat, sans-serif",
                                                lineHeight: 1.2
                                            }}
                                        >
                                            {item.marketLabel}
                                        </Typography>
                                    </Grid>

                                    {/* Feature Name (Center) */}
                                    <Grid
                                        item
                                        xs={4}
                                        sx={{
                                            textAlign: "center",
                                            display: "flex",
                                            justifyContent: "center",
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
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderLeft: { md: `1px solid ${BRAND_GREEN_LIGHT}` },
                                        }}
                                    >
                                        <Avatar
                                            src={item.tvashtaExperience}
                                            variant="rounded"
                                            sx={{
                                                width: { xs: 36, md: 56 },
                                                height: { xs: 36, md: 56 },
                                                bgcolor: BRAND_GREEN_LIGHT,
                                                p: 1,
                                                img: { objectFit: "contain" }
                                            }}
                                        />
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                mt: 1,
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


