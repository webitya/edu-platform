import { motion } from "framer-motion"

const WhoWeAre = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Who We Are?</h2>
            <p className="text-gray-600 mb-4">
              Law Learning Bench is India’s pioneering platform for courtroom advocacy skill development. We are committed to bridging the gap between legal education and professional practice through intensive, practical, and ethically grounded training.
            </p>
            <p className="text-gray-600 mb-6">
              Our programs are designed by experienced advocates and mentors to shape confident, competent, and ethically responsible lawyers. We provide hands-on exposure through mock trials, legal drafting modules, and mentorship, making students courtroom-ready from day one.
            </p>
            <motion.button
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 font-medium transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              JOIN WITH US
            </motion.button>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfGhGiDwfCXg3iwahhvQ-7S2tSRvdXSxEiA&s"
              alt="Students in legal workshop"
              className="w-full h-auto rounded-md shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre;
