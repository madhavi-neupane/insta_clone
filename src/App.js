import React from 'react'
import './app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FeedLayout from './components/FeedLayout'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Feed from './components/Feed'

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<FeedLayout />} />
    //     <Route path="/profile" element={<Profile />} />
    //     <Route path="/home" element={<Home />} />
    //   </Routes>
    // </Router>

    <div className="main-container">
      <Router>
        {/* fixed sidebar */}
        <div className="fixed-sidebar">
          <div className="fixed-side-container">
            <nav>
              <a href="/">Home</a>
              <a href="/profile">Profile</a>
            </nav>
          </div>
        </div>

        {/* feed section */}
        <div className="feed-section">
          <Routes>
            <Route path="/" element={<FeedLayout />}></Route>
            <Route path="profile" element={<Profile />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
