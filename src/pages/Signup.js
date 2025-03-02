import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/instagram-logo-illustration.png'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault()

    localStorage.setItem('token', 'dummyToken')
    navigate('/')
  }

  return (
    <div className="signup-container">
      <img src={logo} alt="logo" />
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="set your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="tel" placeholder="your contact number" />
        <input type="date" placeholder="your date of Birth" />
        <button type="submit">Sign up</button>
      </form>
      <p>Sign-in to see what world has to serve. </p>
      <p>
        <span>
          Already have an account? <a href="/login">Login</a>
        </span>
      </p>
    </div>
  )
}

export default Signup
