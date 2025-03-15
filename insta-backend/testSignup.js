fetch('http://localhost:5000/api/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(
    // {
    //   username: 'maddy',
    //   email: 'maddy@example.com',
    //   password: 'password',
    // },
    {
      username: 'tester',
      email: 'tester@example.com',
      password: 'pass',
    }
  ),
})
  .then((response) => response.json())
  .then((data) => console.log('Response:', data))
  .catch((error) => console.error('Error:', error))
