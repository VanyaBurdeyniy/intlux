artVikonce.controller('AdminProductNewController', ['$scope', '$rootScope', '$http', '$location',
    function ($scope, $rootScope, $http, $location) {

        $rootScope.isAdmin = true;
        $rootScope.isServices = false;
        $rootScope.isNews = true;
        $rootScope.isProducts = false;
        $scope.service = {};
        $scope.chosen = {};

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

        $http.get('/services').then(function (data) {
            $scope.productList = data.data;
            $http.get('/service/category').then(function (data) {
                $scope.productList = $scope.productList.concat(data.data);
                console.log($scope.productList);
            });
            $scope.productList = data.data;
            console.log($scope.productList);
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

        $('.save').click(function () {
            $http.post('/news/add', {
                content: tinyMCE.activeEditor.getContent(),
                img: {
                    base64: $('.dz-image').children().attr('src'),
                    name: $('.dz-filename').children().text().replace('.', '')
                },
                description: $scope.description,
                title: $scope.title
            }).then(function (data) {
                console.log(data);
            });
        });
        $scope.save = function (service, indicator) {
            service.img = {
                base64: $('.dz-image').children().attr('src'),
                name: $('.dz-filename').children().text().replace('.', '')
            };
            service.decriptionBig = tinyMCE.activeEditor.getContent();
            if (indicator.hasCategory) {
                $http.post('/service/add', service).then(function (data) {
                    console.log(data);
                })
            } else if (indicator.hasSubCategory) {
                service.serviceId = indicator._id;
                $http.post('/service/category/add', service).then(function (data) {
                    console.log(data);
                })
            } else {
                service.subServiceId = indicator._id;
                $http.post('/service/category/sub/add', service).then(function (data) {
                    console.log(data);
                })
            }
        };


        $scope.goToAllService = function () {
            $location.path('/admin/panel/services');
        };

        $scope.toTrustedHTML = function (html) {
            return $sce.trustAsHtml(html);
        };


    }]);