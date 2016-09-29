artVikonce.controller('AdminServiceNewController', ['$scope', '$rootScope', '$http', '$location',
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
            var service = $scope.service;
            var indicator = $scope.chosen;

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
        });
        //$scope.save = function (service, indicator) {
        //    service.img = {
        //        base64: $('.dz-image').children().attr('src'),
        //        name: $('.dz-filename').children().text().replace('.', '')
        //    };
        //    service.decriptionBig = tinyMCE.activeEditor.getContent();
        //    if (indicator.hasCategory) {
        //        $http.post('/service/add', service).then(function (data) {
        //            console.log(data);
        //        })
        //    } else if (indicator.hasSubCategory) {
        //        service.serviceId = indicator._id;
        //        $http.post('/service/category/add', service).then(function (data) {
        //            console.log(data);
        //        })
        //    } else {
        //        service.subServiceId = indicator._id;
        //        $http.post('/service/category/sub/add', service).then(function (data) {
        //            console.log(data);
        //        })
        //    }
        //};


        $scope.goToAllService = function () {
            $location.path('/admin/panel/services');
        };

        $scope.toTrustedHTML = function (html) {
            return $sce.trustAsHtml(html);
        };


    }]);





//TODO
//1. Цвет языка ---> такой же как в слайдере (зеленый текст) ++
//2. Админ панель ---> поменять\проверить название всех кнопок (соответствие) ++
//3. Пункт меню "Сферы влияния" ---> переходит не в начало страницы
//4. Все пункты и подпукнты из Компрессорного оборудования перенести на главную страницу ++
//5. Skype ---> сделать активной и текст ++
//6. Админ панель ---> закончить функционал
//7."Intlux Energy © All Rights Reserved." ---> сделать цвета логотипа ++
//8. Пофиксить пропадание меню ++

// Спросить маму откуда я взялся (капуста или морковка или аист) + спросить за планировку тех паспорт спроси а то мама не поймет
// Ааааам может послушаешь да панееельный какой-нибудь может блочный мммм спросишь какой дом панельный блочный какой там какой монолитный перегородки из чего в общем из железобетона или из азбестацемента

//TODO --- ПЕРЕВОДЫ (ждать правильных переводов)
