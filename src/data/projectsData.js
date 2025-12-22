// Import images
import Kitchen1 from "../assets/gallery/kitchen-1.jpeg"
import Kitchen2 from "../assets/gallery/kitchen-2.jpeg"
import Kitchen3 from "../assets/gallery/kitchen-3.jpeg"
import Kitchen4 from "../assets/gallery/kitchen-4.jpeg"

import bedroom1 from "../assets/gallery/bedroom-1.webp"
import bedroom2 from "../assets/gallery/bedroom-2.webp"
import bedroom3 from "../assets/gallery/bedroom-3.jpeg"
import bedroom4 from "../assets/gallery/bedroom-4.jpeg"

import livingarea1 from "../assets/gallery/livingarea-1.png"
import livingarea2 from "../assets/gallery/livingarea-2.jpeg"
import livingarea3 from "../assets/gallery/livingarea-3.jpeg"
import livingarea4 from "../assets/gallery/livingarea-4.png"

import storage1 from "../assets/gallery/storage-1.jpeg"
import storage2 from "../assets/gallery/storage-2.png"
import storage3 from "../assets/gallery/storage-3.png"
import storage4 from "../assets/gallery/storage-4.png"

export const projectsData = [
    // Residential Projects
    {
        id: 1,
        image: Kitchen1,
        name: "Modern Modular Kitchen",
        title: "Sleek design with maximum storage",
        category: "Residential",
        location: "Whitefield, Bangalore",
        area: "120 sq ft",
        date: "2024",
        description: "A state-of-the-art modular kitchen designed for efficiency and aesthetics. Featuring high-gloss finishes, soft-close cabinets, and integrated appliances, this kitchen is a perfect blend of form and function.",
        highlights: ["High-gloss finish", "Soft-close mechanism", "Integrated lighting", "Space-saving corner units"],
        features: ["Water-resistant materials", "Heat-resistant countertop", "Customizable internal organizers"]
    },
    {
        id: 2,
        image: bedroom1,
        name: "Master Bedroom Suite",
        title: "Elegant wardrobe and lighting",
        category: "Residential",
        location: "Sarjapur, Bangalore",
        area: "200 sq ft",
        date: "2024",
        description: "A master bedroom designed to be a personal sanctuary. The room features a custom floor-to-ceiling wardrobe with sliding doors and ambient cove lighting.",
        highlights: ["Custom Wardrobes", "Ambient Lighting", "Integrated Workspace", "Acoustic Insulation"],
        features: ["Premium laminates", "Durable hardware", "Energy-efficient lighting"]
    },
    {
        id: 3,
        image: livingarea1,
        name: "Open Concept Living",
        title: "Spacious layout for family time",
        category: "Residential",
        location: "Bannerghatta Rd, Bangalore",
        area: "250 sq ft",
        date: "2024",
        description: "An open-concept living area that serves as the heart of the home. We utilized a mix of textures—wood, glass, and fabric—to create depth and interest.",
        highlights: ["Floating TV Unit", "Textured Wall Panels", "Open Plan Layout", "Custom Upholstery"],
        features: ["Easy-clean surfaces", "Hidden cable management", "Modular seating arrangements"]
    },

    // Commercial Projects (Repurposed Images)
    {
        id: 4,
        image: livingarea2, // Originally TV Unit Design
        name: "Corporate Executive Lounge",
        title: "Modern professional environment",
        category: "Commercial",
        location: "Electronic City, Bangalore",
        area: "400 sq ft",
        date: "2024",
        description: "A sleek and modern executive lounge designed for casual meetings and relaxation. The combination of wood veneer and matte black finishes adds a touch of corporate luxury.",
        highlights: ["Hidden Consoles", "Wire Management", "Modern Finishes", "Display Shelves"],
        features: ["Commercial grade materials", "Acoustic paneling", "Ergonomic layout"]
    },
    {
        id: 5,
        image: Kitchen3, // Originally Island Kitchen
        name: "Office Breakout Pantry",
        title: "Employee refreshment hub",
        category: "Commercial",
        location: "Koramangala, Bangalore",
        area: "300 sq ft",
        date: "2023",
        description: "A functional and inviting breakout pantry for a tech startup. The island counter serves as a communal eating space, fostering collaboration during breaks.",
        highlights: ["Communal Island", "Durable Surfaces", "Easy Maintenance", "High Traffic Design"],
        features: ["Anti-scratch countertops", "Heavy-duty fittings", "Optimized flow"]
    },
    {
        id: 6,
        image: livingarea3, // Originally Formal Living Room
        name: "Boutique Reception Area",
        title: "Welcoming client entrance",
        category: "Commercial",
        location: "Indiranagar, Bangalore",
        area: "350 sq ft",
        date: "2024",
        description: "A sophisticated reception area for a boutique law firm. The design emphasizes professionalism and warmth with premium seating and balanced lighting.",
        highlights: ["Statement Lighting", "Premium Seating", "Brand Identity Wall", "Waiting Zone"],
        features: ["Custom reception desk", "Visitor management focus", "Luxurious textures"]
    }
];
