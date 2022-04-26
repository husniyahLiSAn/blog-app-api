const express = require('express');
const router = express.Router();
const { deleteArticle, updateArticle, getArticles, createArticle, getArticle } = require('../controllers/articleController');
// const { createComment } = require('../controllers/commentController');
router
  .route('/')
  .get(getArticles)
  .post(createArticle);
router
  .route('/:id')
  .get(getArticle)
  .patch(updateArticle)
  .delete(deleteArticle);
// router
//   .route('/:id/comments')
//   .post(createComment);
module.exports = router;