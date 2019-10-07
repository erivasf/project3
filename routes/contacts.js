const express = require('express')
const router = express.Router()
const {check, validationResult} = require('express-validator/check')
const auth = require('../middlewares/auth')
const User = require('../models/User')
const Contact = require('../models/Contact')

// Route  -> Get api/contacts
// Desc   -> Get all users cintacts
// Access -> Private, auth required

router.get('/', auth, async (req, res) => {
  try{
    const contacts = await Contact.find({user:req.user.id}).sort({date:-1})
    res.json(contacts)
  }catch(error){
    console.error(error.message)
    res.status(500).send('Server error.')

  }
})

// Route  -> Post api/contacts
// Desc   -> Add new contact
// Access -> Private

router.post('/',[auth,[
  check('name', 'Name is required.').not().isEmpty()
]],async (req, res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()})
  }
  const {name, email, phone, type} = req.body
  try{
    const newContact = await new Contact ({
      name, 
      email,
      phone,
      type,
      user: req.user.id
    })
    const contact = await newContact.save()
    res.json(contact)
  }catch(error){
    console.error(error.message)
    res.status(500).send('Server error.')
  }
})
// Route  -> Put api/contacts/:id
// Desc   -> Update a contact
// Access -> Private, auth required

router.put('/:id', auth, async(req, res) => {
  const {name, email, phone, type} = req.body
  const contactFields = {}
  if(name) contactFields.name=name
  if(email) contactFields.email=email
  if(phone) contactFields.phone=phone
  if(type) contactFields.type=type

  try{
    let contact = await Contact.findById(req.params.id)
    if(!contacts) return res.status(404).json({msg:'Contact not found'})

    if(contact.user.toString() !== req.user.id){
      return res.status(401).json({msg:'Not authorized'})
    }
    contact = await Contact.findByIdAndUpdate(req.params.id, {$set: contactFields}, {new:true})
    res.json(contact)
  }catch (error){
    console.error(error.message)
    res.status(500).send('Server error.')
  }
})

// Route  -> Delete api/contacts/:id
// Desc   -> Delete a contact
// Access -> Private, auth required

router.delete('/:id', auth,async (req, res) => {
   try{
    let contact = await Contact.findById(req.params.id)
    if(!contacts) return res.status(404).json({msg:'Contact not found'})

    if(contact.user.toString() !== req.user.id){
      return res.status(401).json({msg:'Not authorized'})
    }
    await Contact.findByIdAndRemove(req.params.id)
    res.json({msg:'Contact removed.'})
  }catch (error){
    console.error(error.message)
    res.status(500).send('Server error.')
  }
})

module.exports = router