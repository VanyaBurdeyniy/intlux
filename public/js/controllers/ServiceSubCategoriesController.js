artVikonce.controller('ServiceSubCategoriesController', ['$scope', '$http', '$stateParams', '$location',
    function ($scope, $http, $stateParams, $location) {

        $scope.newProducts = [];

        $http.get('/service/category').then(function (data) {
            $scope.services = data.data.filter(function(service) {
                return service.serviceId == $stateParams.id;
            });
        });

        $scope.isProducts = true;
        $http.get('/services').then(function (data) {
            console.log(data);
            $scope.currentService = data.data.filter(function (service) {
                return service._id == $stateParams.id;
            });
        });

        $('html').css({
            'height': 'auto',
            'background-repeat': 'no-repeat'
        });
        $('footer').addClass('resized-footer');
        $('.back-to-top').removeClass('top-3');

        $scope.productCategories = function (service) {
            if (service.hasSubCategory) {
                $location.path('/service/subcategory/sub/' + service.serviceId);
            } else {
                $location.path('/service/category/' + service._id);
            }
        };

        $scope.goToBlock = function () {
            var target;
            target = '#services-container';
            localStorage.setItem('hash', target);
            $location.path('/');
        };
    }]);