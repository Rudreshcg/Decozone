import React from "react";
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import { blogsData } from "../../data/blogsData";
import { Link } from "react-router-dom";
import SEOHead from "../SEO/SEOHead";

const Blogs = () => {
    return (
        <>
            <SEOHead
                title="Design Insights & Trends | Tvashta Interior Blog"
                description="Stay updated with the latest interior design trends, tips, and insights from Tvashta Interior's expert team."
                keywords="interior design blog, home decor tips, modular kitchen trends, bedroom design ideas"
                canonical="/blogs"
            />
            <Box sx={{ py: 12, bgcolor: "#fafbfc", minHeight: "100vh" }}>
                <Container maxWidth="lg">
                    {/* Header */}
                    <Box sx={{ textAlign: "center", mb: 8 }}>
                        <motion.div
                            variants={SlideUp(0.2)}
                            initial="initial"
                            whileInView="animate"
                            className="section-badge-global"
                        >
                            OUR JOURNAL
                        </motion.div>
                        <Typography
                            component={motion.h1}
                            variants={SlideUp(0.3)}
                            initial="initial"
                            whileInView="animate"
                            variant="h3"
                            sx={{
                                fontFamily: "Playfair Display, serif",
                                fontWeight: 700,
                                color: "#2c3e50",
                                mt: 1,
                                fontSize: { xs: "2rem", md: "3rem" }
                            }}
                        >
                            Design Insights & Trends
                        </Typography>
                        <Box sx={{ width: 60, height: 4, background: "linear-gradient(135deg, #9f8033 0%, #c5a059 50%, #9f8033 100%)", mx: "auto", mt: 3, borderRadius: 2 }} />
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
                                >
                                    <Card
                                        sx={{
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            borderRadius: 3,
                                            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                transform: "translateY(-8px)",
                                                boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
                                            }
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            height="240"
                                            image={blog.image}
                                            alt={blog.title}
                                            sx={{ objectFit: "cover" }}
                                        />
                                        <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                            <Box sx={{ mb: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                <Chip
                                                    label={blog.category}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: "#f4f1ea", // Luxury Cream
                                                        color: "#9f8033", // Gold Text
                                                        fontWeight: 600,
                                                        fontSize: "0.75rem"
                                                    }}
                                                />
                                                <Typography variant="caption" color="text.secondary">
                                                    {blog.date}
                                                </Typography>
                                            </Box>
                                            <Typography
                                                variant="h5"
                                                component="h3"
                                                sx={{
                                                    fontFamily: "Playfair Display, serif",
                                                    fontWeight: 700,
                                                    color: "#2c3e50",
                                                    mb: 1,
                                                    lineHeight: 1.3
                                                }}
                                            >
                                                {blog.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                                {blog.subtitle}
                                            </Typography>
                                            <Button
                                                component={Link}
                                                to={`/blogs/${blog.id}`}
                                                variant="text"
                                                sx={{
                                                    color: "#4a5942",
                                                    fontWeight: 600,
                                                    p: 0,
                                                    "&:hover": {
                                                        bgcolor: "transparent",
                                                        color: "#3d4a36",
                                                        textDecoration: "underline"
                                                    }
                                                }}
                                            >
                                                Read Article →
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Blogs;
