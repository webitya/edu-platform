"use client"
import { motion } from "framer-motion"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const BlogPagination = () => {
  const pages = [1, 2, 3]
  const currentPage = 2

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex justify-center items-center space-x-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Previous Button */}
          <motion.button
            className="flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronLeft className="text-sm" />
          </motion.button>

          {/* Page Numbers */}
          {pages.map((page) => (
            <motion.button
              key={page}
              className={`flex items-center justify-center w-10 h-10 rounded-md font-medium transition-colors ${
                page === currentPage
                  ? "bg-amber-600 text-white"
                  : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {page}
            </motion.button>
          ))}

          {/* Next Button */}
          <motion.button
            className="flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronRight className="text-sm" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogPagination
