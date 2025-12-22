import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const InternalLinks = ({ currentPage = 'home' }) => {
    const linkSections = {
        home: [
            { text: 'About Our Services', to: '/about' },
            { text: 'View Our Portfolio', to: '/portfolio' },
            { text: 'Get Free Quote', to: '/contact' },
        ],
        about: [
            { text: 'View Portfolio', to: '/portfolio' },
            { text: 'Contact Us', to: '/contact' },
        ],
        services: [
            { text: 'About Us', to: '/about' },
            { text: 'View Portfolio', to: '/portfolio' },
            { text: 'Get Free Quote', to: '/contact' },
        ],
        portfolio: [
            { text: 'About Us', to: '/about' },
            { text: 'Contact Us', to: '/contact' },
        ],
        contact: [
            { text: 'View Portfolio', to: '/portfolio' },
            { text: 'About Us', to: '/about' },
        ]
    };

    const currentLinks = linkSections[currentPage] || linkSections.home;

    return (
        <Box sx={{
            mt: 4,
            p: 3,
            backgroundColor: '#f8f9fa',
            borderRadius: 2,
            border: '1px solid #e9ecef'
        }}>
            <Typography
                variant="h6"
                sx={{
                    mb: 2,
                    color: '#2c3e50',
                    fontWeight: 600
                }}
            >
                Explore More
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {currentLinks.map((link, index) => (
                    <MuiLink
                        key={index}
                        component={RouterLink}
                        to={link.to}
                        sx={{
                            color: '#4a5942', // Tvashta Interior Theme Color
                            textDecoration: 'none',
                            fontWeight: 500,
                            fontSize: '0.9rem',
                            padding: '8px 16px',
                            backgroundColor: 'white',
                            borderRadius: '20px',
                            border: '1px solid #4a5942',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: '#4a5942',
                                color: 'white',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 12px rgba(74, 89, 66, 0.3)'
                            }
                        }}
                    >
                        {link.text}
                    </MuiLink>
                ))}
            </Box>
        </Box>
    );
};

export default InternalLinks;
