const mongoose = require('mongoose');
const Movie = require('../models/movie');
const express = require('express');


const router = express.Router();

router.get('/movies', (req, res, next) =>{
    Movie.find(function(err,result){
        if (err) console.error(err);
        res.json(result);
    });
})


module.exports = router;