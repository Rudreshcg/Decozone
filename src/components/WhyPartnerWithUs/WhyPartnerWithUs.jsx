import React from "react";
import {
    Container,
    Typography,
    Box,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableHead,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import OnTime from "../../assets/order.png";
import Delay from "../../assets/expired.png";
import Customization from "../../assets/web-design.png";
import NoIcon from "../../assets/no.png";
import HighCost from "../../assets/cost.png"
import LowCost from "../../assets/reduce-cost.png"
import MoreOptions from "../../assets/more-options.png"
import LessOptions from "../../assets/negative.png"
import QualityAssurance from "../../assets/quality-assurance.png"
import LowQuality from "../../assets/low-quality.png"
import CustomerSupport from "../../assets/customer-support.png"
import { Helmet } from "react-helmet-async";



const MotionTypography = motion(Typography);
const MotionTable = motion(Table);
const MotionTableRow = motion(TableRow);

const comparisonData = [
    {
        feature: "Timely Deliveries",
        marketExperience: Delay,
        decozoneExperience: OnTime,
    },
    {
        feature: "Client Customization",
        marketExperience: NoIcon,
        decozoneExperience: Customization,
    },
    {
        feature: "Cost Efficiency",
        marketExperience: HighCost,
        decozoneExperience: LowCost,
    },
    {
        feature: "Product Variety",
        marketExperience: LessOptions,
        decozoneExperience: MoreOptions,
    },
    {
        feature: "Quality Assurance",
        marketExperience: LowQuality,
        decozoneExperience: QualityAssurance,
    },
    {
        feature: "Customer Support",
        marketExperience: NoIcon,
        decozoneExperience: CustomerSupport,
    },
];

const WhyPartnerWithUs = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            <Helmet>
                <title>Why Partner With Tvashta Interior | Trusted Interior Design Bangalore</title>
                <meta name="description" content="Discover why Tvashta Interior outshines market competitors with timely deliveries, customization, cost-efficiency, quality, and customer support across Bangalore & India." />
                <meta name="keywords" content="interior partner, timely delivery, customization, cost-efficiency, product variety, quality assurance, customer support, Bangalore interiors" />
                <link rel="canonical" href="https://tvashtainterior.com/" />
                <meta property="og:title" content="Why Partner With Tvashta Interior" />
                <meta property="og:description" content="Experience superior service and quality with Tvashta Interior compared to other market options in Bangalore and all India." />
                <meta property="og:url" content="https://tvashtainterior.com/" />
                <meta property="og:type" content="website" />
            </Helmet>
            <Box sx={{ py: 5 }}>
                <Container>
                    <MotionTypography
                        variant="h4"
                        variants={SlideUp(0.2)}
                        initial="initial"
                        whileInView="animate"
                        sx={{
                            my: 4,
                            fontWeight: "bold",
                            fontFamily: "Arial, sans-serif",
                            color: "#333",
                            textAlign: "center",
                        }}
                    >
                        Why Partner With Us?
                    </MotionTypography>
                    <MotionTable
                        variants={SlideUp(0.4)}
                        initial="initial"
                        whileInView="animate"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: isMobile ? "14px" : "18px",
                                        color: "error.main",
                                    }}
                                >
                                    Your Market Experience
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: isMobile ? "14px" : "18px",
                                    }}
                                >
                                    Features
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: isMobile ? "14px" : "18px",
                                        color: "success.main",
                                    }}
                                >
                                    Tvashta Experience
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {comparisonData.map((item, index) => (
                                <MotionTableRow
                                    key={index}
                                    custom={index}
                                    variants={SlideUp(0.6)}
                                    initial="initial"
                                    whileInView="animate"
                                >
                                    <TableCell sx={{ justifyItems: "center" }}>
                                        <img
                                            src={item.marketExperience}
                                            alt="Market Experience"
                                            style={{
                                                width: isMobile ? "30px" : "40px",
                                                height: isMobile ? "30px" : "40px",
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography
                                            variant="subtitle1"
                                            fontWeight="bold"
                                            sx={{ fontSize: isMobile ? "12px" : "14px" }}
                                        >
                                            {item.feature}
                                        </Typography>
                                    </TableCell>
                                    <TableCell sx={{ justifyItems: "center" }}>
                                        <img
                                            src={item.decozoneExperience}
                                            alt="Decozone Experience"
                                            style={{
                                                width: isMobile ? "30px" : "40px",
                                                height: isMobile ? "30px" : "40px",
                                            }}
                                        />
                                    </TableCell>
                                </MotionTableRow>
                            ))}
                        </TableBody>
                    </MotionTable>
                </Container>
            </Box>
        </>
    );
};

export default WhyPartnerWithUs;
