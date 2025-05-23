"use client"
import BlogHero from "./BlogHero"
import BlogGrid from "./BlogGrid"
import BlogPagination from "./BlogPagination"

const BlogsPage = () => {
  return (
    <div className="w-full bg-white">
      <BlogHero />
      <BlogGrid />
      <BlogPagination />
    </div>
  )
}

export default BlogsPage
