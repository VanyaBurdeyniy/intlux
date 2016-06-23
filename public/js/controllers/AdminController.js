artVikonce.controller('AdminController', ['$scope', '$http', '$location', 'Authentication', function($scope, $http, $location, Authentication) {

    $scope.authentication = Authentication;

    console.log($scope.authentication);

    if ($scope.authentication.user) $location.path('/admin/panel');

    $scope.signIn = function(credentials) {
        console.log(credentials);
        $http.post('/auth/signin', credentials).then(function(data) {
            $scope.authentication.user = data;
            console.log(data);
            if (data.data) {
                $location.path('/admin/panel');
            }
        });
    }

}]);