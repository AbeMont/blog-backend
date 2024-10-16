const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String },
        markdown: { type: String, required: true },
        image: { type: String, default: "https://via.placeholder.com/350x200" },
        created: { type: Date, default: Date.now }
    }
);

const Article = mongoose.model( 'Article', articleSchema );

module.exports = Article;