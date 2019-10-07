const {Schema,model} = require('mongoose')

const newSchema = new Schema({
  user:{
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
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
    default: 'personal', 
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = model('Contact', newSchema)