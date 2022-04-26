const express = require('express');
const router = express.Router();
const { deleteComment, updateComment, createComment, getComment } = require('../controllers/commentController');
router
  .route('/')
  .post(createComment);
router
  .route('/:id')
  .get(getComment)
  .patch(updateComment)
  .delete(deleteComment)
module.exports = router;