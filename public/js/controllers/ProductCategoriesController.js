artVikonce.controller('ProductCategoriesController', ['$scope', '$stateParams', '$rootScope', function($scope, $stateParams, $rootScope) {

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


    $scope.subServices = [
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
        },
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
    ];


    $('footer').addClass('resized-footer');
    $('.back-to-top').removeClass('top-3');
    $('html').css({
        'height':'auto',
        'background-repeat':'no-repeat'
    });


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


    $scope.subProducts = [
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
        {
            'name':'Скрубберы',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'3465700'
        },
        {
            'name':'ПРИНЦИП ТИПОЛОГИИ',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'12445667'
        },
        {
            'name':'Test',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'6567788'
        }
    ];


    //$scope.products = $scope.products.filter(function(product) {
    //    return product.id == $stateParams.id;
    //});
    $scope.products.forEach(function(product) {
        $scope.products = [];
        if (product.id == $stateParams.id) {
            $scope.products.push(product);
        } else {
            $scope.subProducts.forEach(function(subProduct) {
                if (subProduct.id == $stateParams.id) {
                    $scope.products.push(subProduct);
                }
            });
        }
    });

    if ($scope.products.length == 0) {
        $scope.services.forEach(function(service) {
            if (service.id == $stateParams.id) {
                $scope.products.push(service);
            }
        });
    }

    if ($scope.products.length == 0) {
        $scope.subServices.forEach(function(service) {
            if (service.id == $stateParams.id) {
                $scope.products.push(service);
            }
        });
    }


    console.log($scope.products);
}]);