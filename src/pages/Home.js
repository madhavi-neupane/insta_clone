import React from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import FeedLayout from '../components/FeedLayout'
import Profile from './Profile'
import instaText from '../assets/instagram-logo-illustration.png'
import homeIcon from '../svg/home.svg'
import profileIcon from '../svg/profile.svg'
import logoutIcon from '../svg/logout.svg'

const Home = () => {
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
        <Outlet />
      </div>
    </div>
  )
}

export default Home
