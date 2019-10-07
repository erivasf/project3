const express = require ('express')
const router = express.Router()

// Route  -> Post api/users
// Desc   -> Register a user
// Access -> Public, no auth

router.post('/', (req, res) => {
  res.send('Register a user')
})

module.exports = router