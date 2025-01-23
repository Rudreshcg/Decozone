import React, { useState, useEffect } from "react";
import {
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import ContactModal from "../ContactModal/ContactModal";
import LogoPng from "../../assets/companyLogo/Logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
          <div style={{ textAlign: 'center' }}>
            <img
              src={LogoPng}
              alt="Logo"
              style={{
                maxWidth: '150px',
                height: 'auto',
              }}
            />
          </div>

          <div>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#4a5942",
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
