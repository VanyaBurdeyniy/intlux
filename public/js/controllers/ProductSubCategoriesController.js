artVikonce.controller('ProductSubCategoriesController', ['$scope', '$stateParams', '$location', function($scope, $stateParams, $location) {

    $scope.newProducts = [];


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
                    'id':'223',
                    'parentId':'145531'
                },
                {
                    'name':'Поршневые',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'564',
                    'parentId':'145531'
                },
                {
                    'name':'Роторные',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'654',
                    'parentId':'145531'
                },
                {
                    'name':'Вакуумные',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'866',
                    'parentId':'145531'
                },
                {
                    'name':'Прочие',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'34456',
                    'parentId':'145531'
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
                    'id':'73567',
                    'prentId':'868634'
                },
                {
                    'name':'Двойное',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'87487',
                    'prentId':'868634'
                },
                {
                    'name':'Тандем',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'9997777',
                    'prentId':'868634'
                },
                {
                    'name':'Картриджного типа',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'124555',
                    'prentId':'868634'
                },
                {
                    'name':'Газодинамическое',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'54422',
                    'prentId':'868634'
                },
                {
                    'name':'Сухое газовое',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'9876',
                    'prentId':'868634'
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
                    'id':'112233',
                    'parentId':'385699'
                },
                {
                    'name':'Осевые',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'46446',
                    'parentId':'385699'
                },
                {
                    'name':'Вихревые',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'573466',
                    'parentId':'385699'
                },
                {
                    'name':'Поршневые',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'67457',
                    'parentId':'385699'
                },
                {
                    'name':'Роторные',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'625235',
                    'parentId':'385699'
                },
                {
                    'name':'Прочие',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'7788',
                    'parentId':'385699'
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
                    'id':'003554',
                    'parentId':'890776'
                },
                {
                    'name':'Постоянного тока',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'003434',
                    'parentId':'890776'
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
                    'id':'03434',
                    'prentId':'133755'
                },
                {
                    'name':'Сетчатые',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'034332',
                    'prentId':'133755'
                },
                {
                    'name':'Сепараторы',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'234455',
                    'prentId':'133755'
                },
                {
                    'name':'Скрубберы',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'3465700',
                    'prentId':'133755'
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
                    'id':'8777',
                    'parentId':'929292'
                },
                {
                    'name':'Нагрев газа',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'3777',
                    'parentId':'929292'
                },
                {
                    'name':'Бустреные',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'2333',
                    'parentId':'929292'
                },
                {
                    'name':'Разделение азота',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'74676',
                    'parentId':'929292'
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
                    'id':'39799',
                    'parentId':'887387'
                },
                {
                    'name':'Бурильные трубы',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'093232',
                    'parentId':'887387'
                },
                {
                    'name':'Забойные двигатели',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'11455',
                    'parentId':'887387'
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
                    'id':'321008',
                    'parentId':'372222'
                },
                {
                    'name':'Вентили',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'34080',
                    'parentId':'372222'
                },
                {
                    'name':'Заглушки',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'003445',
                    'parentId':'372222'
                },
                {
                    'name':'Фланцы',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'02233',
                    'parentId':'372222'
                }
            ],
            'id':'372222'
        }
    ];

    $scope.subProducts = [
        {
            'name':'Центробежные',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'223',
            'parentId':'145531'
        },
        {
            'name':'Поршневые',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'564',
            'parentId':'145531'
        },
        {
            'name':'Роторные',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'654',
            'parentId':'145531'
        },
        {
            'name':'Вакуумные',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'866',
            'parentId':'145531'
        },
        {
            'name':'Прочие',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'34456',
            'parentId':'145531'
        },
        {
            'name':'Одинарное',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'73567',
            'prentId':'868634'
        },
        {
            'name':'Двойное',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'87487',
            'prentId':'868634'
        },
        {
            'name':'Тандем',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'9997777',
            'prentId':'868634'
        },
        {
            'name':'Картриджного типа',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'124555',
            'prentId':'868634'
        },
        {
            'name':'Газодинамическое',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'54422',
            'prentId':'868634'
        },
        {
            'name':'Сухое газовое',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'9876',
            'prentId':'868634'
        },
        {
            'name':'Центробежные',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'112233',
            'parentId':'385699'
        },
        {
            'name':'Осевые',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'46446',
            'parentId':'385699'
        },
        {
            'name':'Вихревые',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'573466',
            'parentId':'385699'
        },
        {
            'name':'Поршневые',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'67457',
            'parentId':'385699'
        },
        {
            'name':'Роторные',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'625235',
            'parentId':'385699'
        },
        {
            'name':'Прочие',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'7788',
            'parentId':'385699'
        },
        {
            'name':'Переменного тока',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'003554',
            'parentId':'890776'
        },
        {
            'name':'Постоянного тока',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'003434',
            'parentId':'890776'
        },
        {
            'name':'Коалессоры',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'03434',
            'prentId':'133755'
        },
        {
            'name':'Сетчатые',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'034332',
            'prentId':'133755'
        },
        {
            'name':'Сепараторы',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'234455',
            'prentId':'133755'
        },
        {
            'name':'Скрубберы',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'3465700',
            'prentId':'133755'
        },
        {
            'name':'Осушки',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'8777',
            'parentId':'929292'
        },
        {
            'name':'Нагрев газа',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'3777',
            'parentId':'929292'
        },
        {
            'name':'Бустреные',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'2333',
            'parentId':'929292'
        },
        {
            'name':'Разделение азота',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'74676',
            'parentId':'929292'
        },
        {
            'name':'Долота',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'39799',
            'parentId':'887387'
        },
        {
            'name':'Бурильные трубы',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'093232',
            'parentId':'887387'
        },
        {
            'name':'Забойные двигатели',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'11455',
            'parentId':'887387'
        },
        {
            'name':'Клапаны',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'321008',
            'parentId':'372222'
        },
        {
            'name':'Вентили',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'34080',
            'parentId':'372222'
        },
        {
            'name':'Заглушки',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'003445',
            'parentId':'372222'
        },
        {
            'name':'Фланцы',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'02233',
            'parentId':'372222'
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
            'subCategories':[
                {
                    'name':'Проведение реконструкции ЦК с последующим изменением параметров работы',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'865656',
                    'parentId':'463333'
                },
                {
                    'name':'Проведение модернизации центробежных компрессоров',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'subCategories':[
                        {
                            'name':'Замена маслосистемы компрессора на СГУ с выполнением полного комплекса под ключ',
                            'descriptionSmall':'Описание категории',
                            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                            'img':'img/default-image.png',
                            'id':'235322',
                            'parentId':'1342'
                        },
                        {
                            'name':'Замена подшипников на современные высокотехнологические с конструкцией сухой-картер',
                            'descriptionSmall':'Описание категории',
                            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                            'img':'img/default-image.png',
                            'id':'885600',
                            'parentId':'1342'
                        },
                        {
                            'name':'Замена зубчатых муфт на современные высокотехнологические пластинчатые муфты',
                            'descriptionSmall':'Описание категории',
                            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                            'img':'img/default-image.png',
                            'id':'95677',
                            'parentId':'1342'
                        },
                        {
                            'name':'Замена устаревших технических систем обеспечения работы компрессора на новые',
                            'descriptionSmall':'Описание категории',
                            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                            'img':'img/default-image.png',
                            'id':'003434',
                            'parentId':'1342'
                        },
                        {
                            'name':'Замена системы САУ компрессоров',
                            'descriptionSmall':'Описание категории',
                            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                            'img':'img/default-image.png',
                            'id':'422322',
                            'parentId':'1342'
                        }
                    ],
                    'id':'1342',
                    'parentId':'463333'
                },
                {
                    'name':'Сервисное обслуживание ЦК',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'231134',
                    'parentId':'463333'
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




    $scope.subServices = [
        {
            'name':'Проведение реконструкции ЦК с последующим изменением параметров работы',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'865656',
            'parentId':'463333'
        },
        {
            'name':'Проведение модернизации центробежных компрессоров',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'subCategories':[
                {
                    'name':'Замена маслосистемы компрессора на СГУ с выполнением полного комплекса под ключ',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'235322',
                    'parentId':'1342'
                },
                {
                    'name':'Замена подшипников на современные высокотехнологические с конструкцией сухой-картер',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'885600',
                    'parentId':'1342'
                },
                {
                    'name':'Замена зубчатых муфт на современные высокотехнологические пластинчатые муфты',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'95677',
                    'parentId':'1342'
                },
                {
                    'name':'Замена устаревших технических систем обеспечения работы компрессора на новые',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'003434',
                    'parentId':'1342'
                },
                {
                    'name':'Замена системы САУ компрессоров',
                    'descriptionSmall':'Описание категории',
                    'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
                    'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
                    'img':'img/default-image.png',
                    'id':'422322',
                    'parentId':'1342'
                }
            ],
            'id':'1342',
            'parentId':'463333'
        },
        {
            'name':'Сервисное обслуживание ЦК',
            'descriptionSmall':'Описание категории',
            'descriptionBig':'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.' +
            'Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet. Lorem ipsum dolores sit amet.',
            'img':'img/default-image.png',
            'id':'231134',
            'parentId':'463333'
        }
    ];



    $('html').css({
        'height':'auto',
        'background-repeat':'no-repeat'
    });
    $('footer').addClass('resized-footer');
    $('.back-to-top').removeClass('top-3');

    $scope.newProducts = $scope.products;

    $scope.products = $scope.products.filter(function(product) {
        $scope.isProducts = true;
        return product.id == $stateParams.id;
    });

    if ($scope.products.length == 0) {
        $scope.isProducts = false;
        $scope.products = $scope.services.filter(function(product) {
            return product.id == $stateParams.id;
        });
    }

    //$scope.products.forEach(function(product) {
    //    $scope.products = [];
    //    if (product.id == $stateParams.id) {
    //        $scope.products.push(product);
    //    } else {
    //        $scope.subProducts.forEach(function(subProduct) {
    //            if (subProduct.id == $stateParams.id) {
    //                $scope.products.push(subProduct);
    //            }
    //            else {
    //                $scope.subServices.forEach(function(service) {
    //                    if (service.id == $stateParams.id) {
    //                        $scope.products.push(service);
    //                    }
    //                });
    //            }
    //        });
    //    }
    //});

    console.log($scope.products);

    //$scope.productCategories = function(product) {
    //    $location.path('/product/category/'+ product.id);
    //};

    $scope.productCategories = function(product) {
        if (product.subCategories) {
            $location.path('/product/subcategory/sub/'+ product.id);
        } else {
            $location.path('/product/category/'+ product.id);
        }
    };

    $scope.goToBlock = function() {
        var target;
        if ($scope.isProducts) {
            target = '#products-container';
        } else {
            target = '#services-container';
        }
        localStorage.setItem('hash', target);
        $location.path('/');
    };
}]);