
import { motion } from "framer-motion"

const instructorData = [
  {
    id: 1,
    name: "John Doe",
    position: "Web Development",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfGhGiDwfCXg3iwahhvQ-7S2tSRvdXSxEiA&s",
  },
  {
    id: 2,
    name: "Michael Smith",
    position: "UI/UX Design",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfGhGiDwfCXg3iwahhvQ-7S2tSRvdXSxEiA&s",
  },
  {
    id: 3,
    name: "David Wilson",
    position: "JavaScript",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfGhGiDwfCXg3iwahhvQ-7S2tSRvdXSxEiA&s",
  },
  {
    id: 4,
    name: "Emma Johnson",
    position: "Digital Marketing",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfGhGiDwfCXg3iwahhvQ-7S2tSRvdXSxEiA&s",
  },
]

const Instructors = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-2"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          MEET OUR INSTRUCTORS
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-12"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Lorem Ipsum is simply dummy text of the printing and industry.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {instructorData.map((instructor) => (
            <motion.div
              key={instructor.id}
              className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <img src={instructor.image || "/placeholder.svg"} alt={instructor.name} className="w-full h-auto" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{instructor.name}</h3>
                <p className="text-gray-600">{instructor.position}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Instructors
