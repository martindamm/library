var express = require('express');

var authorRouter = express.Router();

var router = function (nav) {
    var books = [
        {
            title: 'War and Peace',
            genre: 'Historical Fiction',
            author: 'Lev Nikolayevich Tolstoy',
            read: false
                },
        {
            title: 'Les Miserable',
            genre: 'Historical Fiction',
            author: 'Victor Hugo',
            read: false
    }];

    authorRouter.route('/')
        .get(function (req, res) {
            res.render('authorListView', {
                title: 'Authors',
                nav: nav,
                books: books
            });
        });
    authorRouter.route('/:id')
        .get(function(req,res){
            var id = req.params.id;
            res.render('authorView', {
                title: 'Author',
                nav: nav,
                books: books[id]
            });
    });
    
    return authorRouter;
};

module.exports = router;