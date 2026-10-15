import React from "react";
import { useParams, Link } from "react-router-dom";
import {
    Container,
    Typography,
    Box,
    Button,
    Avatar,
    Divider,
    Chip
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { blogsData } from "../../data/blogsData";
import SEOHead from "../SEO/SEOHead";
import InternalLinks from "../SEO/InternalLinks";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const BRAND_GREEN = "#42523e";
const BRAND_DARK = "#121a12";
const ACCENT_GOLD = "#b29873";

const BlogPost = () => {
    const { id } = useParams();
    const blog = blogsData.find((b) => b.id === parseInt(id));

    if (!blog) {
        return (
            <Container sx={{ py: 20, textAlign: "center" }}>
                <Typography variant="h4" sx={{ fontFamily: "'Playfair Display', serif", color: BRAND_DARK, mb: 2 }}>
                    Article Not Found
                </Typography>
                <Button component={Link} to="/blogs" className="gold-btn" sx={{ px: 4, py: 1.2 }}>
                    Return to Journal
                </Button>
            </Container>
        );
    }

    return (
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#faf8f5", minHeight: "100vh" }}>
            <SEOHead
                title={`${blog.title} | Tvashta Interior Architectural Journal`}
                description={blog.subtitle}
                keywords={`interior design, ${blog.category.toLowerCase()}, tvashta blog, luxury interiors`}
                canonical={`/blogs/${blog.id}`}
            />
            <Container maxWidth="md">
                <Button
                    component={Link}
                    to="/blogs"
                    startIcon={<ArrowBack />}
                    sx={{
                        mb: 4,
                        color: "#556353",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        textTransform: "none",
                        "&:hover": { color: BRAND_GREEN, bgcolor: "transparent" }
                    }}
                >
                    Back to Design Journal
                </Button>

                <motion.div
                    variants={SlideUp(0.1)}
                    initial="initial"
                    animate="animate"
                >
                    <Chip
                        label={blog.category}
                        sx={{ 
                            mb: 2.5,
                            bgcolor: "#ffffff",
                            color: BRAND_GREEN,
                            fontWeight: 700,
                            fontSize: "0.75rem",
                            padding: "6px 14px",
                            borderRadius: "50px",
                            border: "1px solid rgba(178, 152, 115, 0.35)",
                            letterSpacing: "1.5px",
                            textTransform: "uppercase",
                            fontFamily: "'Montserrat', sans-serif"
                        }}
                    />
                    <Typography
                        variant="h1"
                        sx={{
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 700,
                            color: BRAND_DARK,
                            fontSize: { xs: "2.4rem", md: "3.4rem" },
                            lineHeight: 1.25,
                            mb: 2.5
                        }}
                    >
                        {blog.title}
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            fontFamily: "'Montserrat', sans-serif",
                            color: "#556353",
                            fontWeight: 400,
                            fontSize: { xs: "1.05rem", md: "1.2rem" },
                            mb: 4,
                            lineHeight: 1.6
                        }}
                    >
                        {blog.subtitle}
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
                        <Avatar sx={{ bgcolor: BRAND_GREEN, color: "#ffffff", mr: 2, border: `1.5px solid ${ACCENT_GOLD}`, fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                            {blog.author.charAt(0)}
                        </Avatar>
                        <Box>
                            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: BRAND_DARK, fontFamily: "'Montserrat', sans-serif" }}>
                                {blog.author}
                            </Typography>
                            <Typography variant="caption" sx={{ color: "#778875", fontFamily: "'Montserrat', sans-serif" }}>
                                {blog.date} • 5 min architectural read
                            </Typography>
                        </Box>
                    </Box>
                </motion.div>

                <motion.div
                    variants={SlideUp(0.3)}
                    initial="initial"
                    animate="animate"
                >
                    <Box
                        component="img"
                        src={blog.image}
                        alt={blog.title}
                        sx={{
                            width: "100%",
                            height: { xs: "320px", md: "520px" },
                            objectFit: "cover",
                            borderRadius: "20px",
                            border: "1px solid rgba(178, 152, 115, 0.25)",
                            mb: 6,
                            boxShadow: "0 14px 40px rgba(66, 82, 62, 0.1)"
                        }}
                    />

                    {/* Article Body */}
                    <Box sx={{
                        typography: 'body1',
                        color: '#334030',
                        lineHeight: 1.9,
                        fontSize: "1.05rem",
                        fontFamily: "'Montserrat', sans-serif",
                        "& h3": {
                            fontFamily: "'Playfair Display', serif",
                            color: BRAND_DARK,
                            fontSize: "1.8rem",
                            mt: 5,
                            mb: 2,
                            fontWeight: 700
                        },
                        "& p": {
                            mb: 3
                        },
                        "& ul": {
                            mb: 3,
                            pl: 3
                        },
                        "& li": {
                            mb: 1.2
                        },
                        "& strong": {
                            color: BRAND_DARK
                        }
                    }}>
                        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                    </Box>

                    <Divider sx={{ my: 6, borderColor: "rgba(178, 152, 115, 0.25)" }} />

                    {/* Consultation Box */}
                    <Box
                        sx={{
                            textAlign: "center",
                            background: "linear-gradient(135deg, #182418 0%, #121a12 100%)",
                            border: "1px solid rgba(178, 152, 115, 0.35)",
                            color: "#ffffff",
                            p: { xs: 4, md: 6 },
                            borderRadius: "20px",
                            boxShadow: "0 12px 36px rgba(18, 26, 18, 0.15)"
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: "0.8rem",
                                letterSpacing: "2.5px",
                                textTransform: "uppercase",
                                color: ACCENT_GOLD,
                                fontWeight: 700,
                                mb: 1.5,
                            }}
                        >
                            ✦ BESPOKE EXECUTION ✦
                        </Typography>
                        <Typography variant="h4" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, mb: 2, color: "#ffffff", fontSize: { xs: "1.8rem", md: "2.2rem" } }}>
                            Envisioning Similar Craftsmanship For Your Home?
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3.5, color: "rgba(238, 243, 236, 0.85)", maxWidth: 560, mx: "auto", lineHeight: 1.7, fontSize: "0.95rem" }}>
                            Let's bring custom German CNC millwork, calibrated lighting, and signature finishes to your residence.
                        </Typography>
                        <Button
                            component={Link}
                            to="/contact"
                            className="gold-btn"
                            endIcon={<ArrowForwardIcon />}
                            sx={{ px: 5, py: 1.5, fontSize: "0.9rem", fontWeight: 700, letterSpacing: "1px" }}
                        >
                            Schedule A Private Consultation
                        </Button>
                    </Box>

                    {/* Internal Links */}
                    <Box sx={{ mt: 6 }}>
                        <InternalLinks currentPage="blogs" />
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default BlogPost;
