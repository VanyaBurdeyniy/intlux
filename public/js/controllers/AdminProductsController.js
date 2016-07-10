artVikonce.controller('AdminProductsController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

    $rootScope.isAdmin = true;
    $rootScope.isActiveSidebar = true;

    $scope.src = '';
    $scope.newProduct = {
        'decriptionSmall':'',
        'decriptionBig':'',
        'categories':[]
    };


    //UPLOAD IMAGE !!!

    $scope.previewFile = function() {
        var preview = document.querySelector('#product_img');
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();

        reader.addEventListener("load", function () {
            preview.src = reader.result;
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    function toDataUrl(url, callback){
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function() {
            var reader  = new FileReader();
            reader.onloadend = function () {
                callback(reader.result);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.send();
    }

    $scope.save = function() {
        var src = document.getElementsByTagName('img')[0].src;
        toDataUrl(src, function(base64Img){
            $scope.src = JSON.stringify(base64Img);
        });
    };

    $scope.addProduct = function(product) {

        var src = document.getElementById('product_img').src;
        toDataUrl(src, function(base64Img){
            $scope.src = JSON.stringify(base64Img);
            alert($scope.src);

            product.img = $scope.src;

            $http.post('/products/add', product).then(function(data) {
                console.log(data);
            });
        });
    };




}]);