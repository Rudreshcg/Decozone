import React from "react";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";
import { SlideLeft } from "../../animation/animate";
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube, Pinterest, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component={motion.footer} bgcolor="#1C1C1E" color="white" py={11}>
      <Container>
        <Grid container spacing={8}>
          {/* Company info section */}
          <Grid item xs={12} md={3}>
            <motion.div variants={SlideLeft(0.2)} initial="initial" whileInView="animate">
              <Box display="flex" alignItems="center" mb={2}>
                <img src={Logo} alt="Decozone Logo" className="w-6" />
                <Typography variant="h6" fontWeight="bold" ml={2}>Decozone</Typography>
              </Box>
              <Typography variant="h6" textAlign="center">Where design meets your dream lifestyle.</Typography>
              <Box mt={2}>
                <IconButton color="inherit" href="#"><Facebook /></IconButton>
                <IconButton color="inherit" href="#"><Twitter /></IconButton>
                <IconButton color="inherit" href="#"><Instagram /></IconButton>
                <IconButton color="inherit" href="#"><YouTube /></IconButton>
                <IconButton color="inherit" href="#"><Pinterest /></IconButton>
                <IconButton color="inherit" href="#"><LinkedIn /></IconButton>
              </Box>
            </motion.div>
          </Grid>
          {/* Useful Links */}
          <Grid item xs={12} md={3}>
            <motion.div variants={SlideLeft(0.3)} initial="initial" whileInView="animate">
              <Typography variant="h6" fontWeight="bold">Useful Links</Typography>
              <Box mt={2}>
                <Link href="#" color="inherit" display="block" mb={1}>About Us</Link>
                <Link href="#" color="inherit" display="block" mb={1}>Contact Us</Link>
                <Link href="#" color="inherit" display="block" mb={1}>Refer a Friend</Link>
                <Link href="#" color="inherit" display="block" mb={1}>Privacy Policy</Link>
                <Link href="#" color="inherit" display="block" mb={1}>Terms & Conditions</Link>
              </Box>
            </motion.div>
          </Grid>
          {/* Contact Information */}
          <Grid item xs={12} md={3}>
            <motion.div variants={SlideLeft(0.4)} initial="initial" whileInView="animate">
              <Typography variant="h6" fontWeight="bold">Call</Typography>
              <Typography mt={2}>+91-123456789</Typography>
              <Typography variant="h6" fontWeight="bold" mt={4}>Write</Typography>
              <Typography mt={2}><Link href="mailto:Enquiry@chattelsdesign.com" color="inherit">Enquiry@chattelsdesign.com</Link></Typography>
            </motion.div>
          </Grid>
          {/* Visit Us */}
          <Grid item xs={12} md={3}>
            <motion.div variants={SlideLeft(0.5)} initial="initial" whileInView="animate">
              <Typography variant="h6" fontWeight="bold">Visit</Typography>
              <Typography mt={2}>Decozone LLP</Typography>
              <Typography mt={2}>3rd Floor, Sai Ram, KV Jairam Road, Jakkur Rd, above Kotak Mahindra Bank, MCECHS Layout Phase 2, Yelahanka, Bengaluru, Karnataka 560064</Typography>
            </motion.div>
          </Grid>
        </Grid>
        {/* bottom section */}
        <Typography textAlign="center" variant="body2" fontWeight="bold" borderTop={2} pt={5} mt={5}>
          &copy; 2024 Decozone. All rights reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
