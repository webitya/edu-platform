"use client"
import { motion } from "framer-motion"
import BlogCard from "./BlogCard"

const blogPosts = [
  {
    id: 1,
    title: "Understanding Legal Research Fundamentals",
    excerpt:
      "Master the art of legal research with comprehensive techniques and methodologies used by successful advocates.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfGhGiDwfCXg3iwahhvQ-7S2tSRvdXSxEiA&s",
    date: "January 18, 2024",
    category: "Legal Research",
  },
  {
    id: 2,
    title: "Effective Courtroom Advocacy Techniques",
    excerpt:
      "Learn essential courtroom skills that will help you present compelling arguments and build confidence in legal proceedings.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfGhGiDwfCXg3iwahhvQ-7S2tSRvdXSxEiA&s",
    date: "January 15, 2024",
    category: "Advocacy Skills",
  },
  {
    id: 3,
    title: "Legal Writing and Drafting Best Practices",
    excerpt:
      "Discover the key principles of legal writing that will make your documents clear, persuasive, and professionally structured.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfGhGiDwfCXg3iwahhvQ-7S2tSRvdXSxEiA&s",
    date: "January 12, 2024",
    category: "Legal Writing",
  },
  {
    id: 4,
    title: "Ethics in Legal Practice: A Comprehensive Guide",
    excerpt:
      "Explore the fundamental ethical principles that guide legal practice and learn how to navigate complex ethical dilemmas.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfGhGiDwfCXg3iwahhvQ-7S2tSRvdXSxEiA&s",
    date: "January 10, 2024",
    category: "Legal Ethics",
  },
  {
    id: 5,
    title: "Building Client Relationships in Legal Practice",
    excerpt:
      "Learn effective strategies for building trust, communication, and long-term relationships with your legal clients.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfGhGiDwfCXg3iwahhvQ-7S2tSRvdXSxEiA&s",
    date: "January 8, 2024",
    category: "Client Relations",
  },
  {
    id: 6,
    title: "Technology in Modern Legal Practice",
    excerpt:
      "Discover how technology is transforming legal practice and learn about essential tools for modern advocates.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfGhGiDwfCXg3iwahhvQ-7S2tSRvdXSxEiA&s",
    date: "January 5, 2024",
    category: "Legal Technology",
  },
]

const BlogGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default BlogGrid
