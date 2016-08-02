artVikonce.controller('ServiceCategoriesController', ['$scope', '$stateParams', '$rootScope', '$location', '$http',
    '$sce',
    function ($scope, $stateParams, $rootScope, $location, $http, $sce) {

        $http.get('/services').then(function(data) {
            $scope.services = data.data.filter(function(service) {
                return service._id == $stateParams.id;
            });

            if ($scope.services.length == 0) {
                $http.get('/service/category').then(function(data) {
                    $scope.services = data.data.filter(function(service) {
                        return service._id == $stateParams.id;
                    });

                    if ($scope.services.length == 0) {
                        $http.get('/service/category/sub').then(function(data) {
                            $scope.services = data.data.filter(function(service) {
                                return service._id == $stateParams.id;
                            });
                        });
                    }
                });
            }
            console.log($scope.services);
        });

        $scope.toTrustedHTML = function (html) {
            return $sce.trustAsHtml(html);
        };

        $scope.productCategories = function (product) {
            if (product.subServices) {
                $location.path('/product/subcategory/sub/' + product.id);
            } else {
                $location.path('/product/category/' + product.id);
            }
        };

        $scope.goBack = function (service) {
            if (service.hasCategory == true || service.hasCategory == false) {
                var target;
                target = '#services-container';
                localStorage.setItem('hash', target);
                $location.path('/');
            } else if (service.serviceId) {
                $location.path('/service/subcategory/' + service.serviceId);
            } else if (service.subServiceId) {
                $location.path('/service/subcategory/sub/' + service.subServiceId);
            }
        };

        $('html').css({
            'height': 'auto',
            'background-repeat': 'no-repeat'
        });

        $('footer').addClass('resized-footer');
        $('.back-to-top').removeClass('top-3');

    }]);