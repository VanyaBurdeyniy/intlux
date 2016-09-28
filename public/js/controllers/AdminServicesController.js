artVikonce.controller('AdminServicesController', ['$scope', '$rootScope', '$http', '$sce', '$location',
    function($scope, $rootScope, $http, $sce, $location) {

        $rootScope.isAdmin = true;
        $rootScope.isProducts = false;
        $rootScope.isServices = true;
        $rootScope.isNews = false;

        $scope.src = '';
        $scope.productCategoryId = '';
        $scope.newProduct = {
            'decriptionBig': '',
            'categories': []
        };
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

        $("form#drop").dropzone({url: "/file/post"});


        $http.get('/services').then(function (data) {
            data.data = data.data.filter(function (product) {
                return $.parseHTML(product.decriptionBig);
            });
            data.data.forEach(function (product) {
                if (product.hasCategory) {
                    $http.get('/service/category/').then(function (data) {
                        product.subProducts = data.data;
                        product.subProducts.forEach(function(subProduct) {
                            if (subProduct.hasSubCategory) {
                                $http.get('/service/category/sub').then(function (data) {
                                    subProduct.subServicesSub = data.data;
                                })
                            }
                        })
                    })
                }
            });
            $scope.productList = data.data;
            console.log($scope.productList);
        });

        $scope.toTrustedHTML = function (html) {
            return $sce.trustAsHtml(html);
        };

        $scope.editProduct = function(product) {
            console.log(product);
            $location.path('/admin/panel/services/edit/'+product._id);
            location.reload();
        };

        $scope.goToAddService = function() {
            $location.path('/admin/panel/service/add');
        }

    }]);