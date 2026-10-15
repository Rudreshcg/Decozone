import React from "react";
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button, Chip } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { SlideUp } from "../../animation/animate";
import { blogsData } from "../../data/blogsData";
import { Link } from "react-router-dom";
import SEOHead from "../SEO/SEOHead";
import InternalLinks from "../SEO/InternalLinks";

const BRAND_GREEN = "#42523e";
const BRAND_DARK = "#121a12";
const ACCENT_GOLD = "#b29873";

const Blogs = () => {
    return (
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#faf8f5", minHeight: "100vh" }}>
            <SEOHead
                title="Design Insights & Trends | Tvashta Interior Architectural Journal"
                description="Explore design guides, luxury modular kitchen insights, master suite trends, and open-plan living tips from Tvashta Interior Bangalore."
                keywords="interior design blog, home decor tips, modular kitchen trends, bedroom design ideas, Bangalore interior journal"
                canonical="/blogs"
            />
            <Container maxWidth="lg">
                {/* Header */}
                <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
                    <motion.div
                        variants={SlideUp(0.2)}
                        initial="initial"
                        whileInView="animate"
                        className="section-badge-global"
                    >
                        ✦ ARCHITECTURAL JOURNAL ✦
                    </motion.div>
                    <Typography
                        component={motion.h1}
                        variants={SlideUp(0.3)}
                        initial="initial"
                        whileInView="animate"
                        variant="h3"
                        sx={{
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 700,
                            color: BRAND_DARK,
                            mt: 1.5,
                            fontSize: { xs: "2.2rem", md: "3.2rem" }
                        }}
                    >
                        Design Insights & Perspectives
                    </Typography>
                    <Box sx={{ width: 60, height: "2px", background: ACCENT_GOLD, mx: "auto", mt: 2.5 }} />
                    <Typography
                        sx={{
                            fontFamily: "'Montserrat', sans-serif",
                            color: "#556353",
                            maxWidth: 620,
                            mx: "auto",
                            mt: 2,
                            fontSize: "1rem",
                            lineHeight: 1.6
                        }}
                    >
                        Architectural trends, bespoke material science, and spatial design wisdom from our senior atelier team.
                    </Typography>
                </Box>

                {/* Blog Grid */}
                <Grid container spacing={4}>
                    {blogsData.map((blog, index) => (
                        <Grid item xs={12} md={4} key={blog.id}>
                            <motion.div
                                variants={SlideUp(0.2 + index * 0.1)}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                style={{ height: "100%" }}
                            >
                                <Card
                                    sx={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        borderRadius: "18px",
                                        border: "1px solid rgba(178, 152, 115, 0.25)",
                                        boxShadow: "0 8px 25px rgba(66, 82, 62, 0.04)",
                                        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                                        background: "#ffffff",
                                        overflow: "hidden",
                                        "&:hover": {
                                            transform: "translateY(-8px)",
                                            borderColor: ACCENT_GOLD,
                                            boxShadow: "0 18px 40px rgba(66, 82, 62, 0.12)",
                                            "& img": {
                                                transform: "scale(1.06)",
                                            }
                                        }
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: "relative",
                                            overflow: "hidden",
                                            height: 240,
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            height="240"
                                            image={blog.image}
                                            alt={blog.title}
                                            sx={{
                                                objectFit: "cover",
                                                transition: "transform 0.6s ease",
                                            }}
                                        />
                                    </Box>
                                    <CardContent sx={{ flexGrow: 1, p: 3.5, display: "flex", flexDirection: "column" }}>
                                        <Box sx={{ mb: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <Chip
                                                label={blog.category}
                                                size="small"
                                                sx={{
                                                    bgcolor: "#faf8f5",
                                                    color: BRAND_GREEN,
                                                    fontWeight: 700,
                                                    fontSize: "0.72rem",
                                                    border: "1px solid rgba(178, 152, 115, 0.3)",
                                                    padding: "6px 12px",
                                                    borderRadius: "50px",
                                                    letterSpacing: "1.2px",
                                                    textTransform: "uppercase",
                                                    fontFamily: "'Montserrat', sans-serif"
                                                }}
                                            />
                                            <Typography sx={{ fontSize: "0.78rem", color: "#889985", fontFamily: "'Montserrat', sans-serif" }}>
                                                {blog.date}
                                            </Typography>
                                        </Box>
                                        <Typography
                                            variant="h5"
                                            component="h3"
                                            sx={{
                                                fontFamily: "'Playfair Display', serif",
                                                fontWeight: 700,
                                                color: BRAND_DARK,
                                                mb: 1.5,
                                                fontSize: "1.25rem",
                                                lineHeight: 1.35
                                            }}
                                        >
                                            {blog.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: "'Montserrat', sans-serif",
                                                color: "#556353",
                                                fontSize: "0.88rem",
                                                lineHeight: 1.6,
                                                mb: 3,
                                                flexGrow: 1
                                            }}
                                        >
                                            {blog.subtitle}
                                        </Typography>
                                        <Button
                                            component={Link}
                                            to={`/blogs/${blog.id}`}
                                            endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                                            sx={{
                                                color: BRAND_GREEN,
                                                fontWeight: 700,
                                                p: 0,
                                                justifyContent: "flex-start",
                                                fontFamily: "'Montserrat', sans-serif",
                                                fontSize: "0.85rem",
                                                letterSpacing: "0.5px",
                                                textTransform: "none",
                                                "&:hover": {
                                                    bgcolor: "transparent",
                                                    color: ACCENT_GOLD,
                                                    "& .MuiSvgIcon-root": {
                                                        transform: "translateX(4px)",
                                                    }
                                                },
                                                "& .MuiSvgIcon-root": {
                                                    transition: "transform 0.3s ease",
                                                }
                                            }}
                                        >
                                            Read Complete Article
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                {/* Internal Links */}
                <Box sx={{ mt: 6 }}>
                    <InternalLinks currentPage="blogs" />
                </Box>
            </Container>
        </Box>
    );
};

export default Blogs;
