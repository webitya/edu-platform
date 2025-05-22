
import { useState } from "react"
import { motion } from "framer-motion"
import HeroSection from "./HeroSection"
import GalleryTabs from "./GalleryTabs"
import GalleryGrid from "./GalleryGrid"
import PartnerSection from "./PartnerSection"
import { galleryData } from "./galleryData"

function GalleryPage() {
  const [activeTab, setActiveTab] = useState("ALL")

  const categories = ["ALL", "BRANDING", "DESIGN", "WORDPRESS", "MARKETING"]

  const filteredImages = activeTab === "ALL" ? galleryData : galleryData.filter((item) => item.category === activeTab)

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        <GalleryTabs categories={categories} activeTab={activeTab} setActiveTab={setActiveTab} />
        <GalleryGrid images={filteredImages} />
      </motion.div>
      <PartnerSection />
    </div>
  )
}

export default GalleryPage
