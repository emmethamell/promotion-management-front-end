import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CreateCampaign from './CreateCampaign'
import CreatePromotion from './CreatePromotion'
import Navbar from './Navbar'

function App() {

  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CreateCampaign />} />
        <Route path="/promotion" element={<CreatePromotion />} />
      </Routes>
    </Router>
  </div>
  )
}

export default App
