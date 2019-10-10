require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')

const app = express()

//Database connection 
connectDB()
//Bodyparser
app.use(express.json({extended:false}))
//Define routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/tasks', require('./routes/tasks'))
app.use('/api/profile', require('./routes/profile'))

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server runnin´on port ${PORT}`))
