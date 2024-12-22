import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";

const NavLinks = [
  { id: 1, title: "About", link: "#" },
  { id: 2, title: "Services", link: "#" },
  { id: 3, title: "Project", link: "#" },
  { id: 4, title: "Contact", link: "#" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="container py-6 flex justify-between items-center bg-white z-50 relative"
    >
      {/* Logo section */}
      <div className="flex items-center gap-3">
        {/* <img
          src={Logo}
          alt="Interior Design Company Logo"
          className="w-10"
          onError={(e) => (e.currentTarget.src = "fallback-logo.png")}
        /> */}
        <span className="text-2xl font-bold">Decozone</span>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          className="text-3xl focus:outline-none"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Links section */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:flex md:space-x-12 absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-50`}
      >
        {NavLinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            aria-label={link.title}
            className="block md:inline-block px-4 py-2 md:py-0 text-lg font-semibold hover:text-primary"
          >
            {link.title}
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default Navbar;
