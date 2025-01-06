import React from "react";
import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../animation/animate";
import { Box, Container, IconButton, Typography, useMediaQuery } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const MotionTypography = motion(Typography);

const TestimonialData = [
  {
    id: 1,
    name: "John Doe",
    designation: "Designer",
    img: "https://i.pravatar.cc/300?img=1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Alex",
    designation: "Developer",
    img: "https://i.pravatar.cc/300?img=2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 0.4,
  },
  {
    id: 3,
    name: "George",
    designation: "Manager",
    img: "https://i.pravatar.cc/300?img=3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 0.6,
  },
  {
    id: 4,
    name: "Emily",
    designation: "Architect",
    img: "https://i.pravatar.cc/300?img=4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 0.8,
  },
  {
    id: 5,
    name: "Michael",
    designation: "Engineer",
    img: "https://i.pravatar.cc/300?img=5",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 1.0,
  },
  {
    id: 3,
    name: "George",
    designation: "Manager",
    img: "https://i.pravatar.cc/300?img=3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 0.6,
  },
  {
    id: 4,
    name: "Emily",
    designation: "Architect",
    img: "https://i.pravatar.cc/300?img=4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 0.8,
  },
  {
    id: 5,
    name: "Michael",
    designation: "Engineer",
    img: "https://i.pravatar.cc/300?img=5",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 1.0,
  },
];

const Testimonial = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const scrollLeft = () => {
    document.getElementById("testimonialScroll").scrollLeft -= 300;
  };

  const scrollRight = () => {
    document.getElementById("testimonialScroll").scrollLeft += 300;
  };

  return (
    <div className="py-14">
      {/* Heading title */}
      <div className="space-y-4 text-center max-w-[550px] mx-auto mb-8">
        <MotionTypography
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          variant="h4"
          fontWeight="bold"
        >
          Words from our customers
        </MotionTypography>
        <MotionTypography
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
          px={2}
        >
          Bring your dream home to life with one-on-one design help & hand-picked products
        </MotionTypography>
      </div>
      {/* Testimonial cards */}
      <div className="bg-black p-12 relative">
        <Container>
          <Box display="flex" alignItems="center">
            <IconButton
              sx={{
                position: "absolute",
                left: -25,
                zIndex: 1000,
                backgroundColor: "white",
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "lightgray",
                },
              }}
              onClick={scrollLeft}
            >
              <ChevronLeft />
            </IconButton>
            <Box
              id="testimonialScroll"
              display="flex"
              overflow="auto"
              sx={{ scrollSnapType: "x mandatory", gap: 2, width: "100%" }}
            >
              {TestimonialData.map((card) => {
                return (
                  <motion.div
                    key={card.id}
                    variants={SlideLeft(card.delay)}
                    initial="initial"
                    whileInView="animate"
                    style={{
                      border: "1px solid #6b7280", // Equivalent to `border-gray-500`
                      padding: "25px 20px", // Equivalent to `px-5 py-10`
                      color: "white",
                      minWidth: isMobile ? "260px" : "300px",
                      maxWidth: isMobile ? "260px" : "300px",
                      transition: "background-color 0.3s",
                      scrollSnapAlign: "start",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "white";
                      e.currentTarget.style.color = "black";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "white";
                    }}
                  >
                    {/* Upper section */}
                    <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
                      <img
                        src={card.img}
                        alt=""
                        style={{ width: "60px", borderRadius: "50%" }}
                      />
                      <Box>
                        <Typography
                          variant="body2"
                          fontWeight="bold"
                          sx={{ color: "inherit" }}
                        >
                          {card.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: "inherit" }}
                        >
                          {card.designation}
                        </Typography>
                        <Typography
                          variant="caption"
                          display="block"
                          sx={{ marginTop: "8px" }}
                        >
                          ⭐⭐⭐⭐⭐
                        </Typography>
                      </Box>
                    </Box>
                    {/* Bottom section */}
                    <Box
                      sx={{
                        marginTop: "20px",
                        borderTop: "2px solid rgb(107 114 128 / 40%)", // Equivalent to `border-gray-500/40`
                        paddingTop: "20px",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                         color: "inherit", 
                          transition: "color 0.3s",
                        }}
                      >
                        {card.text}
                      </Typography>
                    </Box>
                  </motion.div>
                );
              })}

            </Box>
            <IconButton
              sx={{
                position: "absolute",
                right: -25,
                zIndex: 1000,
                backgroundColor: "white",
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "lightgray",
                },
              }}
              onClick={scrollRight}
            >
              <ChevronRight />
            </IconButton>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Testimonial;
