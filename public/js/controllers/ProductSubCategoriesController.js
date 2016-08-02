artVikonce.controller('ProductSubCategoriesController', ['$scope', '$http', '$stateParams', '$location',
    function ($scope, $http, $stateParams, $location) {

        $scope.newProducts = [];

        $http.get('/products/category/' + $stateParams.id).then(function (data) {
            $scope.products = data.data;
        });

        $scope.isProducts = true;
        $http.get('/products').then(function (data) {
            console.log(data);
            $scope.currentProduct = data.data.filter(function (product) {
                return product._id == $stateParams.id;
            });
        });

        $('html').css({
            'height': 'auto',
            'background-repeat': 'no-repeat'
        });
        $('footer').addClass('resized-footer');
        $('.back-to-top').removeClass('top-3');

        $scope.productCategories = function (product) {
            $location.path('/product/category/' + product._id);
        };

        $scope.goToBlock = function () {
            var target;
            if ($scope.isProducts) {
                target = '#products-container';
            } else {
                target = '#services-container';
            }
            localStorage.setItem('hash', target);
            $location.path('/');
        };
    }]);