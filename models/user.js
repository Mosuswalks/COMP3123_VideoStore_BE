const mongoose = require('mongoose');

// User Schema
const userSchema = mongoose.Schema({
    FullName: String,
    Email: String,
    Password: String,
    Role: String
});


module.exports = mongoose.model('User', userSchema)