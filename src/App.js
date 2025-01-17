import React from 'react'
// import './app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FeedLayout from './components/FeedLayout'
import Profile from './pages/Profile'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeedLayout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
