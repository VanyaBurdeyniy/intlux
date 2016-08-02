var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    methodOverride = require('method-override'),
    cookieParser = require('cookie-parser'),
    path = require('path'),
    flash = require('connect-flash'),
    passport = require('passport');

module.exports = function() {
    // Init express application
    var app = express();

    // Configure models
    require('../models/user.model');
    require('../models/news.model');
    require('../models/product.model');
    require('../models/product.category.model');
    require('../models/service.model');
    require('../models/service.category.model');
    require('../models/service.subcategory.model');
    require('../models/design.model');

	// Enable logger (morgan)
    app.use(morgan('dev'));

    // Use Express middlewares
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
    app.use(methodOverride());
    app.use(cookieParser());
    app.use(session({
    	secret: 'MEAN'
    }));

    // Connect flash for flash messages
    app.use(flash());

    // Init Passport 
    app.use(passport.initialize());
    app.use(passport.session());

    // Configure routing
    require('../route/user')(app);
    require('../route/news')(app);
    require('../route/product')(app);
    require('../route/product.category')(app);
    require('../route/service')(app);
    require('../route/service.category')(app);
    require('../route/service.subcategory')(app);
    require('../route/mail')(app);
    require('../route/design')(app);

	// Setting the app router and static folder
	//app.use(express.static('../public'));

    return app;
};