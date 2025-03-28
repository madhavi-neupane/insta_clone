// const mongoose = require('mongoose')
// const User = require('./models/Users')

// require('dotenv').config()
// console.log('MONGO_URI from .env:', process.env.MONGO_URI)

// async function testSignup() {
//   const res = await fetch('http://localhost:5000/api/signup', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(
//       {
//         username: 'maddy',
//         email: 'maddy@example.com',
//         password: 'password',
//       },
//       {
//         username: 'tester',
//         email: 'tester@example.com',
//         password: 'pass',
//       }
//     ),
//   })

//   const data = await res.json()
//   console.log('signup response:', data)

//   const users = await User.find()
//   console.log('users after signup:', users)
// }

// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })

//   .then(() => {
//     console.log('connected to mongodb in testSIgnup.js')
//     testSignup()
//   })
//   .catch((err) => console.error('vayena k vayena chyaaaaaa', err))

// .then(async (response) => {
//     const text = await response.text()
//     console.log('Raw response:', text)
//     return JSON.parse(text)
//   })

//   .then((data) => console.log('Response:', data))
//   .catch((error) => console.error('Error:', error))

// .then((response) => response.json())

const mongoose = require('mongoose')
const User = require('./models/Users') // Ensure correct path
require('dotenv').config()

async function testSignup() {
  await mongoose.connect(process.env.MONGO_URI)
  console.log('connected to mongodb in testSignup.js')

  const newUser = new User(
    {
      username: 'tester',
      email: 'tester@example.com',
      password: 'test',
    }
    // {
    //   Username: 'mads',
    //   email: 'maddy@email.com',
    //   password: 'pass',
    // }
  )

  await newUser.save()
  console.log('User saved:', newUser)

  const users = await User.find()
  console.log('Users after signup:', users)

  await mongoose.connection.close()
}

testSignup()
