artVikonce.controller('AdminController', ['$scope', '$rootScope', '$http', '$location', 'Authentication', function($scope, $rootScope, $http, $location, Authentication) {

    $scope.authentication = Authentication;

    console.log($scope.authentication);

    $rootScope.isAdmin = true;

    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem('testObject');

    if (retrievedObject) {
        $location.path('/admin/panel');
    }

    if ($scope.authentication.user) $location.path('/admin/panel');

    $http.get('/news').then(function(data) {
        console.log(data);
        data.data = data.data.filter(function(news) {
            return news.img.replace('"', '');
        });
        data.data = data.data.filter(function(news) {
            return news.content = $('<div>'+$.parseHTML(news.content)+'</div>');
        });
        console.log(data.data);
       $scope.news = data.data;
    });

    $scope.changeColor = function (className) {
        localStorage.setItem('className', className);
        $http.put('/design/edit', {class: className}).then(function(data) {
            console.log(data);
        });
    };

    $scope.signIn = function(credentials) {
        var user = {
          'username':'test',
            'password':'testtest'
        };
        $http.post('/auth/signin', user).then(function(data) {
            $scope.authentication.user = data;
            console.log(data);
            var testObject = { isLoggedIn: true };
            localStorage.setItem('testObject', JSON.stringify(testObject));

            if (data.data) {
                $location.path('/admin/panel');
            }
        });



        $(document).ready(function () {
            var trigger = $('.hamburger'),
                overlay = $('.overlay'),
                isClosed = false;

            trigger.click(function () {
                hamburger_cross();
            });

            function hamburger_cross() {

                if (isClosed == true) {
                    overlay.hide();
                    trigger.removeClass('is-open');
                    trigger.addClass('is-closed');
                    isClosed = false;
                } else {
                    overlay.show();
                    trigger.removeClass('is-closed');
                    trigger.addClass('is-open');
                    isClosed = true;
                }
            }

            $('[data-toggle="offcanvas"]').click(function () {
                $('#wrapper').toggleClass('toggled');
            });

        });
    };

}]);