// import React from 'react';
// import { Container, Grid, Typography, Card, CardContent, Box, useTheme } from '@mui/material';
// import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
// import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
// import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
// import SpeedIcon from '@mui/icons-material/Speed';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import VerifiedIcon from '@mui/icons-material/Verified';

// const items = [
//   {
//     title: "Unpredictable Timelines",
//     description: "Navigating sourcing challenges, supplier complexity, vendor coordination hurdles & city-wide project errands is tough.",
//     icon: <SentimentDissatisfiedIcon fontSize="large" />,
//     backgroundColor: "grey.100",
//     category: "Your market experience",
//   },
//   {
//     title: "Delivery Delays",
//     description: "Managing through sourcing challenges & city-wide project errands is tough.",
//     icon: <HourglassEmptyIcon fontSize="large" />,
//     backgroundColor: "grey.100",
//     category: "Your market experience",
//   },
//   {
//     title: "Adapting to Client Needs",
//     description: "Adapting to client needs is hindered by limited options, trend challenges & lead generation struggles.",
//     icon: <HourglassEmptyIcon fontSize="large" />,
//     backgroundColor: "grey.100",
//     category: "Your market experience",
//   },
//   {
//     title: "Material Procurement Expenses",
//     description: "Material procurement expenses, labor costs, & overhead expenses squeeze margins.",
//     icon: <HourglassEmptyIcon fontSize="large" />,
//     backgroundColor: "grey.100",
//     category: "Your market experience",
//   },
//   {
//     title: "Limited Sample Space",
//     description: "Limited sample space, visualization hurdles, designer scarcity & marketing expenses strain operations.",
//     icon: <HourglassEmptyIcon fontSize="large" />,
//     backgroundColor: "grey.100",
//     category: "Your market experience",
//   },
//   {
//     title: "Subpar Materials",
//     description: "Subpar materials, poor craftsmanship, costly returns, damaged brand image, loss of referrals.",
//     icon: <HourglassEmptyIcon fontSize="large" />,
//     backgroundColor: "grey.100",
//     category: "Your market experience",
//   },
//   {
//     title: "One-stop Solution",
//     description: "All your modular materials in one place, including hardware & handles.",
//     icon: <EmojiEmotionsIcon fontSize="large" />,
//     backgroundColor: "grey.200",
//     category: "Decozone experience",
//   },
//   {
//     title: "Superfast Delivery",
//     description: "Decozone guarantees delivery in just 14-21 days.",
//     icon: <LocalShippingIcon fontSize="large" />,
//     backgroundColor: "grey.200",
//     category: "Decozone experience",
//   },
//   {
//     title: "Variety of Finishes",
//     description: "Decozone gives you access to a variety of finishes, materials & hardware from best of Indian and imported range.",
//     icon: <EmojiEmotionsIcon fontSize="large" />,
//     backgroundColor: "grey.200",
//     category: "Decozone experience",
//   },
//   {
//     title: "Better Profit Margins",
//     description: "Decozone promises better profit margins for partners, while maintaining affordable pricing for your clients.",
//     icon: <SentimentSatisfiedAltIcon fontSize="large" />,
//     backgroundColor: "grey.200",
//     category: "Decozone experience",
//   },
//   {
//     title: "Showroom Access",
//     description: "Showroom access, design services, samples, marketing, & dedicated account management.",
//     icon: <AccountCircleIcon fontSize="large" />,
//     backgroundColor: "grey.200",
//     category: "Decozone experience",
//   },
//   {
//     title: "21-step Quality Check",
//     description: "Decozone undergoes a 21-step quality check before dispatch and offers a 10-year warranty on products.",
//     icon: <VerifiedIcon fontSize="large" />,
//     backgroundColor: "grey.200",
//     category: "Decozone experience",
//   },
// ];
// const WhyPartnerWithUs = () => {
//   const theme = useTheme();

//   const getCategoryItems = (category) => items.filter((item) => item.category === category);

//   return (<Box >
//         <Container sx={{ py: 5 }}>
//       <Typography variant="h4"
//           sx={{
//             my: 4,
//             fontWeight: "bold",
//             fontFamily: "Arial, sans-serif",
//             color: "#333",
//             textAlign: "center",
//           }}>
//         Why Partner With Us?
//       </Typography>
//       <Grid container spacing={4}>
//         {/* Market Experience */}
//         <Grid item xs={12} md={6}>
//           <Typography variant="h5" align="center" gutterBottom fontWeight="bold" color={theme.palette.error.light}>
//             Your Market Experience
//           </Typography>
//           {getCategoryItems("Your market experience").map((item, index) => (
//             <Card
//               key={index}
//               sx={{
//                 mb: 4,
//                 boxShadow: 3,
//                 borderRadius: 2,
//                 transition: 'transform 0.3s',
//                 '&:hover': { transform: 'scale(1.05)' },
//                 backgroundColor: "#f2f2f2"
//               }}
//             >
//               <CardContent>
//                 <Box display="flex" alignItems="center" mb={2}>
//                   <Box
//                     sx={{
//                       bgcolor: theme.palette.error.light,
//                       color: theme.palette.common.white,
//                       borderRadius: '50%',
//                       p: 1.5,
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                     }}
//                   >
//                     {item.icon}
//                   </Box>
//                   <Box ml={2}>
//                     <Typography variant="h6" fontWeight="bold">
//                       {item.title}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       {item.description}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </CardContent>
//             </Card>
//           ))}
//         </Grid>

//         {/* Decozone Experience */}
//         <Grid item xs={12} md={6}>
//           <Typography variant="h5" align="center" gutterBottom fontWeight="bold" color={theme.palette.success.light}>
//             Decozone Experience
//           </Typography>
//           {getCategoryItems("Decozone experience").map((item, index) => (
//             <Card
//               key={index}
//               sx={{
//                 mb: 4,
//                 boxShadow: 3,
//                 borderRadius: 2,
//                 transition: 'transform 0.3s',
//                 '&:hover': { transform: 'scale(1.05)' },
//                 backgroundColor: "#f2f2f2"
//               }}
//             >
//               <CardContent>
//                 <Box display="flex" alignItems="center" mb={2}>
//                   <Box
//                     sx={{
//                       bgcolor: theme.palette.success.light,
//                       color: theme.palette.common.white,
//                       borderRadius: '50%',
//                       p: 1.5,
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                     }}
//                   >
//                     {item.icon}
//                   </Box>
//                   <Box ml={2}>
//                     <Typography variant="h6" fontWeight="bold">
//                       {item.title}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       {item.description}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </CardContent>
//             </Card>
//           ))}
//         </Grid>
//       </Grid>
//     </Container>
//     </Box>
//   );
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
import SentimentDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentDissatisfiedTwoTone';
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import EmojiEmotionsTwoToneIcon from '@mui/icons-material/EmojiEmotionsTwoTone';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SentimentSatisfiedTwoToneIcon from '@mui/icons-material/SentimentSatisfiedTwoTone';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VerifiedIcon from "@mui/icons-material/Verified";

const MotionTypography = motion(Typography);
const MotionTable = motion(Table);
const MotionTableRow = motion(TableRow);


const comparisonData = [
    {
        feature: "Timely Deliveries",
        marketExperience: <HourglassEmptyIcon fontSize="inherit" color="error" />,
        decozoneExperience: <LocalShippingIcon fontSize="inherit" color="success" />,
    },
    {
        feature: "Client Customization",
        marketExperience: <SentimentDissatisfiedTwoToneIcon fontSize="inherit" color="error" />,
        decozoneExperience: <SentimentSatisfiedTwoToneIcon fontSize="inherit" color="success" />,
    },
    {
        feature: "Cost Efficiency",
        marketExperience: <SentimentDissatisfiedTwoToneIcon fontSize="inherit" color="error" />,
        decozoneExperience: <SentimentSatisfiedTwoToneIcon fontSize="inherit" color="success" />,
    },
    {
        feature: "Product Variety",
        marketExperience: <HourglassEmptyIcon fontSize="inherit" color="error" />,
        decozoneExperience: <EmojiEmotionsTwoToneIcon fontSize="inherit" color="success" />,
    },
    {
        feature: "Quality Assurance",
        marketExperience: <SentimentDissatisfiedTwoToneIcon fontSize="inherit" color="error" />,
        decozoneExperience: <VerifiedIcon fontSize="inherit" color="success" />,
    },
    {
        feature: "Customer Support",
        marketExperience: <SentimentDissatisfiedTwoToneIcon fontSize="inherit" color="error" />,
        decozoneExperience: <AccountCircleIcon fontSize="inherit" color="success" />,
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
                <MotionTable variants={SlideUp(0.4)}
                                  initial="initial"
                                  whileInView="animate">
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
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontSize: isMobile ? "medium" : "large",
                                    }}
                                >
                                    {React.cloneElement(item.marketExperience, {
                                        fontSize: isMobile ? "medium" : "large",
                                    })}
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
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontSize: isMobile ? "medium" : "large",
                                    }}
                                >
                                    {React.cloneElement(item.decozoneExperience, {
                                        fontSize: isMobile ? "medium" : "large",
                                    })}
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







// import React from "react";
// import { Container, Typography, Box, Table, TableBody, TableCell, TableRow, TableHead } from "@mui/material";

// const comparisonData = [
//     {
//       feature: "Timely Deliveries",
//       marketExperience: "⏳", // Hourglass for market experience
//       decozoneExperience: "🚚", // Delivery truck for Decozone experience
//     },
//     {
//       feature: "Client Customization",
//       marketExperience: "😞", // Disappointed face for market experience
//       decozoneExperience: "🙂", // Slightly smiling face for Decozone experience
//     },
//     {
//       feature: "Cost Efficiency",
//       marketExperience: "😞", // Disappointed face
//       decozoneExperience: "🙂", // Slightly smiling face
//     },
//     {
//       feature: "Product Variety",
//       marketExperience: "⏳", // Hourglass for market experience
//       decozoneExperience: "😊", // Smiling face for Decozone experience
//     },
//     {
//       feature: "Quality Assurance",
//       marketExperience: "😞", // Disappointed face for market experience
//       decozoneExperience: "✅", // Checkmark for Decozone experience
//     },
//     {
//       feature: "Customer Support",
//       marketExperience: "😞", // Disappointed face for market experience
//       decozoneExperience: "👤", // User icon for Decozone experience
//     },
//   ];
  

// const WhyPartnerWithUs = () => {
//   return (
//     <Box sx={{ py: 5 }}>
//       <Container>
//         <Typography
//           variant="h4"
//           sx={{
//             my: 4,
//             fontWeight: "bold",
//             fontFamily: "Arial, sans-serif",
//             color: "#333",
//             textAlign: "center",
//           }}
//         >
//           Why Partner With Us?
//         </Typography>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "18px", color: "error.main" }}>
//                 Your Market Experience
//               </TableCell>
//               <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "18px" }}>
//                 Features
//               </TableCell>
//               <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "18px", color: "success.main" }}>
//                 Decozone Experience
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {comparisonData.map((item, index) => (
//               <TableRow key={index}>
//                 <TableCell align="center" sx={{ fontSize: "24px" }}>{item.marketExperience}</TableCell>
//                 <TableCell align="center">
//                   <Typography variant="subtitle1" fontWeight="bold" sx={{ fontSize: "16px" }}>
//                     {item.feature}
//                   </Typography>
//                 </TableCell>
//                 <TableCell align="center" sx={{ fontSize: "24px" }}>{item.decozoneExperience}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Container>
//     </Box>
//   );
// };

// export default WhyPartnerWithUs;

