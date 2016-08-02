artVikonce.controller('NewsDescribeController', ['$scope', '$stateParams', '$http', '$sce',
    function($scope, $stateParams, $http, $sce) {

    $http.get('/news').then(function(data) {

        $scope.news = data.data.filter(function(news) {
            return news._id == $stateParams.id;
        });
    });

    $scope.toTrustedHTML = function (html) {
        return $sce.trustAsHtml(html);
    };
    $('html').css('height', 'auto');

}]);