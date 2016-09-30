artVikonce.controller('AdminProductNewController', ['$scope', '$rootScope', '$http', '$location', '$sce'
,    function ($scope, $rootScope, $http, $location, $sce) {

        $rootScope.isAdmin = true;
        $rootScope.isServices = false;
        $rootScope.isNews = true;
        $rootScope.isProducts = false;
        $scope.product = {};
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

        $http.get('/products').then(function (data) {
            $scope.productList = data.data;
            $http.get('/products/category').then(function (data) {
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
            var product = $scope.product;
            if (typeof $scope.chosen === 'string') var indicator = JSON.parse($scope.chosen);

            product.img = {
                base64: $('.dz-image').children().attr('src'),
                name: $('.dz-filename').children().text().replace('.', '')
            };
            product.decriptionBig = tinyMCE.activeEditor.getContent();
            if (indicator) {
                product.productId = indicator._id;
                $http.post('/products/category/add', product).then(function (data) {
                    console.log(data);
                })
            } else {
                product.hasCategory = false;
                $http.post('/products/add', product).then(function (data) {
                    console.log(data);
                })
            }
        });

        $scope.goToAllService = function () {
            $location.path('/admin/panel/products');
        };

        $scope.toTrustedHTML = function (html) {
            return $sce.trustAsHtml(html);
        };


    }]);
