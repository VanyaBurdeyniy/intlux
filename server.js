process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Requiring dependencies
var mongoose = require('mongoose');

// Configure Mongoose
var db = mongoose.connect('mongodb://localhost/artVikonce');
var express = require('express');

// Configure Express
var expressServer = require('./config/express');
var app = expressServer();

// Bootstrap passport config
var passport = require('./config/passport')();

app.use(express.static(__dirname + '/public'));

// Bootstrap application
app.listen(3000);

// Tell developer about it
console.log('Server running at http://localhost:3000/');