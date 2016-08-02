artVikonce.controller('ServiceSubCategoriesSubController', ['$scope', '$http', '$stateParams', '$location',
    function ($scope, $http, $stateParams, $location) {

        $http.get('/service/category/sub').then(function (data) {
            $scope.services = data.data;
        });

        $http.get('/service/category').then(function (data) {
            $scope.currentService = data.data.filter(function (service) {
                return service._id == $scope.services[0].subServiceId;
            });
        });

        $scope.productCategories = function (service) {
            $location.path('/service/category/' + service._id);
        };

        $scope.goBack = function (id) {
            $location.path('/service/subcategory/' + id);
        };


        $('html').css({
            'height': 'auto',
            'background-repeat': 'no-repeat'
        });
        $('footer').addClass('resized-footer');
        $('.back-to-top').removeClass('top-3');
    }]);