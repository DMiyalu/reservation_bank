var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// some config
app.use(express.static('assets'));

// use res.render to load up an ejs view file

// index page
app.get('/', function(request, response) {
    response.render('pages/index');
});

app.get('/contact', function(request, response) {
    response.render('pages/contact');
});

app.listen(8080);
console.log('8080 is the magic port');