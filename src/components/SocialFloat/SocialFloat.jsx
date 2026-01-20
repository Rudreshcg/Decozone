import React from "react";
import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

const SocialFloat = () => {
    const handleWhatsAppClick = () => {
        const message = "Hello! I found your website and I'm interested in your interior design services.";
        window.open(`https://wa.me/8431000242?text=${encodeURIComponent(message)}`, "_blank");
    };

    const handleInstagramClick = () => {
        window.open("https://www.instagram.com/tvashtainterior", "_blank");
    };

    return (
        <Box
            sx={{
                position: "fixed",
                bottom: 40,
                right: 30,
                zIndex: 1100,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
            }}
        >
            {/* Instagram Button */}
            <Tooltip title="Follow us on Instagram" placement="left" arrow>
                <Box
                    sx={{
                        background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        '&:hover': {
                            transform: "scale(1.1) translateY(-2px)",
                            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                        },
                    }}
                    onClick={handleInstagramClick}
                >
                    <InstagramIcon
                        sx={{
                            fontSize: "28px",
                            color: "white",
                            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
                        }}
                    />
                </Box>
            </Tooltip>

            {/* WhatsApp Button */}
            <Tooltip title="Chat on WhatsApp" placement="left" arrow>
                <Box
                    sx={{
                        bgcolor: "#25D366", // Official WhatsApp Green
                        width: "60px", // Slightly larger main CTA
                        height: "60px",
                        borderRadius: "50%",
                        boxShadow: "0 4px 15px rgba(37, 211, 102, 0.4)", // Coloured shadow
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        position: "relative",
                        transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        '&:hover': {
                            transform: "scale(1.1) translateY(-2px)",
                            boxShadow: "0 8px 25px rgba(37, 211, 102, 0.6)",
                        },
                        // Pulse animation ring
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            border: '1px solid #25D366',
                            animation: 'pulse 2s infinite',
                            opacity: 0,
                        },
                        "@keyframes pulse": {
                            "0%": {
                                transform: "scale(1)",
                                opacity: 0.8,
                            },
                            "100%": {
                                transform: "scale(1.5)",
                                opacity: 0,
                            },
                        },
                    }}
                    onClick={handleWhatsAppClick}
                >
                    <WhatsAppIcon
                        sx={{
                            fontSize: "32px",
                            color: "white",
                        }}
                    />
                </Box>
            </Tooltip>
        </Box>
    );
};

export default SocialFloat;
