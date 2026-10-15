import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from '../../data/projectsData';
import { galleryData } from '../../data/galleryData';
import SEOHead from '../SEO/SEOHead';
import InternalLinks from '../SEO/InternalLinks';
import ImageModal from './ImageModal';
import WatermarkedImage from './WatermarkedImage';
import SearchIcon from '@mui/icons-material/Search';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the project matching the ID
    const project = projectsData.find(p => p.id === parseInt(id));

    // Image Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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
                    className="btn-premium"
                >
                    Back to Portfolio
                </button>
            </div>
        );
    }

    // Filter projects that have descriptions (our "active" 3 projects) to show in sidebar
    // We'll use ID 1, 5, and 9 as the ones with details for now
    const sidebarProjects = projectsData.filter(p => [1, 5, 9].includes(p.id));

    const displayedImages = useMemo(() => {
        // Get the gallery data for the current project
        const projectGallery = galleryData.find(gallery => gallery.projectId === parseInt(id));
        // Return all 9 images from the project gallery
        return projectGallery ? projectGallery.images : [];
    }, [id]);

    return (
        <div className="project-details-container">
            <SEOHead
                title={`${project.name} - Tvashta Interior Portfolio`}
                description={project.description || `View details of ${project.name}, a ${project.category} project by Tvashta Interior.`}
                canonical={`/portfolio/${project.id}`}
            />

            {/* Hero Section */}
            <div className="project-hero" style={{ position: 'relative', overflow: 'hidden', height: '60vh', minHeight: '400px' }}>
                <WatermarkedImage 
                    src={project.image} 
                    alt={project.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="hero-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, background: 'rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
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

                    {/* Verified Homeowner Review */}
                    {project.clientReview && (
                        <div className="project-client-review-card" style={{
                            marginTop: '45px',
                            marginBottom: '40px',
                            padding: '36px 32px',
                            background: '#faf8f5',
                            borderRadius: '18px',
                            border: '1px solid rgba(178, 152, 115, 0.35)',
                            position: 'relative',
                            boxShadow: '0 12px 35px -10px rgba(66, 82, 62, 0.08)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', flexWrap: 'wrap', gap: '10px' }}>
                                <span style={{
                                    fontSize: '0.72rem',
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontWeight: 700,
                                    letterSpacing: '0.12em',
                                    color: '#42523e',
                                    background: 'rgba(178, 152, 115, 0.15)',
                                    padding: '5px 12px',
                                    borderRadius: '50px',
                                    border: '1px solid rgba(178, 152, 115, 0.3)',
                                    textTransform: 'uppercase'
                                }}>
                                    ✦ VERIFIED HOMEOWNER REVIEW
                                </span>
                                <div style={{ color: '#b29873', display: 'flex', gap: '3px' }}>
                                    {[...Array(project.clientReview.rating || 5)].map((_, i) => (
                                        <span key={i} style={{ fontSize: '1.1rem' }}>★</span>
                                    ))}
                                </div>
                            </div>
                            <p style={{
                                fontFamily: "'Playfair Display', Georgia, serif",
                                fontStyle: 'italic',
                                fontSize: '1.05rem',
                                lineHeight: '1.75',
                                color: '#1e281e',
                                margin: '0 0 22px 0'
                            }}>
                                "{project.clientReview.comment}"
                            </p>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '14px',
                                paddingTop: '18px',
                                borderTop: '1px solid rgba(178, 152, 115, 0.2)'
                            }}>
                                <div style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '50%',
                                    background: 'rgba(66, 82, 62, 0.1)',
                                    border: '1.5px solid rgba(178, 152, 115, 0.4)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontWeight: 700,
                                    color: '#42523e',
                                    fontSize: '0.9rem'
                                }}>
                                    {project.clientReview.reviewer.replace('Mr. ', '').split(' ').map(n => n[0]).join('').slice(0, 2)}
                                </div>
                                <div>
                                    <h4 style={{
                                        margin: 0,
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontSize: '0.95rem',
                                        fontWeight: 700,
                                        color: '#121a12'
                                    }}>
                                        {project.clientReview.reviewer}
                                    </h4>
                                    <p style={{
                                        margin: '3px 0 0 0',
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontSize: '0.78rem',
                                        color: '#7a8976'
                                    }}>
                                        Homeowner • {project.clientReview.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="inquiry-box">
                        <h3>Love this design?</h3>
                        <p>Get in touch with us to transform your space into something similar.</p>
                        <button onClick={() => navigate('/contact')} className="gold-btn" style={{ marginTop: '20px', padding: '12px 32px', fontSize: '0.85rem' }}>
                            Request Project Consultation
                        </button>
                    </div>

                    {/* Project Gallery Section */}
                    <div className="project-gallery-section" style={{ marginTop: '50px' }}>
                        <h2 style={{ marginBottom: '30px' }}>Project Gallery</h2>
                        <div className="project-gallery-grid">
                            {displayedImages.map((img, index) => (
                                <WatermarkedImage
                                    key={index}
                                    src={img}
                                    alt={`Project gallery ${index + 1}`}
                                    className="gallery-img"
                                    onClick={() => {
                                        setSelectedImageIndex(index);
                                        setIsModalOpen(true);
                                    }}
                                    style={{ cursor: 'pointer' }}
                                />
                            ))
                            }
                        </div>
                    </div>

                    <ImageModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        images={displayedImages}
                        currentIndex={selectedImageIndex}
                        setCurrentIndex={setSelectedImageIndex}
                    />

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
                                        <WatermarkedImage
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
                        <input type="text" placeholder="Search projects..." />
                        <button className="search-button" aria-label="Search">
                            <SearchIcon sx={{ color: '#ffffff', fontSize: 18 }} />
                        </button>
                    </div>

                    <h3 className="latest-title">Latest Portfolio</h3>
                    <div className="latest-projects-list">
                        {projectsData.slice(0, 5).map(p => (
                            <div
                                key={p.id}
                                className="latest-item"
                                onClick={() => navigate(`/portfolio/${p.id}`)}
                            >
                                <WatermarkedImage src={p.image} alt={p.name} className="latest-img" />
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
