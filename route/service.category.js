var serviceCategory = require('./controllers/service.category.controller');

module.exports = function(app) {
    // Setting up the local authentication
    app.route('/service/category/add').post(serviceCategory.add);
    app.route('/service/category/edit').put(serviceCategory.edit);
    app.route('/service/category').get(serviceCategory.get);
    app.route('/service/category/remove').post(serviceCategory.remove);
};