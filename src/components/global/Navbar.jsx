import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaEnvelope, FaPhone } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
  // {
  //   name: "Pages",
  //   href: "/pages", // Use real link or placeholder
  //   subMenu: true,
  //   children: [
  //     { name: "Page 1", href: "/page1" },
  //     { name: "Page 2", href: "/page2" },
  //   ],
  // },
  { name: "Blog", href: "/blogs"},
  { name: "Contact", href: "/contact" },
];

const TopBar = ({ visible }) => (
  <div
    className={`w-full bg-[#1c1c35] text-white text-sm transition-all duration-300 ${
      visible ? "opacity-100 py-2 h-auto" : "opacity-0 h-0 overflow-hidden"
    }`}
  >
    <div className="max-w-7xl mx-auto px-4 flex justify-between items-center flex-wrap">
      <div className="flex items-center gap-6 text-xs md:text-sm">
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-sm" />
          <span>info@lawlearningbench.com</span>
        </div>
        <div className="flex items-center gap-2">
          <FaPhone className="text-sm" />
          <span>+91 9871408315</span>
        </div>
        <span className="font-semibold">Have any question?</span>
      </div>
      <div className="flex gap-4">
        <a href="/register" className="hover:underline text-xs md:text-sm font-semibold">
          Register
        </a>
        <a href="/login" className="hover:underline text-xs md:text-sm font-semibold">
          Login
        </a>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="w-full shadow-md bg-white z-[9998] transition-all duration-300 py-1">
      <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.jpg" alt="logo" className="w-18 h-18" />
          <span className="text-2xl font-bold text-black">
            <span className="text-yellow-500">L L B</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 transition-all duration-300">
          {navLinks.map((link, idx) => (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(link.subMenu ? link.name : null)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {/* Use <a> for better accessibility */}
              <a
                href={link.href}
                onClick={e => {
                  // Prevent default if submenu exists and href is placeholder
                  if (link.subMenu && link.href === "#") e.preventDefault();
                }}
                className="flex items-center text-sm font-semibold text-slate-900 hover:text-yellow-500 transition cursor-pointer select-none"
                aria-haspopup={link.subMenu ? "true" : undefined}
                aria-expanded={openDropdown === link.name ? "true" : "false"}
              >
                {link.name}
                {link.subMenu && <MdKeyboardArrowDown className="ml-1" />}
              </a>

              {/* Dropdown */}
              {link.subMenu && link.children?.length > 0 && openDropdown === link.name && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded shadow-lg py-2 z-50 w-40 animate-fadeIn border border-gray-200">
                  {link.children.map((child, i) => (
                    <a
                      key={i}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-yellow-100 hover:text-yellow-600"
                    >
                      {child.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <a
            href="/register"
            className="ml-4 bg-yellow-500 text-white px-5 py-2 text-sm font-semibold rounded hover:bg-yellow-600 transition"
          >
            REGISTER NOW
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-2xl text-slate-800 focus:outline-none"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 bg-white px-6 pt-4 pb-6 shadow-md ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        {navLinks.map((link, idx) => (
          <div key={idx} className="py-2">
            <a
              href={link.href}
              className="block text-base font-medium text-gray-800 hover:text-yellow-500"
            >
              {link.name}
              {link.subMenu && <MdKeyboardArrowDown className="inline ml-1" />}
            </a>
            {link.subMenu && link.children?.length > 0 && (
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
          href="/register"
          className="block mt-4 bg-yellow-500 text-white text-center py-2 font-bold hover:bg-yellow-600 transition rounded"
        >
          REGISTER NOW
        </a>
      </div>
    </header>
  );
};

const Header = () => {
  const [showTopBar, setShowTopBar] = useState(true);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setShowTopBar(scrolled < 101);
      setIsSticky(scrolled >= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <TopBar visible={showTopBar} />
      <div className={`${isSticky ? "sticky top-0" : ""}`} style={{ zIndex: 99999 }}>
        <Navbar />
      </div>
    </>
  );
};

export default Header;
