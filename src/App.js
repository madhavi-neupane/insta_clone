import React from 'react'
import './app.css'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import FeedLayout from './components/FeedLayout'
import Profile from './pages/Profile'
import instaText from './assets/instagram-logo-illustration.png'
import homeIcon from './svg/home.svg'
import profileIcon from './svg/profile.svg'
import logoutIcon from './svg/logout.svg'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  const isAuthenticated = localStorage.getItem('token') !== null

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.href = '/'
  }

  return (
    <div className="main-container">
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
              <button onClick={handleLogout}>logout</button>
            </div>
          </nav>
        </div>
      </div>

      {/* feed section */}
      <div className="feed-section">
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <FeedLayout /> : <Navigate to="login" />}
          ></Route>
          <Route
            path="profile"
            element={isAuthenticated ? <Profile /> : <Navigate to="login" />}
          ></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<Signup />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
