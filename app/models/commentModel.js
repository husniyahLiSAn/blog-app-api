const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
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
  },
  article_id: {
    type: String,
    require: true
  },
})
module.exports = mongoose.model('Comments', commentSchema);