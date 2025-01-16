import Nav from './components/Nav'
import Feed from './components/Feed'
import './app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Profile from './pages/Profile'

function App() {
  return (
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
          <div className="post-section">
            <Routes>
              <Route path="/" element={<Feed />}></Route>
              <Route path="profile" element={<Profile />}>
                {' '}
              </Route>
            </Routes>
          </div>

          <div className="follow-section">
            <h3>this is another section i need to work on.</h3>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
