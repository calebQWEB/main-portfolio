import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Resume from './components/Resume/Resume'
import Work from './components/Work/Work'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Mainpage from './MainPage/Mainpage'
import ScrollToTop from './components/Scroll/ScrollToTop'

function App() {
  const location = useLocation()

  return (
    <div className="App">
      <Navbar />
      <AnimatePresence mode='wait'>
        <ScrollToTop />
        <Routes location={location} key={location.key}>
          <Route path='/' element={<Mainpage />}></Route>
          <Route path='resume' element={<Resume />}></Route>
          <Route path='work' element={<Work />}></Route>
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
