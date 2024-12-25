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

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 400,
  margin: "auto",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white", // Form background is white
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2), // Smaller padding for mobile view
  },
}));

const Navbar = () => {
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
            zIndex: 1100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: { xs: 2, sm: 0 }, // Padding for smaller screens
          }}
        >
          <StyledPaper elevation={3}>
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
              }}
            >
              <CloseIcon />
            </IconButton>
            <Typography
              variant="h5"
              fontWeight="bold"
              gutterBottom
              sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem" } }} // Responsive font size
            >
              Designs for Every Budget
            </Typography>
            <motion.div variants={SlideUp(0.8)}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.8)",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                }}
              />
            </motion.div>
            <motion.div variants={SlideUp(1)}>
              <TextField
                fullWidth
                label="Property Location"
                variant="outlined"
                margin="normal"
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.8)",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                }}
              />
            </motion.div>
            <motion.div variants={SlideUp(1.2)}>
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                margin="normal"
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.8)",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                }}
              />
            </motion.div>
            <motion.div variants={SlideUp(1.4)}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Send me updates on WhatsApp"
                sx={{ fontSize: { xs: "0.75rem", sm: "1rem" } }}
              />
            </motion.div>
            <motion.div variants={SlideUp(1.6)}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: "#FF5A5F",
                  my: 2,
                  fontWeight: "bold",
                  p: "10px 16px",
                  borderRadius: "10px",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                }}
              >
                GET FREE QUOTE
              </Button>
            </motion.div>
            <motion.div variants={SlideUp(1.8)}>
              <Typography
                variant="caption"
                color="textSecondary"
                sx={{
                  mt: 2,
                  fontSize: { xs: "0.625rem", sm: "0.75rem" }, // Adjust font size for mobile
                }}
              >
                By submitting this form, you agree to the{" "}
                <a
                  href="/privacy-policy"
                  style={{
                    textDecoration: "none",
                    color: "red",
                  }}
                >
                  privacy policy
                </a>{" "}
                &{" "}
                <a
                  href="/terms"
                  style={{
                    textDecoration: "none",
                    color: "red",
                  }}
                >
                  terms and conditions
                </a>
                .
              </Typography>
            </motion.div>
          </StyledPaper>
        </Box>
      )}
    </div>
  );
};

export default Navbar;







// import React, { useState, useEffect } from "react";
// import { Button, Box, Paper, IconButton, Checkbox, TextField, FormControlLabel, Typography } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import { motion } from "framer-motion";
// import { styled } from "@mui/system";

// const StyledPaper = styled(Paper)(({ theme }) => ({
//   padding: theme?.spacing(4) || "16px", // Fallback for spacing
//   maxWidth: 400,
//   margin: "auto",
//   borderRadius: theme?.shape?.borderRadius || "8px",
//   backgroundColor: "white",
//   position: "relative",
//   width: "90%", // Responsive width for mobile view
// }));

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setOpen(true);
//     }, 1500);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {/* Navbar */}
//       <motion.div
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           right: 0,
//           zIndex: 1200,
//           backgroundColor: "white",
//           boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           padding: "10px 20px",
//         }}
//       >
//         {/* Logo Section */}
//         <motion.div>
//           <Typography variant="h6" fontWeight="bold" color="primary">
//             Decozone
//           </Typography>
//         </motion.div>

//         {/* Call-to-Action Button */}
//         <motion.div>
//           <Button
//             variant="contained"
//             sx={{
//               bgcolor: "#FF5A5F",
//               fontWeight: "bold",
//               padding: "10px 20px",
//               borderRadius: "8px",
//               textTransform: "none",
//             }}
//             onClick={handleOpen}
//           >
//             Get Free Quote
//           </Button>
//         </motion.div>
//       </motion.div>

//       {/* Modal */}
//       {open && (
//         <Box
//           component={motion.div}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           sx={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             bgcolor: "rgba(0, 0, 0, 0.5)",
//             zIndex: 1100,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <StyledPaper>
//             {/* Close Button */}
//             <IconButton onClick={handleClose} sx={{ position: "absolute", top: 8, right: 8 }}>
//               <CloseIcon />
//             </IconButton>

//             {/* Form Content */}
//             <Typography variant="h5" fontWeight="bold" gutterBottom>
//               Designs for Every Budget
//             </Typography>
//             <motion.div>
//               <TextField
//                 fullWidth
//                 label="Name"
//                 variant="outlined"
//                 margin="normal"
//                 sx={{ bgcolor: "rgba(255, 255, 255, 0.8)" }}
//               />
//             </motion.div>
//             <motion.div>
//               <TextField
//                 fullWidth
//                 label="Property Location"
//                 variant="outlined"
//                 margin="normal"
//                 sx={{ bgcolor: "rgba(255, 255, 255, 0.8)" }}
//               />
//             </motion.div>
//             <motion.div>
//               <TextField
//                 fullWidth
//                 label="Phone Number"
//                 variant="outlined"
//                 margin="normal"
//                 sx={{ bgcolor: "rgba(255, 255, 255, 0.8)" }}
//               />
//             </motion.div>
//             <motion.div>
//               <FormControlLabel control={<Checkbox defaultChecked />} label="Send me updates on WhatsApp" />
//             </motion.div>
//             <motion.div>
//               <Button
//                 variant="contained"
//                 fullWidth
//                 sx={{
//                   bgcolor: "#FF5A5F",
//                   fontWeight: "bold",
//                   marginTop: 2,
//                   padding: "10px 16px",
//                   borderRadius: "10px",
//                 }}
//               >
//                 GET FREE QUOTE
//               </Button>
//             </motion.div>
//             <motion.div>
//               <Typography variant="caption" color="textSecondary" sx={{ marginTop: 2 }}>
//                 By submitting this form, you agree to the{" "}
//                 <a href="/privacy-policy" style={{ textDecoration: "none", color: "red" }}>
//                   privacy policy
//                 </a>{" "}
//                 &{" "}
//                 <a href="/terms" style={{ textDecoration: "none", color: "red" }}>
//                   terms and conditions
//                 </a>
//                 .
//               </Typography>
//             </motion.div>
//           </StyledPaper>
//         </Box>
//       )}
//     </>
//   );
// };

// export default Navbar;
