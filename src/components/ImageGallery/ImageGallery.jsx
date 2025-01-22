import React, { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Grid,
  Card,
  CardMedia,
  Container,
} from "@mui/material";
import { styled } from "@mui/system";
import Kitchen1 from "../../assets/gallery/kitchen-1.jpeg"
import Kitchen2 from "../../assets/gallery/kitchen-2.jpeg"
import Kitchen3 from "../../assets/gallery/kitchen-3.jpeg"
import Kitchen4 from "../../assets/gallery/kitchen-4.jpeg"

import bedroom1 from "../../assets/gallery/bedroom-1.webp"
import bedroom2 from "../../assets/gallery/bedroom-2.webp"
import bedroom3 from "../../assets/gallery/bedroom-3.jpeg"
import bedroom4 from "../../assets/gallery/bedroom-4.jpeg"

import livingarea1 from "../../assets/gallery/livingarea-1.png"
import livingarea2 from "../../assets/gallery/livingarea-2.jpeg"
import livingarea3 from "../../assets/gallery/livingarea-3.jpeg"
import livingarea4 from "../../assets/gallery/livingarea-4.png"


import storage1 from "../../assets/gallery/storage-1.png"
import storage2 from "../../assets/gallery/storage-2.png"
import storage3 from "../../assets/gallery/storage-3.png"
import storage4 from "../../assets/gallery/storage-4.png"

const finishes = [
  {
    title: "KITCHENS",
    images: [
      Kitchen1,
      Kitchen3,
      Kitchen4,
      Kitchen2,

    ],
  },
  {
    title: "BED ROOMS",
    images: [
      bedroom1,
      bedroom2,
      bedroom3,
      bedroom4,
    ],
  },
  {
    title: "LIVING AREA",
    images: [
      livingarea1,
      livingarea2,
      livingarea3,
      livingarea4,
    ],
  },
  {
    title: "STORAGES",
    images: [
      storage1,
      storage2,
      storage3,
      storage4
    ],
  },
];
const CustomTab = styled(Tab)(({ theme }) => ({
    textTransform: "none",
    fontSize: "12px", // Smaller font size
    fontWeight: 600,
    padding: 0, // Zero padding
    margin: "0 5px", // Minimal margin
    border: "1px solid #000",
    borderRadius: 20,
    minHeight: "30px", // Set a fixed minimum height
    height: "30px", // Set height explicitly
    lineHeight: "30px", // Align text vertically
    minWidth: 0, // Remove default minimum width
    backgroundColor: "#d3d3d3",
    "&.Mui-selected": {
      backgroundColor: "#333",
      color: "white",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px", // Smaller font for mobile
      height: "25px", // Reduce height for mobile
      lineHeight: "25px", // Adjust line height for mobile
    },
  }));
  
  
  const ImageGallery = () => {
    const [selectedTab, setSelectedTab] = useState(0);
  
    const handleTabChange = (event, newValue) => {
      setSelectedTab(newValue);
    };
  
    return (
      <Container sx={{ py: 5, backgroundColor: "#f2f2f2" }}>
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif",
            color: "#333",
            textAlign: "center",
          }}
        >
          Our Finest Finishes
        </Typography>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          centered
          sx={{
            mb: 4,
            "& .MuiTabs-flexContainer": {
              justifyContent: "center",
              flexWrap: "wrap", // Allow wrapping for smaller screens
              gap:"10px"
            },
            "& .MuiTab-root": {
              textTransform: "none",
            //   fontSize: "14px",
              fontWeight: 600,
              padding: "5px 15px",
              // margin: "0 10px",
              border: "1px solid #000",
              borderRadius: 20,
            },
          }}
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
        >
          {finishes.map((finish, index) => (
            <CustomTab key={index} label={finish.title} />
          ))}
        </Tabs>
        <Grid container spacing={3}>
          {finishes[selectedTab].images.map((image, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                sx={{
                  boxShadow: 3,
                  borderRadius: "8px",
                  overflow: "hidden",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                  // aspectRatio: "4 / 3",
                }}
              >
                <CardMedia
                  component="img"
                  image={image}
                  alt={`Finish ${index}`}
                  sx={{ objectFit: "cover", height: 320,}}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  };
  
export default ImageGallery;
