var service = require('./controllers/service.controller');

module.exports = function(app) {
    // Setting up the local authentication
    app.route('/service/add').post(service.add);
    app.route('/service/remove').post(service.remove);
    app.route('/service/edit').put(service.edit);
    app.route('/services').get(service.get);
};