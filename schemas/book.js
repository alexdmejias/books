var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    slug: String,
    name: String,
    pages: Number,
    currentPage: Number,
    Author: String
});

module.exports = mongoose.model('Book', bookSchema);
