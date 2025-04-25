// import React, { useState, useEffect, useRef } from 'react';
// import { FaBars, FaTimes, FaHome, FaInfoCircle, FaProductHunt, FaBlog, FaComments, FaPhone, FaChevronDown, FaChevronUp } from 'react-icons/fa';
// import Logo from "../assets/logo.png";

// const Navbar = () => {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [openDropdown, setOpenDropdown] = useState(null);

//     const dropdownRef = useRef(null);

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 50);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//         setOpenDropdown(null);
//     };

//     const toggleDropdown = (index) => {
//         setOpenDropdown(openDropdown === index ? null : index);
//     };

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setOpenDropdown(null);
//             }
//         };
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);

//     const navLinks = [
//         { title: 'Home', url: '/', icon: <FaHome /> },
//         { title: 'About', url: '/about', icon: <FaInfoCircle /> },
//         {
//             title: 'Products',
//             url: '#',
//             icon: <FaProductHunt />,
//             subLinks: [
//                 { title: 'RMC', url: '#' },
//                 { title: 'Fly Ash', url: '#' },
//                 { title: 'Pond Ash', url: '#' },
//                 { title: 'Blocks', url: '#' },
//                 { title: 'Steel & Metal', url: '#' },
//                 { title: 'Aggregates', url: '#' },
//             ],
//         },
//         { title: 'Blog', url: '/blog', icon: <FaBlog /> },
//         { title: 'Testimonials', url: '/testimonials', icon: <FaComments /> },
//         { title: 'Contact', url: '/contact', icon: <FaPhone /> },
//     ];

//     return (
//         <nav className={`fixed py-5 top-0 left-0 w-full z-50 text-lg transition-all duration-300 ${isScrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'}`}>
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-16">
//                     <div className="flex items-center ">
//                         <img src={Logo} alt="logo" className='w-52' />

//                     </div>
//                     <div className="hidden lg:flex space-x-4">
//                         {navLinks.map((link, index) => (
//                             <div key={link.title} className="relative group">
//                                 <button
//                                     onClick={link.subLinks ? () => toggleDropdown(index) : null}
//                                     className="flex  items-center hover:text-pink-400 transition-colors duration-200"
//                                 >
//                                     <span>{link.title}</span>
//                                     {link.subLinks && (
//                                         <span className="ml-1">
//                                             {openDropdown === index ? <FaChevronUp /> : <FaChevronDown />}
//                                         </span>
//                                     )}
//                                 </button>
//                                 {link.subLinks && openDropdown === index && (
//                                     <div ref={dropdownRef} className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg transition-all duration-300">
//                                         {link.subLinks.map((subLink) => (
//                                             <a
//                                                 key={subLink.title}
//                                                 href={subLink.url}
//                                                 className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-pink-400 transition-colors duration-200"
//                                             >
//                                                 {subLink.title}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                     <div className="lg:hidden">
//                         <button onClick={toggleMenu} className="text-2xl focus:outline-none">
//                             {isMenuOpen ? <FaTimes /> : <FaBars />}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             {isMenuOpen && (
//                 <div className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40" onClick={toggleMenu}>
//                     <div className="fixed right-0 top-0 h-full w-3/4 bg-white shadow-lg p-4 transition-transform duration-300">
//                         <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl text-black focus:outline-none">
//                             <FaTimes />
//                         </button>
//                         <nav>
//                             {navLinks.map((link, index) => (
//                                 <div key={link.title} className="relative">
//                                     <button
//                                         onClick={link.subLinks ? () => toggleDropdown(index) : toggleMenu}
//                                         className="flex items-center p-2 w-full text-left text-gray-700 hover:bg-gray-100 hover:text-pink-400 rounded-md transition-colors duration-200"
//                                     >
//                                         <span className="mr-2">{link.icon}</span>
//                                         <span>{link.title}</span>
//                                         {link.subLinks && (
//                                             <span className="ml-auto">
//                                                 {openDropdown === index ? <FaChevronUp /> : <FaChevronDown />}
//                                             </span>
//                                         )}
//                                     </button>
//                                     {link.subLinks && openDropdown === index && (
//                                         <div className="ml-4 mt-2 space-y-2">
//                                             {link.subLinks.map((subLink) => (
//                                                 <a
//                                                     key={subLink.title}
//                                                     href={subLink.url}
//                                                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-pink-400 rounded-md transition-colors duration-300"
//                                                 >
//                                                     {subLink.title}
//                                                 </a>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                         </nav>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaProductHunt,
  FaBlog,
  FaComments,
  FaPhone,
} from "react-icons/fa";
import Logo from "../assets/logo1.png";
import Logo1 from "../assets/logo2.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const scrollTo = searchParams.get("scrollTo");
    if (scrollTo) {
      setTimeout(() => {
        const target = document.getElementById(scrollTo);
        if (target) {
          const offset = 100; // Adjust this based on Navbar height
          const topPosition =
            target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSectionClick = (sectionId) => {
    if (location.pathname === "/") {
      const target = document.getElementById(sectionId);
      if (target) {
        const offset = 120; // Adjust based on Navbar height
        const topPosition =
          target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: topPosition, behavior: "smooth" });
      }
    } else {
      navigate(`/?scrollTo=${sectionId}`);
    }
  };

  const navLinks = [
    { title: "Home", url: "/", icon: <FaHome /> },
    {
      title: "About",
      url: "#",
      icon: <FaInfoCircle />,
      action: () => handleSectionClick("who we are"),
    },
    {
      title: "Products",
      url: "#",
      icon: <FaProductHunt />,
      action: () => handleSectionClick("products"),
    },
    {
      title: "WhyUs",
      url: "#",
      icon: <FaBlog />,
      action: () => handleSectionClick("whyus"),
    },
    {
      title: "Testimonials",
      url: "#",
      icon: <FaComments />,
      action: () => handleSectionClick("testimonials"),
    },
    {
      title: "Contact",
      url: "#",
      icon: <FaPhone />,
      action: () => handleSectionClick("footer"),
    },
  ];

  return (
    <nav
      className={`fixed py-5 top-0 left-0 w-full z-50 text-lg transition-all duration-300 ${
        isScrolled
          ? "bg-white text-black shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div  className="flex items-center">
            <a href="/">
            {isScrolled ? (
              <img src={Logo} alt="logo" className="w-[240px]" />
            ) : (
              <img src={Logo1} alt="logo" className="w-[240px]" />
            )}</a>
          </div>
          <div className="hidden lg:flex space-x-4">
            {navLinks.map((link) => (
              <button
                key={link.title}
                onClick={link.action || (() => navigate(link.url))}
                className="flex items-center hover:text-orange-400 transition-colors duration-200"
              >
                <span>{link.title}</span>
              </button>
            ))}
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          onClick={toggleMenu}
        >
          <div className="fixed right-0 top-0 h-full w-2/4 bg-white shadow-lg p-4 transition-transform duration-300">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-2xl text-black focus:outline-none"
            >
              <FaTimes />
            </button>
            <nav>
              {navLinks.map((link) => (
                <button
                  key={link.title}
                  onClick={link.action || (() => navigate(link.url))}
                  className="flex items-center p-2 w-full text-left text-gray-700 hover:bg-gray-100 hover:text-pink-400 rounded-md transition-colors duration-200"
                >
                  <span className="mr-2">{link.icon}</span>
                  <span>{link.title}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
