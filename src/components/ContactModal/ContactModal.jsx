import React, { useState, useEffect } from "react";
import {
    Button,
    Box,
    Paper,
    IconButton,
    Checkbox,
    TextField,
    FormControlLabel,
    Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../animation/animate";
import { styled } from "@mui/system";

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    maxWidth: 400,
    margin: "auto",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white", // Form background is white
    position: "relative",
    [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2), // Smaller padding for mobile view
    },
}));

const ContactModal = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    };

    if (!open) {
        return null; // Do not render anything if `open` is false
    }
    return (
        <Box
            component={motion.div}
            variants={SlideUp(0.8)}
            initial="initial"
            animate="animate"
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor: "rgba(0, 0, 0, 0.5)", // Dim background
                zIndex: 1100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                px: { xs: 2, sm: 0 }, // Padding for smaller screens
            }}
        >
            <StyledPaper elevation={3}>
                <IconButton
                    onClick={handleClose}
                    sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem" } }} // Responsive font size
                >
                    Designs for Every Budget
                </Typography>
                <motion.div variants={SlideUp(0.8)}>
                    <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        margin="normal"
                        sx={{
                            bgcolor: "rgba(255, 255, 255, 0.8)",
                            fontSize: { xs: "0.875rem", sm: "1rem" },
                        }}
                    />
                </motion.div>
                <motion.div variants={SlideUp(1)}>
                    <TextField
                        fullWidth
                        label="Property Location"
                        variant="outlined"
                        margin="normal"
                        sx={{
                            bgcolor: "rgba(255, 255, 255, 0.8)",
                            fontSize: { xs: "0.875rem", sm: "1rem" },
                        }}
                    />
                </motion.div>
                <motion.div variants={SlideUp(1.2)}>
                    <TextField
                        fullWidth
                        label="Phone Number"
                        variant="outlined"
                        margin="normal"
                        sx={{
                            bgcolor: "rgba(255, 255, 255, 0.8)",
                            fontSize: { xs: "0.875rem", sm: "1rem" },
                        }}
                    />
                </motion.div>
                <motion.div variants={SlideUp(1.4)}>
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Send me updates on WhatsApp"
                        sx={{ fontSize: { xs: "0.75rem", sm: "1rem" } }}
                    />
                </motion.div>
                <motion.div variants={SlideUp(1.6)}>
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            bgcolor: "#FF5A5F",
                            my: 2,
                            fontWeight: "bold",
                            p: "10px 16px",
                            borderRadius: "10px",
                            fontSize: { xs: "0.875rem", sm: "1rem" },
                        }}
                    >
                        GET FREE QUOTE
                    </Button>
                </motion.div>
                <motion.div variants={SlideUp(1.8)}>
                    <Typography
                        variant="caption"
                        color="textSecondary"
                        sx={{
                            mt: 2,
                            fontSize: { xs: "0.625rem", sm: "0.75rem" }, // Adjust font size for mobile
                        }}
                    >
                        By submitting this form, you agree to the{" "}
                        <a
                            href="/privacy-policy"
                            style={{
                                textDecoration: "none",
                                color: "red",
                            }}
                        >
                            privacy policy
                        </a>{" "}
                        &{" "}
                        <a
                            href="/terms"
                            style={{
                                textDecoration: "none",
                                color: "red",
                            }}
                        >
                            terms and conditions
                        </a>
                        .
                    </Typography>
                </motion.div>
            </StyledPaper>
        </Box>
    )
}


export default ContactModal