import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Divider,
    Box,
    useMediaQuery,
    useTheme,
    MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { styled } from "@mui/system";
import Logo from "../../assets/companyLogo/Logo.png";

const DesktopMenu = styled("div")(({ theme }) => ({
    display: "none",
    [theme.breakpoints.up("md")]: {
        display: "flex",
    },
}));

const Header = () => {
    const theme = useTheme();
    const location = useLocation(); // Use useLocation instead of useParams for simpler active checking

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (e) => {
        setDrawerOpen(Boolean(drawerOpen) ? !drawerOpen : e.currentTarget);
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
    }

    return (
        <>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: isMobile && Boolean(drawerOpen) ? "black" : "white",
                    color: "#595959",
                    width: "100%",
                    overflowX: "hidden",
                }}
                elevation={0}
            >
                <Toolbar
                    sx={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        width: "100%",
                        minHeight: "90px !important",
                        paddingX: "0px",
                        overflowX: "hidden",
                    }}
                >
                    <Box sx={{ flexGrow: 1, px: 1 }}>
                        <RouterLink to="/" style={{ textDecoration: "none" }}>
                            <img
                                src={Logo}
                                alt="Tvashta Interior"
                                style={{
                                    height: "60px",
                                    width: "auto",
                                    paddingLeft: isMobile ? "12px" : "0px",
                                }}
                            />
                        </RouterLink>
                    </Box>
                    <DesktopMenu>
                        {tabMenu.map((tab) => {
                            return (
                                <Button
                                    key={tab.to}
                                    color="inherit"
                                    component={RouterLink}
                                    to={tab.to}
                                    sx={{
                                        color: isActive(tab.to) ? "#4a5942" : "#4A4A4A", // Used #4a5942 from Tvashta Interior theme
                                        fontWeight: isActive(tab.to) ? "bold" : "normal",
                                        p: "16px 24px",
                                        "&:hover": {
                                            color: "#4a5942",
                                            backgroundColor: "inherit",
                                        },
                                    }}
                                >
                                    {tab.tabName}
                                </Button>
                            );
                        })}
                    </DesktopMenu>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{
                            display: {
                                xs: "block",
                                md: "none",
                                paddingRight: "12px",
                                color: drawerOpen ? "white" : "black",
                            },
                        }}
                        onClick={toggleDrawer}
                    >
                        {drawerOpen ? <CloseIcon /> : <MenuIcon fontSize="large" />}
                    </IconButton>
                </Toolbar>
                <Divider sx={{ width: "100%" }} />
            </AppBar>

            {Boolean(drawerOpen) && (
                <Box
                    sx={{
                        backgroundColor: "black",
                        width: "100%",
                        height: "100vh",
                        zIndex: 100,
                        position: "absolute",
                    }}
                >
                    {tabMenu.map((tab, index) => (
                        <React.Fragment key={tab.to}>
                            <Divider sx={{ backgroundColor: "white" }} variant="fullWidth" />
                            <MenuItem
                                button
                                component={RouterLink}
                                to={tab.to}
                                sx={{
                                    color: isActive(tab.to) ? "#4a5942" : "white",
                                    width: "100vw",
                                    display: "flex",
                                    alignItems: "center",
                                    // p: "16px 24px",
                                    "&:hover": {
                                        color: "#4a5942",
                                        backgroundColor: "inherit",
                                    },
                                }}
                                name={tab.tabName}
                                onClick={toggleDrawer}
                            >
                                {tab.tabName}
                            </MenuItem>
                            {index === tabMenu.length - 1 && (
                                <Divider
                                    sx={{ backgroundColor: "white" }}
                                    variant="fullWidth"
                                />
                            )}
                        </React.Fragment>
                    ))}
                </Box>
            )}
        </>
    );
};

export default Header;
