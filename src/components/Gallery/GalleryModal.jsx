import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

function GalleryModal({ selectedImage, setSelectedImage }) {
  if (!selectedImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
        onClick={() => setSelectedImage(null)}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          className="relative w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 transition flex items-center justify-center shadow-md"
            onClick={() => setSelectedImage(null)}
            aria-label="Close modal"
          >
            <FiX size={20} className="text-black" />
          </button>

          {/* Image */}
          <div className="w-full h-56 sm:h-64 relative">
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.title}
              className="absolute inset-0 w-full h-full object-cover rounded-t-xl"
            />
          </div>

          {/* Text Content */}
          <div className="p-5 text-black">
            <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
            <p className="text-sm text-gray-700">{selectedImage.description}</p>
            <div className="mt-4 text-xs font-semibold text-yellow-600">
              Category: {selectedImage.category}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default GalleryModal;
