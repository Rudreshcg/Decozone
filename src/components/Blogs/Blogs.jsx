import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Blogs = () => {
    return (
        <Container sx={{ py: 10 }}>
            <Typography variant="h3" sx={{ textAlign: "center", mb: 4, fontWeight: "bold", color: "#333" }}>
                Blogs
            </Typography>
            <Box sx={{ textAlign: "center" }}>
                <Typography variant="body1">
                    Coming soon...
                </Typography>
            </Box>
        </Container>
    );
};

export default Blogs;
