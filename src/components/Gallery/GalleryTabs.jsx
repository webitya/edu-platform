import { motion } from "framer-motion";

function GalleryTabs({ categories, activeTab, setActiveTab }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10">
      {categories.map((category, index) => (
        <motion.button
          key={category}
          onClick={() => setActiveTab(category)}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md
            ${
              activeTab === category
                ? "bg-gradient-to-r from-yellow-500 to-yellow-800 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
            }`}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}

export default GalleryTabs;
