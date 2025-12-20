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
    // Kitchens
    {
        id: 1,
        image: Kitchen1,
        name: "Modern Modular Kitchen",
        title: "Sleek design with maximum storage",
        category: "Kitchen",
        location: "Whitefield, Bangalore",
        area: "120 sq ft",
        date: "2024",
        description: "A state-of-the-art modular kitchen designed for efficiency and aesthetics. Featuring high-gloss finishes, soft-close cabinets, and integrated appliances, this kitchen is a perfect blend of form and function. The layout maximizes counter space while providing ample storage for all culinary needs.",
        highlights: ["High-gloss finish", "Soft-close mechanism", "Integrated lighting", "Space-saving corner units"],
        features: ["Water-resistant materials", "Heat-resistant countertop", "customizable internal organizers"]
    },
    {
        id: 2,
        image: Kitchen2,
        name: "Contemporary L-Shape",
        title: "Ergonomic layout for efficiency",
        category: "Kitchen",
        location: "Indiranagar, Bangalore",
        area: "150 sq ft",
        date: "2023",
        description: "This contemporary L-shaped kitchen is designed for the modern family. The layout ensures an efficient work triangle, making cooking a breeze. We used a neutral color palette with pops of color in the backsplash to create a vibrant yet sophisticated look. The breakfast counter doubles as a workspace.",
        highlights: ["L-Shaped Layout", "Breakfast Counter", "Vibrant Backsplash", "Smart Corner Solutions"],
        features: ["Quartz countertop", "Pull-out pantry", "Under-cabinet lighting"]
    },
    { id: 3, image: Kitchen3, name: "Island Kitchen", title: "Luxury finish with premium fittings", category: "Kitchen", location: "Koramangala, Bangalore", area: "180 sq ft", date: "2024" },
    { id: 4, image: Kitchen4, name: "Compact Modular", title: "Space-saving smart design", category: "Kitchen", location: "HSR Layout, Bangalore", area: "90 sq ft", date: "2023" },

    // Bedrooms
    {
        id: 5,
        image: bedroom1,
        name: "Master Bedroom Suite",
        title: "Elegant wardrobe and lighting",
        category: "Bedroom",
        location: "Sarjapur, Bangalore",
        area: "200 sq ft",
        date: "2024",
        description: "A master bedroom designed to be a personal sanctuary. The room features a custom floor-to-ceiling wardrobe with sliding doors, ambient cove lighting, and a neutral color palette that promotes relaxation. The design integrates a workspace nook without cluttering the restful environment.",
        highlights: ["Custom Wardrobes", "Ambient Lighting", "Integrated Workspace", "Acoustic Insulation"],
        features: ["Premium laminates", "Durable hardware", "Energy-efficient lighting"]
    },
    {
        id: 6,
        image: bedroom2,
        name: "Minimalist Kids Room",
        title: "Bright colors and functional space",
        category: "Bedroom",
        location: "Bellandur, Bangalore",
        area: "140 sq ft",
        date: "2023",
        description: "A fun and functional space designed for a growing child. We incorporated ample storage for toys and books, a dedicated study area, and played with bright, cheerful colors. The furniture is modular and can be adapted as the child grows.",
        highlights: ["Safety-first design", "Modular Furniture", "Study Nook", "Ample Toy Storage"],
        features: ["Low-VOC paints", "Rounded corners", "Easy-clean laminates"]
    },
    { id: 7, image: bedroom3, name: "Guest Bedroom", title: "Comfortable and welcoming", category: "Bedroom", location: "Jayanagar, Bangalore", area: "130 sq ft", date: "2024" },
    { id: 8, image: bedroom4, name: "Luxury Wardrobe Design", title: "Walk-in closet concept", category: "Bedroom", location: "Hebbal, Bangalore", area: "160 sq ft", date: "2023" },

    // Living Areas
    {
        id: 9,
        image: livingarea1,
        name: "Open Concept Living",
        title: "Spacious layout for family time",
        category: "Living",
        location: "Bannerghatta Rd, Bangalore",
        area: "250 sq ft",
        date: "2024",
        description: "An open-concept living area that serves as the heart of the home. We utilized a mix of textures—wood, glass, and fabric—to create depth and interest. The TV unit is a custom floating design that keeps the floor clear, enhancing the sense of space.",
        highlights: ["Floating TV Unit", "Textured Wall Panels", "Open Plan Layout", "Custom Upholstery"],
        features: ["Easy-clean surfaces", "Hidden cable management", "Modular seating arrangements"]
    },
    {
        id: 10,
        image: livingarea2,
        name: "TV Unit Design",
        title: "Modern entertainment center",
        category: "Living",
        location: "Electronic City, Bangalore",
        area: "Unknown",
        date: "2023",
        description: "A sleek and modern entertainment unit meant to be the focal point of the living room. It features hidden compartments for consoles and wiring, keeping the look clean and uncluttered. The combination of wood veneer and matte black finishes adds a touch of modern luxury.",
        highlights: ["Hidden Consoles", "Wire Management", "Modern Finishes", "Display Shelves"],
        features: ["Plywood base", "Matte laminate", "Soft-close drawers"]
    },
    { id: 11, image: livingarea3, name: "Formal Living Room", title: "Sophisticated decor and seating", category: "Living", location: "Yelahanka, Bangalore", area: "300 sq ft", date: "2024" },
    { id: 12, image: livingarea4, name: "Cozy Family Lounge", title: "Warm lighting and textures", category: "Living", location: "JP Nagar, Bangalore", area: "220 sq ft", date: "2023" },

    // Storage
    {
        id: 13,
        image: storage1,
        name: "Custom Storage Unit",
        title: "Optimized for compact spaces",
        category: "Storage",
        location: "Bangalore",
        area: "Custom",
        date: "2024",
        description: "A custom-built storage unit designed to fit into a previously unused niche. This unit maximizes vertical space, providing storage for household essentials while blending seamlessly with the wall decor.",
        highlights: ["Niche Optimization", "Vertical Storage", "Seamless Fit", "Push-to-open doors"],
        features: ["Custom dimensions", "Internal adjustable shelves", "Durable finish"]
    },
    {
        id: 14,
        image: storage2,
        name: "Modern Cabinetry",
        title: "Stylish and functional",
        category: "Storage",
        location: "Bangalore",
        area: "Custom",
        date: "2024",
        description: "Modern cabinetry designed for the dining area. It serves as a crockery unit and includes a small bar counter. The glass shutters with internal lighting highlight the displayed items, adding an element of elegance.",
        highlights: ["Crockery Unit", "Bar Counter Integration", "Glass Shutters", "Profile Lighting"],
        features: ["Tempered glass", "Heavy-duty hinges", "integrated lighting"]
    },
    { id: 15, image: storage3, name: "Walk-in Storage", title: "Spacious organizing solution", category: "Storage", location: "Bangalore", area: "Custom", date: "2024" },
    { id: 16, image: storage4, name: "Decorative Shelf", title: "Aesthetics meets utility", category: "Storage", location: "Bangalore", area: "Custom", date: "2024" },
];
