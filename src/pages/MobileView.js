import React from 'react'
import '../app.css'
import { Routes, Route } from 'react-router-dom'
import Profile from './Profile'
import profileImage from '../svg/profile.svg'
import logoutImage from '../svg/logout.svg'
import homeImage from '../svg/home.svg'

const MobileView = () => {
  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.href = '/'
  }

  return (
    <div className="mobile-view">
      <div className="mobile-container">
        <div className="mobile-nav-container">
          <div className="mobile-nav">
            <a href="#" onClick={handleLogout}>
              <img src={logoutImage} alt="icon" />
            </a>
          </div>
          <div className="mobile-nav">
            <a href="/">
              <img src={homeImage} alt="icon" />
            </a>
          </div>
          <div className="mobile-nav">
            <a href="/profile">
              <img src={profileImage} alt="icon" />
            </a>
          </div>
        </div>

        {/* <Routes>
          <Route path="/Profile" element={<Profile />}></Route>
        </Routes> */}
      </div>
    </div>
  )
}

export default MobileView
