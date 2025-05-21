import { motion } from "framer-motion"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"

const ContactSection = () => {
  return (
    <section className="bg-white py-2">
      {/* Google Map */}
      <div className="h-[400px] w-full mb-12">
        <iframe
          title="Google Map"
          className="w-full h-full border-0"
          src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 bg-gray-50 p-8 shadow-lg rounded-lg">
        {/* Left Side - Get in Touch */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">GET IN TOUCH</h3>
          <p className="text-gray-700 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-yellow-500 mt-1" />
              <span>35 West 33rd Street New York, NY 10001</span>
            </li>
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="text-yellow-500 mt-1" />
              <span>+1 212 425 6871, +1 212 425 8533</span>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-yellow-500 mt-1" />
              <span>youremail@companyname.com</span>
            </li>
          </ul>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">DROP US A LINE</h3>
          <p className="text-gray-700 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Message"
              className="w-full p-3 border border-gray-300 rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
