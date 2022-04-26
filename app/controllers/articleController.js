const articleModel = require('../models/articleModel');
const commentModel = require('../models/commentModel');
const APIFeatures = require('../util/apiFeatures');
//get all articles
const getArticles = async (req, res) => {
  try {
    const features = new APIFeatures(articleModel.find(), req.query);
    features.filter()
            .sort()
            .limit()
            .paginate();
 
    const articles = await features.query;

    res.status(200).json({ state: 'success', articles })
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      message: error.message
    });
  }
}
//delete article
const deleteArticle = async (req, res) => {
  try {
    await articleModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ state: 'success', message: `${req.params.id} has been deleted` })
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      message: error.message
    });
  }
}
const updateArticle = async (req, res) => {
  try {
    const article = await articleModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(201).json({ state: 'success', article })
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      message: error.message
    });
  }
}
//find by id
const getArticle = async (req, res) => {
  try {
    const article = await articleModel.findById(req.params.id);
    const comment = await commentModel.find({ article_id: req.params.id });
    res.status(200).json({ 
        state: 'success', 
        article: {
            id: article.id,
            title: article.title,
            content: article.content,
            publish_date: article.publish_date,
            comment
        }})
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      message: error.message
    });
  }
}
//create new article
const createArticle = async (req, res) => {
  try {
    const payload = {
      title: req.body.title,
      content: req.body.content,
      publish_date: new Date()
    }
    const article = await articleModel.create(payload);
    res.status(201).json({ state: 'success', article })
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      message: error.message
    });
  }
}
module.exports = {
  updateArticle,
  getArticle,
  getArticles,
  createArticle,
  deleteArticle
}