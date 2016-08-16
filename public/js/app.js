var artVikonce = angular.module('artVikonce', [
    'ui.router',
    'flow',
    'pascalprecht.translate'
]);

artVikonce.config(function($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider)
{

    $translateProvider.translations('en', {
        COMPANY: 'Company',
        NEWS: 'News',
        PRODUCTS_AND_SERVICES: 'Products and Services',
        CONTACTS: 'Contacts',
        SQUARE_POWER: 'Sphere of Influence',
        ABOUT_US: 'About Us',
        MISSIONS: 'Goals and Mission',
        PRODUCT: 'Products',
        SERVICES: 'Service',
        SLIDER_DESCRIPTION: 'We provide our experience and ' +
        'capabilities in the supply to resolve any difficulties ' +
        'and unusual situations, rather than iron and Technology'
    });
    $translateProvider.translations('ru', {
        COMPANY: 'Компания',
        NEWS: 'Новости',
        PRODUCTS_AND_SERVICES: 'Оборудование и Сервис',
        CONTACTS: 'Контакты',
        SQUARE_POWER: 'Сферы Влияния',
        ABOUT_US: 'О нас',
        MISSIONS: 'Цели и Миссия',
        PRODUCT: 'Оборудование',
        SERVICES: 'Сервис',
        SLIDER_DESCRIPTION: 'Мы предлагаем наш опыт и возможности в' +
        ' поставках с решением любых трудностей и нестандартных ситуаций, а не железо и технологии'
    });
    $translateProvider.translations('kz', {
        COMPANY: 'Компания',
        NEWS: 'Жаңалықтар',
        PRODUCTS_AND_SERVICES: 'Жабдықтар мен қызметтер',
        CONTACTS: 'Байланыстар',
        SQUARE_POWER: 'әсер ету саласы',
        ABOUT_US: 'Біз туралы',
        MISSIONS: 'Мақсаттары мен Миссиясы',
        PRODUCT: 'Жабдық',
        SERVICES: 'қызмет көрсету',
        SLIDER_DESCRIPTION: 'Біз тәжірибе мен мүмкіндіктерін жеткізу ' +
        'кез-келген қиындықтарды және ерекше жағдайларды шешу үшін емес, темір мен технологиясы ұсынамыз'
    });
    var lang;
    if (localStorage.getItem('lang')) lang = localStorage.getItem('lang');
    else lang = 'ru';
    $translateProvider.preferredLanguage(lang);

    $('.wrapper-loader').hide();
    $stateProvider
        .state('index', {
            name: 'index',
            url: '/',
            templateUrl: '../views/landing.html',
            controller: 'MainController'
        })

        .state('shop', {
            name: 'shop',
            url: '/shop',
            templateUrl: '../views/shop.html',
            controller: 'ShopController'
        })

        .state('service', {
            name: 'service',
            url: '/service/category/:id',
            templateUrl: '../views/service-categories.html',
            controller: 'ServiceCategoriesController'
        })

        .state('service-sub', {
            name: 'service-sub',
            url: '/service/subcategory/:id',
            templateUrl: '../views/service-sub-categories.html',
            controller: 'ServiceSubCategoriesController'
        })

        .state('service-subcategory-sub', {
            name: 'service-subcategory-sub',
            url: '/service/subcategory/sub/:id',
            templateUrl: '../views/service-subcategory-sub.html',
            controller: 'ServiceSubCategoriesSubController'
        })

        .state('product', {
            name: 'product',
            url: '/product/category/:id',
            templateUrl: '../views/product-categories.html',
            controller: 'ProductCategoriesController'
        })

        .state('product-sub', {
            name: 'product-sub',
            url: '/product/subcategory/:id',
            templateUrl: '../views/product-sub-categories.html',
            controller: 'ProductSubCategoriesController'
        })

        .state('product-category-sub', {
            name: 'product-category-sub',
            url: '/product/subcategory/sub/:id',
            templateUrl: '../views/product-subcategory-sub.html',
            controller: 'SubCategorySubController'
        })

        .state('news', {
            name: 'news',
            url: '/news/:id',
            templateUrl: '../views/news-describe.html',
            controller: 'NewsDescribeController'
        })

        .state('map', {
            name: 'map',
            url: '/map',
            templateUrl: '../views/map.html',
            controller: 'MapController'
        })


        /*
        *  Admin panel
        * */
        .state('admin', {
            name: 'admin',
            url: '/admin',
            templateUrl: '../views/admin.html',
            controller: 'AdminController'
        })

        .state('adminPanel', {
            name: 'adminPanel',
            url: '/admin/panel',
            templateUrl: '../views/adminPanel.html',
            controller: 'AdminController'
        })

        .state('adminNews', {
            name: 'adminNews',
            url: '/admin/panel/news',
            templateUrl: '../views/admin-news.html',
            controller: 'AdminNewsController'
        })

        .state('adminProducts', {
            name: 'adminProducts',
            url: '/admin/panel/products',
            templateUrl: '../views/admin-products.html',
            controller: 'AdminProductsController'
        })

        .state('adminProductsEdit', {
            name: 'adminProductsEdit',
            url: '/admin/panel/product/edit/:id',
            templateUrl: '../views/admin-products-edit.html',
            controller: 'AdminProductsEditController'
        })

        .state('adminServices', {
            name: 'adminServices',
            url: '/admin/panel/services',
            templateUrl: '../views/admin-services.html',
            controller: 'AdminServicesController'
        })

        .state('adminServicesEdit', {
            name: 'adminServicesEdit',
            url: '/admin/panel/services/edit/:id',
            templateUrl: '../views/admin-services-edit.html',
            controller: 'AdminServicesEditController'
        })

    //$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
});





