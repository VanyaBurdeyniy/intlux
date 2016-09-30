artVikonce.controller('ProductCategoriesController', ['$scope', '$sce', '$stateParams', '$rootScope', '$location', '$http',
    function ($scope, $sce, $stateParams, $rootScope, $location, $http) {

        $http.get('/products').then(function (data) {
            $scope.products = data.data.filter(function (product) {
                return product._id == $stateParams.id;
            });
            if ($scope.products.length < 1) {
                $http.get('/products/category/one/' + $stateParams.id).then(function (data) {
                    $scope.products = data.data.filter(function (product) {
                        return product._id == $stateParams.id;
                    });
                });
            }
        });

        $scope.toTrustedHTML = function (html) {
            return $sce.trustAsHtml(html);
        };


        $scope.goBack = function (product) {
            if (!product.productId) {
                var target;
                target = '#products-container';
                localStorage.setItem('hash', target);
                $location.path('/');
            } else {
                $location.path('/product/subcategory/' + product.productId);
            }
        };

        $scope.goToBlock = function () {
            var target;
            target = '#services-container';
            localStorage.setItem('hash', target);
            $location.path('/');
        };


        $('a.link-nav[href^="#"]').on('click', function (e) {
            e.preventDefault();
            var target = this.hash;
            console.log(window.location.hash);
            if (window.location.hash !== "#/") {
                localStorage.setItem('hash', target);
                $location.path('/');
            } else {
                $target = $(target);
                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top //no need of parseInt here
                }, 900, 'swing', function () {
                    window.location.hash = target;
                });
            }
        });

        $('footer').addClass('resized-footer');
        $('.back-to-top').removeClass('top-3');
        $('html').css({
            'height': 'auto',
            'background-repeat': 'no-repeat'
        });
    }]);