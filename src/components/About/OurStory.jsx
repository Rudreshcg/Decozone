import React from "react";
import { motion } from "framer-motion";
import SEOHead from "../SEO/SEOHead";
import InternalLinks from "../SEO/InternalLinks";
// Using a placeholder or appropriate image from Decozone assets
import teamPhoto from "../../assets/landing_page_Image.avif";
import "./OurStory.css";

const OurStory = () => {
    const stats = [
        { title: "PEOPLE", number: "30+" },
        { title: "YEARS", number: "5+" },
        { title: "ONGOING PROJECTS", number: "50+" },
    ];

    return (
        <div className="our-story-section">
            <SEOHead
                title="Our Story - Tvashta Interior"
                description="Discover Our Story at Tvashta Interior. Learn about our mission, values, and commitment to delivering exceptional interior design services in Bangalore."
                keywords="Tvashta interior story, interior design company Bangalore, interior mission, interior values"
                canonical="/about"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "mainEntity": {
                        "@type": "Organization",
                        "name": "Tvashta Interior",
                        "description": "Premier interior design company in Bangalore specializing in modular kitchens and luxury interiors.",
                        "url": "https://Rudreshcg.github.io/tvashta-interior/about"
                    }
                }}
            />

            {/* Title Section */}
            <div className="story-header">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="story-title">Our Story</h2>
                    <p className="story-subtitle">
                        Discover the journey, values, and vision that drive Tvashta Interior to excellence.
                    </p>
                </motion.div>
            </div>

            {/* Top Hero Image Section */}
            <div className="photo-section">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={teamPhoto}
                        alt="Tvashta Interior - Designing Excellence"
                        onError={(e) => {
                            e.target.style.display = "none";
                            e.target.parentElement.style.minHeight = "400px";
                            e.target.parentElement.style.backgroundColor = "#e0e0e0";
                        }}
                    />
                </motion.div>
            </div>

            {/* Stats Section */}
            <div className="stats-section">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="stat-item">
                                <div className="stat-line" />
                                <div className="stat-title">{stat.title}</div>
                                <div className="stat-number">{stat.number}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Story Text Section - Middle Content */}
            <div className="story-section">
                <div className="story-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="story-text">
                            Founded in Bangalore with a vision to transform the interior design landscape, Tvashta Interior emerged from a passion for creating spaces that blend functionality with aesthetic excellence. What started as a modest venture has grown into one of Bangalore's most trusted names in residential and commercial interiors.
                        </p>
                        <p className="story-text">
                            Our approach to design has always been client-centric. We believe in understanding each client's unique vision before we start. By integrating modern trends with timeless utility, we create spaces that tell stories. Every project is a collaboration, where our team of designers and craftsmen work in harmony to bring dreams to life.
                        </p>
                        <p className="story-text">
                            At the heart of Tvashta Interior lies our commitment to quality, integrity, and innovation. We draw strength from the collective expertise of our diverse team. This collaborative spirit, combined with our unwavering dedication to excellence, has enabled us to build not just beautiful homes, but lasting relationships with our clients.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Image Section */}
            <div className="photo-section">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <img
                        src={teamPhoto}
                        alt="Tvashta Interior - Designing Excellence"
                        onError={(e) => {
                            e.target.style.display = "none";
                            e.target.parentElement.style.minHeight = "400px";
                            e.target.parentElement.style.backgroundColor = "#e0e0e0";
                        }}
                    />
                </motion.div>
            </div>

            {/* Internal Links */}
            <div style={{ padding: "40px 5%", backgroundColor: "#ffffff" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                    <InternalLinks currentPage="about" />
                </div>
            </div>
        </div>
    );
};

export default OurStory;
