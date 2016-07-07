artVikonce.controller('AdminNewsController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

    $rootScope.isAdmin = true;
    $rootScope.isActiveSidebar = true;

    tinymce.init({
        selector: 'textarea',
        height: 500,
        plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table contextmenu paste code'
        ],
        toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
        content_css: [
            '//www.tinymce.com/css/codepen.min.css'
        ]
    });





    $scope.src = '';


    //UPLOAD IMAGE !!!

    $scope.previewFile = function() {
        var preview = document.querySelector('img');
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();

        reader.addEventListener("load", function () {
            preview.src = reader.result;
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }

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

    //document.getElementsByClassName('click')[0].onclick = function() {
    //
    //};

    $scope.save = function() {
        var src = document.getElementsByTagName('img')[0].src;
        toDataUrl(src, function(base64Img){
            alert(base64Img);
            $scope.src = JSON.stringify(base64Img);
            alert(typeof base64Img);
        });

        $http.post('/news/add', {content:tinyMCE.activeEditor.getContent(), img: $scope.src}).then(function(data) {
           console.log(data);
        });
    };




}]);