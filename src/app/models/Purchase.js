const moongose = require('mongoose')

const Purchase = new moongose.Schema({
  ad: {
    type: moongose.Schema.Types.ObjectId,
    ref: 'Ad',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  user: {
    type: moongose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

module.exports = moongose.model('Purchase', Purchase)
