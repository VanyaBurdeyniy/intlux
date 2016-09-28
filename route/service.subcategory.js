var serviceSubCategory = require('./controllers/service.subcategory.controller');

module.exports = function(app) {
    // Setting up the local authentication
    app.route('/service/category/sub/add').post(serviceSubCategory.add);
    app.route('/service/category/sub/edit').put(serviceSubCategory.edit);
    app.route('/service/category/sub').get(serviceSubCategory.get);
    app.route('/service/category/sub/remove').post(serviceSubCategory.remove);
};