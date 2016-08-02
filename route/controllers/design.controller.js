'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Design = mongoose.model('Design'),
    fs = require('fs');

/**
 * Get the error message from error object
 */
var getErrorMessage = function(err) {
    var message = '';

    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'Username already exists';
                break;
            default:
                message = 'Something went wrong';
        }
    } else {
        for (var errName in err.errors) {
            if (err.errors[errName].message) message = err.errors[errName].message;
        }
    }

    return message;
};

/**
 * Add
 */
exports.add = function(req, res) {

    // Init Variables
    var news = new Design(req.body);
    var message = null;

    // Then save the user
    news.save(function(err) {
        if (err) {
            return res.send(400, {
                message: getErrorMessage(err)
            });
        } else {
            res.jsonp(news);
        }
    });
};

/**
 * Edit
 */
exports.edit = function(req, res, next) {
    Design.find({}, function (err, doc){
        doc[0].class = req.body.class;
        doc[0].save();
    });
};


/**
 * OAuth callback
 */
exports.get = function(req, res, next) {
    Design.find({}, function(err, news) {
        // When an error occurred
        if (err) {
            return err;
        }

        res.jsonp(news);

        return news;
    });
};