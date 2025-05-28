import { Layout } from "./Layout";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ContactButtons = () => {
  return (
    <div className="fixed bottom-40 right-4 flex flex-col space-y-2 z-50">
      {/* Phone */}
      <a
        href="tel:+919871408315"
        className="bg-green-600 hover:bg-green-700 text-white p-2 rounded shadow-md flex items-center justify-center w-9 h-9"
        aria-label="Call Us"
      >
        <FiPhone size={16} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919871408315"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-2 rounded shadow-md flex items-center justify-center w-9 h-9"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={16} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded shadow-md flex items-center justify-center w-9 h-9"
        aria-label="Instagram"
      >
        <FaInstagram size={16} />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded shadow-md flex items-center justify-center w-9 h-9"
        aria-label="Facebook"
      >
        <FaFacebookF size={16} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-800 hover:bg-blue-900 text-white p-2 rounded shadow-md flex items-center justify-center w-9 h-9"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn size={16} />
      </a>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Layout />
      <ContactButtons />
    </>
  );
};

export default App;
