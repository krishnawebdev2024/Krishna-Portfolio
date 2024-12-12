import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import ThemeToggleButton from "./navMechanism/ThemeToggleButton.jsx";
import Logo from "../../assets/Logo.png";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { path: "/", label: "Startseite" },
    { path: "/skills", label: "Expertise" },
    { path: "/work-experience", label: "Beruflicher Werdegang" },
    { path: "/projects", label: "Portfolio" },
    { path: "/certifications", label: "Zertifikate" },
  ];

  return (
    <nav className="flex items-center justify-between p-6 lg:px-24 bg-lightBackground  dark:bg-darkBackground  border-gray-200 z-100 fixed top-0 w-full">
      {/* Logo or Brand Name */}
      <div className="flex items-center">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-10 w-full  mr-2" />
        </Link>
      </div>
      {/* Navigation Links (Responsive) */}
      <div className="hidden md:flex space-x-6 relative flex-grow justify-center">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`relative text-gray-900 dark:text-white hover:text-primary dark:hover:text-slate-400 transition duration-200 ${
              location.pathname === link.path
                ? " text-primary dark:text-brandPrimary"
                : ""
            }`}
            onClick={closeMobileMenu}
          >
            {link.label}

            {/* Active Link Indicator */}
            {location.pathname === link.path && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-primary dark:bg-white rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            )}
          </Link>
        ))}
      </div>
      {/* Theme Toggle */}
      <div className="hidden md:flex items-center">
        <ThemeToggleButton />
      </div>
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          className="text-lightForeground dark:text-darkForeground focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <FaTimes className="h-6 w-6 " />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          ref={dropdownRef}
          className="absolute top-24  bg-lightBackground dark:bg-darkBackground shadow-lg rounded-md p-6 w-full max-w-[calc(100%-3rem)] mx-auto md:hidden flex flex-col space-y-12 items-start z-100  "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to={link.path}
                className={`text-gray-900 dark:text-white font-medium transition-all duration-300 ease-in-out transform ${
                  location.pathname === link.path
                    ? "bg-slate-800 text-white dark:text-brandPrimary font-semibold py-2 px-5 rounded-lg shadow-md"
                    : "hover:bg-slate-200 dark:hover:bg-slate-600 px-5 py-2 rounded-lg hover:scale-105"
                }`}
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <div className="flex items-center justify-start mt-4 ">
            <ThemeToggleButton />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;
