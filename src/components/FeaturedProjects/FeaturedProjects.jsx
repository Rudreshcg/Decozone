import React from 'react';
import { motion } from 'framer-motion';
import { SlideUp } from '../../animation/animate';
import { projectsData } from '../../data/projectsData';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
    // Select specific projects to feature
    const featuredProjects = [
        projectsData.find(p => p.id === 1), // Mr. Raghavendra's Contemporary Home
        projectsData.find(p => p.id === 2), // Mr. Rakesh Chandra's Luxury Residence
        projectsData.find(p => p.id === 3)  // Mr. Srinivas Reddy's Modern Sanctuary
    ].filter(Boolean); // Ensure we don't have nulls if IDs change

    return (
        <section className="featured-projects-section">
            <div className="container">
                <div className="section-header">
                    <motion.span
                        variants={SlideUp(0.2)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="section-badge-global"
                    >
                        SIGNATURE WORK
                    </motion.span>
                    <motion.h2
                        variants={SlideUp(0.4)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="section-title-global"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        variants={SlideUp(0.6)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="description"
                    >
                        Explore a curated selection of our recent architectural, interior, and construction projects
                        that highlight our craftsmanship and attention to detail.
                    </motion.p>
                </div>

                <div className="projects-grid">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={SlideUp(0.4 + index * 0.2)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="project-card"
                        >
                            <div className="card-image">
                                <img src={project.image} alt={project.name} />
                                <span className="category-badge">{project.category.toUpperCase()}</span>
                            </div>
                            <div className="card-content">
                                <h3 className="project-title">{project.name}</h3>
                                <p className="project-location">{project.location} • {project.area}</p>
                                <p className="project-desc">{project.description}</p>
                                <ul className="project-features">
                                    {(project.highlights || project.features || []).slice(0, 3).map((feature, idx) => (
                                        <li key={idx}><span></span>{feature}</li>
                                    ))}
                                </ul>
                                <div className="card-footer">
                                    <span className="project-date">{project.date}</span>
                                    <a href={`/portfolio/${project.id}`} className="details-link">
                                        <i className="eye-icon">👁️</i> View Details
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    variants={SlideUp(0.8)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="section-footer"
                >
                    <a href="/portfolio" className="view-all-btn">
                        View All Projects <span>→</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
