import React from 'react';
import PortfolioSection from './PortfolioSection';
import SEOHead from '../SEO/SEOHead';
import InternalLinks from '../SEO/InternalLinks';

function Portfolio() {
    return (
        <div>
            <SEOHead
                title="Our Portfolio - Tvashta Interior Projects"
                description="Explore Tvashta Interior's portfolio showcasing modular kitchens, bedrooms, living rooms, and complete home interiors in Bangalore."
                keywords="interior portfolio Bangalore, modular kitchen photos, bedroom designs, living room interiors, Tvashta Interior gallery"
                canonical="/portfolio"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "Interior Design Portfolio",
                    "description": "Showcase of Tvashta Interior's projects including modular kitchens, bedrooms, and living spaces in Bangalore.",
                    "url": "https://Rudreshcg.github.io/Decozone/portfolio"
                }}
            />
            <PortfolioSection />
            <div style={{ padding: "0 5%", backgroundColor: "#f8f9fa", paddingBottom: "40px" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                    <InternalLinks currentPage="portfolio" />
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
