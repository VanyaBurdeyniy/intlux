var news = require('./controllers/news.controller');

module.exports = function(app) {
    // Setting up the local authentication
    app.route('/news/add').post(news.add);
    app.route('/news/edit').put(news.edit);
    //app.route('/news/remove').delete(news.remove);
    app.route('/news').get(news.get);
};