import { motion } from "framer-motion"
import { FiClock, FiMapPin } from "react-icons/fi"

export default function EventCard({ event }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/6 bg-white flex flex-col items-center justify-center p-6">
          <div className="bg-yellow-500 text-white text-center w-32 h-32 flex flex-col items-center justify-center rounded-lg">
            <motion.span
              className="text-4xl font-bold"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {event.day}
            </motion.span>
            <span className="uppercase text-sm font-bold">{event.month}</span>
          </div>
          <motion.button
            className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-bold py-2 px-4 rounded uppercase tracking-wider"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Purchase Ticket
          </motion.button>
        </div>

        <div className="md:w-3/6 p-6">
          <h3 className="text-xl font-bold mb-3 hover:text-yellow-500 transition duration-300">
            {event.title}
          </h3>
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <FiClock className="mr-2" />
            <span>{event.time}</span>
            <span className="mx-2">•</span>
            <FiMapPin className="mr-2" />
            <span>{event.location}</span>
          </div>
          <p className="text-gray-600 text-sm">{event.description}</p>
        </div>

        <div className="md:w-2/6">
          <div className="h-full relative">
            <img
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
