import React from 'react'
import './app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FeedLayout from './components/FeedLayout'
import Profile from './pages/Profile'
import instaText from './assets/instagram-logo-illustration.png'
import homeIcon from './svg/home.svg'
import profileIcon from './svg/profile.svg'
import logoutIcon from './svg/logout.svg'

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
            <img src={instaText} alt="instagram" className="insta-text" />
            <nav>
              <div className="side-nav">
                <img src={homeIcon} alt="icon" />
                <a href="/">Home</a>
              </div>

              <div className="side-nav">
                <img src={profileIcon} alt="icon" />
                <a href="/profile">Profile</a>
              </div>

              <div className="side-nav">
                <img src={logoutIcon} alt="icon" />
                <a href="#">logout</a>
              </div>
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
