'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    News = mongoose.model('News'),
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
    var news = new News(req.body);
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
    //News.find({
    //    _id:req.body.id
    //}, function(err, user) {
    //    // When an error occurred
    //    if (err) {
    //        return err;
    //    }
    //
    //    res.jsonp(user);
    //
    //    return user;
    //});

    News.findByIdAndUpdate(req.body.id, { $set: { news: req.body }}, function (err, tank) {
    	if (err) return handleError(err);
    	res.send(tank);
    });
};

//exports.getUsers = function(req, res, next) {
//    User.find({
//        type:'Developer'
//    }, function(err, user) {
//        // When an error occurred
//        if (err) {
//            return err;
//        }
//
//        res.jsonp(user);
//
//        return user;
//    });
//};


//exports.addToCalendar = function(req, res, next) {
//    //User.findByIdAndUpdate(req.user.id, { $set: { calendar: req.body }}, function (err, tank) {
//    //	if (err) return handleError(err);
//    //	res.send(tank);
//    //});
//    User.find({_id: req.user.id}, function(err, user) {
//        if(err) res.status(500);
//        var time = {};
//        req.body.forEach(function(r){
//            time.hour = r.hour;
//            time.project = r.project;
//        });
//        req.user.calendar.push(time);
//        req.user.save(function(err, user) {
//            if(err) res.status(500);
//            else res.json(user);
//        })
//    });
//};

/**
 * OAuth callback
 */
exports.get = function(req, res, next) {
    News.find({}, function(err, news) {
        // When an error occurred
        if (err) {
            return err;
        }

        res.jsonp(news);

        return news;
    });
};