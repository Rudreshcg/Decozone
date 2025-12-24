import React from "react";
import SEOHead from "../SEO/SEOHead";
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
            <SEOHead
                title="Best Interior Designers in Bangalore"
                description="Transform your space with Tvashta Interior. We offer premium modular kitchens, luxury wardrobes, and complete home interior design services in Bangalore."
                keywords="interior designers Bangalore, luxury interiors, modular kitchens Bangalore, home renovation, Tvashta Interior"
                canonical="/"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Tvashta Interior",
                    "url": "https://tvashtainterior.com/",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://tvashtainterior.com/search?q={search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                }}
            />
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
