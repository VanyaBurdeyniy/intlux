artVikonce.controller('AdminNewsController', ['$scope', '$rootScope', '$http', '$location', function($scope, $rootScope, $http, $location) {

    $rootScope.isAdmin = true;
    $rootScope.isServices = false;
    $rootScope.isNews = true;
    $rootScope.isProducts = false;

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


    var myDropzone = new Dropzone("form#drop", {
        uploadMultiple: false, thumbnailWidth: "700",
        thumbnailHeight: "700"
    });
    myDropzone.options.myAwesomeDropzone = {
        maxFilesize: 2,
        uploadMultiple: false,
        thumbnailWidth: "250",
        thumbnailHeight: "250"
    };
    dropzone = myDropzone;

    dropzone.options.myAwesomeDropzone = {
        init: function () {
            this.on("addedfile", function (file) {
                alert("Added file.");
            });
        }
    };

    $scope.src = '';

    $('.save').click(function() {
        $http.post('/news/add', {
            content:tinyMCE.activeEditor.getContent(),
            img: {
                base64: $('.dz-image').children().attr('src'),
                name: $('.dz-filename').children().text().replace('.', '')
            },
            description: $scope.description,
            title: $scope.title
        }).then(function(data) {
            console.log(data);
        });
    });
    $scope.saveNews = function() {


    };



    $scope.goToAllNews = function() {
        $location.path('admin/panel/news/all');
    }


}]);