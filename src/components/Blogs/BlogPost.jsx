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
import { blogsData } from "../../data/blogsData";
import SEOHead from "../SEO/SEOHead";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const BlogPost = () => {
    const { id } = useParams();
    const blog = blogsData.find((b) => b.id === parseInt(id));

    if (!blog) {
        return (
            <Container sx={{ py: 20, textAlign: "center" }}>
                <Typography variant="h4">Blog Post Not Found</Typography>
                <Button component={Link} to="/blogs" sx={{ mt: 2 }}>
                    Back to Blogs
                </Button>
            </Container>
        );
    }

    return (
        <>
            <SEOHead
                title={`${blog.title} | Tvashta Interior Blog`}
                description={blog.subtitle}
                keywords={`interior design, ${blog.category.toLowerCase()}, tvashta blog`}
                canonical={`/blogs/${blog.id}`}
            />
            <Box sx={{ py: 12, bgcolor: "#fff" }}>
                <Container maxWidth="md">
                    <Button
                        component={Link}
                        to="/blogs"
                        startIcon={<ArrowBack />}
                        sx={{
                            mb: 4,
                            color: "#666",
                            textTransform: "none",
                            "&:hover": { color: "#4a5942", bgcolor: "transparent" }
                        }}
                    >
                        Back to Journal
                    </Button>

                    <motion.div
                        variants={SlideUp(0.1)}
                        initial="initial"
                        animate="animate"
                    >
                        <Chip
                            label={blog.category}
                            className="section-badge-global"
                            sx={{ mb: 2 }}
                        />
                        <Typography
                            variant="h2"
                            sx={{
                                fontFamily: "Playfair Display, serif",
                                fontWeight: 700,
                                color: "#2c3e50",
                                fontSize: { xs: "2.5rem", md: "3.5rem" },
                                lineHeight: 1.2,
                                mb: 2
                            }}
                        >
                            {blog.title}
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                color: "#666",
                                fontWeight: 400,
                                mb: 4,
                                lineHeight: 1.5
                            }}
                        >
                            {blog.subtitle}
                        </Typography>

                        <Box sx={{ display: "flex", alignItems: "center", mb: 6 }}>
                            <Avatar sx={{ bgcolor: "#4a5942", mr: 2 }}>T</Avatar>
                            <Box>
                                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#2c3e50" }}>
                                    {blog.author}
                                </Typography>
                                <Typography variant="caption" sx={{ color: "#888" }}>
                                    {blog.date} • 5 min read
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
                                height: { xs: "300px", md: "500px" },
                                objectFit: "cover",
                                borderRadius: 4,
                                mb: 6,
                                boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
                            }}
                        />

                        {/* Content */}
                        <Box sx={{
                            typography: 'body1',
                            color: '#444',
                            lineHeight: 1.8,
                            fontSize: "1.1rem",
                            "& h3": {
                                fontFamily: "Playfair Display, serif",
                                color: "#2c3e50",
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
                                pl: 4
                            },
                            "& li": {
                                mb: 1
                            },
                            "& strong": {
                                color: "#2c3e50"
                            }
                        }}>
                            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                        </Box>

                        <Divider sx={{ my: 6 }} />

                        <Box sx={{ textAlign: "center", bgcolor: "#fafbfc", p: 6, borderRadius: 4 }}>
                            <Typography variant="h5" sx={{ fontFamily: "Playfair Display, serif", fontWeight: 700, mb: 2 }}>
                                Love this design?
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 3, color: "#666" }}>
                                Let's bring similar ideas to your home. Book a consultation today.
                            </Typography>
                            <Button
                                component={Link}
                                to="/contact"
                                variant="contained"
                                className="btn-premium"
                            >
                                Get in Touch
                            </Button>
                        </Box>
                    </motion.div>
                </Container>
            </Box>
        </>
    );
};

export default BlogPost;
