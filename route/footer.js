var footer = require('./controllers/footer.controller');

module.exports = function(app) {
    // Setting up the local authentication
    app.route('/footer/add').post(footer.add);
    app.route('/footer/edit').post(footer.edit);
    app.route('/footer').get(footer.get);
};  