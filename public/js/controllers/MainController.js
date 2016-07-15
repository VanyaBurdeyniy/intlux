artVikonce.controller('MainController', ['$scope', '$location', '$http', '$rootScope', '$stateParams',
    function($scope, $location, $http, $rootScope, $stateParams) {

    $scope.productCategories = function(product) {
        if (product.subCategories) {
            $location.path('/product/subcategory/'+ product.id);
        } else {
            $location.path('/product/category/'+ product.id);
        }
    };

    $scope.serviceCategories = function(service) {
        if (service.subServices) {
            $location.path('/service/subcategory/'+ service.id);
        } else {
            $location.path('/service/category/'+ service.id);
        }
    };


    $scope.goToNewsDescribe = function(id) {
        $location.path('/news/'+ id);
    };

    function getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        console.log(dataURL);
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }

    $('html').css({
        'height':'100%',
        'background-repeat':'repeat-y'
    });

    $scope.saveImage = function() {
        var data = {
            username:'admin',
            password:'intluxAdmin'
        };
        $http.post('/auth/signup', data).then(function(res){
           console.log(res);
        });
    };



    $scope.products = [
        {
            'name':'КОМПРЕССОРНОЕ ОБОРУДОВАНИЕ',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'subCategories':[
                {
                    'name':'Центробежные',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'223'
                },
                {
                    'name':'Поршневые',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'564'
                },
                {
                    'name':'Роторные',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'654'
                },
                {
                    'name':'Вакуумные',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'866'
                },
                {
                    'name':'Прочие',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'34456'
                }
            ],
            'id':'145531'
        },
        {
            'name':'ТОРЦОВЫЕ УПЛОТНЕНИЯ',
            'descriptionSmall':'Описание категории',
            'subCategories':[
                {
                    'name':'Одинарное',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'73567'
                },
                {
                    'name':'Двойное',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'87487'
                },
                {
                    'name':'Тандем',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'9997777'
                },
                {
                    'name':'Картриджного типа',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'124555'
                },
                {
                    'name':'Газодинамическое',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'54422'
                },
                {
                    'name':'Сухое газовое',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'9876'
                }
            ],
            'img':'img/default-image.png',
            'id':'868634'
        },
        {
            'name':'НАСОСНОЕ ОБОРУДОВАНИЕ',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'subCategories':[
                {
                    'name':'Центробежные',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'112233'
                },
                {
                    'name':'Осевые',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'46446'
                },
                {
                    'name':'Вихревые',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'573466'
                },
                {
                    'name':'Поршневые',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'67457'
                },
                {
                    'name':'Роторные',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'625235'
                },
                {
                    'name':'Прочие',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'7788'
                }
            ],
            'id':'385699'
        },
        {
            'name':'ДВИГАТЕЛИ',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'890776',
            'subCategories':[
                {
                    'name':'Переменного тока',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'003554'
                },
                {
                    'name':'Постоянного тока',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'003434'
                }
            ]
        },
        {
            'name':'ФИЛЬТРАЦИОННОЕ ОБОРУДОВАНИЕ',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'subCategories':[
                {
                    'name':'Коалессоры',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'03434'
                },
                {
                    'name':'Сетчатые',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'034332'
                },
                {
                    'name':'Сепараторы',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'234455'
                },
                {
                    'name':'Скрубберы',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'3465700'
                }
            ],
            'id':'133755'
        },
        {
            'name':'УСТАНОВКИ ГАЗА',
            'descriptionSmall':'Описание категории',
            'subCategories':[
                {
                    'name':'Осушки',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'8777'
                },
                {
                    'name':'Нагрев газа',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'3777'
                },
                {
                    'name':'Бустреные',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'2333'
                },
                {
                    'name':'Разделение азота',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'74676'
                }
            ],
            'img':'img/default-image.png',
            'id':'929292'
        },
        {
            'name':'БУРОВОЕ ОБОРУДОВАНИЕ',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'subCategories':[
                {
                    'name':'Долота',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'39799'
                },
                {
                    'name':'Бурильные трубы',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'093232'
                },
                {
                    'name':'Забойные двигатели',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'11455'
                }
            ],
            'id':'887387'
        },
        {
            'name':'ЗАПОРНАЯ АРМАТУРА',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'subCategories':[
                {
                    'name':'Клапаны',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'321008'
                },
                {
                    'name':'Вентили',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'34080'
                },
                {
                    'name':'Заглушки',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'003445'
                },
                {
                    'name':'Фланцы',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'02233'
                }
            ],
            'id':'372222'
        }
    ];

    $scope.services = [
        {
            'name':'КОМПРЕССОРНОЕ ОБОРУДОВАНИЕ',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'subServices':[
                {
                    'name':'Проведение реконструкции ЦК с последующим изменением параметров работы',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'865656'
                },
                {
                    'name':'Проведение модернизации центробежных компрессоров',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'subServices':[
                        {
                            'name':'Замена маслосистемы компрессора на СГУ с выполнением полного комплекса под ключ',
                            'descriptionSmall':'Описание категории',
                            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                            'img':'img/default-image.png',
                            'id':'235322'
                        },
                        {
                            'name':'Замена подшипников на современные высокотехнологические с конструкцией сухой-картер',
                            'descriptionSmall':'Описание категории',
                            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                            'img':'img/default-image.png',
                            'id':'885600'
                        },
                        {
                            'name':'Замена зубчатых муфт на современные высокотехнологические пластинчатые муфты',
                            'descriptionSmall':'Описание категории',
                            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                            'img':'img/default-image.png',
                            'id':'95677'
                        },
                        {
                            'name':'Замена устаревших технических систем обеспечения работы компрессора на новые',
                            'descriptionSmall':'Описание категории',
                            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                            'img':'img/default-image.png',
                            'id':'003434'
                        },
                        {
                            'name':'Замена системы САУ компрессоров',
                            'descriptionSmall':'Описание категории',
                            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                            'img':'img/default-image.png',
                            'id':'422322'
                        }
                    ],
                    'id':'1342'
                },
                {
                    'name':'Сервисное обслуживание ЦК',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'231134'
                }
            ],
            'id':'463333'
        },
        {
            'name':'СЕРВИС СГУ',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'245343'
        },
        {
            'name':'СЕРВИС НАСОСНОГО ОБОРУДОВАНИЯ',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'1143445'
        },
        {
            'name':'МОДЕРНИЗАЦИЯ СИСТЕМ ФИЛЬТРАЦИИ',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'98766'
        },
        {
            'name':'СЕРВИС ДВИГАТЕЛЕЙ',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'10076'
        },
        {
            'name':'СЕРВИС И РЕМОНТ БУРОВОГО ОБОРУДОВАНИЯ',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'00783'
        }
    ];



    $rootScope.isAdmin = false;


        $scope.goToBlock = function(target) {
            var target = $(target).attr('data-scroll-item');
            console.log(window.location.hash);
            if (window.location.hash !== "#/") {
                if (target) {
                    localStorage.setItem('hash', target);
                }
                $location.path('/');
            } else {
                $target = $(target);
                $('html, body').stop().animate({
                    'scrollTop':  $target.offset().top //no need of parseInt here
                }, 900, 'swing', function () {
                    window.location.hash = target;
                });
            }
        };

        function goToBlock(newTarget) {
            if (newTarget) {
                var target = newTarget;
                $target = $(target);
                $('html, body').stop().animate({
                    'scrollTop':  $target.offset().top //no need of parseInt here
                }, 900, 'swing', function () {
                    window.location.hash = target;
                });
            }
        }
        goToBlock(localStorage.getItem('hash'));

    /*
    *  JQUERY FUNCTIONS
    * */
    $(document).ready(function() {
        $('a.back-to-top').on('click',function (e) {
            var target = this.hash;
            $target = $(target);
            if ($target.offset()) {
                $('html, body').stop().animate({
                    'scrollTop':  $target.offset().top //no need of parseInt here
                }, 900, 'swing', function () {
                    window.location.hash = target;
                });
            } else {
                $location.path('/');
            }
        });

        $('#SkypeButton_Call').load(function() {
            Skype.ui({
                "name": "call",
                "element": "SkypeButton_Call",
                "participants": ["intlux.energy"],
                "imageSize": 32
            });
        });

        $('footer').removeClass('resized-footer');
        $('.back-to-top').addClass('top-3');

        $(window).scroll(function (event) {
            var y = $(this).scrollTop(); //set position from top in pixels
            if (y >= 100) {
                $('nav').addClass('resized');
                $('.change-lang').addClass('change-lang-collapse');
            } else {
                $('nav').removeClass('resized');
                $('.change-lang').removeClass('change-lang-collapse');
            }

            if($(window).scrollTop() + $(window).height() > $(document).height() - 30) {
                $('footer').addClass('resized-footer');
                $('.back-to-top').removeClass('top-3');
            } else {
                $('footer').removeClass('resized-footer');
                $('.back-to-top').addClass('top-3');
            }
        });

        jQuery(document).on('click', '.mega-dropdown', function(e) {
            e.stopPropagation()
        });

        $('.product-list div').mouseover(function() {
            $('.product-list div img').css({
                '-webkit-filter':'blur(2px)',
                'filter':'blur(2px)'
            });
            $(this).children().css({
                '-webkit-filter':'none',
                'filter':'none'
            })
        }).mouseout(function() {
            $('.product-list div img').css({
                '-webkit-filter':'none',
                'filter':'none'
            });
        });

        $('.dropdown-hover').mouseover(function() {
            $('.'+$(this).attr('data-dropdown-item')).show();
        }).mouseout(function() {
            $('.'+$(this).attr('data-dropdown-item')).hide();
        });
        $('.dropdown-menu-hover').mouseover(function() {
            $(this).show();
        }).mouseout(function() {
            $(this).hide();
        });



        /*
        *  Slider
        * */
        (function(){
            "use strict";

            var $slider = $('#slider');
            if (!$slider.length) return;

            var $sliderElements = $slider.find('article'),
                sliderElementLastIndex = $sliderElements.length - 1,
                timer,
                actualIndex = 0,
                step = function() {
                    clearTimeout(timer);
                    timer = setTimeout(function(){
                        if (actualIndex < sliderElementLastIndex) {
                            actualIndex++;
                        } else {
                            actualIndex = 0;
                        }
                        $sliderElements.removeClass('show');
                        $sliderElements.eq(actualIndex).addClass('show');

                        step();
                    },5000);
                };

            clearTimeout(timer);
            step();

        })();


    });


 }]);