import React from 'react'
import './app.css'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Profile from './pages/Profile'
import FeedLayout from './components/FeedLayout'

function App() {
  const isAuthenticated = localStorage.getItem('token') !== null

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.href = '/'
  }

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <Home /> : <Navigate to="login" />}
      >
        <Route index element={<FeedLayout />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      {/* <Route path="profile" element={<Profile />}></Route> */}
      <Route path="login" element={<Login />}></Route>
      <Route path="signup" element={<Signup />}></Route>
    </Routes>
  )
}

export default App
