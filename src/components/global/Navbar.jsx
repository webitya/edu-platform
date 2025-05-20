import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaEnvelope, FaPhone } from "react-icons/fa";

// Navigation links
const navLinks = [
  { name: "Home", href: "#", subMenu: false },
  { name: "About", href: "#", subMenu: false },
  { name: "Courses", href: "#", subMenu: false },
  { name: "Events", href: "#", subMenu: false },
  {
    name: "Pages",
    href: "#",
    subMenu: true,
    children: [
      { name: "Page 1", href: "#page1" },
      { name: "Page 2", href: "#page2" },
    ],
  },
  { name: "Blog", href: "#", subMenu: true },
  { name: "Contact", href: "#", subMenu: false },
];

// TopBar component
const TopBar = ({ visible }) => {
  return (
    <div
      className={`w-full bg-[#1c1c35] text-white text-sm transition-all duration-300 ${
        visible ? "opacity-100 py-2 h-auto" : "opacity-0 h-0 overflow-hidden"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center flex-wrap">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <FaEnvelope className="text-xs" />
            <span>Info@YourDomain.com</span>
          </div>
          <div className="flex items-center gap-1">
            <FaPhone className="text-xs" />
            <span>+(333) 052 39876</span>
          </div>
          <span className="font-semibold">Have any question?</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline text-sm font-semibold">
            Register
          </a>
          <a href="#" className="hover:underline text-sm font-semibold">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

// Navbar component
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null);

  return (
    <header className="w-full shadow-sm border-b bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo-icon.png" alt="logo" className="w-6 h-6" />
          <span className="text-2xl font-bold text-black">
            unimax<span className="text-yellow-500">.</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 relative">
          {navLinks.map((link, idx) => (
            <div key={idx} className="relative group">
              <a
                href={link.href}
                className="text-sm font-semibold text-slate-900 hover:text-yellow-500 flex items-center"
                onMouseEnter={() => setShowDropdown(link.subMenu ? link.name : null)}
                onMouseLeave={() => setShowDropdown(null)}
              >
                {link.name}
                {link.subMenu && <span className="ml-1">▸</span>}
              </a>

              {/* Dropdown */}
              {link.subMenu && link.children && showDropdown === link.name && (
                <div className="absolute top-full left-0 mt-2 bg-white border rounded shadow p-2 space-y-1 z-50">
                  {link.children.map((child, i) => (
                    <a
                      key={i}
                      href={child.href}
                      className="block px-4 py-1 text-sm text-slate-700 hover:text-yellow-500"
                    >
                      {child.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <a
            href="#"
            className="bg-yellow-500 text-white px-4 py-2 text-sm font-bold hover:bg-yellow-600 transition rounded"
          >
            REGISTER NOW
          </a>
        </nav>

        {/* Mobile Icon */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-2xl text-slate-800 focus:outline-none"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 bg-white px-6 pt-4 pb-6 ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        {navLinks.map((link, idx) => (
          <div key={idx} className="py-2">
            <a
              href={link.href}
              className="block text-base font-medium text-gray-700 hover:text-yellow-500"
            >
              {link.name}
              {link.subMenu && <span className="ml-1">▸</span>}
            </a>

            {/* Mobile SubMenu */}
            {link.subMenu && link.children && (
              <div className="ml-4 mt-1 space-y-1">
                {link.children.map((child, i) => (
                  <a
                    key={i}
                    href={child.href}
                    className="block text-sm text-gray-600 hover:text-yellow-500"
                  >
                    {child.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        <a
          href="#"
          className="block mt-4 bg-yellow-500 text-white text-center py-2 font-bold hover:bg-yellow-600 transition rounded"
        >
          REGISTER NOW
        </a>
      </div>
    </header>
  );
};

// Combined Header component
const Header = () => {
  const [showTopBar, setShowTopBar] = useState(true);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      setShowTopBar(scrolled < 100);
      setIsSticky(scrolled >= 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <TopBar visible={showTopBar} />
      <div className={`${isSticky ? "sticky top-0" : ""}`} style={{zIndex:"99999"}}>
        <Navbar />
      </div>
    </>
  );
};

export default Header;
