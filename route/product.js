var products = require('./controllers/product.controller');

module.exports = function(app) {
    // Setting up the local authentication
    app.route('/products/add').post(products.add);
    app.route('/products/edit').put(products.edit);
    app.route('/products/remove').post(products.remove);
    app.route('/products').get(products.get);
};