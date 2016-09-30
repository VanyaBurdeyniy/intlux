'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    ServiceCategory = mongoose.model('ServiceCategory'),
    Service = mongoose.model('Service'),
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
    fs.writeFile('public/img/upload/'+req.body.img.name+'.png', buf);
    req.body.img.path = 'img/upload/'+req.body.img.name+'.png';
    req.body.img.base64 = '';

    // Init Variables
    var products = new ServiceCategory(req.body);

    Service.findOne({ _id: req.body.serviceId }, function(err, service) {
       if (err) res.send(500, {
           message: getErrorMessage(err)
       });

        service.hasCategory = true;
        service.save();
    });

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
    var img = req.body.img.base64;
    var data = img.replace(/^data:image\/\w+;base64,/, "");
    var buf = new Buffer(data, 'base64');
    var name = JSON.stringify(Math.floor(Math.random() * 1000));
    fs.writeFile('public/img/upload/'+req.body.img.name+'.jpg', buf);
    req.body.img.path = 'img/upload/'+req.body.img.name+'.jpg';
    req.body.img.base64 = '';

    ServiceCategory.findOne({ _id: req.body.id }, function (err, doc){
        doc.img = req.body.img;
        doc.title = req.body.title;
        console.log(doc.decriptionBig);
        doc.decriptionBig = req.body.decriptionBig;
        doc.save();
    });
};

/**
 * OAuth callback
 */
exports.get = function(req, res, next) {
    ServiceCategory.find({}, function(err, news) {
        // When an error occurred
        if (err) {
            return err;
        }

        res.jsonp(news);

        return news;
    });
};

exports.remove = function(req, res, next) {
    ServiceCategory.remove({ _id: req.body._id }, function(err) {
        if (!err) {
            ServiceCategory.find({}, function(err, serviceCategories) {
                if (serviceCategories.length < 1) {
                    Service.findOne({ _id: req.body.serviceId }, function(err, service) {
                        if (err) res.send(500, {
                            message: getErrorMessage(err)
                        });
                        service.hasCategory = false;
                        service.save();
                    });
                }
            });
            res.status(200).json('ok');
        }
        else {
            res.status(500).json('not ok');
        }
    });
};