var express = require('express');
var router = express.Router();
var bookSchema = require('../schemas/book');

router.route('/books')
    .get(function(req, res) {
        bookSchema.find(function(err, books) {
            if(err) {
                console.log(err);
                res.send(500).json({status: 'fail'})
            } else {
                res.json(books)
            }
        })
    })
    .post(function(req, res) {
        var book = new bookSchema({
            slug: 'test_book2',
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
