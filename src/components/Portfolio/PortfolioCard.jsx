import { Link } from 'react-router-dom';
import WatermarkedImage from './WatermarkedImage';
import './PortfolioCard.css';

function PortfolioCard({
    image,
    name,
    title,
    category,
    location,
    area,
    date,
    link,
    onImageClick
}) {
    return (
        <div className="portfolio-card">
            <div className="card-image-container" onClick={onImageClick} style={{ cursor: onImageClick ? 'pointer' : 'default' }}>
                <WatermarkedImage src={image} alt={name} className="card-image" />
                <div className="card-category">{category}</div>
                {onImageClick && (
                    <div className="image-overlay-zoom">
                        <span className="zoom-icon">🔍</span>
                    </div>
                )}
            </div>

            <div className="card-content">
                <div className="card-header">
                    <h3 className="project-name">{name}</h3>
                    <p className="project-title">{title}</p>
                </div>

                <div className="card-details">
                    {location && (
                        <div className="detail-item">
                            <span className="detail-icon">📍</span>
                            <span className="detail-text">{location}</span>
                        </div>
                    )}
                    {area && (
                        <div className="detail-item">
                            <span className="detail-icon">📐</span>
                            <span className="detail-text">{area}</span>
                        </div>
                    )}
                    {date && (
                        <div className="detail-item">
                            <span className="detail-icon">📅</span>
                            <span className="detail-text">{date}</span>
                        </div>
                    )}
                </div>

                {link && link !== '#' && (
                    <Link to={link} className="explore-button">
                        <span>View Project</span>
                        <span className="arrow">→</span>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default PortfolioCard;
