const express = require('express');
const mongoose = require('mongoose')
const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')

const bodyParser = require('body-parser');

const address = require('./routes/api/address')
const designation = require('./routes/api/designation')
const note = require('./routes/api/note')
const payment = require('./routes/api/payment')
const revenue = require('./routes/api/revenue')
const supporter = require('./routes/api/supporter')

/*********** Mongo Db connection ************/
const MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectID
/*********************************************/

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const db = require('./config/keys').mongoURI
    mongoose
        .connect(db)
        .then(() => console.log('MongoDb Connected'))
        .catch(err => console.log(err));

        
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


//app.use('/api/revenue', revenue);
//app.use('/api/address', address);
//app.use('/api/designation', designation);
//app.use('/api/note', note);
//app.use('/api/payment', payment);
app.use('/api/supporter', supporter);


const port = 6001;
app.listen(port, () => console.log(`Server is running on get port ${port}`));
app.get('/', (req, res) => res.send('6001 is listening. I am wondering if NodeMon is working.'));


