const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();


// Routes
const videoRoutes = require('./routes/movies')
const authRoutes = require('./routes/authentication')


// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Connecting to MongoDB via mLabs
mongoose.connect('mongodb://admin:adminadmin2@ds119692.mlab.com:19692/videostore',{useNewUrlParser: true }
).then(() =>{
    console.log("Successfully Connected to MongoDB");
})
.catch(err =>{
    console.log(err)
    console.log("Error Connecting to MongoDB.");
})


var api = express.Router();
var auth = express.Router();

app.use('/api', videoRoutes);
app.use('/auth', authRoutes);
/*
auth.get('/login', (req,res) =>{
    res.json(this.messages);
})

api.get('/videos', (req,res) =>{
    res.send({movie: 'Test'});
})

app.use('/auth', auth)
app.use('/api', api)
*/
app.listen(63245);

module.exports = app