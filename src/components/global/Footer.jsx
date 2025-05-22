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
            <span className="text-yellow-400 inline-block mr-1">⚖️</span>
            <span className="font-extrabold">Law Learning Bench</span>
          </h2>
          <p className="text-sm text-gray-300 mb-4">
            India’s premier advocacy skill development platform empowering young legal professionals with practical training, ethical values, and real-world courtroom readiness.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="https://www.facebook.com/lawlearningbench" target="_blank" rel="noopener noreferrer"><FaFacebookF className="hover:text-yellow-400 cursor-pointer" /></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter className="hover:text-yellow-400 cursor-pointer" /></a>
            <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer"><FaPinterestP className="hover:text-yellow-400 cursor-pointer" /></a>
            <a href="https://www.instagram.com/lawlearningbenchllb" target="_blank" rel="noopener noreferrer"><FaInstagram className="hover:text-yellow-400 cursor-pointer" /></a>
            <a href="https://www.linkedin.com/company/lawlearningbench" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="hover:text-yellow-400 cursor-pointer" /></a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="https://www.lawlearningbench.com/about">About Us</a></li>
            <li><a href="https://www.lawlearningbench.com/advocacy-program">Courses</a></li>
            <li><a href="https://www.lawlearningbench.com/advisory-board">Advisory Board</a></li>
            <li><a href="https://www.lawlearningbench.com/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h4 className="font-semibold mb-4">Our Programs</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Courtroom Advocacy Mastery</a></li>
            <li><a href="#">Legal Drafting & Ethics</a></li>
            <li><a href="#">Mock Trials & Mentorship</a></li>
            <li><a href="#">Live Skills Workshops</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-semibold mb-4">Useful Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Help Center</a></li>
          </ul>
        </div>

        {/* Contact Info */}
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
          <p className="text-sm text-gray-400 mt-4">
            📞 +91 9871408315<br />
            ✉️ info@lawlearningbench.com
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6">
        <p className="text-gray-400">© {new Date().getFullYear()} Law Learning Bench. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">Terms</a>
          <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
          <a href="#" className="text-gray-400 hover:text-white">Report Issue</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
