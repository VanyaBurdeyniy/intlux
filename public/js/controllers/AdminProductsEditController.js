artVikonce.controller('AdminProductsEditController', ['$scope', '$rootScope', '$http', '$sce', '$location', '$stateParams',
    function ($scope, $rootScope, $http, $sce, $location, $stateParams) {

        $rootScope.isAdmin = true;
        $rootScope.isProducts = true;
        $rootScope.isServices = false;
        $rootScope.isNews = false;
        var dropzone;

        $scope.productCategoryId = '';
        $scope.productCategories = [];

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

        $scope.addProduct = function (product) {

            product.img = {
                base64: $('.dz-image').children().attr('src'),
                name: $('.dz-filename').children().text().replace('.', '')
            };
            product.decriptionBig = tinyMCE.activeEditor.getContent();
            product.productId = $scope.productCategoryId;

            $http.post('/products/category/add', product.id).then(function (data) {
                console.log(data);
            });
        };


        $scope.imageStrings = [];
        $scope.processFiles = function (files) {
            angular.forEach(files, function (flowFile, i) {
                var fileReader = new FileReader();
                fileReader.onload = function (event) {
                    var uri = event.target.result;
                    $scope.imageStrings[i] = uri;
                };
                fileReader.readAsDataURL(flowFile.file);
            });
        };


        $http.get('/products').then(function (data) {
            $scope.productList = data.data;
            if ($scope.productList) {
                $scope.productList = $scope.productList.filter(function (product) {
                    return product._id == $stateParams.id;
                });
                $scope.productList = $scope.productList[0];
                if ($scope.productList) {
                    tinymce.activeEditor.setContent($scope.productList.decriptionBig);
                } else {
                    $http.get('/products/category/one/' + $stateParams.id).then(function (data) {
                        $scope.subProducts = data.data;
                        $scope.productList = $scope.subProducts[0];
                        if ($scope.productList) {
                            tinymce.activeEditor.setContent($scope.productList.decriptionBig);
                        }
                    });
                }
            }

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
            //var mockFile = { name: $scope.productList.img.name, size: 12345 };
            //myDropzone.options.addedfile.call(myDropzone, mockFile);
            //myDropzone.options.thumbnail.call(myDropzone, mockFile, $scope.productList.img.path);
            dropzone = myDropzone;

            dropzone.options.myAwesomeDropzone = {
                init: function () {
                    this.on("addedfile", function (file) {
                        alert("Added file.");
                    });
                }
            };
        });

        $scope.edit = function (product) {
            product.img = {
                base64: $('.dz-image').children().attr('src'),
                name: $('.dz-filename').children().text().replace('.', '')
            };
            product.decriptionBig = tinyMCE.activeEditor.getContent();
            product.id = $stateParams.id;
            if (product.hasCategory) {
                $http.put('/products/edit', product).then(function (data) {
                    console.log(data);
                })
            } else {
                $http.put('/products/category/edit', product).then(function (data) {
                    console.log(data);
                })
            }
        };

        $scope.toTrustedHTML = function (html) {
            return $sce.trustAsHtml(html);
        };

        $scope.editProduct = function (product) {
            console.log(product);
            $location.path('/admin/panel/product/edit/' + product._id);
        };


    }]);