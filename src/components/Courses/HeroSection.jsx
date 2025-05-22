import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <motion.section
      className="relative w-full h-[300px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url(https://t3.ftcdn.net/jpg/02/55/22/68/360_F_255226859_Rhqr5hflr2esVXHQE1sS1bWxmZxs0gWI.jpg)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 z-10 max-w-4xl">
        <motion.h1
          className="text-4xl font-bold text-white mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Law Learning Bench
        </motion.h1>
        <motion.p
          className="text-white text-lg mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          India’s Premier Advocacy Skill Development Platform
        </motion.p>

        <motion.div
          className="flex items-center text-white space-x-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="hover:underline cursor-pointer">Home</span>
          <span>/</span>
          <span className="text-yellow-400 font-semibold">Courses</span>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default HeroSection
