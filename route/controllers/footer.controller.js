'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Footer = mongoose.model('Footer'),
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
    var footer = new Footer(req.body);
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
    Footer.findByIdAndUpdate(req.body.id, { $set: { news: req.body }}, function (err, tank) {
        if (err) return handleError(err);
        if (!tank) {
            var footer = new Footer(req.body);
            var message = null;

            // Then save the user
            footer.save(function(err) {
                if (err) {
                    return res.send(400, {
                        message: getErrorMessage(err)
                    });
                } else {
                    // res.jsonp(footer);
                }
            });
        }
        res.send({});
    });
};


/**
 * OAuth callback
 */
exports.get = function(req, res, next) {
    Footer.find({}, function(err, footer) {
        // When an error occurred
        if (err) {
            return err;
        }

        res.jsonp(footer);

        return footer;
    });
};