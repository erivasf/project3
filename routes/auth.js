const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const config = require('config')
const auth = require('../middlewares/auth')
const {check, validationResult} = require('express-validator/check')

// Route  -> Get api/users
// Desc   -> Get logged  in user
// Access -> Private, auth required

router.get('/', auth, async (req, res) => {
  try{
    const user = await User.findById(req.user.id).select('-password')
    res.json(user)
  }catch(error){
    console.error(error.message)
    res.status(500).send('Server error.')
  }
})

// Route  -> Post api/users
// Desc   -> Auth user
// Access -> Public

router.post('/', [
  check('email', 'Please include a valid email.').isEmail(),
  check('password', 'Password is required.').exists()
],async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()})
  }
  const {email, password} = req.body
  try{
    let user = await User.findOne({email})
    if(!user){
      return res.status(400).json({msg:'Invalid credentials'})
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
      return res.status(400).json({msg: 'Invalid credentials'})
    }
    const payload = {
        user:{
          id: user.id
        }
      }
    jwt.sign(payload, config.get('jwtSecret'),{expiresIn: 3600000},(error, token) => {
      if(error) throw error
      res.json({token})
    })
  }catch(error){
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router