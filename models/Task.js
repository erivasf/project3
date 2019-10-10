const {Schema,model} = require('mongoose')

const newSchema = new Schema({
  user:{
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  amount: {
  type: String,
  required: true
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String
  },
  type:{
    type: String, 
    default: '', 
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = model('Task', newSchema)