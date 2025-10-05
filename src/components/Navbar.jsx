import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home as HomeIcon, MapPin, Info, Phone } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home", icon: <HomeIcon size={20} /> },
    { to: "/tours", label: "Tours", icon: <MapPin size={20} /> },
    { to: "/about", label: "About", icon: <Info size={20} /> },
    { to: "/contact", label: "Contact", icon: <Phone size={20} /> },
  ];

  return (
    <nav className="bg-black text-white shadow-md fixed w-full z-20">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Inline Logo */}
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 50 50"
            className="flex-shrink-0"
          >
            <circle cx="25" cy="25" r="20" fill="white" />
            <polygon points="25,8 31,25 25,42 19,25" fill="black" />
            <circle cx="25" cy="25" r="4" fill="white" stroke="black" strokeWidth="2" />
          </svg>
          <span className="font-bold tracking-wide text-white">
            Promise Expeditions
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-1 hover:text-gray-300 transition ${
                  isActive ? "text-gray-300 font-semibold" : ""
                }`
              }
            >
              {item.icon} {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-black flex flex-col items-center justify-center space-y-8 text-2xl font-semibold z-30"
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={32} className="text-white hover:text-gray-300" />
            </button>

            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 hover:text-gray-300 transition ${
                    isActive ? "text-gray-300" : ""
                  }`
                }
              >
                {item.icon} {item.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
