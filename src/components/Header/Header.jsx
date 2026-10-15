import React, { useState, useEffect } from "react";
import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Box,
    useMediaQuery,
    useTheme,
    MenuItem,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { styled } from "@mui/system";
import Logo from "../../assets/companyLogo/Logo.png";
import ContactModal from "../ContactModal/ContactModal";

const DesktopMenu = styled("div")(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "8px",
    [theme.breakpoints.up("md")]: {
        display: "flex",
    },
}));

const Header = () => {
    const theme = useTheme();
    const location = useLocation();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (drawerOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [drawerOpen]);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const tabMenu = [
        { tabName: "HOME", to: "/" },
        { tabName: "OUR STORY", to: "/about" },
        { tabName: "PORTFOLIO", to: "/portfolio" },
        { tabName: "TEAMS", to: "/teams" },
        { tabName: "BLOGS", to: "/blogs" },
        { tabName: "CONTACT", to: "/contact" },
    ];

    const isActive = (path) => {
        if (path === "/" && location.pathname === "/") return true;
        if (path !== "/" && location.pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <>
            <ContactModal open={isConsultModalOpen} setOpen={setIsConsultModalOpen} />
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    top: 0,
                    zIndex: 1100,
                    backgroundColor: scrolled
                        ? "rgba(255, 255, 255, 0.96)"
                        : "rgba(255, 255, 255, 0.90)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    borderBottom: "1px solid rgba(178, 152, 115, 0.22)",
                    boxShadow: scrolled ? "0 10px 30px -10px rgba(44, 56, 41, 0.08)" : "none",
                    transition: "all 0.3s ease",
                    width: "100%",
                }}
            >
                <Toolbar
                    sx={{
                        width: "100%",
                        minHeight: { xs: "72px !important", md: "84px !important" },
                        paddingX: { xs: 2.5, md: 6 },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <RouterLink to="/" style={{ textDecoration: "none", display: "inline-flex" }}>
                            <img
                                src={Logo}
                                alt="Tvashta Interior"
                                style={{
                                    height: isMobile ? "38px" : "48px",
                                    width: "auto",
                                    objectFit: "contain",
                                    transition: "transform 0.3s ease",
                                }}
                            />
                        </RouterLink>
                    </Box>

                    <DesktopMenu>
                        {tabMenu.map((tab) => {
                            const active = isActive(tab.to);
                            return (
                                <Button
                                    key={tab.to}
                                    component={RouterLink}
                                    to={tab.to}
                                    sx={{
                                        color: active ? "#42523e" : "#4A524A",
                                        fontWeight: active ? 700 : 500,
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontSize: "0.82rem",
                                        letterSpacing: "0.14em",
                                        px: 2,
                                        py: 1.2,
                                        position: "relative",
                                        textTransform: "uppercase",
                                        transition: "all 0.25s ease",
                                        "&::after": {
                                            content: '""',
                                            position: "absolute",
                                            bottom: "4px",
                                            left: "50%",
                                            transform: active ? "translateX(-50%) scaleX(1)" : "translateX(-50%) scaleX(0)",
                                            width: "20px",
                                            height: "2px",
                                            backgroundColor: "#b29873",
                                            borderRadius: "1px",
                                            transition: "transform 0.25s ease",
                                        },
                                        "&:hover": {
                                            color: "#42523e",
                                            backgroundColor: "transparent",
                                            "&::after": {
                                                transform: "translateX(-50%) scaleX(1)",
                                            },
                                        },
                                    }}
                                >
                                    {tab.tabName}
                                </Button>
                            );
                        })}

                        {/* Luxury CTA Button */}
                        <Button
                            onClick={() => setIsConsultModalOpen(true)}
                            startIcon={<CalendarMonthOutlinedIcon sx={{ fontSize: "1.05rem !important", color: "#dfcfb8" }} />}
                            sx={{
                                ml: 2,
                                background: "linear-gradient(135deg, #42523e 0%, #2f3c2c 100%)",
                                color: "#ffffff",
                                border: "1px solid rgba(178, 152, 115, 0.4)",
                                px: 2.8,
                                py: 1.1,
                                borderRadius: "50px",
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: "0.78rem",
                                fontWeight: 700,
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                                boxShadow: "0 6px 18px rgba(66, 82, 62, 0.25)",
                                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                "&:hover": {
                                    background: "linear-gradient(135deg, #354432 0%, #232c21 100%)",
                                    borderColor: "#b29873",
                                    transform: "translateY(-1px)",
                                    boxShadow: "0 10px 24px rgba(178, 152, 115, 0.35)",
                                },
                            }}
                        >
                            Book Consultation
                        </Button>
                    </DesktopMenu>

                    <IconButton
                        edge="end"
                        aria-label="menu"
                        sx={{
                            display: { xs: "inline-flex", md: "none" },
                            color: "#42523e",
                            p: 1,
                        }}
                        onClick={toggleDrawer}
                    >
                        {drawerOpen ? <CloseIcon /> : <MenuIcon fontSize="medium" />}
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Mobile Full-Screen Luxury Drawer Menu */}
            {drawerOpen && (
                <Box
                    sx={{
                        backgroundColor: "#121a12",
                        width: "100%",
                        height: "100dvh",
                        zIndex: 1400,
                        position: "fixed",
                        top: 0,
                        left: 0,
                        px: 3,
                        py: 2,
                        display: "flex",
                        flexDirection: "column",
                        overflowY: "auto",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                    }}
                >
                    {/* Header inside Drawer: Logo on Left, Single Close Button on Right */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            pb: 2,
                            borderBottom: "1px solid rgba(178, 152, 115, 0.2)",
                            minHeight: "56px",
                        }}
                    >
                        <RouterLink
                            to="/"
                            onClick={toggleDrawer}
                            style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}
                        >
                            <img
                                src={Logo}
                                alt="Tvashta Interior"
                                style={{
                                    height: "36px",
                                    width: "auto",
                                    objectFit: "contain",
                                    filter: "brightness(0) invert(1)",
                                }}
                            />
                        </RouterLink>
                        <IconButton
                            onClick={toggleDrawer}
                            aria-label="Close navigation menu"
                            sx={{
                                color: "#dfcfb8",
                                bgcolor: "rgba(178, 152, 115, 0.12)",
                                border: "1.5px solid rgba(178, 152, 115, 0.35)",
                                width: 40,
                                height: 40,
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    bgcolor: "rgba(178, 152, 115, 0.25)",
                                    color: "#ffffff",
                                    transform: "rotate(90deg)",
                                },
                            }}
                        >
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </Box>

                    {/* Nav Items */}
                    <Box sx={{ py: 2, flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        {tabMenu.map((tab) => (
                            <MenuItem
                                key={tab.to}
                                component={RouterLink}
                                to={tab.to}
                                onClick={toggleDrawer}
                                sx={{
                                    color: isActive(tab.to) ? "#b29873" : "#e8eee7",
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: "1.05rem",
                                    fontWeight: isActive(tab.to) ? 700 : 500,
                                    letterSpacing: "0.12em",
                                    py: 1.6,
                                    borderBottom: "1px solid rgba(178, 152, 115, 0.12)",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    "&:hover": {
                                        color: "#b29873",
                                        backgroundColor: "rgba(178, 152, 115, 0.08)",
                                    },
                                }}
                            >
                                <span>{tab.tabName}</span>
                                {isActive(tab.to) && (
                                    <span style={{ color: "#b29873", fontSize: "0.85rem" }}>✦</span>
                                )}
                            </MenuItem>
                        ))}
                    </Box>

                    {/* Footer CTA & Quick Atelier Details */}
                    <Box sx={{ pt: 2, pb: 3 }}>
                        <Button
                            fullWidth
                            onClick={() => {
                                toggleDrawer();
                                setIsConsultModalOpen(true);
                            }}
                            sx={{
                                background: "linear-gradient(135deg, #b29873 0%, #9e825c 100%)",
                                color: "#ffffff",
                                py: 1.6,
                                borderRadius: "50px",
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: 700,
                                fontSize: "0.82rem",
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                                boxShadow: "0 8px 24px rgba(178, 152, 115, 0.35)",
                                mb: 2,
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    background: "linear-gradient(135deg, #a38965 0%, #8e734e 100%)",
                                    transform: "translateY(-1px)",
                                },
                            }}
                        >
                            Schedule Consultation
                        </Button>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography
                                sx={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: "0.72rem",
                                    color: "#8a9787",
                                    letterSpacing: "0.08em",
                                }}
                            >
                                Bangalore Atelier • +91 84310 00242
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            )}
        </>
    );
};

export default Header;
