var express = require('express');
var app = express();

var nav = [{
    Link: '/Books',
    Text: 'Book'
            }, {
    Link: '/Authors',
    Text: 'Author'
}];
var bookRouter = require('./src/routes/bookRoutes')(nav);
var authorRouter = require('./src/routes/authorRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);

// ---------------------------------------
// Views
// ---------------------------------------
app.use(express.static('public'));
app.set('views', './src/views');

// EJS view engine
app.set('view engine', 'ejs');

app.use('/Books', bookRouter);
app.use('/Authors', authorRouter);
app.use('/Admin', adminRouter);


app.get('/', function (req, res){
    res.render('index', {
        title: 'Home',
        nav: nav
    });
});

var port = process.env.PORT || 5000;

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});