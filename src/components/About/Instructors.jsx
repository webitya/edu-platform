import { motion } from "framer-motion";

const instructorData = [
  {
    id: 1,
    name: "Adv. Kritika Choudhary",
    position: "Founder, High Court Advocate",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfGhGiDwfCXg3iwahhvQ-7S2tSRvdXSxEiA&s",
    description:
      "A passionate advocate with a strong belief in accessible legal education. She founded Law Learning Bench to bridge the gap between law students and courtroom practice.",
  },
  {
    id: 2,
    name: "Adv. Sandeep Sharma",
    position: "Litigation Mentor",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfGhGiDwfCXg3iwahhvQ-7S2tSRvdXSxEiA&s",
    description:
      "With over a decade of trial experience, he specializes in civil and criminal litigation. He mentors students on courtroom procedures and real-world advocacy.",
  },
  {
    id: 3,
    name: "Adv. Meenal Verma",
    position: "Trial Advocacy Expert",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfGhGiDwfCXg3iwahhvQ-7S2tSRvdXSxEiA&s",
    description:
      "Known for her dynamic trial presence, she trains students in cross-examination, legal argumentation, and courtroom strategy through interactive sessions.",
  },
  {
    id: 4,
    name: "Adv. Rohan Mehta",
    position: "Legal Drafting Coach",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfGhGiDwfCXg3iwahhvQ-7S2tSRvdXSxEiA&s",
    description:
      "An expert in contracts and legal documentation, he guides students in developing clear, persuasive legal drafts essential for legal practice.",
  },
];

const Instructors = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

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
          Our experienced legal mentors help shape the next generation of legal professionals.
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
              className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 text-left"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <img
                src={instructor.image || "/placeholder.svg"}
                alt={instructor.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">{instructor.name}</h3>
                <p className="text-sm text-yellow-600 mb-2">{instructor.position}</p>
                <p className="text-sm text-gray-600">{instructor.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Instructors;
