import { motion } from "framer-motion";
import { FaUserTie, FaBalanceScale, FaHistory, FaUsers } from "react-icons/fa";

const statsData = [
  {
    id: 1,
    icon: <FaUserTie className="text-5xl text-yellow-400" />,
    count: 95,
    label: "Expert Legal Mentors",
  },
  {
    id: 2,
    icon: <FaBalanceScale className="text-5xl text-yellow-400" />,
    count: 549,
    label: "Law Courses",
  },
  {
    id: 3,
    icon: <FaHistory className="text-5xl text-yellow-400" />,
    count: 10,
    label: "Years of Legal Excellence",
  },
  {
    id: 4,
    icon: <FaUsers className="text-5xl text-yellow-400" />,
    count: 4950,
    label: "Enrolled Students",
  },
];

const Stats = () => {
  return (
    <section
      className="relative py-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://t3.ftcdn.net/jpg/02/55/22/68/360_F_255226859_Rhqr5hflr2esVXHQE1sS1bWxmZxs0gWI.jpg)",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-indigo-900 opacity-80"></div>

      {/* Stats Content */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="flex flex-col items-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {stat.icon}
              <motion.h3
                className="text-4xl font-bold text-white mt-4"
                initial={{ scale: 0.6 }}
                whileInView={{ scale: 1 }}
                transition={{
                  delay: index * 0.15 + 0.1,
                  type: "spring",
                  stiffness: 180,
                }}
                viewport={{ once: true }}
              >
                {stat.count.toLocaleString()}
              </motion.h3>
              <p className="text-yellow-400 text-lg font-medium mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
