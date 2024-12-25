import React from "react";
import { Box, Grid, Typography, Button, Card } from "@mui/material";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";


const servicesData = [
  {
    icon: "🛋️",
    title: "Living/Dining Room",
    description: "TV Unit, TV Back Panelling, Crockery Unit, Bar Unit, Bookshelf",
  },
  {
    icon: "🗄️",
    title: "Innovative Storage",
    description:
      "Janitor Unit, Skirting Drawer, Pantry Pull Out, Appliance Garage, Hidden Bar Cabinet, Magic Corner",
  },
  {
    icon: "🛏️",
    title: "Bedroom",
    description: "Wardrobes, TV Unit, Bed with Storage, Dressing Unit, Study Unit",
  },
  {
    icon: "🪑",
    title: "Interior Design Services",
    description:
      "False Ceiling, Wall Panelling, Decor Accents, Lighting, Furnishing, Appliances",
  },
  {
    icon: "🍳",
    title: "Kitchen",
    description: "Countertops, Backsplashes, Accessories, Shutters, Storage",
  },
  {
    icon: "🛁",
    title: "Home Improvement Services",
    description:
      "Painting, Bathroom Remodelling, Tiling, Plumbing, Electrical, Civil Work, Deep Cleaning",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Services = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 4, fontWeight: "bold", textAlign: "center" }}>
        What You Get
      </Typography>
      <Grid container spacing={4}>
        {servicesData.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.2 }} // Re-triggers animation when in view
            >
              <Card
                sx={{
                  padding: 2,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  boxShadow: 3,
                  borderRadius: 2,
                  minHeight: "190px"
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "80px",
                    height: "80px",
                    marginRight: 2,
                    fontSize: "48px",
                  }}
                >
                  {service.icon}
                </Box>

                {/* Content */}
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {service.description}
                  </Typography>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
