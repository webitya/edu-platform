  import Navbar from '../components/global/Navbar'
import Footer from '../components/global/Footer'
import React from 'react'
import ContactSection from '../components/ContactUs'
import ContactHero from '../components/ContactUs/ContactHero'

export const Contact = () => {
  return (
    <>
      <Navbar/>
      <ContactHero/>
    <ContactSection/>
         <Footer/>
    </>
  )
}
