import HeroSection from "./HeroSection"
import CoursesList from "./CoursesList"
import PartnerSection from "./PartnerSection"

function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">POPULAR COURSES</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum is simply dummy text of the printing and industry.
          </p>
        </div>
        <CoursesList />
      </div>
      <PartnerSection />
    </div>
  )
}

export default CoursesPage
