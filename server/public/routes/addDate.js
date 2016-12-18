exports.addDate = function(theSong) {
    var now = new Date();
    theSong.dateAdded = now;
    return theSong;
}
