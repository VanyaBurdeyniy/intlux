var users = require('./controllers/user.controller'),
    passport = require('passport');

module.exports = function(app) {
    // Setting up the local authentication
    app.route('/auth/signup').post(users.signup);
    app.route('/auth/signin').post(users.signin);
    app.route('/auth/signout').get(users.signout);
    app.route('/users').get(users.getUsers);
    app.route('/saveimage').post(users.saveImage);
    app.route('/add/calendar').post(users.addToCalendar);

    // Setting the facebook oauth routes
    app.route('/auth/facebook').get(passport.authenticate('facebook', {
        scope: ['email']
    }));
    app.route('/auth/facebook/callback').get(users.oauthCallback('facebook'));
};