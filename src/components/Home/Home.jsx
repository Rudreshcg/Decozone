import React from "react";
import Hero from "../Hero/Hero";
import WhyPartnerWithUs from "../WhyPartnerWithUs/WhyPartnerWithUs";
import DesignYourDreams from "./DesignYourDreams";
import Testimonial from "../Testimonial/Testimonial";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import HowItWorks from "../HowItWorks/HowItWorks";
import VideoShowcase from "../VideoShowcase/VideoShowcase";
import Services from "../Services/Services";

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <FeaturedProjects />
            <WhyPartnerWithUs />
            <HowItWorks />
            <VideoShowcase />
            <Testimonial />
            <DesignYourDreams />
        </>
    );
};

export default Home;
