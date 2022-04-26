const commentModel = require('../models/commentModel');
const APIFeatures = require('../util/apiFeatures');
//delete comment
const deleteComment = async (req, res) => {
  try {
    await commentModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ state: 'success', message: `${req.params.id} has been deleted` })
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      message: error.message
    });
  }
}
const updateComment = async (req, res) => {
  try {
    const comment = await commentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(201).json({ state: 'success', comment })
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      message: error.message
    });
  }
}
//find by id
const getComment = async (req, res) => {
  try {
    const comment = await commentModel.findById(req.params.id);
    res.status(200).json({ state: 'success', comment })
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      message: error.message
    });
  }
}
//create new comment
const createComment = async (req, res) => {
  try {
    const payload = {
      title: req.body.title,
      content: req.body.content,
      article_id: req.body.article_id,
      publish_date: new Date()
    }
    const comment = await commentModel.create(payload);
    res.status(201).json({ state: 'success', comment })
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      message: error.message
    });
  }
}
module.exports = {
  updateComment,
  getComment,
  createComment,
  deleteComment
}