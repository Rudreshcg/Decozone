import React from 'react';
import { motion } from 'framer-motion';
import { SlideUp } from '../../animation/animate';
import WatermarkedImage from '../Portfolio/WatermarkedImage';
import { projectsData } from '../../data/projectsData';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SquareFootOutlinedIcon from '@mui/icons-material/SquareFootOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
    // Select specific projects to feature
    const featuredProjects = [
        projectsData.find(p => p.id === 1), // Mr. Raghavendra's European Home
        projectsData.find(p => p.id === 2), // Mr. Rakesh Chandra's Traditional Residence
        projectsData.find(p => p.id === 3)  // Mr. Srinivas Reddy's Contemporary Sanctuary
    ].filter(Boolean);

    return (
        <section className="featured-projects-section">
            <div className="container">
                <div className="section-header">
                    <motion.div
                        variants={SlideUp(0.1)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="section-badge-global"
                    >
                        ✦ SIGNATURE RESIDENCES ✦
                    </motion.div>
                    <motion.h2
                        variants={SlideUp(0.2)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="section-title-global"
                    >
                        Curated Signature Projects
                    </motion.h2>
                    <motion.p
                        variants={SlideUp(0.3)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="description"
                    >
                        Immerse yourself in our portfolio of bespoke villas, luxury penthouses, and turnkey apartments across Bangalore, showcasing uncompromising craftsmanship and timeless spatial harmony.
                    </motion.p>
                </div>

                <div className="projects-grid">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={SlideUp(0.3 + index * 0.15)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="project-card"
                        >
                            <div className="card-image-wrapper">
                                <WatermarkedImage src={project.image} alt={project.name} className="card-image" />
                                <div className="card-overlay">
                                    <span className="category-badge">
                                        {project.category.toUpperCase()} • {project.date || "2025"}
                                    </span>
                                </div>
                            </div>

                            <div className="card-content">
                                <h3 className="project-title">{project.name}</h3>

                                <div className="project-meta-bar">
                                    <span className="meta-item">
                                        <LocationOnOutlinedIcon sx={{ fontSize: 16, color: "#b29873" }} />
                                        {project.location}
                                    </span>
                                    <span className="meta-separator">•</span>
                                    <span className="meta-item">
                                        <SquareFootOutlinedIcon sx={{ fontSize: 16, color: "#b29873" }} />
                                        {project.area}
                                    </span>
                                </div>

                                <p className="project-desc">{project.description}</p>

                                <div className="project-tags">
                                    {(project.highlights || project.features || []).slice(0, 3).map((feature, idx) => (
                                        <span key={idx} className="project-tag-pill">
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                <div className="card-footer">
                                    <a href={`/portfolio/${project.id}`} className="details-link">
                                        <span>Explore Walkthrough</span>
                                        <ArrowForwardIcon className="arrow-icon" sx={{ fontSize: 18 }} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    variants={SlideUp(0.5)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="section-footer"
                >
                    <a href="/portfolio" className="view-all-btn">
                        <span>View All Architectural Projects</span>
                        <ArrowForwardIcon sx={{ fontSize: 18 }} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
