var email = require('./controllers/email.controller');

module.exports = function(app) {
    // Setting up the local authentication
    app.route('/email/send').post(email.send);
};