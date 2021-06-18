var express = require('express');
var app = express();
const { body,validationResult } = require('express-validator');

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

app.post('/depot', function(request, response) {
    response.redirect('/jeton');
});

app.get('/retrait', function(request, response) {
    response.render('pages/retrait');
});

app.post('/retrait', function(request, response) {
    response.redirect('/jeton');
});

app.get('/jeton', function(request, response) {
    response.render('pages/jeton');
});

app.get('/frais-academiques', function(request, response) {
    response.render('pages/frais-academiques');
});

app.post('/frais-academiques', function(request, response) {
    response.redirect('/jeton');
});

app.listen(8080);
console.log('8080 is the magic port');