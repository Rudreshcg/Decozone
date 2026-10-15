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

// Brand Colors
const BRAND_GREEN = "#42523e";
const BRAND_DARK = "#121a12";
const ACCENT_GOLD = "#b29873";
const BG_CREAM = "#faf8f5";

// Accent Divider
const AccentDivider = styled("div")({
    width: "100%",
    height: "2px",
    background: "linear-gradient(90deg, transparent 0%, #b29873 50%, transparent 100%)",
});

// Hero Section wrapper
const HeroWrapper = styled(Box)({
    position: "relative",
    height: "65vh",
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

// Hero Title
const HeroTitle = styled(Typography)(({ theme }) => ({
    fontSize: "2.8rem",
    [theme.breakpoints.up("md")]: {
        fontSize: "4.5rem",
    },
    fontWeight: 700,
    color: "#fff",
    marginBottom: "16px",
    position: "relative",
    fontFamily: "'Playfair Display', serif",
    letterSpacing: "-0.5px",
    textShadow: "0 4px 15px rgba(0,0,0,0.4)",
}));

// Section wrapper
const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 2),
    backgroundColor: "#faf8f5",
}));

// Styled input fields
const StyledTextField = styled(TextField)(() => ({
    "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: "rgba(178, 152, 115, 0.35)" },
        "&:hover fieldset": { borderColor: "#b29873" },
        "&.Mui-focused fieldset": { borderColor: "#42523e", borderWidth: "1.5px" },
        borderRadius: "12px",
        background: "#ffffff",
        fontFamily: "'Montserrat', sans-serif",
    },
    "& .MuiInputLabel-root": { color: "#6b7a69", fontFamily: "'Montserrat', sans-serif" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#42523e" },
}));

// Contact Card wrapper
const ContactCard = styled(Box)(({ theme }) => ({
    background: "#ffffff",
    borderRadius: "20px",
    padding: theme.spacing(4.5),
    border: "1px solid rgba(178, 152, 115, 0.25)",
    boxShadow: "0 10px 30px rgba(66, 82, 62, 0.05)",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    height: "100%",
}));

// Single contact item
const ContactItem = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2.5),
    background: "#faf8f5",
    border: "1px solid rgba(178, 152, 115, 0.2)",
    padding: theme.spacing(2.5),
    borderRadius: "14px",
    transition: "all 0.3s ease",
    "&:hover": {
        borderColor: "#b29873",
        transform: "translateX(4px)",
        boxShadow: "0 6px 16px rgba(66, 82, 62, 0.06)",
    },
    "& svg": {
        color: "#b29873",
        fontSize: "30px",
    },
}));

// Styled form card
const FormCard = styled(Box)(({ theme }) => ({
    background: "#ffffff",
    borderRadius: "20px",
    padding: theme.spacing(4.5),
    border: "1px solid rgba(178, 152, 115, 0.25)",
    boxShadow: "0 10px 30px rgba(66, 82, 62, 0.05)",
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
                        zIndex: 0,
                        filter: "brightness(0.6)",
                    }}
                    onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentNode.style.backgroundColor = BRAND_GREEN;
                    }}
                />
                <HeroText>
                    <Box
                        sx={{
                            display: "inline-block",
                            border: "1px solid rgba(178, 152, 115, 0.6)",
                            bgcolor: "rgba(18, 26, 18, 0.6)",
                            backdropFilter: "blur(8px)",
                            px: 2.5,
                            py: 0.6,
                            borderRadius: "50px",
                            mb: 2
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#dfcfb8",
                                fontSize: "0.8rem",
                                letterSpacing: "2.5px",
                                fontWeight: 700,
                                textTransform: "uppercase"
                            }}
                        >
                            ✦ PRIVATE ADVISORY & CONSULTING ✦
                        </Typography>
                    </Box>
                    <HeroTitle variant="h1">
                        Connect With Our Architects
                    </HeroTitle>
                    <Typography variant="h6" sx={{
                        maxWidth: 700,
                        mx: "auto",
                        lineHeight: 1.6,
                        color: "rgba(255,255,255,0.9)",
                        fontWeight: 400,
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        fontSize: { xs: "0.85rem", md: "0.95rem" }
                    }}>
                        Visit our Bangalore experience studio or request a transparent, itemized BOQ estimate.
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
                            <FormCard component={motion.div} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                                <Box sx={{ textAlign: "center", mb: 2 }}>
                                    <div className="section-badge-global">✦ DIRECT INQUIRY ✦</div>
                                    <Typography variant="h4" sx={{ mt: 1, fontWeight: 700, color: "#121a12", fontFamily: "'Playfair Display', serif", fontSize: { xs: "1.8rem", md: "2.2rem" } }}>
                                        Schedule A Consultation
                                    </Typography>
                                </Box>
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
                                            <StyledTextField select label="Preferred Discussion Time" name="bestTimeToTalk" value={form.bestTimeToTalk} onChange={handleChange} fullWidth>
                                                <MenuItem value="Within 15 Min.">Within 15 Min.</MenuItem>
                                                <MenuItem value="08AM To 12PM">08AM To 12PM (Morning)</MenuItem>
                                                <MenuItem value="12PM To 04PM">12PM To 04PM (Afternoon)</MenuItem>
                                                <MenuItem value="04PM To 08PM">04PM To 08PM (Evening)</MenuItem>
                                                <MenuItem value="Anytime">Anytime</MenuItem>
                                            </StyledTextField>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <StyledTextField label="Project Details (Type, Location, Sq.ft)" name="message" value={form.message} onChange={handleChange} fullWidth required multiline rows={4} />
                                        </Grid>
                                        <Grid item xs={12} textAlign="center">
                                            <Button variant="contained" type="submit" disabled={isSubmitting} className="gold-btn" sx={{ px: 6, py: 1.6, fontSize: "0.9rem", fontWeight: 700, letterSpacing: "1px", opacity: isSubmitting ? 0.8 : 1 }}>
                                                {isSubmitting ? "Sending..." : "Request Project Consultation"}
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                                {message && (
                                    <Typography align="center" sx={{ mt: 2, color: "#42523e", fontWeight: 600, fontFamily: "'Montserrat', sans-serif" }}>
                                        {message}
                                    </Typography>
                                )}
                                {error && (
                                    <Typography align="center" sx={{ mt: 2, color: "#b71c1c", fontWeight: 500, fontFamily: "'Montserrat', sans-serif" }}>
                                        {error}
                                    </Typography>
                                )}
                            </FormCard>
                        </Grid>

                        {/* Contact Details */}
                        <Grid item xs={12} md={5}>
                            <ContactCard component={motion.div} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                                <Box sx={{ textAlign: "center", mb: 1 }}>
                                    <div className="section-badge-global">✦ ATELIER & STUDIO ✦</div>
                                    <Typography variant="h4" sx={{ mt: 1, color: "#121a12", fontWeight: 700, fontFamily: "'Playfair Display', serif", fontSize: { xs: "1.8rem", md: "2.2rem" } }}>
                                        Visit Our Spaces
                                    </Typography>
                                </Box>

                                <ContactItem>
                                    <LocationOnOutlined />
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#121a12", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.75rem", fontFamily: "'Montserrat', sans-serif" }}>Design Studio</Typography>
                                        <Typography sx={{ color: "#556353", fontSize: "0.9rem", fontFamily: "'Montserrat', sans-serif", mt: 0.5 }}>
                                            Sree Sai Heights, 3rd Floor, Ideal Homes Township, Rajarajeshwari Nagar, Bangalore – 560098
                                        </Typography>
                                    </Box>
                                </ContactItem>

                                <ContactItem>
                                    <LocationOnOutlined />
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#121a12", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.75rem", fontFamily: "'Montserrat', sans-serif" }}>German CNC Factory</Typography>
                                        <Typography sx={{ color: "#556353", fontSize: "0.9rem", fontFamily: "'Montserrat', sans-serif", mt: 0.5 }}>
                                            Survey No 88/1, Rampura, Viragonagar Post, Bangalore – 560049
                                        </Typography>
                                    </Box>
                                </ContactItem>

                                <ContactItem>
                                    <PhoneOutlined />
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#121a12", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.75rem", fontFamily: "'Montserrat', sans-serif" }}>Direct Line</Typography>
                                        <Typography sx={{ color: "#556353", fontSize: "0.9rem", fontFamily: "'Montserrat', sans-serif", mt: 0.5, fontWeight: 600 }}>
                                            +91 84310 00242
                                        </Typography>
                                    </Box>
                                </ContactItem>

                                <ContactItem>
                                    <EmailOutlined />
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#121a12", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.75rem", fontFamily: "'Montserrat', sans-serif" }}>Architectural Inquiries</Typography>
                                        <Typography sx={{ color: "#556353", fontSize: "0.9rem", fontFamily: "'Montserrat', sans-serif", mt: 0.5 }}>
                                            tvashtainterior@gmail.com
                                        </Typography>
                                    </Box>
                                </ContactItem>
                            </ContactCard>
                        </Grid>
                    </Grid>
                </Container>
            </Section>

            {/* Divider */}
            <AccentDivider />

            {/* Google Map Section */}
            <Box sx={{ bgcolor: "#faf8f5", py: 8 }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: "center", mb: 4 }}>
                        <div className="section-badge-global">✦ LOCATION ✦</div>
                        <Typography variant="h4" sx={{ mt: 1, color: "#121a12", fontWeight: 700, fontFamily: "'Playfair Display', serif" }}>
                            Locate Our Experience Studio
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            height: { xs: "320px", md: "460px" },
                            borderRadius: "20px",
                            overflow: "hidden",
                            border: "1px solid rgba(178, 152, 115, 0.35)",
                            boxShadow: "0 12px 36px rgba(66, 82, 62, 0.08)",
                        }}
                    >
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
                    <InternalLinks currentPage="contact" />
                </Container>
            </Box>
        </>
    );
}
