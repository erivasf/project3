const express = require('express')
const router = express.Router()

// Route  -> Get api/contacts
// Desc   -> Get all users cintacts
// Access -> Private, auth required

router.get('/', (req, res) => {
  res.send('Get all contacts')
})

// Route  -> Post api/contacts
// Desc   -> Add new contact
// Access -> Private

router.post('/', (req, res) => {
  res.send('Add contact')
})
// Route  -> Put api/contacts/:id
// Desc   -> Update a contact
// Access -> Private, auth required

router.put('/:id', (req, res) => {
  res.send('Update contact')
})

// Route  -> Delete api/contacts/:id
// Desc   -> Delete a contact
// Access -> Private, auth required

router.delete('/:id', (req, res) => {
  res.send('Delete a contact')
})

module.exports = router