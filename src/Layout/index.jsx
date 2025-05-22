import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import MaintenancePage from '../components/global/MainTainance'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Event } from '../pages/Event'
import { Courses } from '../pages/Courses'
import { Gallery } from '../pages/Gallery'

export const Layout = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<MaintenancePage/>}/>
         <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/events" element={<Event/>}/>
           <Route path="/courses" element={<Courses/>}/>
           <Route path="/gallery" element={<Gallery/>}/>
    </Routes>
    </BrowserRouter>
  )
}
