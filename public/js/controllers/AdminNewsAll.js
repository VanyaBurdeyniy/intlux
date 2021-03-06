artVikonce.controller('AdminNewsAllController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

    $rootScope.isAdmin = true;
    $rootScope.isServices = false;
    $rootScope.isNews = true;
    $rootScope.isProducts = false;


    function init() {
        $http.get('/news')
            .then(function(data) {
                $scope.news = data.data;
                console.log(data);
            })
            .catch(function(err) {
                console.log(err);
            });
    }
    init();

    $scope.deleteNew = function(data) {
        $http.post('/news/remove', data)
            .then(function(data) {
               console.log(data);
                init();
            });
    }

}]);