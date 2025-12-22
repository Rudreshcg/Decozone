import React, { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from '../../data/projectsData';
import { galleryData } from '../../data/galleryData';
import SEOHead from '../SEO/SEOHead';
import InternalLinks from '../SEO/InternalLinks';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the project matching the ID
    const project = projectsData.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="project-details-container" style={{ padding: '100px', textAlign: 'center' }}>
                <h2>Project Not Found</h2>
                <p>The project you are looking for does not exist or has been removed.</p>
                <button
                    onClick={() => navigate('/portfolio')}
                    className="inquiry-btn"
                    style={{ background: '#4a5942', color: 'white' }}
                >
                    Back to Portfolio
                </button>
            </div>
        );
    }

    // Filter projects that have descriptions (our "active" 3 projects) to show in sidebar
    // We'll use ID 1, 5, and 9 as the ones with details for now
    const sidebarProjects = projectsData.filter(p => [1, 5, 9].includes(p.id));

    const displayedImages = React.useMemo(() => {
        return galleryData
            .flatMap(section => section.images)
            .sort(() => 0.5 - Math.random())
            .slice(0, 6);
    }, []);

    return (
        <div className="project-details-container">
            <SEOHead
                title={`${project.name} - Tvashta Interior Portfolio`}
                description={project.description || `View details of ${project.name}, a ${project.category} project by Tvashta Interior.`}
                canonical={`/portfolio/${project.id}`}
            />

            {/* Hero Section */}
            <div className="project-hero" style={{ backgroundImage: `url(${project.image})` }}>
                <div className="hero-overlay">
                    <h1>{project.name}</h1>
                    <div className="project-meta-hero">
                        {project.category} | {project.location} | {project.date}
                    </div>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="project-content-wrapper">

                {/* Left Column: Description & Details */}
                <div className="main-content">
                    <h2>Project Overview</h2>
                    {/* ... (existing content logic is unchanged, just moving gallery usage down) ... */}
                    <p className="project-description">
                        {project.description || "Project specific description is coming soon. Stay tuned for more updates on this beautiful interior design execution by Tvashta Interior."}
                    </p>

                    {project.highlights && (
                        <>
                            <h2>Key Highlights</h2>
                            <ul className="highlights-list">
                                {project.highlights.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </>
                    )}

                    {project.features && (
                        <>
                            <h2>Features & Specifications</h2>
                            <ul className="features-list">
                                {project.features.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </>
                    )}

                    <div className="inquiry-box">
                        <h3>Love this design?</h3>
                        <p>Get in touch with us to transform your space into something similar.</p>
                        <button onClick={() => navigate('/contact')} className="inquiry-btn">
                            Get a Quote
                        </button>
                    </div>

                    {/* Project Gallery Section */}
                    <div className="project-gallery-section" style={{ marginTop: '50px' }}>
                        <h2 style={{ marginBottom: '30px' }}>Project Gallery</h2>
                        <div className="project-gallery-grid">
                            {displayedImages.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Project gallery ${index + 1}`}
                                    className="gallery-img"
                                />
                            ))
                            }
                        </div>
                    </div>

                    {/* Related Projects Section */}
                    <div className="related-projects-section" style={{ marginTop: '60px' }}>
                        <h2 style={{ borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>Related Projects</h2>
                        <div className="related-projects-grid">
                            {projectsData
                                .filter(p => p.id !== project.id) // Exclude current project
                                .sort((a, b) => b.id - a.id) // Show latest (highest ID) first
                                .slice(0, 3) // Show only latest 3
                                .map(p => (
                                    <div
                                        key={p.id}
                                        className="related-project-card"
                                        onClick={() => navigate(`/portfolio/${p.id}`)}
                                    >
                                        <img
                                            src={p.image}
                                            alt={p.name}
                                            className="related-project-img"
                                        />
                                        <div className="related-project-content">
                                            <h4 className="related-project-name">{p.name}</h4>
                                            <p className="related-project-title">{p.title}</p>
                                            <span className="related-project-date">{p.date === "2024" ? "August 7, 2024" : "July 15, 2024"}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                {/* Right Column: Sidebar */}
                <aside className="project-sidebar">
                    <div className="sidebar-search">
                        <input type="text" placeholder="Search..." />
                        <button className="search-button">🔍</button>
                    </div>

                    <h3 className="latest-title">Latest Portfolio</h3>
                    <div className="latest-projects-list">
                        {projectsData.slice(0, 5).map(p => (
                            <div
                                key={p.id}
                                className="latest-item"
                                onClick={() => navigate(`/portfolio/${p.id}`)}
                            >
                                <img src={p.image} alt={p.name} className="latest-img" />
                                <div className="latest-content">
                                    <h4 className="latest-project-name">{p.name}</h4>
                                    <p className="latest-project-title">{p.title}</p>
                                    <span className="latest-project-date">{p.date === "2024" ? "August 7, 2024" : "July 15, 2024"}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h3 className="sidebar-title" style={{ marginTop: '40px' }}>Project Info</h3>

                    <div className="project-info-item">
                        <strong>Client Location</strong>
                        <span>{project.location}</span>
                    </div>

                    <div className="project-info-item">
                        <strong>Project Type</strong>
                        <span>{project.category}</span>
                    </div>

                    <div className="project-info-item">
                        <strong>Area Size</strong>
                        <span>{project.area}</span>
                    </div>

                    <div className="project-info-item">
                        <strong>Completion Year</strong>
                        <span>{project.date}</span>
                    </div>
                </aside>
            </div>

            <InternalLinks currentPage="portfolio" />
        </div>
    );
};

export default ProjectDetails;
