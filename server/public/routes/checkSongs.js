var express = require('express');
var router = express.Router();

var noDups = require('./noDups');
var addDate = require('./addDate');

var songs = []; //stores our songs

router.post('/', function(req, res) {
    var song = req.body;
    // no blanks
    if (song.title == '' || song.artist == '') {
        console.log('blanks');
        res.sendStatus(400);
    } else {
        // no dupes
        if (noDups.isDuplicateSong(song)) {
            console.log('dupe: ', song);
            res.sendStatus(400);
        } else {
            // all good
            song = addDate.addDate(song);
            songs.push(song);
            res.sendStatus(201);
        }
    }
});

router.get('/', function(req, res) {
    res.send(songs);
});


module.exports = router;
