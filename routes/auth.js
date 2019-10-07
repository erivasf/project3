const express = require('express')
const router = express.Router()

// Route  -> Get api/users
// Desc   -> Get logged  in user
// Access -> Private, auth required

router.get('/', (req, res) => {
  res.send('Get logged in user')
})

// Route  -> Post api/users
// Desc   -> Auth user
// Access -> Public

router.post('/', (req, res) => {
  res.send('Login user')
})

module.exports = router