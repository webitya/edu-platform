

import { motion } from "framer-motion"
import EventCard from "./event-card"
import { events } from "./data/events"

export default function EventsList() {
  return (
    <div className="space-y-8">
      {events.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <EventCard event={event} />
        </motion.div>
      ))}
    </div>
  )
}
