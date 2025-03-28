const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const User = require('./models/Users')

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err))

app.get('/', (req, res) => {
  res.send('API is running...')
})

const authRoutes = require('./routes/Auth')
app.use('/api/Auth', authRoutes)

// testing route
app.get('/test', (req, res) => {
  res.json({ message: 'server is wroking !' })
})

app.post('/api/signup', (req, res) => {
  const { username, email, password } = req.body

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'all fields are required' })
  }

  return res
    .status(201)
    .json({ message: 'user created successfully!', user: { username, email } })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

mongoose.connection.on('connected', async () => {
  console.log('Connected to DB:', mongoose.connection.name)

  const collections = await mongoose.connection.db.listCollections().toArray()
  console.log(
    'collections:',
    collections.map((c) => c.name)
  )

  const users = await User.find()
  console.log('All users:', users)
})

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: 'Insta-Clone-Backend',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log('mongodb has been connected after crying for so long')
  )
  .catch(() => console.log('lu feri try gara vayena yo'))

console.log('Loaded MONGO_URI:', process.env.MONGO_URI)
