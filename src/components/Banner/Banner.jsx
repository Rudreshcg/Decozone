import React from "react";
import Banner1 from "../../assets/banner.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import { Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";


const MotionTypography = motion(Typography);

const Banner = () => {
  return (
    <>
      <Helmet>
        <title>Collaborative Interior Design Team | Tvashta Interior Bangalore</title>
        <meta name="description" content="Our talented and innovative interior design team works collaboratively to bring your vision to life with precision and passion in Bangalore and all India." />
        <meta name="keywords" content="interior design team, collaboration, creativity, Bangalore interiors, Tvashta Interior, innovative interiors" />
        <link rel="canonical" href="https://tvashtainterior.com/" />
        <meta property="og:title" content="Collaborative Interior Design Team - Tvashta Interior" />
        <meta property="og:description" content="Bringing together diverse talents and shared expertise, our team delivers exceptional interior projects across Bangalore and India." />
        <meta property="og:url" content="https://tvashtainterior.com/" />
        <meta property="og:type" content="website" />
      </Helmet>


      <div>
        <div className="container py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col justify-center">
              <motion.img
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                src={Banner1}
                alt="Banner"
                className="w-[95%] md:w-full mx-auto"
              />
            </div>
            {/* text section */}
            <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px]">
              <MotionTypography
                variants={SlideUp(0.2)}
                initial="initial"
                whileInView="animate"
                variant="h4"
                fontWeight="bold"
              >
                We Believe that a team makes any project better
              </MotionTypography>
              <MotionTypography
                variants={SlideUp(0.4)}
                initial="initial"
                whileInView="animate"
              >
                A great project is the result of collaboration, creativity, and shared expertise.
                Our team brings together diverse talents, innovative ideas, and a commitment to excellence,
                ensuring every project is completed with precision and passion. Together, we make your vision a reality.
              </MotionTypography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
