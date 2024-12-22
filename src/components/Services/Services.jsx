import React from "react";
import { Box, Container, Typography, Grid, Button, List, ListItem } from "@mui/material";
import { FaTv, FaBed, FaHome, FaCouch, FaPaintRoller, FaTools } from "react-icons/fa";

const serviceCards = [
  {
    id: 1,
    title: "Living/Dining Room",
    description: ["TV Unit", "TV Back Panelling", "Crockery Unit", "Bar Unit", "Bookshelf"],
    icon: <FaTv size={40} />,
  },
  {
    id: 2,
    title: "Bedroom",
    description: ["Wardrobes", "TV Unit", "Bed with Storage", "Dressing Unit", "Study Unit"],
    icon: <FaBed size={40} />,
  },
  {
    id: 3,
    title: "Kitchen",
    description: ["Countertops", "Backsplashes", "Accessories", "Shutters", "Storage"],
    icon: <FaHome size={40} />,
  },
  {
    id: 4,
    title: "Innovative Storage",
    description: ["Janitor Unit", "Skirting Drawer", "Pantry Pull Out", "Appliance Garage", "Hidden Bar Cabinet", "Magic Corner"],
    icon: <FaCouch size={40} />,
  },
  {
    id: 5,
    title: "Interior Design Services",
    description: ["False Ceiling", "Wall Panelling", "Decor Accents", "Lighting", "Furnishing", "Appliances"],
    icon: <FaPaintRoller size={40} />,
  },
  {
    id: 6,
    title: "Home Improvement Services",
    description: ["Painting", "Bathroom Remodelling", "Tiling", "Plumbing", "Electrical", "Civil Work", "Deep Cleaning"],
    icon: <FaTools size={40} />,
  },
];

const Services = () => {
  return (
    <Container sx={{ py: 10 }}>
      {/* Title Section */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          What You Get
        </Typography>
      </Box>
      {/* Service Cards Section */}
      <Grid container spacing={4}>
        {serviceCards.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Box
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  color: "primary.main",
                  mb: 2,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {card.icon}
              </Box>
              {/* Title */}
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {card.title}
              </Typography>
              {/* Description */}
              <List disablePadding>
                {card.description.map((desc, index) => (
                  <ListItem
                    key={index}
                    sx={{ py: 0, px: 0, listStyle: "disc", display: "list-item", typography: "body2" }}
                  >
                    {desc}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* Button Section */}
      <Box textAlign="center" mt={6}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#B71C1C",
            color: "white",
            fontWeight: "bold",
            fontSize: "1rem",
            px: 4,
            py: 1.5,
            borderRadius: "5px",
            "&:hover": {
              backgroundColor: "#D32F2F",
            },
          }}
        >
          Get Free Estimates
        </Button>
      </Box>
    </Container>
  );
};

export default Services;
