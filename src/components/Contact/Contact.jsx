import React, { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Grid,
    Container,
    MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import {
    LocationOnOutlined,
    PhoneOutlined,
    EmailOutlined,
} from "@mui/icons-material";
import bgImage from "../../assets/landing-image.jpeg";
import SEOHead from "../SEO/SEOHead";
import InternalLinks from "../SEO/InternalLinks";
import { submitContactForm } from "../../utils/contactService";

// Accent Divider
const AccentDivider = styled("div")({
    width: "100%",
    height: "6px",
    background: "linear-gradient(to right, #4a5942, #7d8f6d, #4a5942)", // Adapted green gradient
});

// Hero Section wrapper
const HeroWrapper = styled(Box)({
    position: "relative",
    height: "70vh", // Reduced slightly from 90vh
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    overflow: "hidden",
});

// Hero Text overlay
const HeroText = styled(Box)({
    position: "absolute",
    zIndex: 2,
    color: "#fff",
    textAlign: "center",
    padding: "0 20px",
});

// Hero Title with gold underline
const HeroTitle = styled(Typography)({
    fontSize: "3rem",
    fontWeight: 800,
    color: "#fff",
    marginBottom: "20px",
    position: "relative",
    fontFamily: "'Montserrat', sans-serif",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    "&::after": {
        content: '""',
        position: "absolute",
        bottom: "-10px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "80px",
        height: "4px",
        background: "linear-gradient(135deg, #4a5942, #5c6c53)",
        borderRadius: "2px",
    },
});

// Section wrapper
const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 2),
    backgroundColor: "#fff",
}));

// Styled input fields
const StyledTextField = styled(TextField)(() => ({
    "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: "#d4cbb6" },
        "&:hover fieldset": { borderColor: "#4a5942" },
        "&.Mui-focused fieldset": { borderColor: "#4a5942" },
        borderRadius: "10px",
        background: "#fff",
    },
    "& .MuiInputLabel-root": { color: "#7a7361" },
}));

// Contact Card wrapper
const ContactCard = styled(Box)(({ theme }) => ({
    background: "#fff",
    borderRadius: "16px",
    padding: theme.spacing(4),
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    height: "100%",
}));

// Single contact item
const ContactItem = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    background: "#f4f7f2", // Light greenish tint
    padding: theme.spacing(2),
    borderRadius: "12px",
    "& svg": {
        color: "#4a5942",
        fontSize: "28px",
    },
}));

// Styled form card
const FormCard = styled(Box)(({ theme }) => ({
    background: "#fff",
    borderRadius: "16px",
    padding: theme.spacing(4),
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
}));

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        bestTimeToTalk: "",
        message: "",
    });
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");
        setIsSubmitting(true);

        try {
            await submitContactForm({
                ...form,
                submittedAt: new Date().toISOString(),
                source: "contact-page-tvashta-interior",
            });
            setMessage("✅ Thank you! We’ll contact you soon.");
            setTimeout(() => {
                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    bestTimeToTalk: "",
                    message: "",
                });
                setMessage("");
            }, 4000);
        } catch (err) {
            setError(
                err?.message ||
                "Something went wrong while submitting the form. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <SEOHead
                title="Contact Tvashta Interior - Get Your Quote Today"
                description="Contact Tvashta Interior for your home renovation and interior design needs in Bangalore. Get expert quotes and consultation."
                keywords="contact Tvashta Interior, interior design quote Bangalore, home renovation inquiry"
                canonical="/contact"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    "mainEntity": {
                        "@type": "Organization",
                        "name": "Tvashta Interior",
                        "url": "https://Rudreshcg.github.io/tvashta-interior/contact"
                    }
                }}
            />
            {/* Hero Section */}
            <HeroWrapper component={motion.section} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <img
                    src={bgImage}
                    alt="Contact Background"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 1,
                        filter: "brightness(0.6)",
                    }}
                    onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentNode.style.backgroundColor = "#4a5942";
                    }}
                />
                <HeroText>
                    <HeroTitle variant="h2">
                        Contact Us
                    </HeroTitle>
                    <Typography variant="h6" sx={{ maxWidth: 700, mx: "auto", lineHeight: 1.6 }}>
                        We'd love to hear from you. Please send us a message or reach out directly.
                    </Typography>
                </HeroText>
            </HeroWrapper>

            {/* Divider */}
            <AccentDivider />

            {/* Contact Form & Info */}
            <Section>
                <Container maxWidth="lg">
                    <Grid container spacing={6}>
                        {/* Contact Form */}
                        <Grid item xs={12} md={7}>
                            <FormCard component={motion.div} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: "#2c3e50", textAlign: "center" }}>
                                    Send Us a Message
                                </Typography>
                                <Box component="form" onSubmit={handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <StyledTextField label="Your Name" name="name" value={form.name} onChange={handleChange} fullWidth required />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <StyledTextField label="Email Address" name="email" value={form.email} onChange={handleChange} fullWidth required />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <StyledTextField label="Phone Number" name="phone" value={form.phone} onChange={handleChange} fullWidth />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <StyledTextField select label="Best Time to Talk" name="bestTimeToTalk" value={form.bestTimeToTalk} onChange={handleChange} fullWidth>
                                                <MenuItem value="Within 15 Min.">Within 15 Min.</MenuItem>
                                                <MenuItem value="08AM To 12PM">08AM To 12PM</MenuItem>
                                                <MenuItem value="12PM To 04PM">12PM To 04PM</MenuItem>
                                                <MenuItem value="04PM To 08PM">04PM To 08PM</MenuItem>
                                                <MenuItem value="Anytime">Anytime</MenuItem>
                                            </StyledTextField>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <StyledTextField label="Your Message" name="message" value={form.message} onChange={handleChange} fullWidth required multiline rows={4} />
                                        </Grid>
                                        <Grid item xs={12} textAlign="center">
                                            <Button variant="contained" type="submit" disabled={isSubmitting} sx={{ background: "#4a5942", color: "white", fontWeight: 600, px: 5, py: 1.5, borderRadius: "10px", "&:hover": { background: "#5c6c53" }, opacity: isSubmitting ? 0.8 : 1 }}>
                                                {isSubmitting ? "Sending..." : "Send Message"}
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                                {message && (
                                    <Typography align="center" sx={{ mt: 3, color: "#2e3921", fontWeight: 500 }}>
                                        {message}
                                    </Typography>
                                )}
                                {error && (
                                    <Typography align="center" sx={{ mt: 2, color: "#b71c1c", fontWeight: 500 }}>
                                        {error}
                                    </Typography>
                                )}
                            </FormCard>
                        </Grid>

                        {/* Contact Details */}
                        <Grid item xs={12} md={5}>
                            <ContactCard component={motion.div} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                                <Typography variant="h4" sx={{ mb: 3, color: "#2c3e50", fontWeight: 600, textAlign: "center" }}>
                                    Contact Details
                                </Typography>

                                <ContactItem>
                                    <LocationOnOutlined />
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Address</Typography>
                                        <Typography>Bangalore, Karnataka, India</Typography>
                                    </Box>
                                </ContactItem>

                                <ContactItem>
                                    <PhoneOutlined />
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Phone</Typography>
                                        <Typography>+91 9901452655</Typography>
                                    </Box>
                                </ContactItem>

                                <ContactItem>
                                    <EmailOutlined />
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Email</Typography>
                                        <Typography>tvashtainterior@gmail.com</Typography>
                                    </Box>
                                </ContactItem>
                            </ContactCard>
                        </Grid>
                    </Grid>
                </Container>
            </Section>

            {/* Divider */}
            <AccentDivider />

            {/* Google Map */}
            <Box sx={{ width: "100%", height: { xs: "300px", md: "500px" } }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6186919274014!2d77.5166837!3d12.932211500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f000308f089%3A0x44c0c94f4abf6ac5!2sTvashta%20Interiors!5e0!3m2!1sen!2sin!4v1766159986235!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </Box>

            {/* Internal Links */}
            <InternalLinks currentPage="contact" />
        </>
    );
}
