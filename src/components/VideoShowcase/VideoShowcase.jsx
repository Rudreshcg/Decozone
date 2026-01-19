import React from 'react';
import { motion } from 'framer-motion';
import { SlideUp } from '../../animation/animate';
import './VideoShowcase.css';

const VideoShowcase = () => {
    const videos = [
        {
            id: "e_w_OJaHtvY",
            title: "ಇಂತಹ ಮನೆ ನೋಡೋದೆ ಖುಷಿ | 40x60 premium house design | construction in Bangalore | Home tour",
            description: "Explore this stunning 40x60 premium house in Bangalore. A complete home tour showcasing luxury design, construction excellence, and elegant interiors that are a joy to behold.",
            featured: false
        },
        {
            id: "k6Xc1F9hEuA",
            title: "Modern Home Design Concepts",
            description: "Explore the latest in contemporary home design, featuring clever space-saving solutions and elegant finishes.",
            featured: false
        },
        {
            id: "1LsONmb0raA",
            title: "Bespoke Interior Transformations",
            description: "Seeing is believing. Watch how we transform standard spaces into dream homes for our clients.",
            featured: false
        }
    ];

    return (
        <section className="video-showcase-section">
            <div className="container">
                <div className="video-header">
                    <motion.span
                        variants={SlideUp(0.2)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="section-badge-global"
                    >
                        Our Projects in Action
                    </motion.span>
                    <motion.h2
                        variants={SlideUp(0.4)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="section-title-global"
                        style={{ textAlign: "center" }}
                    >
                        See Our Designs <br /> in Motion
                    </motion.h2>
                    <motion.p
                        variants={SlideUp(0.6)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="description"
                    >
                        Success is better seen than told. Explore our signature projects through our detailed video walkthroughs and witness the Tvashta transformation.
                    </motion.p>
                </div>

                <div className="video-grid video-grid-three">
                    {videos.map((video, index) => (
                        <motion.div
                            key={index}
                            variants={SlideUp(0.4 + index * 0.2)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className={`video-item ${video.featured ? 'featured-item' : ''}`}
                            style={video.featured ? { gridColumn: "span 2" } : {}}
                        >
                            <div className="video-card">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="video-info">
                                <h3>{video.title}</h3>
                                <p>{video.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    variants={SlideUp(0.8)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="video-cta-group"
                >
                    <a
                        href="https://www.youtube.com/@Tvashtainterior"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="channel-btn"
                    >
                        Visit Our YouTube Channel
                    </a>
                    <a
                        href="https://www.youtube.com/@Tvashtainterior/videos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="arrow-btn"
                        title="View More Videos"
                    >
                        <span>More Videos</span> →
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoShowcase;
