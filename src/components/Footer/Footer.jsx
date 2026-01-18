import React from "react";
import { motion } from "framer-motion";
import { SlideLeft } from "../../animation/animate";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Stack
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  Pinterest,
  LinkedIn,
} from "@mui/icons-material";
import LogoPng from "../../assets/companyLogo/Logo.png";
import { Helmet } from "react-helmet-async";

// Premium Dark Brand Green Palette
const BRAND_DARK = "#0f1f15"; // Very dark green/black
const BRAND_GREEN_DARK = "#1a2e1a"; // Main footer background
const ACCENT_GOLD = "#9f8033"; // Darker Muted Gold
const TEXT_LIGHT = "#e8f0e6"; // Off-white with hint of green

const Footer = () => {

  const socialIcons = [
    { icon: <Facebook />, href: "https://www.facebook.com/tvashtainterior" },
    { icon: <Twitter />, href: "https://www.twitter.com/tvashtainterior" },
    { icon: <Instagram />, href: "https://www.instagram.com/tvashtainterior" },
    { icon: <YouTube />, href: "#" },
    { icon: <Pinterest />, href: "#" },
    { icon: <LinkedIn />, href: "https://www.linkedin.com/company/tvashtainterior" },
  ];

  const usefulLinks = [
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" }
  ];

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Tvashta Interior",
            "image": "https://tvashtainterior.com/assets/Logo-BK9TOXBV.png",
            "@id": "https://tvashtainterior.com/",
            "url": "https://tvashtainterior.com/",
            "telephone": "+91-8431000242",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Survey No 88/1 Rampura, Viragonagar post",
              "addressLocality": "Bangalore",
              "postalCode": "560049",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.facebook.com/tvashtainterior",
              "https://www.twitter.com/tvashtainterior",
              "https://www.instagram.com/tvashtainterior",
              "https://www.linkedin.com/company/tvashtainterior"
            ]
          }
        `}
        </script>
      </Helmet>

      <Box
        component={motion.footer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        sx={{
          bgcolor: BRAND_GREEN_DARK,
          color: TEXT_LIGHT,
          pt: 10,
          pb: 4,
          borderTop: "1px solid rgba(255,255,255,0.05)"
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            {/* Company info section */}
            <Grid item xs={12} md={4}>
              <motion.div
                variants={SlideLeft(0.2)}
                initial="initial"
                whileInView="animate"
              >
                <Box mb={3}>
                  <Box
                    component="img"
                    src={LogoPng}
                    alt="Tvashta Interior Logo"
                    sx={{
                      maxWidth: '180px',
                      height: 'auto',
                      filter: "brightness(0) invert(1) opacity(0.9)", // Make white for dark bg
                      mb: 2
                    }}
                  />
                </Box>

                <Typography variant="body1" sx={{ color: "rgba(232, 240, 230, 0.7)", mb: 3, lineHeight: 1.8 }}>
                  Where design meets your dream lifestyle. We craft spaces that reflect your unique personality.
                </Typography>

                <Stack direction="row" spacing={1}>
                  {socialIcons.map((item, index) => (
                    <IconButton
                      key={index}
                      color="inherit"
                      href={item.href}
                      sx={{
                        transition: "all 0.3s",
                        "&:hover": {
                          color: "#fff",
                          transform: "translateY(-3px)",
                          bgcolor: "rgba(255,255,255,0.1)"
                        }
                      }}
                    >
                      {item.icon}
                    </IconButton>
                  ))}
                </Stack>
              </motion.div>
            </Grid>

            {/* Spacer */}
            <Grid item xs={false} md={1} />

            {/* Useful Links */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                variants={SlideLeft(0.3)}
                initial="initial"
                whileInView="animate"
              >
                <Typography variant="h6" sx={{ fontFamily: "Playfair Display, serif", mb: 3, color: "#fff" }}>
                  Useful Links
                </Typography>
                <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
                  {usefulLinks.map((link, index) => (
                    <Box component="li" key={index} sx={{ mb: 1.5 }}>
                      <Link
                        href={link.href}
                        underline="none"
                        sx={{
                          color: "rgba(232, 240, 230, 0.7)",
                          transition: "all 0.3s",
                          display: "inline-block",
                          "&:hover": {
                            color: "#fff",
                            transform: "translateX(5px)"
                          }
                        }}
                      >
                        {link.name}
                      </Link>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Contact Information */}
            <Grid item xs={12} sm={6} md={4}>
              <motion.div
                variants={SlideLeft(0.4)}
                initial="initial"
                whileInView="animate"
              >
                <Typography variant="h6" sx={{ fontFamily: "Playfair Display, serif", mb: 3, color: "#fff" }}>
                  Contact Us
                </Typography>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" sx={{ color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: 1 }}>Call</Typography>
                  <Typography variant="body1" sx={{ color: "#fff", mt: 0.5 }}>+91-8431000242</Typography>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" sx={{ color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: 1 }}>Write</Typography>
                  <Link href="mailto:info@tvashtainterior.com" underline="hover" sx={{ color: "#fff", mt: 0.5, display: "block" }}>
                    info@tvashtainterior.com
                  </Link>
                </Box>

                <Box>
                  <Typography variant="subtitle2" sx={{ color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: 1 }}>Visit</Typography>

                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" sx={{ color: ACCENT_GOLD, fontWeight: 600, mb: 0.5 }}>FACTORY</Typography>
                    <Typography variant="body1" sx={{ color: "rgba(232, 240, 230, 0.7)", lineHeight: 1.6 }}>
                      Survey No 88/1 Rampura, Viragonagar post, Bangalore-49
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" sx={{ color: ACCENT_GOLD, fontWeight: 600, mb: 0.5 }}>OFFICE</Typography>
                    <Typography variant="body1" sx={{ color: "rgba(232, 240, 230, 0.7)", lineHeight: 1.6 }}>
                      3rd floor, Corporation Bank, Sri sai heights, 456 C, 1st Main Rd, Ideal Homes Twp, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          {/* Bottom Section */}
          <Box
            sx={{
              borderTop: "1px solid rgba(255,255,255,0.1)",
              mt: 8,
              pt: 4,
              textAlign: "center"
            }}
          >
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.4)" }}>
              &copy; {new Date().getFullYear()} Tvashta Interior. All rights reserved.
            </Typography>
          </Box>

        </Container>
      </Box>
    </>
  );
};

export default Footer;
