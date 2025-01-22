import React, { useState, useEffect } from "react";
import {
  Button,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import ContactModal from "../ContactModal/ContactModal";



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
          <div style={{ textAlign: 'center' }}>
  <Typography
    variant="h5"
    fontWeight="bold"
    color="black"
    sx={{
      fontFamily: 'var(--primaryHeaderFont)',
      fontStyle: 'normal',
      letterSpacing: '5px',
      fontSize: { xs: '18px', sm: '20px', md: '24px' },
      lineHeight: { xs: '1.2', sm: '1.3', md: '1.4' },
    }}
  >
    TVASHTA
  </Typography>
  <Typography
    variant="subtitle1"
    fontWeight="medium"
    color="#FF5A5F"
    sx={{
      fontFamily: 'var(--primaryHeaderFont)',
      fontStyle: 'normal',
      letterSpacing: '5px',
      marginTop: { xs: '-4px', sm: '-6px', md: '-8px' },
      fontSize: { xs: '12px', sm: '14px', md: '16px' },
    }}
  >
    INTERIOR
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

