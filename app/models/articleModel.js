const mongoose = require('mongoose');
const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    unique: true
  },
  content: {
    type: String
  },
  publish_date: {
    type: Date,
    require: true
  }
})
module.exports = mongoose.model('Articles', articleSchema);