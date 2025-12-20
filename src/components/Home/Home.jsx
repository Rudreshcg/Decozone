import React from "react";
import Hero from "../Hero/Hero";
import WhyPartnerWithUs from "../WhyPartnerWithUs/WhyPartnerWithUs";
import DesignYourDreams from "./DesignYourDreams";
import Testimonial from "../Testimonial/Testimonial";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import HowItWorks from "../HowItWorks/HowItWorks";
import VideoShowcase from "../VideoShowcase/VideoShowcase";

const Home = () => {
    return (
        <>
            <Hero />
            <DesignYourDreams />
            <WhyPartnerWithUs />
            <HowItWorks />
            <VideoShowcase />
            <FeaturedProjects />
            <Testimonial />
        </>
    );
};

export default Home;
