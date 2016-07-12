artVikonce.controller('AdminController', ['$scope', '$rootScope', '$http', '$location', 'Authentication', function($scope, $rootScope, $http, $location, Authentication) {

    $scope.authentication = Authentication;

    console.log($scope.authentication);

    $rootScope.isAdmin = true;

    if ($scope.authentication.user) $location.path('/admin/panel');

    $http.get('/news').then(function(data) {
        console.log(data);
        data.data = data.data.filter(function(news) {
            return news.img.replace('"', '');
        });
        data.data = data.data.filter(function(news) {
            return news.content = $('<div>'+$.parseHTML(news.content)+'</div>');
        });
        //data.data.forEach(function(news) {
        //    $('.p').append($.parseHTML(news.content));
        //});
        console.log(data.data);
       $scope.news = data.data;
    });

    $scope.signIn = function(credentials) {
        //console.log(credentials);
        //$http.post('/auth/signin', credentials).then(function(data) {
        //    $scope.authentication.user = data;
        //    console.log(data);
        //    if (data.data) {
        //        $location.path('/admin/panel');
        //    }
        //});
        var user = {
          'username':'test',
            'password':'testtest'
        };
        $http.post('/auth/signin', user).then(function(data) {
            $scope.authentication.user = data;
            console.log(data);
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







    //UPLOAD IMAGE !!!

        //<input type="file" onchange="previewFile()"><br>
        //<img src="" height="200" alt="Image preview...">
        //<button class="click">tehrh</button>

    //function previewFile() {
    //    var preview = document.querySelector('img');
    //    var file    = document.querySelector('input[type=file]').files[0];
    //    var reader  = new FileReader();
    //
    //    reader.addEventListener("load", function () {
    //        preview.src = reader.result;
    //    }, false);
    //
    //    if (file) {
    //        reader.readAsDataURL(file);
    //    }
    //}
    //
    //function toDataUrl(url, callback){
    //    var xhr = new XMLHttpRequest();
    //    xhr.responseType = 'blob';
    //    xhr.onload = function() {
    //        var reader  = new FileReader();
    //        reader.onloadend = function () {
    //            callback(reader.result);
    //        }
    //        reader.readAsDataURL(xhr.response);
    //    };
    //    xhr.open('GET', url);
    //    xhr.send();
    //}
    //
    //document.getElementsByClassName('click')[0].onclick = function() {
    //    var src = document.getElementsByTagName('img')[0].src;
    //    alert(src);
    //    toDataUrl(src, function(base64Img){
    //        alert(base64Img);
    //        // Base64DataURL
    //    });
    //}

}]);