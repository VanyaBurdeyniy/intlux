artVikonce.controller('AdminFooterController', ['$scope', '$rootScope', '$http', '$location',
    function($scope, $rootScope, $http, $location) {

    $rootScope.isAdmin = true;
    $rootScope.isServices = false;
    $rootScope.isNews = true;
    $rootScope.isProducts = false;


        $http.get('/footer').then(function(data) {
            console.log(data);
        });


    $('.save').click(function() {
        var footer = {
          phone: $scope.phone,
            email: $scope.email,
            skype: {
                name: $scope.skype.name,
                address: $scope.skype.address
            }
        };
        $http.post('/footer/edit',  footer).then(function(data) {
            console.log(data);
        });
    });

}]);