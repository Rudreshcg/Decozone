// import React from "react";
// import {
//     Container,
//     Typography,
//     Box,
//     Table,
//     TableBody,
//     TableCell,
//     TableRow,
//     TableHead,
//     useMediaQuery,
//     useTheme,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import { SlideUp } from "../../animation/animate";
// import SentimentDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentDissatisfiedTwoTone';
// import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
// import EmojiEmotionsTwoToneIcon from '@mui/icons-material/EmojiEmotionsTwoTone';
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import SentimentSatisfiedTwoToneIcon from '@mui/icons-material/SentimentSatisfiedTwoTone';
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import VerifiedIcon from "@mui/icons-material/Verified";
// import OnTime from "../../assets/icons8-delivery-time.gif";
// import Delay from "../../assets/icons8-hourglass.gif";


// const MotionTypography = motion(Typography);
// const MotionTable = motion(Table);
// const MotionTableRow = motion(TableRow);


// const comparisonData = [
//     {
//         feature: "Timely Deliveries",
//         marketExperience: <HourglassEmptyIcon fontSize="inherit" color="error" />,
//         decozoneExperience: <LocalShippingIcon fontSize="inherit" color="success" />,
//     },
//     {
//         feature: "Client Customization",
//         marketExperience: <SentimentDissatisfiedTwoToneIcon fontSize="inherit" color="error" />,
//         decozoneExperience: <SentimentSatisfiedTwoToneIcon fontSize="inherit" color="success" />,
//     },
//     {
//         feature: "Cost Efficiency",
//         marketExperience: <SentimentDissatisfiedTwoToneIcon fontSize="inherit" color="error" />,
//         decozoneExperience: <SentimentSatisfiedTwoToneIcon fontSize="inherit" color="success" />,
//     },
//     {
//         feature: "Product Variety",
//         marketExperience: <HourglassEmptyIcon fontSize="inherit" color="error" />,
//         decozoneExperience: <EmojiEmotionsTwoToneIcon fontSize="inherit" color="success" />,
//     },
//     {
//         feature: "Quality Assurance",
//         marketExperience: <SentimentDissatisfiedTwoToneIcon fontSize="inherit" color="error" />,
//         decozoneExperience: <VerifiedIcon fontSize="inherit" color="success" />,
//     },
//     {
//         feature: "Customer Support",
//         marketExperience: <SentimentDissatisfiedTwoToneIcon fontSize="inherit" color="error" />,
//         decozoneExperience: <AccountCircleIcon fontSize="inherit" color="success" />,
//     },
// ];

// const WhyPartnerWithUs = () => {
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//     return (
//         <Box sx={{ py: 5 }}>
//             <Container>
//                 <MotionTypography
//                     variant="h4"
//                     variants={SlideUp(0.2)}
//                     initial="initial"
//                     whileInView="animate"
//                     sx={{
//                         my: 4,
//                         fontWeight: "bold",
//                         fontFamily: "Arial, sans-serif",
//                         color: "#333",
//                         textAlign: "center",
//                     }}
//                 >
//                     Why Partner With Us?
//                 </MotionTypography>
//                 <MotionTable variants={SlideUp(0.4)}
//                                   initial="initial"
//                                   whileInView="animate">
//                     <TableHead>
//                         <TableRow>
//                             <TableCell
//                                 align="center"
//                                 sx={{
//                                     fontWeight: "bold",
//                                     fontSize: isMobile ? "14px" : "18px",
//                                     color: "error.main",
//                                 }}
//                             >
//                                 Your Market Experience
//                             </TableCell>
//                             <TableCell
//                                 align="center"
//                                 sx={{
//                                     fontWeight: "bold",
//                                     fontSize: isMobile ? "14px" : "18px",
//                                 }}
//                             >
//                                 Features
//                             </TableCell>
//                             <TableCell
//                                 align="center"
//                                 sx={{
//                                     fontWeight: "bold",
//                                     fontSize: isMobile ? "14px" : "18px",
//                                     color: "success.main",
//                                 }}
//                             >
//                                 Decozone Experience
//                             </TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {comparisonData.map((item, index) => (
//                             <MotionTableRow
//                                 key={index}
//                                 custom={index}
//                                 variants={SlideUp(0.6)}
//                                   initial="initial"
//                                   whileInView="animate"
//                             >
//                                 <TableCell
//                                     align="center"
//                                     sx={{
//                                         fontSize: isMobile ? "medium" : "large",
//                                     }}
//                                 >
//                                     {React.cloneElement(item.marketExperience, {
//                                         fontSize: isMobile ? "medium" : "large",
//                                     })}
//                                 </TableCell>
//                                 <TableCell align="center">
//                                     <Typography
//                                         variant="subtitle1"
//                                         fontWeight="bold"
//                                         sx={{ fontSize: isMobile ? "12px" : "14px" }}
//                                     >
//                                         {item.feature}
//                                     </Typography>
//                                 </TableCell>
//                                 <TableCell
//                                     align="center"
//                                     sx={{
//                                         fontSize: isMobile ? "medium" : "large",
//                                     }}
//                                 >
//                                     {React.cloneElement(item.decozoneExperience, {
//                                         fontSize: isMobile ? "medium" : "large",
//                                     })}
//                                 </TableCell>
//                             </MotionTableRow>
//                         ))}
//                     </TableBody>
//                 </MotionTable>
//             </Container>
//         </Box>
//     );
// };

// export default WhyPartnerWithUs;


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
                                Decozone Experience
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
                                <TableCell sx={{justifyItems: "center"}}>
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
                                <TableCell sx={{justifyItems: "center"}}>
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
    );
};

export default WhyPartnerWithUs;
