'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Products = mongoose.model('Product'),
    path = require('path'),
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

function decodeBase64Image(dataString) {
    var matches = dataString.replace(/^data:image\/png;base64,/, ""),
        response = {};

    if (matches.length !== 3) {
        return new Error('Invalid input string');
    }

    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');

    return response;
}

/**
 * Add
 */
exports.add = function(req, res) {

    var data = req.body.img;



    var imageBuffer = decodeBase64Image(data);
    console.log(imageBuffer);


    fs.writeFile('test.jpg', imageBuffer.data, function(err) {
        console.log(err);
    });



    // Init Variables
    var products = new Products(req.body);
    var message = null;

    // Then save the user
    products.save(function(err) {
        if (err) {
            return res.send(400, {
                message: getErrorMessage(err)
            });
        } else {
            res.jsonp(products);
        }
    });
};

/**
 * Edit
 */
exports.edit = function(req, res, next) {
    Products.findByIdAndUpdate(req.body.id, { $set: { news: req.body }}, function (err, tank) {
        if (err) return handleError(err);
        res.send(tank);
    });
};

/**
 * OAuth callback
 */
exports.get = function(req, res, next) {
    Products.find({}, function(err, news) {
        // When an error occurred
        if (err) {
            return err;
        }

        res.jsonp(news);

        return news;
    });
};