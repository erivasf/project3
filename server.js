require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res, next) => res.json({msg: 'Welcome to this projects API'}))

//Define routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server runnin´on port ${PORT}`))
