var artVikonce = angular.module('artVikonce', [
    'ui.router',
    'flow'
]);

artVikonce.config(function($stateProvider, $urlRouterProvider, $locationProvider)
{

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





