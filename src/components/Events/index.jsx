

import HeroSection from "./hero-section"
import EventsList from "./events-list"
import PartnerSection from "./partner-section"
import { motion } from "framer-motion"

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">UPCOMING EVENTS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum is simply dummy text of the printing and industry.
          </p>
        </div>
        <EventsList />
        <div className="flex justify-center mt-12">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded transition duration-300">
            MORE EVENTS
          </button>
        </div>
      </motion.div>
      <PartnerSection />
    </div>
  )
}
