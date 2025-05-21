
import { motion } from "framer-motion"

const partnersData = [
  { id: 1, name: "Strato", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfGhGiDwfCXg3iwahhvQ-7S2tSRvdXSxEiA&s" },
  { id: 2, name: "Marz", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfGhGiDwfCXg3iwahhvQ-7S2tSRvdXSxEiA&s" },
  { id: 3, name: "Coco", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfGhGiDwfCXg3iwahhvQ-7S2tSRvdXSxEiA&s" },
  { id: 4, name: "Autoom", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfGhGiDwfCXg3iwahhvQ-7S2tSRvdXSxEiA&s" },
  { id: 5, name: "Racle", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfGhGiDwfCXg3iwahhvQ-7S2tSRvdXSxEiA&s" },
  { id: 6, name: "Crypto", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfGhGiDwfCXg3iwahhvQ-7S2tSRvdXSxEiA&s" },
]

const Partners = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {partnersData.map((partner) => (
            <motion.div key={partner.id} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Partners
