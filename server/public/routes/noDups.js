var checkSongs = require('./checkSongs');
// var express = require('express');
// var router = express.Router();

// router.use('./checkSongs', songs);

exports.isDuplicateSong = function(check) {
    for (var i = 0; i < songs.length; i++) {
        console.log(songs[i], check);
        if ((songs[i].title == check.title) && (songs[i].artist == check.artist)) {
            console.log('are dupes');
            return true;
        }
    }

    return false;
}

// module.exports = router;
