require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')

const app = express()

//Database connection 
connectDB()
app.get('/', (req, res, next) => res.json({msg: 'Welcome to this projects API'}))
//Bodyparser
app.use(express.json({extended:false}))
//Define routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server runnin´on port ${PORT}`))
