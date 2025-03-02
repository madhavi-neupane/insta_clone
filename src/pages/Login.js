import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './logSign.css'
import logo from '../assets/instagram-logo-illustration.png'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    if (email == 'test@email.com' && password == 'password') {
      localStorage.setItem('token', 'dummyToken')
      navigate('/')
    } else {
      alert('Invalid Creds')
    }
  }

  return (
    <div className="login-container">
      <img src={logo} alt="logo" />
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="your email here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
      <p>Login to see new updates.</p>
      <p>
        <span>
          Don't have account ? <a href="/signup">Signup</a>
        </span>
      </p>
    </div>
  )
}

export default Login
