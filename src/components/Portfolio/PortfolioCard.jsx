import { Link } from 'react-router-dom';
import WatermarkedImage from './WatermarkedImage';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SquareFootOutlinedIcon from '@mui/icons-material/SquareFootOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
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
                        <span className="zoom-icon">
                            <SearchIcon sx={{ fontSize: 24, color: "#ffffff" }} />
                        </span>
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
                            <LocationOnOutlinedIcon className="detail-icon" sx={{ fontSize: 16, color: "#b29873" }} />
                            <span className="detail-text">{location}</span>
                        </div>
                    )}
                    {area && (
                        <div className="detail-item">
                            <SquareFootOutlinedIcon className="detail-icon" sx={{ fontSize: 16, color: "#b29873" }} />
                            <span className="detail-text">{area}</span>
                        </div>
                    )}
                    {date && (
                        <div className="detail-item">
                            <CalendarMonthOutlinedIcon className="detail-icon" sx={{ fontSize: 16, color: "#b29873" }} />
                            <span className="detail-text">{date}</span>
                        </div>
                    )}
                </div>

                {link && link !== '#' && (
                    <Link to={link} className="explore-button">
                        <span>View Project</span>
                        <ArrowForwardIcon className="arrow" sx={{ fontSize: 16 }} />
                    </Link>
                )}
            </div>
        </div>
    );
}

export default PortfolioCard;
