import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  useScrollTrigger,
  Slide
} from "@mui/material";
import { motion } from "framer-motion";
import ContactModal from "../ContactModal/ContactModal";
import LogoPng from "../../assets/companyLogo/Logo.png";

const BRAND_GREEN = "#4a5942";

// HideOnScroll helper for a cleaner experience
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = (props) => {
  const [open, setOpen] = useState(false);

  // Auto-open modal after a delay, but only once
  useEffect(() => {
    const timer = setTimeout(() => {
      // Checking if already opened session storage could be added here for UX
      setOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.9)", // slightly more opacity for readability
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(0,0,0,0.05)",
            py: 1
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>

              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  component="img"
                  src={LogoPng}
                  alt="Tvashta Interior Logo"
                  sx={{
                    height: { xs: 40, md: 50 }, // Responsive logo size
                    width: "auto",
                    cursor: "pointer",
                    display: "block"
                  }}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                />
              </motion.div>

              {/* Call to Action Button */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button
                  variant="contained"
                  onClick={handleOpen}
                  sx={{
                    bgcolor: BRAND_GREEN,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: { xs: "0.75rem", md: "0.9rem" },
                    px: { xs: 2.5, md: 4 },
                    py: { xs: 0.8, md: 1 },
                    borderRadius: "50px", // Pill shape
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    boxShadow: "0 4px 12px rgba(74, 89, 66, 0.3)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "#3d4a36",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 16px rgba(74, 89, 66, 0.4)",
                    }
                  }}
                >
                  Get Free Quote
                </Button>
              </motion.div>

            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <Toolbar sx={{ mb: { xs: 2, md: 3 } }} />

      <ContactModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
