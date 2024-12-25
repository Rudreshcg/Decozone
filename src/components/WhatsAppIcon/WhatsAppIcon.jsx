import React from "react";
import { Box, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const FloatingWhatsAppButton = () => {
    const handleClick = () => {
        window.open("https://wa.me/9876543210", "_blank");
    };

    return (
        <Box
            sx={{
                position: "fixed",
                bottom: 100,
                right: 0,
                bgcolor: "white",
                borderTopLeftRadius: "10%",
                borderBottomLeftRadius: "10%",
                zIndex: 1100,
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                '&:hover': {
                    bgcolor: "#f0f0f0",
                },
                p: 0,
            }}
            onClick={handleClick}
        >
            <IconButton
                color="primary"
                sx={{
                    color: "#25D366",
                    borderRadius: "20%",
                    p: "12px 20px 12px 12px"

                }}
            >
                <WhatsAppIcon sx={{ background: "currentColor", fill: "white", borderRadius: "20%", p: "5px", fontSize: "40px" }} />
            </IconButton>
        </Box>
    );
};

export default FloatingWhatsAppButton;
