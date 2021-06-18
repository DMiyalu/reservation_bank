var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// some config
app.use(express.static('assets'));
app.use(express.urlencoded())

// use res.render to load up an ejs view file

// index page
app.get('/', function(request, response) {
    response.render('pages/index');
});

app.get('/depot', function(request, response) {
    response.render('pages/depot');
});

app.get('/retrait', function(request, response) {
    response.render('pages/retrait');
});

app.get('/frais-academiques', function(request, response) {
    response.render('pages/frais-academiques');
});

app.listen(8080);
console.log('8080 is the magic port');