var express = require('express');
var router = express.Router();

var songs = []; //stores our songs

router.post('/', function(req, res) {
    var song = req.body;
    // no blanks
    if (song.title == '' || song.artist == '') {
        console.log('blanks');
        res.sendStatus(400);
    } else {
        // no dupes
        if (isDuplicateSong(song)) {
            console.log('dupe: ', song);
            res.sendStatus(400);
        } else {
            // all good
            song = addDate(song);
            songs.push(song);
            res.sendStatus(201);
        }
    }
});

router.get('/', function(req, res) {
    res.send(songs);
});

function addDate(theSong) {
    var now = new Date();
    theSong.dateAdded = now;
    return theSong;
}

function isDuplicateSong(check) {
    for (var i = 0; i < songs.length; i++) {
        console.log(songs[i], check);
        if ((songs[i].title == check.title) && (songs[i].artist == check.artist)) {
            console.log('are dupes');
            return true;
        }
    }

    return false;
}

module.exports = router;
