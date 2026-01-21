import React, { useState } from "react";
import {
    Button,
    Box,
    Paper,
    IconButton,
    Checkbox,
    TextField,
    FormControlLabel,
    Typography,
    Grid,
    ToggleButton,
    ToggleButtonGroup,
    useMediaQuery,
    useTheme,
    Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import { styled } from "@mui/system";
import LivingArea from "../../assets/gallery/livingarea-1.png";
import { submitContactForm } from "../../utils/contactService";

const StyledPaper = styled(Paper)(({ theme }) => ({
    maxWidth: 900,
    width: "95%",
    margin: "auto",
    borderRadius: "16px",
    backgroundColor: "white",
    position: "relative",
    overflow: "hidden", // Ensure image doesn't bleed
    border: "1px solid rgba(159, 128, 51, 0.3)", // Subtle Darker Gold border
    [theme.breakpoints.down("sm")]: {
        maxWidth: "95%",
    },
}));

const StyledToggleButton = styled(ToggleButton)({
    border: "1px solid #e0e0e0",
    borderRadius: "8px !important",
    marginRight: "8px !important",
    textTransform: "none",
    fontWeight: 500,
    padding: "6px 16px",
    "&.Mui-selected": {
        backgroundColor: "#4a5942 !important",
        color: "white !important",
    },
    "&:hover": {
        backgroundColor: "#f5f5f5",
    },
});

const ContactModal = ({ open, setOpen }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    // Form state
    const [form, setForm] = useState({
        propertyType: "2BHK",
        propertyLocation: "",
        name: "",
        phone: "",
        whatsappUpdates: true,
    });

    // UI state
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleClose = () => {
        setOpen(false);
        // Reset messages when closing
        setMessage("");
        setError("");
    };

    const handlePropertyChange = (event, newAlignment) => {
        if (newAlignment !== null) {
            setForm({ ...form, propertyType: newAlignment });
        }
    };

    const handleInputChange = (e) => {
        const { name, value, checked, type } = e.target;
        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        // Basic validation
        if (!form.name.trim()) {
            setError("Please enter your name");
            return;
        }

        if (!form.phone.trim()) {
            setError("Please enter your phone number");
            return;
        }

        setIsSubmitting(true);

        try {
            await submitContactForm({
                ...form,
                submittedAt: new Date().toISOString(),
                source: "contact-modal-tvashta-interior",
            });

            setMessage("✅ Thank you! We'll contact you soon for a free consultation.");

            // Reset form after 3 seconds
            setTimeout(() => {
                setForm({
                    propertyType: "2BHK",
                    propertyLocation: "",
                    name: "",
                    phone: "",
                    whatsappUpdates: true,
                });
                setMessage("");
                handleClose();
            }, 3000);

        } catch (err) {
            setError(
                err?.message ||
                "Something went wrong. Please try again or call us directly."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!open) {
        return null;
    }

    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor: "rgba(0, 0, 0, 0.7)",
                zIndex: 1300, // Higher than navbar
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <StyledPaper elevation={5}>
                <IconButton
                    onClick={handleClose}
                    sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        zIndex: 10,
                        bgcolor: "rgba(255,255,255,0.8)",
                        "&:hover": { bgcolor: "white" },
                    }}
                >
                    <CloseIcon />
                </IconButton>

                <Grid container>
                    {/* Left Side - Image */}
                    {!isMobile && (
                        <Grid item md={5} sx={{ position: "relative" }}>
                            <Box
                                component="img"
                                src={LivingArea}
                                alt="Interior Design"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: "block",
                                }}
                            />
                            <Box
                                sx={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    width: "100%",
                                    background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                                    p: 3,
                                    color: "white",
                                }}
                            >
                                <Typography variant="h5" fontWeight="bold" sx={{ fontFamily: "Playfair Display, serif" }}>
                                    Transform Your Home
                                </Typography>
                                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                    Get expert advice from our top designers.
                                </Typography>
                            </Box>
                        </Grid>
                    )}

                    {/* Right Side - Form */}
                    <Grid item xs={12} md={7} sx={{ p: { xs: 3, md: 4 } }}>
                        <Typography
                            variant="h5"
                            fontWeight="800"
                            gutterBottom
                            sx={{
                                fontFamily: "Playfair Display, serif",
                                color: "#2c3e50",
                                mb: 3,
                            }}
                        >
                            Get a free design consultation
                        </Typography>

                        <Typography variant="body2" fontWeight="600" sx={{ mb: 1, color: "#555" }}>
                            Property type
                        </Typography>
                        <ToggleButtonGroup
                            value={form.propertyType}
                            exclusive
                            onChange={handlePropertyChange}
                            sx={{ mb: 3, flexWrap: "wrap", gap: 1 }}
                        >
                            <StyledToggleButton value="1BHK">1 BHK</StyledToggleButton>
                            <StyledToggleButton value="2BHK">2 BHK</StyledToggleButton>
                            <StyledToggleButton value="3BHK">3 BHK</StyledToggleButton>
                            <StyledToggleButton value="4BHK+">4+ BHK / Duplex</StyledToggleButton>
                        </ToggleButtonGroup>

                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                name="propertyLocation"
                                placeholder="Property Location"
                                variant="outlined"
                                size="small"
                                value={form.propertyLocation}
                                onChange={handleInputChange}
                                sx={{
                                    mb: 2,
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "8px",
                                        backgroundColor: "#f9f9f9",
                                        "& fieldset": { borderColor: "#eee" },
                                        "&:hover fieldset": { borderColor: "#9f8033" }, // Darker Muted Gold
                                        "&.Mui-focused fieldset": { borderColor: "#9f8033" },
                                    }
                                }}
                            />
                            <TextField
                                fullWidth
                                name="name"
                                placeholder="Name"
                                variant="outlined"
                                size="small"
                                value={form.name}
                                onChange={handleInputChange}
                                required
                                sx={{
                                    mb: 2,
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "8px",
                                        backgroundColor: "#f9f9f9",
                                        "& fieldset": { borderColor: "#eee" },
                                        "&:hover fieldset": { borderColor: "#9f8033" },
                                        "&.Mui-focused fieldset": { borderColor: "#9f8033" },
                                    },
                                }}
                            />
                            <TextField
                                fullWidth
                                name="phone"
                                placeholder="Mobile Number"
                                variant="outlined"
                                size="small"
                                value={form.phone}
                                onChange={handleInputChange}
                                required
                                sx={{
                                    mb: 1,
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "8px",
                                        backgroundColor: "#f9f9f9",
                                        "& fieldset": { borderColor: "#eee" },
                                        "&:hover fieldset": { borderColor: "#9f8033" },
                                        "&.Mui-focused fieldset": { borderColor: "#9f8033" },
                                    },
                                }}
                            />

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="whatsappUpdates"
                                        checked={form.whatsappUpdates}
                                        onChange={handleInputChange}
                                        size="small"
                                        sx={{ color: "#9f8033", '&.Mui-checked': { color: "#9f8033" } }}
                                    />
                                }
                                label={<Typography variant="caption" color="textSecondary">Send me updates on WhatsApp</Typography>}
                                sx={{ mb: 2 }}
                            />

                            {/* Success Message */}
                            {message && (
                                <Alert severity="success" sx={{ mb: 2 }}>
                                    {message}
                                </Alert>
                            )}

                            {/* Error Message */}
                            {error && (
                                <Alert severity="error" sx={{ mb: 2 }}>
                                    {error}
                                </Alert>
                            )}

                            <Button
                                variant="contained"
                                fullWidth
                                size="large"
                                type="submit"
                                disabled={isSubmitting}
                                sx={{
                                    background: "linear-gradient(135deg, #4a5942 0%, #3d4a36 100%)",
                                    border: "1px solid #9f8033", // Gold Border
                                    color: "white",
                                    fontWeight: "800",
                                    py: 1.5,
                                    borderRadius: "8px",
                                    fontSize: "1rem",
                                    boxShadow: "0 4px 15px rgba(74, 89, 66, 0.3)",
                                    transition: "all 0.3s ease",
                                    opacity: isSubmitting ? 0.7 : 1,
                                    "&:hover": {
                                        transform: isSubmitting ? "none" : "translateY(-2px)",
                                        background: "#3d4a36",
                                        borderColor: "#c5a059",
                                        boxShadow: "0 6px 20px rgba(159, 128, 51, 0.4)",
                                    },
                                }}
                            >
                                {isSubmitting ? "Submitting..." : "Book a Free Consultation"}
                            </Button>

                            <Typography
                                variant="caption"
                                display="block"
                                align="center"
                                color="textSecondary"
                                sx={{ mt: 2, fontSize: "10px" }}
                            >
                                By submitting, you consent to <span style={{ color: "#4a5942", cursor: "pointer" }}>privacy policy</span> and <span style={{ color: "#4a5942", cursor: "pointer" }}>terms of use</span>
                            </Typography>
                        </form>
                    </Grid>
                </Grid>
            </StyledPaper>
        </Box>
    );
};


export default ContactModal