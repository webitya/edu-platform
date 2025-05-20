import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#22243D] text-white pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            <span className="text-yellow-400 inline-block mr-1">🎓</span>
            <span className="font-extrabold">unimax</span>
          </h2>
          <p className="text-sm text-gray-300 mb-4">
            We are Education, create your passion and inspiration. And hope success will come for your dream. Please send email and get latest news.
          </p>
          <div className="flex gap-3 mt-4">
            <FaFacebookF className="hover:text-yellow-400 cursor-pointer" />
            <FaTwitter className="hover:text-yellow-400 cursor-pointer" />
            <FaPinterestP className="hover:text-yellow-400 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-yellow-400 cursor-pointer" />
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Popular Courses</a></li>
            <li><a href="#">Instructors</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Popular Courses */}
        <div>
          <h4 className="font-semibold mb-4">Popular Courses</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Wordpress Development</a></li>
            <li><a href="#">Javascript</a></li>
            <li><a href="#">Basic Photoshop</a></li>
            <li><a href="#">Mastaring Php</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-semibold mb-4">Useful Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Forums</a></li>
            <li><a href="#">Language</a></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h4 className="font-semibold mb-4">Get In Touch</h4>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Your Email..."
              className="w-full px-4 py-2 rounded-sm text-black"
            />
            <button
              type="submit"
              className="bg-yellow-400 w-full py-2 text-white font-bold hover:bg-yellow-500 transition"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6">
        <p className="text-gray-400">© 2018 UNIMAX POWERED BY DYNAMICLAYERS</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">ORDERS</a>
          <a href="#" className="text-gray-400 hover:text-white">TERMS</a>
          <a href="#" className="text-gray-400 hover:text-white">REPORT PROBLEM</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
