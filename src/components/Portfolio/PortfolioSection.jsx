
import React, { useState, useEffect } from 'react';
import PortfolioCard from './PortfolioCard';
import './PortfolioSection.css';
import { projectsData } from '../../data/projectsData';

function PortfolioSection() {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('all');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Transform data to include links for specific projects
        const enrichedProjects = projectsData.map(project => ({
            ...project,
            link: `/portfolio/${project.id}`
        }));
        setProjects(enrichedProjects);
        setIsVisible(true);
    }, []);

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category.toLowerCase() === filter.toLowerCase());

    const categories = ['all', 'Residential', 'Commercial'];

    return (
        <section className="portfolio-section">
            <div className="portfolio-header">
                <h2 className="portfolio-title">Our Latest Outcomes</h2>
                <p className="portfolio-subtitle">Discover our gallery of exceptional interior design projects</p>

                {/* Filter Buttons */}
                <div className="portfolio-filters">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`filter-btn ${filter === category ? 'active' : ''}`}
                            onClick={() => setFilter(category)}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            <div className={`portfolio-grid ${isVisible ? 'visible' : ''}`}>
                {filteredProjects.map((project, index) => (
                    <div
                        key={project.id}
                        className="portfolio-item"
                        style={{
                            animationDelay: `${index * 0.1}s`,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
                        }}
                    >
                        <PortfolioCard
                            image={project.image}
                            name={project.name}
                            title={project.title}
                            category={project.category}
                            location={project.location}
                            area={project.area}
                            date={project.date}
                            link={project.link}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PortfolioSection;
