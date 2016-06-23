var artVikonce = angular.module('artVikonce', [
    'ui.router'
]);

artVikonce.config(function($stateProvider, $urlRouterProvider, $locationProvider)
{
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

        .state('product', {
            name: 'product',
            url: '/product/category/:id',
            templateUrl: '../views/product-categories.html',
            controller: 'ProductCategoriesController'
        })

        .state('map', {
            name: 'map',
            url: '/map',
            templateUrl: '../views/map.html',
            controller: 'MapController'
        })

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

    //$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
});





