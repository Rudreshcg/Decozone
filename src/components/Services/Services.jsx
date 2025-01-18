import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Collapse,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  Avatar,
} from '@mui/material';
import { ExpandLess, ExpandMore, FiberManualRecord as BulletIcon } from '@mui/icons-material';
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
// import ServicesIcon from "../../assets/services.png";
import  ServicesIcon from "../../assets/icons8-service-48.png"
import WarrantyIcon from "../../assets/icons8-warranty-48.png";
import TechnologyIcon from "../../assets/icons8-technology-50.png";
import PriceIcon from "../../assets/icons8-get-a-discount-50.png";
import ContactModal from "../ContactModal/ContactModal"


const offerings = [
  { title: 'Our Services', icon: ServicesIcon, details: ['Modular kitchens', 'Modular wardrobes', 'Lighting', 'Flooring', 'Electrical work', 'Civil work', 'False ceiling', 'Wall design & painting'] },
  { title: 'Warranty', icon: WarrantyIcon, details: ['FLAT 10-year warranty - Stay worry-free with our warranty policy on modular products.', 'Up to 1-year on-site service warranty - Warranty on on-site services such as painting, electrical, plumbing and more.'] },
  { title: 'Technology & Science', icon: TechnologyIcon, details: ['AquaBloc® Technology - Hermetically sealed edges that ensure no moisture enters the panels of your modular cabinets.', 'AntiBubble® Technology - Super seamless panels without air bubbles for your modular cabinets.', 'DuraBuild™ Technology - Robust structure for modular cabinets, making them strong and long-lasting.', 'Design Science - Modular kitchens with improved accessibility that makes daily tasks more efficient and reduces stress on the body.'] },
  { title: 'Price Benefits', icon: PriceIcon, details: ['Price-match guarantee - Price match to a valid quote in comparison with a branded player and for exact scope.', 'Flexible payment options - EMI solutions and payment schemes from leading financial partners.', 'No hidden costs - Transparent costing without last-minute additions.'] },
];

const Services = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [open, setOpen] = useState(false); 
  
    const handleOpen = () => {
      setOpen(true);
    };

  const handleExpandClick = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Box sx={{ backgroundColor: "#f2f2f2" }}>
      <Container sx={{ py: 5 }}>
        <Typography
          variant="h4"
          sx={{
            my: 4,
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif",
            color: "#333",
            textAlign: "center",
          }}
        >
          What we offer
        </Typography>
        <Grid container spacing={3} direction="column">
          {offerings.map((offering, index) => (
            <Grid item xs={12} key={index}>
              <motion.div variants={SlideUp(1.6)} initial="hidden" animate="visible">
                <Card sx={{ boxShadow: 3 }}>
                  <CardContent sx={{ "&:last-child": { paddingBottom: "16px" } }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Box display="flex" alignItems="center">
                        <Avatar
                          src={offering.icon}
                          alt={`${offering.title} Icon`}
                          sx={{ width: 32, height: 32, marginRight: 2 }}
                        />
                        <Typography fontSize="18px" fontWeight={600}>
                          {offering.title}
                        </Typography>
                      </Box>
                      <Button onClick={() => handleExpandClick(index)} color="black">
                        {expandedSections[index] ? <ExpandLess /> : <ExpandMore />}
                      </Button>
                    </Box>
                    <Collapse in={expandedSections[index]} timeout="auto" unmountOnExit>
                      <List>
                        {offering.details.map((detail, detailIndex) => (
                          <ListItem key={detailIndex}>
                            <ListItemIcon sx={{ minWidth: "28px" }}>
                              <BulletIcon sx={{ fontSize: "10px", fill: "black" }} />
                            </ListItemIcon>
                            <ListItemText primary={detail} />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <motion.Box
          variants={SlideUp(1.6)}
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "#FF5A5F",
              my: 4,
              fontWeight: "bold",
              p: "10px 16px",
              borderRadius: "10px",
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
            onClick={handleOpen}
          >
            GET FREE QUOTE
          </Button>
        </motion.Box>
      </Container>
      <ContactModal open={open} setOpen={setOpen} />
    </Box>
  );
};

export default Services;
