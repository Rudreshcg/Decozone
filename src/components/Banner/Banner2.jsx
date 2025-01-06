import React from "react";
import Banner1 from "../../assets/banner2.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import { Typography } from "@mui/material";

const MotionTypography = motion(Typography);

const Banner2 = () => {
  const fontFamily = "YourFontFamily, sans-serif"; // Replace with your desired font family

  return (
    <div>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px]">
            <MotionTypography
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              variant="h4"
              fontWeight="bold"
              sx={{ fontFamily }}
            >
              Simple way to make stylish living room
            </MotionTypography>
            <MotionTypography
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              sx={{ fontFamily }}
            >
              Transform your living room into a space that’s both elegant and functional. 
              With thoughtful design, curated decor, and personalized touches, 
              we bring your dream living space to life. Style meets comfort, all in one room.{" "}
            </MotionTypography>
            <motion.div
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="flex gap-3"
            >
              <div className="max-w-[80px] space-y-2">
                <p
                  className="text-3xl font-bold font-serif"
                  style={{ fontFamily }}
                >
                  5
                </p>
                <p
                  className="text-gray-500 text-sm"
                  style={{ fontFamily }}
                >
                  Years of Experience
                </p>
              </div>
              <div className="max-w-[80px] space-y-2">
                <p
                  className="text-3xl font-bold font-serif"
                  style={{ fontFamily }}
                >
                  50
                </p>
                <p
                  className="text-gray-500 text-sm"
                  style={{ fontFamily }}
                >
                  Happy Clients
                </p>
              </div>
              <div className="max-w-[80px] space-y-2">
                <p
                  className="text-3xl font-bold font-serif"
                  style={{ fontFamily }}
                >
                  4
                </p>
                <p
                  className="text-gray-500 text-sm"
                  style={{ fontFamily }}
                >
                  Award Gained
                </p>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Banner1}
              alt=""
              className="w-[95%] md:w-full mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
