import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SEOHead from "../SEO/SEOHead";
import InternalLinks from "../SEO/InternalLinks";
import "./Teams.css";

const Teams = () => {
    // Placeholder team members from reference, adapted for Tvashta Interior context if needed
    // You might want to update these names with real Tvashta team members later.
    const teamMembers = [
        {
            name: "Dhanush N Gowda",
            title: "FOUNDER & CEO",
            image: null,
        },
        {
            name: "PRIYA SHARMA",
            title: "CHIEF ARCHITECT",
            image: null,
        },
        {
            name: "AMIT PATEL",
            title: "SENIOR PROJECT MANAGER",
            image: null,
        },
        {
            name: "SUNITA REDDY",
            title: "HEAD OF DESIGN",
            image: null,
        },
        {
            name: "VIKRAM SINGH",
            title: "SENIOR SITE ENGINEER",
            image: null,
        },
        {
            name: "ANJALI MENON",
            title: "INTERIOR DESIGN SPECIALIST",
            image: null,
        },
        {
            name: "ROHIT MALHOTRA",
            title: "QUALITY ASSURANCE LEAD",
            image: null,
        },
        {
            name: "MEERA KRISHNAN",
            title: "CLIENT RELATIONS MANAGER",
            image: null,
        },
    ];

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="teams-section">
            <SEOHead
                title="Our Team - Tvashta Interior"
                description="Meet the expert team at Tvashta Interior. Our architects, designers, and engineers bring years of experience to deliver exceptional interior projects in Bangalore."
                keywords="Tvashta interior team, interior designers Bangalore, Bangalore interior experts"
                canonical="/teams"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Our Team - Tvashta Interior",
                    "description": "Meet the expert interior design team at Tvashta Interior in Bangalore.",
                }}
            />

            <div className="teams-header">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="teams-title">Our Team</h2>
                    <p className="teams-subtitle">
                        At Tvashta Interior, our success is built on the foundation of our exceptional team.
                        Each member brings unique expertise, dedication, and passion to every project. Together,
                        we transform visions into reality, creating spaces that inspire.
                    </p>
                </motion.div>
            </div>

            <div className={`teams-grid ${isVisible ? 'visible' : ''}`}>
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="team-card"
                        style={{
                            animationDelay: `${index * 0.1}s`,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
                        }}
                    >
                        <div className="team-image-container">
                            {member.image ? (
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="team-image"
                                />
                            ) : (
                                <div className="team-image-placeholder">
                                    {member.name.charAt(0)}
                                </div>
                            )}
                        </div>

                        <div className="team-content">
                            <h3 className="team-name">{member.name}</h3>
                            <p className="team-title">{member.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Internal Links */}
            <div style={{ padding: "40px 5%", backgroundColor: "#ffffff" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                    <InternalLinks currentPage="teams" />
                </div>
            </div>
        </section>
    );
};

export default Teams;
