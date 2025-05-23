"use client"
import { motion } from "framer-motion"
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa"

const BlogCard = ({ post }) => {
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <motion.article
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
      variants={cardVariants}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">{post.category}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <FaCalendarAlt className="mr-2" />
          <span>{post.date}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-amber-700 transition-colors cursor-pointer">
          {post.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        <motion.button
          className="flex items-center text-amber-700 font-medium hover:text-amber-800 transition-colors group"
          whileHover={{ x: 5 }}
        >
          READ MORE
          <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </motion.article>
  )
}

export default BlogCard
