const mongoose = require('mongoose')

const songList = mongoose.Schema({
    image: String,
    moviename: String,
    songlink: String,
    songname: String,
    artist: String,
    duration: String
})

const mongoDbSong = mongoose.model('songList', songList)

module.exports = mongoDbSong