var express = require('express');
var router = express.Router();
var bookSchema = require('./schemas/book');

router.route('/books')
    .get(function(req, res) {
        res.json({status: 'this will be all the books'})
    })
    .post(function(req, res) {
        var book = new bookSchema({
            slug: 'test_book',
            name: 'this is the test name',
            pages: 300,
            currentPage: 150,
            Author: 'Some author name'
        });

        book.save(function(err) {
            if (err) {
                console.log(err);
                res.status(500).json({status: 'Fail. Could not save'})
            } else {
                res.json({status: 'success'})
            }
        })
        res.json({status:'done'})
    })

module.exports = router;
