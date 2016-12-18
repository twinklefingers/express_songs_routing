var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var checkSongs = require('./public/routes/checkSongs');

songs = []; //stores our songs - global variable, available to all routes

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('port', process.env.PORT || 3000);

app.use('/songs', checkSongs);

/**
 * POST /songs
 *
 * Places song into songs array
 */

app.get('/*', function(req, res) {
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, './public', file));
});


app.listen(app.get('port'), function() {
    console.log('Server now running at port ', app.get('port'));
});
