'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    passport = require('passport'),
    User = mongoose.model('User'),
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
 * Signout
 */
exports.signout = function(req, res) {
    req.logout();
    res.redirect('/');
};

exports.saveImage = function(req, res) {
    var base64Data = req.body.image.replace(/^data:image\/png;base64,/, "");

    fs.writeFile("out.png", base64Data, 'base64', function(err) {
        console.log(err);
    });

    res.send(200);
};

/**
 * Signup
 */
exports.signup = function(req, res) {
    // Init Variables
    var user = new User(req.body);
    var message = null;

    // Add missing user fields
    user.provider = 'local';

    // Then save the user
    user.save(function(err) {
        if (err) {
            return res.send(400, {
                message: getErrorMessage(err)
            });
        } else {
            // Remove sensitive data before login
            user.password = undefined;
            user.salt = undefined;

            req.login(user, function(err) {
                if (err) {
                    res.send(400, err);
                } else {
                    res.jsonp(user);
                }
            });
        }
    });
};

/**
 * Signin after passport authentication
 */
exports.signin = function(req, res, next) {

    passport.authenticate('local', function(err, user, info) {
        if (err || !user) {
            res.send(400, info);
        } else {
            // Remove sensitive data before login
            user.password = undefined;
            user.salt = undefined;

            req.login(user, function(err) {
                if (err) {
                    res.send(400, err);
                } else {
                    res.jsonp(user);
                }
            });
        }
    })(req, res, next);
};

exports.getUsers = function(req, res, next) {
    User.find({
        type:'Developer'
    }, function(err, user) {
        // When an error occurred
        if (err) {
            return err;
        }

        res.jsonp(user);

        return user;
    });
};


exports.addToCalendar = function(req, res, next) {
    //User.findByIdAndUpdate(req.user.id, { $set: { calendar: req.body }}, function (err, tank) {
    //	if (err) return handleError(err);
    //	res.send(tank);
    //});
    User.find({_id: req.user.id}, function(err, user) {
        if(err) res.status(500);
        var time = {};
        req.body.forEach(function(r){
            time.hour = r.hour;
            time.project = r.project;
        });
        req.user.calendar.push(time);
        req.user.save(function(err, user) {
            if(err) res.status(500);
            else res.json(user);
        })
    });
};

/**
 * OAuth callback
 */
exports.oauthCallback = function(strategy) {
    return function(req, res, next) {
        passport.authenticate(strategy, function(err, user, redirectURL) {
            if (err || !user) {
                return res.redirect('/#!/signin');
            }
            req.login(user, function(err) {
                if (err) {
                    return res.redirect('/#!/signin');
                }

                return res.redirect(redirectURL || '/');
            });
        })(req, res, next);
    };
};