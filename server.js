process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Requiring dependencies
var mongoose = require('mongoose');

// Configure Mongoose
var db = mongoose.connect('mongodb://localhost:27017/intlux');
var express = require('express');

// Configure Express
var expressServer = require('./config/express');
var app = expressServer();

// Bootstrap passport config
var passport = require('./config/passport')();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));


// Bootstrap application
app.listen();

// Tell developer about it
console.log(process.env.PORT || 4000);