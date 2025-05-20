import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import MaintenancePage from '../components/global/MainTainance'

export const Layout = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<MaintenancePage/>}/>
    </Routes>
    </BrowserRouter>
  )
}
