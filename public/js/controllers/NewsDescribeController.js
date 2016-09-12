artVikonce.controller('NewsDescribeController', ['$scope', '$stateParams', '$http', '$sce', '$location',
    function($scope, $stateParams, $http, $sce, $location) {

    $http.get('/news').then(function(data) {

        $scope.news = data.data.filter(function(news) {
            return news._id == $stateParams.id;
        });
    });

    $scope.goToBlock = function () {
        var target;
        target = '#news-container';
        localStorage.setItem('hash', target);
        $location.path('/');
    };

    $scope.toTrustedHTML = function (html) {
        return $sce.trustAsHtml(html);
    };
    $('html').css('height', 'auto');

}]);