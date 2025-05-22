"use client"
import { FiEye, FiHeart, FiPlus } from "react-icons/fi"
import { motion } from "framer-motion"

function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      <div className="relative">
        <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover" />
        <motion.button
          className="absolute top-4 right-4 bg-green-500 hover:bg-green-600 text-white text-xs font-bold py-2 px-4 rounded flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Now <FiPlus className="ml-1" />
        </motion.button>
        <div className="absolute bottom-4 left-4 flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
            <img
              src={course.instructor.avatar || "/placeholder.svg"}
              alt={course.instructor.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-2 bg-yellow-500 text-white text-xs py-1 px-3 rounded-full">{course.instructor.name}</div>
        </div>
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-3 hover:text-yellow-500 transition duration-300">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{course.description}</p>
      </div>
      <div className="px-6 pb-6 flex items-center justify-between">
        <div className="flex items-center text-gray-500 text-sm">
          <div className="flex items-center mr-4">
            <FiEye className="mr-1" />
            <span>{course.views}</span>
          </div>
          <div className="flex items-center">
            <FiHeart className="mr-1" />
            <span>{course.likes}</span>
          </div>
        </div>
        <div className="text-red-500 font-bold">${course.price}</div>
      </div>
    </div>
  )
}

export default CourseCard
