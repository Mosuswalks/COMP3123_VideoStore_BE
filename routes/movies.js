const mongoose = require('mongoose');
const Movie = require('../models/movie');
const express = require('express');


const router = express.Router();

router.get('/videos', (req, res, next) =>{
    Movie.find(function(err,result){
        if (err) console.error(err);
        console.log(result);
        res.json(result);
    });
    
})

module.exports = router;