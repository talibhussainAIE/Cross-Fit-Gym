import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png"; 

const Navlinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Services", link: "/services" },
  { id: 3, name: "About", link: "/about" },
  { id: 4, name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar bg-black shadow-md fixed w-full z-50 top-0 left-0">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Branding */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-12 object-contain" />
          <span className="ml-3 text-xl font-bold text-white">THE CROSSFIT</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {Navlinks.map(({ id, name, link }) => (
            <Link
              key={id}
              to={link}
              className="text-white-700 font-medium hover:text-primary transition-colors"
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white w-full shadow-lg absolute top-16 left-0 z-10">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {Navlinks.map(({ id, name, link }) => (
              <li key={id}>
                <Link
                  to={link}
                  onClick={toggleMenu}
                  className="text-gray-700 font-medium hover:text-primary transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
