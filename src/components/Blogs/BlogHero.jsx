"use client"
import { motion } from "framer-motion"

const BlogHero = () => {
  return (
    <motion.section
      className="relative w-full h-[300px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url(https://t3.ftcdn.net/jpg/02/55/22/68/360_F_255226859_Rhqr5hflr2esVXHQE1sS1bWxmZxs0gWI.jpg)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-gray-900/70"></div>
      <div className="container mx-auto px-4 z-10">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Blogs
        </motion.h1>
        <motion.p
          className="text-white text-lg mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Latest insights and updates from Law Learning Bench
        </motion.p>

        <motion.div
          className="flex items-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-white">HOME</span>
          <span className="mx-2 text-white">/</span>
          <span className="text-amber-500">BLOG</span>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default BlogHero
