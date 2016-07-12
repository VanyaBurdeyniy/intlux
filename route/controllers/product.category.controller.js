'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    ProductsCategory = mongoose.model('ProductCategory'),
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

/**
 * Add
 */
exports.add = function(req, res) {
    var img = req.body.img.base64;
    var data = img.replace(/^data:image\/\w+;base64,/, "");
    var buf = new Buffer(data, 'base64');
    var name = JSON.stringify(Math.floor(Math.random() * 1000));
    fs.writeFile('public/img/upload/'+req.body.img.name+'.png', buf);
    req.body.img.path = 'img/upload/'+req.body.img.name+'.png';
    req.body.img.base64 = '';

    // Init Variables
    var products = new ProductsCategory(req.body);
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
    ProductsCategory.findByIdAndUpdate(req.body.id, { $set: { news: req.body }}, function (err, tank) {
        if (err) return handleError(err);
        res.send(tank);
    });
};

/**
 * OAuth callback
 */
exports.get = function(req, res, next) {
    ProductsCategory.find({}, function(err, news) {
        // When an error occurred
        if (err) {
            return err;
        }

        res.jsonp(news);

        return news;
    });
};