const mongoose = require('mongoose');
const User = require('../models/user')
const express = require('express');



const router = express.Router();


router.get('/auth', (req, res, next) => {
    
});


router.post('/register', (req, res, next) => {


    res.send(req.body)
    res.send("Endpoint working");
});

module.exports = router;