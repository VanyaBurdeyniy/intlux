var design = require('./controllers/design.controller');

module.exports = function(app) {
    // Setting up the local authentication
    app.route('/design/add').post(design.add);
    app.route('/design/edit').put(design.edit);
    //app.route('/news/remove').delete(news.remove);
    app.route('/design').get(design.get);
};