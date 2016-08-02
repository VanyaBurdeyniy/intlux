artVikonce.controller('SubCategorySubController', ['$scope', '$stateParams', '$location', function($scope, $stateParams, $location) {

    $('html').css({
        'height':'auto',
        'background-repeat':'no-repeat'
    });





    $('footer').addClass('resized-footer');
    $('.back-to-top').removeClass('top-3');



    $scope.products = $scope.subProducts.filter(function(product) {
        return product.id == $stateParams.id;
    });


    if ($scope.products.length == 0) {
        $scope.subServices.forEach(function(service) {
            if (service.id == $stateParams.id) {
                $scope.products.push(service);
            }
        });
    }

    console.log($scope.products);

    $scope.goBack = function(product) {
        console.log(product);
        $location.path('/service/subcategory/'+ product.parentId);
    };

    $scope.productCategories = function(product) {
        if (product.subCategories) {
            $location.path('/product/subcategory/sub/'+ product.id);
        } else {
            $location.path('/product/category/'+ product.id);
        }
    };
}]);