import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const InternalLinks = ({ currentPage = 'home' }) => {
    const linkSections = {
        home: [
            { text: 'Our Architectural Story', to: '/about' },
            { text: 'Curated Portfolio', to: '/portfolio' },
            { text: 'Meet The Atelier Team', to: '/teams' },
            { text: 'Book Consultation', to: '/contact' },
        ],
        about: [
            { text: 'View Portfolio', to: '/portfolio' },
            { text: 'Meet The Team', to: '/teams' },
            { text: 'Design Journal', to: '/blogs' },
            { text: 'Book Consultation', to: '/contact' },
        ],
        teams: [
            { text: 'Our Story & Heritage', to: '/about' },
            { text: 'Bespoke Portfolio', to: '/portfolio' },
            { text: 'Book A Consultation', to: '/contact' },
        ],
        services: [
            { text: 'Our Heritage', to: '/about' },
            { text: 'Signature Portfolio', to: '/portfolio' },
            { text: 'Book Consultation', to: '/contact' },
        ],
        portfolio: [
            { text: 'Our Heritage', to: '/about' },
            { text: 'Atelier Experts', to: '/teams' },
            { text: 'Schedule Consultation', to: '/contact' },
        ],
        contact: [
            { text: 'Signature Portfolio', to: '/portfolio' },
            { text: 'Our Heritage', to: '/about' },
            { text: 'Meet The Team', to: '/teams' },
        ],
        blogs: [
            { text: 'Explore Portfolio', to: '/portfolio' },
            { text: 'Meet The Architects', to: '/teams' },
            { text: 'Book Consultation', to: '/contact' },
        ]
    };

    const currentLinks = linkSections[currentPage] || linkSections.home;

    return (
        <Box sx={{
            mt: 5,
            p: { xs: 3, md: 3.5 },
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            border: '1px solid rgba(178, 152, 115, 0.25)',
            boxShadow: '0 4px 20px rgba(66, 82, 62, 0.04)',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            gap: 2.5
        }}>
            <Box>
                <Typography
                    sx={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: '#121a12',
                    }}
                >
                    Continue Exploring Tvashta
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '0.8rem',
                        color: '#6b7a69',
                        mt: 0.3
                    }}
                >
                    Discover our architectural works, in-house team, and bespoke capabilities
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                {currentLinks.map((link, index) => (
                    <MuiLink
                        key={index}
                        component={RouterLink}
                        to={link.to}
                        sx={{
                            color: '#42523e',
                            textDecoration: 'none',
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: 600,
                            fontSize: '0.8rem',
                            letterSpacing: '0.5px',
                            padding: '8px 18px',
                            backgroundColor: '#faf8f5',
                            borderRadius: '50px',
                            border: '1px solid rgba(178, 152, 115, 0.35)',
                            transition: 'all 0.3s ease',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 0.8,
                            '&:hover': {
                                backgroundColor: '#42523e',
                                color: '#ffffff',
                                borderColor: '#42523e',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 6px 16px rgba(66, 82, 62, 0.25)'
                            }
                        }}
                    >
                        <span>{link.text}</span>
                        <ArrowForwardIosIcon sx={{ fontSize: 10, opacity: 0.7 }} />
                    </MuiLink>
                ))}
            </Box>
        </Box>
    );
};

export default InternalLinks;

