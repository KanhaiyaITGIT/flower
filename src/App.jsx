import React from 'react'
import Hero from './pages/Hero'
import CategoryPage from './pages/CategoryPage'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import OccasionsPage from './pages/OccasionsPage'
import DecorPage from './pages/DecorPage'
import AboutUs from './pages/AboutUs'

const App = () => {
  return (
    <>
      <Header/>
     <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/occasions" element={<OccasionsPage/>}/>
        <Route path="/decor" element={<DecorPage/>}/>
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>
        <Footer/>
    
    </>
  )
}

export default App
