const {Schema,model} = require('mongoose')

const newSchema = new Schema({
  user:{
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  username: String,
  url_image: {
    type: String,
    default: 'http://cdn.onlinewebfonts.com/svg/img_299586.png'
  }
})

module.exports = model('Profile', newSchema)