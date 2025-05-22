import { motion, AnimatePresence } from "framer-motion";
import { FiZoomIn } from "react-icons/fi";
import { useState } from "react";
import GalleryModal from "./GalleryModal";

function GalleryGrid({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {images.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="relative group h-64 rounded-xl shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              {/* Image */}
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-yellow-600"
                >
                  <FiZoomIn size={22} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <GalleryModal
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </>
  );
}

export default GalleryGrid;
