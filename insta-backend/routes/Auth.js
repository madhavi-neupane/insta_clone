const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/Users')

router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({ username, email, password: hashedPassword })
    await newUser.save()
    console.log('new user saved:', newUser)

    res
      .status(201)
      .json({ message: 'User registered successfully !', user: newUser })
  } catch (err) {
    console.error('Error saving user:', err)
    res.status(500).json({ error: err.message })
  }
})

module.exports = router
