import React from 'react';
import './DesignYourDreams.css';
import { motion } from 'framer-motion';
import { SlideUp } from '../../animation/animate';

import Kitchen1 from "../../assets/gallery/kitchen-1.jpeg"
import bedroom1 from "../../assets/gallery/bedroom-1.webp"
import livingarea1 from "../../assets/gallery/livingarea-1.png"

const DesignYourDreams = () => {
    const cards = [
        {
            title: "AUTOMATED",
            titleAccent: "MANUFACTURING",
            description: "Our in-house factory, powered by cutting-edge IMOS software and HOMAG machinery, enables us to manufacture bespoke interiors of unparalleled quality and precision.",
            image: Kitchen1
        },
        {
            title: "TURNKEY",
            titleAccent: "INTERIORS",
            description: "From concept to completion, we handle everything. Our turnkey solutions ensure a stress-free transformation of your space with expert coordination and execution.",
            image: bedroom1
        },
        {
            title: "100%",
            titleAccent: "TRANSPARENCY",
            description: "We maintain complete transparency in our pricing, materials, and timelines. No hidden costs, just honest work and clear communication every step of the way.",
            image: livingarea1
        }
    ];

    return (
        <section className="design-dreams-section">
            <div className="container">
                <div className="design-header" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '20px' }}>
                    <motion.span
                        variants={SlideUp(0.2)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="section-badge-global"
                        style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                    >
                        TRANSFORMING HOMES, ENHANCING LIVES
                    </motion.span>
                    <motion.h2
                        variants={SlideUp(0.4)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="section-title-global"
                    >
                        Design Your Dreams
                    </motion.h2>
                    <motion.p
                        variants={SlideUp(0.6)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="description"
                        style={{ maxWidth: '800px', margin: '0 auto', fontSize: '16px', lineHeight: '1.6', color: '#666', fontFamily: 'Montserrat, sans-serif' }}
                    >
                        At Tvashta Interior, we specialise in creating a wide range of exceptional interiors, from classic and elegant to contemporary and modern. We offer a range of customised designs tailored to your specific needs and desires. Irrespective of your style or budget, we have the expertise to create a space that you'll love coming home to.
                    </motion.p>
                </div>

                <div className="design-grid">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={SlideUp(0.4 + index * 0.2)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="design-card"
                        >
                            <div className="card-image-wrapper">
                                <img src={card.image} alt={card.title} className="card-image" />
                                <div className="card-overlay">
                                    <div className="card-content">
                                        <h3 className="card-title">
                                            <span className="accent">{card.title}</span> {card.titleAccent}
                                        </h3>
                                        <p className="card-description">{card.description}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DesignYourDreams;
