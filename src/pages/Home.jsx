

import React from 'react'
import Navbar from '../components/global/Navbar'
import HomeHeroSection from '../components/HomePage/HomePageHero'
import HomeWelcomeSection from '../components/HomePage/HomeWelcome'
import HomePagePopularCourses from '../components/HomePage/HomePageCourses'
import HomeRegistrationSection from '../components/HomePage/HomeRegistration'
import HomeUpcomingEvents from '../components/HomePage/HomeUpcoming'
import HomeStatsSection from '../components/HomePage/HomeStats'
import HomeTestimonialCarousel from '../components/HomePage/HomePageTestimonials'
import HomeBecomeInstructor from '../components/HomePage/HomeBecomeInstr'
import Footer from '../components/global/Footer'
import HomeRecentStories from '../components/HomePage/HomeStories'
import HomeBrandsLogoSlider from '../components/HomePage/HomeBrands'

export const Home = () => {
  return (
    <>
    <Navbar/>
     <HomeHeroSection/>
     <HomeWelcomeSection/>
     <HomePagePopularCourses/>
     <HomeRegistrationSection/>
     <HomeUpcomingEvents/>
     <HomeStatsSection/>
     <HomeTestimonialCarousel/>
     <HomeBecomeInstructor/>
     <HomeRecentStories/>
     <HomeBrandsLogoSlider/>
     <Footer/>
    </>
  )
}
