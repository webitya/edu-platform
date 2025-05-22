"use client"
import { motion } from "framer-motion"
import { partnersData } from "./data/partnersData"

function PartnerSection() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partnersData.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="grayscale hover:grayscale-0 transition duration-300"
            >
              <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className="h-10 w-auto object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PartnerSection
