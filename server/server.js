// Importing required modules
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// parse env variables
require('dotenv').config();

// Configuring port
const port = process.env.PORT || 9000;

const app = express();

// Configure middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.set('view engine', 'html');

// Static folder
app.use(express.static(__dirname + '/views/'));
app.use('/images', express.static(path.join(__dirname,'/assets')));

// Defining route middleware
app.use('/api', require('./routes/api'));
app.use('/fkdata', require('./routes/fkdata'));

// Listening to port
app.listen(port);
console.log(`Listening On http://localhost:${port}/api`);

module.exports = app;
