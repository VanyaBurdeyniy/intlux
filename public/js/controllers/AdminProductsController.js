artVikonce.controller('AdminProductsController', ['$scope', '$rootScope', '$http', '$sce',
    function($scope, $rootScope, $http, $sce) {

    $rootScope.isAdmin = true;
    $rootScope.isActiveSidebar = true;

    $scope.src = '';
    $scope.productCategoryId = '';
    $scope.newProduct = {
        'decriptionBig':'',
        'categories':[]
    };

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

    $("form#drop").dropzone({ url: "/file/post" });

    $scope.addProduct = function(product) {

        product.img = {
            base64:$('.dz-image').children().attr('src'),
            name:$('.dz-filename').children().text().replace('.', '')
        };
        product.decriptionBig = tinyMCE.activeEditor.getContent();
        product.productId = $scope.productCategoryId;

        $http.post('/products/category/add', product).then(function(data) {
            console.log(data);
        });
    };



    $scope.imageStrings = [];
    $scope.processFiles = function(files){
        angular.forEach(files, function(flowFile, i){
            var fileReader = new FileReader();
            fileReader.onload = function (event) {
                var uri = event.target.result;
                $scope.imageStrings[i] = uri;
            };
            fileReader.readAsDataURL(flowFile.file);
        });
    };


    $http.get('/products').then(function(data) {
        data.data = data.data.filter(function(product) {
            return $.parseHTML(product.decriptionBig);
        });
        $scope.productList = data.data;
        console.log(data);
    });

        $scope.toTrustedHTML = function( html ){
            return $sce.trustAsHtml( html );
        }



}]);