import React from "react";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";
import { SlideLeft } from "../../animation/animate";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
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


const Footer = () => {
  return (
    <Box component={motion.footer} bgcolor="#1C1C1E" color="white" py={11}>
      <Container>
        <Grid container spacing={8}>
          {/* Company info section */}
          <Grid item xs={12} md={3}>
            <motion.div
              variants={SlideLeft(0.2)}
              initial="initial"
              whileInView="animate"
            >
              <Box display="flex" alignItems="center" mb={2}>
                <img
                  src={LogoPng}
                  alt="Logo"
                  style={{
                    maxWidth: '150px',
                    height: 'auto',
                  }}
                />

              </Box>

              <Typography variant="h6" textAlign="center" color="burlywood">
                Where design meets your dream lifestyle.
              </Typography>
              <Box mt={2}>
                <IconButton color="inherit" href="#">
                  <Facebook />
                </IconButton>
                <IconButton color="inherit" href="#">
                  <Twitter />
                </IconButton>
                <IconButton color="inherit" href="#">
                  <Instagram />
                </IconButton>
                <IconButton color="inherit" href="#">
                  <YouTube />
                </IconButton>
                <IconButton color="inherit" href="#">
                  <Pinterest />
                </IconButton>
                <IconButton color="inherit" href="#">
                  <LinkedIn />
                </IconButton>
              </Box>
            </motion.div>
          </Grid>
          {/* Useful Links */}
          <Grid item xs={12} md={3}>
            <motion.div
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
            >
              <Typography variant="h6" fontWeight="bold">
                Useful Links
              </Typography>
              <Box mt={2}>
                <Link color="inherit" display="block" mb={1}>
                  About Us
                </Link>
                <Link color="inherit" display="block" mb={1}>
                  Contact Us
                </Link>
                <Link color="inherit" display="block" mb={1}>
                  Privacy Policy
                </Link>
                <Link color="inherit" display="block" mb={1}>
                  Terms & Conditions
                </Link>
              </Box>
            </motion.div>
          </Grid>
          {/* Contact Information */}
          <Grid item xs={12} md={3}>
            <motion.div
              variants={SlideLeft(0.4)}
              initial="initial"
              whileInView="animate"
            >
              <Typography variant="h6" fontWeight="bold">
                Call
              </Typography>
              <Typography mt={2}>+91-8431000242</Typography>
              <Typography variant="h6" fontWeight="bold" mt={4}>
                Write
              </Typography>
              <Typography mt={2}>
                <Link href="mailto:info@tvashtainterior.com" color="inherit">
                  info@tvashtainterior.com
                </Link>
              </Typography>
            </motion.div>
          </Grid>
          {/* Visit Us */}
          <Grid item xs={12} md={3}>
            <motion.div
              variants={SlideLeft(0.5)}
              initial="initial"
              whileInView="animate"
            >
              <Typography variant="h6" fontWeight="bold">
                Visit
              </Typography>
              <Typography mt={2}>Tvashta Interior</Typography>
              <Typography mt={2}>
                Survey No 88/1 Rampura, Viragonagar post, Bangalore-49
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
        {/* bottom section */}
        <Typography
          textAlign="center"
          variant="body2"
          fontWeight="bold"
          borderTop={2}
          pt={5}
          mt={5}
        >
          &copy; 2024 Tvashta Interior. All rights reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
