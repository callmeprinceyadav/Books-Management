const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String },
    author: { type: String },
    publishedYear: { type: Number },
    genre: { type: String },
});

module.exports = mongoose.model('Book', bookSchema);
