const mongoose = require('mongoose');

/// Video Schema 
const movieSchema = mongoose.Schema({
    Title: String,
    Year: String,
    Duration: Number,
    Genre: String,
    Director: String,
    Rating: String,
    Status: Boolean
}, { collection: 'videos'});


module.exports = mongoose.model('Movie', movieSchema);