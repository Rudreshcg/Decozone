import React, { useState, useEffect } from "react";
import { Box, Button, Checkbox, TextField, Typography, FormControlLabel, IconButton, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import { SlideUp } from "../../animation/animate";
import landingPageImage from "../../assets/landing_page_Image.avif";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 400,
  margin: "auto",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white", // Form background is white
  position: "relative",
}));

const HomePage = () => {
  const [open, setOpen] = useState(false); // Initially, the modal is closed
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage: `url(${landingPageImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Centered Content */}
      <Box
        component={motion.div}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: 2,
          gap: 2
        }}
      >
        <motion.div variants={SlideUp(0.8)} initial="initial" animate="animate">
          <Typography variant="h3" color="white" fontWeight="bold" >
            Bring home beautiful interiors{" "}
          </Typography>
          <Typography variant="h3" color="#FFD700" fontWeight="bold" >
            that fit your budget
          </Typography>
        </motion.div>
        <motion.div variants={SlideUp(1)} initial="initial" animate="animate" sx={{ mt: 3 }}>
          <Typography variant="h6" color="white" fontWeight="bold">
            Experience unmatched quality & timely delivery with Decozone
          </Typography>
        </motion.div>

        <motion.div variants={SlideUp(1.5)} initial="initial" animate="animate" sx={{ mt: 3 }}>
          <Button 
            variant="contained" 
            sx={{ bgcolor: "#FF5A5F", fontWeight: "bold", p: "10px 16px", borderRadius: "10px" }}
            onClick={handleOpen}
          >
            Get Quote
          </Button>
        </motion.div>
        
        
      </Box>

      {/* Modal Form */}
      {open && (
        <Box
          component={motion.div}
          variants={SlideUp(0.8)}
          initial="initial"
          animate="animate"
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0, 0, 0, 0.5)", // Dim background
            zIndex: 1100, // Ensure the modal is above other content
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StyledPaper elevation={3}>
            <IconButton onClick={handleClose} sx={{ position: "absolute", top: 8, right: 8 }}>
              <CloseIcon />
            </IconButton>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Designs for Every Budget
            </Typography>
            <motion.div variants={SlideUp(1)}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                sx={{ bgcolor: "rgba(255, 255, 255, 0.8)" }}
              />
            </motion.div>
            <motion.div variants={SlideUp(1.2)}>
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                margin="normal"
                sx={{ bgcolor: "rgba(255, 255, 255, 0.8)" }}
              />
            </motion.div>
            <motion.div variants={SlideUp(1.4)}>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Send me updates on WhatsApp" />
            </motion.div>
            <motion.div variants={SlideUp(1.6)}>
              <Button variant="contained" fullWidth sx={{ bgcolor: "#FF5A5F", my: 2, fontWeight: "bold", p: "10px 16px", borderRadius: "10px" }}>
                GET FREE QUOTE
              </Button>
            </motion.div>
            <motion.div variants={SlideUp(1.8)}>
              <Typography variant="caption" color="textSecondary" sx={{ mt: 2 }}>
                By submitting this form, you agree to the{" "}
                <a href="/privacy-policy" style={{ textDecoration: "none", color: "red" }}>privacy policy</a> &{" "}
                <a href="/terms" style={{ textDecoration: "none", color: "red" }}>terms and conditions</a>.
              </Typography>
            </motion.div>
          </StyledPaper>
        </Box>
      )}
    </Box>
  );
};

export default HomePage;
