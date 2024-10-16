const express = require('express');
const router = express.Router();

const { createArticle, getArticles, getArticle, updateArticle, deleteArticle } = require('./../handlers/handlers');

// Create Article
router.post('/createarticle', createArticle );

// Fetching Articles
router.get('/articles', getArticles );
router.get('/article/:id', getArticle );

// Updating Article
router.put('/updatearticle/:id', updateArticle);

// Delete Article
router.delete('/deletearticle/:id', deleteArticle);

module.exports = router;