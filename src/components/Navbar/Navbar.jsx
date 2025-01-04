import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  Paper,
  IconButton,
  Checkbox,
  TextField,
  FormControlLabel,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../animation/animate";
import { styled } from "@mui/system";

import ContactModal from "../ContactModal/ContactModal"



const Navbar = () => {
  const [open, setOpen] = useState(false); // Initially, the modal is closed



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
    <div>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1200,
          backgroundColor: "white",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        className="bg-white shadow-md"
      >
        <div className="container mx-auto py-4 flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <Typography variant="h5" fontWeight="bold" color="black">
              Decozone
            </Typography>
          </div>

          {/* Call-to-Action Button */}
          <div>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#FF5A5F",
                fontWeight: "bold",
                padding: "10px 20px",
                borderRadius: "8px",
                textTransform: "none",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              onClick={handleOpen}
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </motion.div>
      <ContactModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;

