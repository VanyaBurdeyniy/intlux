process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Requiring dependencies
var mongoose = require('mongoose');

// Configure Mongoose
var db = mongoose.connect('mongodb://185.65.246.183/intlux');
var express = require('express');

// Configure Express
var expressServer = require('./config/express');
var app = express();

// Bootstrap passport config
var passport = require('./config/passport')();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));

// Bootstrap application
app.listen(4000);

// Tell developer about it
console.log('Server running at http://localhost:3000/');