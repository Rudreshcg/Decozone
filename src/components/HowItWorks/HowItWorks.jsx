import React, { useState } from 'react';
import {
    Box,
    Typography,
    Grid,
    Avatar,
    Button,
    useMediaQuery,
    useTheme,
} from "@mui/material";

// Example icons for the steps (replace with your own images if needed)
import HomeIcon from "@mui/icons-material/Home";
import EventNoteIcon from "@mui/icons-material/EventNote";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import CelebrationIcon from "@mui/icons-material/Celebration";
import PersonIcon from "@mui/icons-material/Person";
import CheckIcon from "@mui/icons-material/Check";
import BuildIcon from "@mui/icons-material/Build";
import MovingIcon from "@mui/icons-material/Moving";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import ContactModal from "../ContactModal/ContactModal"
import Payement2 from "../../assets/payment-2.png";
import Payement from "../../assets/payment.png";
import BookRenovation from "../../assets/book-renovation.png";
import MeetDesigner from "../../assets/meet-designer.png";
import MoveEnjoy from "../../assets/move-enjoy.png";



const HowItWorksMobile = () => {

    const steps = [
        { icon: MeetDesigner, label: "Meet a designer" },
        { icon: BookRenovation, label: "(5% payment⁴) Book a renovation" },
        { icon: Payement, label: "(50% payment) Execution begins" },
        { icon: Payement2, label: "(100% payment) Final installations" },
        { icon: MoveEnjoy, label: "Move in and enjoy!" },
    ];

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 4 }}>
                How it works
            </Typography>
            <Grid container direction="column" spacing={3} sx={{ position: "relative" }}>
                {/* Vertical Line */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "25px",
                        bottom: 0,
                        left: "53px",
                        width: "2px",
                        backgroundColor: "#e0e0e0",
                        zIndex: 1,
                    }}
                />
                {steps.map((step, index) => (
                    <Grid
                        item
                        key={index}
                        container
                        alignItems="center"
                        spacing={2}
                        sx={{ zIndex: 2, position: "relative" }}
                    >
                        <Grid item>
                            {/* <Avatar
                                sx={{
                                    backgroundColor: "#ffffff",
                                    border: "2px solid #e0e0e0",
                                    color: "primary.main",
                                    width: 60,
                                    height: 60,
                                }}
                            >
                                {step.icon}
                            </Avatar> */}
                            <Avatar
  sx={{
    backgroundColor: "#ffffff",
    border: "2px solid #e0e0e0",
    color: "primary.main",
    width:  60 , // Outer avatar size
    height: 60, // Outer avatar size
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <Box
    component="img"
    src={step.icon}
    alt={step.label}
    sx={{
      width: 40, // Icon size
      height: 40, // Icon size
    }}
  />
</Avatar>
                        </Grid>
                        <Grid item maxWidth="250px">
                            <Typography variant="body1">{step.label}</Typography>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

const HowItWorksDesktop = () => {
    const isTab = useMediaQuery("(max-width:960px)");

    const steps = [
        { icon: MeetDesigner, label: "Meet a designer" },
        { icon: BookRenovation, label: "(5% payment⁴) Book a renovation" },
        { icon: Payement, label: "(50% payment) Execution begins" },
        { icon: Payement2, label: "(100% payment) Final installations" },
        { icon: MoveEnjoy, label: "Move in and enjoy!" },
    ];

    return (
        <Box
            sx={{
                padding: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginBottom: 4, textAlign: "center" }}
            >
                How it works
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    position: "relative",
                    paddingX: 2,
                    marginTop: 2,
                    minWidth: "75%",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "28%",
                        left: "8%",
                        right: "5%",
                        height: "2px",
                        backgroundColor: "#e0e0e0",
                        zIndex: 1,
                        width: "85%",
                    }}
                />
                {steps.map((step, index) => (
                    <Box
                        key={index}
                        sx={{
                            textAlign: "center",
                            position: "relative",
                            zIndex: 2,
                        }}
                    >

                        <Avatar
  sx={{
    backgroundColor: "#ffffff",
    border: "2px solid #e0e0e0",
    color: "primary.main",
    width: isTab ? 60 : 80, // Outer avatar size
    height: isTab ? 60 : 80, // Outer avatar size
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <Box
    component="img"
    src={step.icon}
    alt={step.label}
    sx={{
      width: isTab ? 40 : 50, // Icon size
      height: isTab ? 40 : 50, // Icon size
    }}
  />
</Avatar>

                        <Typography
                            variant="body1"
                            sx={{
                                marginTop: 1,
                                maxWidth: 140,
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
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    return <Box>
        {isMobile ? <HowItWorksMobile /> : <HowItWorksDesktop />}
        <motion.Box
            variants={SlideUp(1.6)}
            style={{
                display: "flex",
                justifyContent: "center"
            }}
        >
            <Button
                variant="contained"
                sx={{
                    bgcolor: "#FF5A5F",
                    my: 4,
                    fontWeight: "bold",
                    p: "10px 16px",
                    borderRadius: "10px",
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                }}
                onClick={handleOpen}
            >
                BOOK FREE CONSULTATION
            </Button>
        </motion.Box>
        <ContactModal open={open} setOpen={setOpen} />
    </Box>;
};

export default HowItWorks;

