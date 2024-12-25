import React from "react";
import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../animation/animate";
import { Box, Container, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

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
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="text-4xl font-bold font-serif"
        >
          Words from our customers
        </motion.h1>
        <motion.p
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="text-gray-500 text-sm max-w-[350px] mx-auto"
        >
          Bring your dream home to life with one-on-one design help & hand
          picked products
        </motion.p>
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
                '&:hover': {
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
                    className="border-[1px] border-gray-500 px-5 py-10 text-white group hover:bg-white duration-300 min-w-[300px] max-w-[300px]"
                    sx={{ scrollSnapAlign: "start" }}
                  >
                    {/* Upper section */}
                    <div className="flex flex-row items-center gap-3">
                      <img
                        src={card.img}
                        alt=""
                        className="w-[60px] rounded-full"
                      />
                      <div>
                        <p className="text-sm font-bold group-hover:text-black">
                          {card.name}
                        </p>
                        <p className="text-gray-400 text-xs group-hover:text-black">
                          {card.designation}
                        </p>
                        <div className="text-xs mt-2">⭐⭐⭐⭐⭐</div>
                      </div>
                    </div>
                    {/* Bottom section */}
                    <div className="mt-5 border-t-2 border-gray-500/40 pt-5">
                      <p className="text-sm text-gray-300 group-hover:text-black duration-300">
                        {card.text}
                      </p>
                    </div>
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
                '&:hover': {
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
