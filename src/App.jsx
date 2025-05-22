import { Layout } from "./Layout";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ContactButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-2 z-50">
      <a
        href="tel:+919871408315"
        className="bg-green-600 hover:bg-green-700 text-white p-2 rounded shadow-md flex items-center justify-center w-9 h-9"
        aria-label="Call Us"
      >
        <FiPhone size={16} />
      </a>
      <a
        href="https://wa.me/919871408315"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-2 rounded shadow-md flex items-center justify-center w-9 h-9"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={16} />
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
