import { motion } from "framer-motion"
import { FaUserGraduate, FaBook, FaHistory, FaUsers } from "react-icons/fa"

const statsData = [
  {
    id: 1,
    icon: <FaUserGraduate className="text-4xl text-yellow-500" />,
    count: 78,
    label: "Instructors",
  },
  {
    id: 2,
    icon: <FaBook className="text-4xl text-yellow-500" />,
    count: 450,
    label: "Online Courses",
  },
  {
    id: 3,
    icon: <FaHistory className="text-4xl text-yellow-500" />,
    count: 168,
    label: "Year of History",
  },
  {
    id: 4,
    icon: <FaUsers className="text-4xl text-yellow-500" />,
    count: 4059,
    label: "Active Students",
  },
]

const Stats = () => {
  return (
    <section className="relative py-16 bg-cover bg-center" style={{ backgroundImage: `url(https://t3.ftcdn.net/jpg/02/55/22/68/360_F_255226859_Rhqr5hflr2esVXHQE1sS1bWxmZxs0gWI.jpg)` }}>
      
      {/* Purple overlay */}
      <div className="absolute inset-0 bg-indigo-900 opacity-80"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="flex flex-col items-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {stat.icon}
              <motion.h3
                className="text-4xl font-bold text-white mt-4"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{
                  delay: index * 0.1 + 0.2,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
              >
                {stat.count}
              </motion.h3>
              <p className="text-yellow-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
