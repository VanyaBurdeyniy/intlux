var productsCategory = require('./controllers/product.category.controller');

module.exports = function(app) {
    // Setting up the local authentication
    app.route('/products/category/add').post(productsCategory.add);
    app.route('/products/category/remove').post(productsCategory.remove);
    app.route('/products/category/edit').put(productsCategory.edit);
    app.route('/products/category/:id').get(productsCategory.get);
    app.route('/products/category').get(productsCategory.getAll);
    app.route('/products/category/one/:id').get(productsCategory.getOne);
};