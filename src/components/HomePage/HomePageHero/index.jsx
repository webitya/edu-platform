"use client"

import { useState, useEffect } from "react"

const CourseHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")

  const courses = [
    { id: 1, price: 250, rating: 3, title: "Civil Procedure", category: "civil", duration: "6 weeks" },
    { id: 2, price: 400, rating: 5, title: "Constitutional Law", category: "constitutional", duration: "12 weeks" },
    { id: 3, price: 350, rating: 4, title: "Corporate Law", category: "corporate", duration: "8 weeks" },
    { id: 4, price: 200, rating: 3, title: "Family Law", category: "family", duration: "5 weeks" },
    { id: 5, price: 300, rating: 4, title: "Court Advocacy Skills", category: "advocacy", duration: "8 weeks" },
    { id: 6, price: 300, rating: 4, title: "Contract Drafting", category: "drafting", duration: "6 weeks" },
    { id: 7, price: 500, rating: 4, title: "Criminal Law Practice", category: "criminal", duration: "10 weeks" },
    { id: 8, price: 100, rating: 3, title: "Basic Legal Writing", category: "writing", duration: "4 weeks" },
    { id: 9, price: 450, rating: 5, title: "Intellectual Property", category: "ip", duration: "9 weeks" },
    { id: 10, price: 300, rating: 4, title: "Tax Law", category: "tax", duration: "7 weeks" },
    { id: 11, price: 550, rating: 5, title: "International Law", category: "international", duration: "14 weeks" },
    { id: 12, price: 150, rating: 3, title: "Legal Research", category: "research", duration: "4 weeks" },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Arjun Singh",
      text: "Excellent course that helped me advance my legal career significantly.",
      rating: 5,
      avatar: "AS",
    },
    {
      id: 2,
      name: "Priya Sharma",
      text: "Outstanding training with practical insights and expert guidance.",
      rating: 5,
      avatar: "PS",
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      text: "Comprehensive curriculum that exceeded my expectations completely.",
      rating: 5,
      avatar: "RK",
    },
    {
      id: 4,
      name: "Meera Patel",
      text: "Professional development course with real-world applications.",
      rating: 4,
      avatar: "MP",
    },
    {
      id: 5,
      name: "Kavya Reddy",
      text: "Highly recommend this program for career advancement.",
      rating: 5,
      avatar: "KR",
    },
  ]

  const filterOptions = [
    { value: "all", label: "All Courses" },
    { value: "writing", label: "Legal Writing" },
    { value: "advocacy", label: "Advocacy" },
    { value: "drafting", label: "Drafting" },
    { value: "criminal", label: "Criminal Law" },
    { value: "civil", label: "Civil Law" },
  ]

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedFilter === "all" || course.category === selectedFilter
    return matchesSearch && matchesFilter
  })

  const totalSlides = Math.ceil(filteredCourses.length / 4)

  // Auto-slide functionality for courses
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000)

    return () => clearInterval(interval)
  }, [totalSlides])

  // Auto-slide functionality for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        style={{
          color: index < rating ? "#F59E0B" : "#E5E7EB",
          fontSize: "16px",
        }}
      >
        ★
      </span>
    ))
  }

  const renderCourseStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        style={{
          color: index < rating ? "#3B82F6" : "#E5E7EB",
          fontSize: "16px",
        }}
      >
        ★
      </span>
    ))
  }

  const getCurrentCourses = () => {
    const startIndex = currentSlide * 4
    return filteredCourses.slice(startIndex, startIndex + 4)
  }

  const handleEnrollNow = (courseId, courseTitle) => {
    alert(`Enrolling in: ${courseTitle}`)
  }

  return (
    <div
      className="h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50"
      style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      {/* Header Section */}
      <div className="px-4 py-3 md:px-20 md:py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
            {/* Left Content */}
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-2">
                Access to 5000+ courses from 300 instructors & institution.
              </h1>

              {/* Our Courses Section */}
              <div className="flex items-center gap-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">Our Courses</h2>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-full font-medium transition-colors text-sm">
                  View All
                </button>
              </div>
            </div>

            {/* Minimal Testimonial Slider */}
            <div className="w-full lg:w-80 h-40 relative">
              <div
                className="w-full h-full rounded-2xl overflow-hidden relative shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #3B82F6 100%)",
                }}
              >
                {/* Testimonial Cards */}
                <div className="relative w-full h-full">
                  <div
                    className="flex transition-transform duration-700 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                  >
                    {testimonials.map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className="w-full flex-shrink-0 h-full p-6 flex flex-col items-center justify-center text-white text-center"
                      >
                        {/* Profile Picture */}
                        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-sm font-bold mb-3 backdrop-blur-sm">
                          {testimonial.avatar}
                        </div>

                        {/* Name */}
                        <div className="font-semibold text-lg mb-2">{testimonial.name}</div>

                        {/* Description */}
                        <p className="text-sm opacity-90 mb-3 leading-relaxed">{testimonial.text}</p>

                        {/* Stars */}
                        <div className="flex items-center gap-1">{renderStars(testimonial.rating)}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simple Dots */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1">
                  {testimonials.map((_, index) => (
                    <div
                      key={index}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        currentTestimonial === index ? "bg-white" : "bg-white bg-opacity-40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Menu Icons */}
            <div className="lg:hidden flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <div className="w-6 h-6 flex flex-col justify-between">
                  <div className="w-full h-0.5 bg-gray-700 rounded"></div>
                  <div className="w-full h-0.5 bg-gray-700 rounded"></div>
                  <div className="w-full h-0.5 bg-gray-700 rounded"></div>
                </div>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <div className="w-6 h-6 border-2 border-gray-700 rounded-full relative">
                  <div className="absolute top-4 right-0 w-2 h-2 border-2 border-gray-700 rotate-45"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="px-4 md:px-20 pb-3">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between bg-white rounded-xl p-4 shadow-lg border border-gray-100">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2.5 pl-11 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50"
              />
              <div className="absolute left-3 top-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Filter Dropdown */}
            <div className="relative">
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              >
                {filterOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Course Counter */}
            <div className="text-sm text-gray-600 bg-blue-50 px-3 py-2 rounded-lg">
              <span className="font-semibold text-blue-600">{getCurrentCourses().length}</span> of{" "}
              <span className="font-semibold text-blue-600">{filteredCourses.length}</span> courses
            </div>
          </div>
        </div>
      </div>

      {/* Course Cards Section */}
      <div className="flex-1 px-4 md:px-20 pb-4">
        <div className="max-w-7xl mx-auto h-full">
          <div className="relative h-full">
            {/* Course Cards Container */}
            <div className="overflow-hidden h-full">
              <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-full">
                      {filteredCourses.slice(slideIndex * 4, slideIndex * 4 + 4).map((course) => (
                        <div
                          key={course.id}
                          className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                        >
                          <div className="h-32 bg-gradient-to-br from-blue-100 via-purple-50 to-indigo-100 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20"></div>
                            <div className="absolute top-3 right-3 bg-white bg-opacity-90 px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                              {course.duration}
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className="font-bold text-gray-900 mb-2 text-sm">{course.title}</h3>
                            <div className="flex items-center gap-1 mb-3">{renderCourseStars(course.rating)}</div>
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-2xl font-bold text-gray-900">₹{course.price}</span>
                              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                {course.rating}/5
                              </span>
                            </div>
                            <button
                              onClick={() => handleEnrollNow(course.id, course.title)}
                              className="w-full bg-blue-500 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-300"
                            >
                              Enroll Now
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-white bg-opacity-90 px-3 py-2 rounded-full shadow-lg backdrop-blur-sm">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-blue-500 scale-125" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white shadow-xl border border-gray-100"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white shadow-xl border border-gray-100"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseHeroSection
