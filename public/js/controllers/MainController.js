artVikonce.controller('MainController', ['$scope', '$location', '$http', '$rootScope', '$stateParams', '$translate',
    function ($scope, $location, $http, $rootScope, $stateParams, $translate) {

        $scope.contact = {
            name: '',
            email: '',
            phone: '',
            city: '',
            message: ''
        };

        $scope.productCategories = function (product) {
            if (product.hasCategory) {
                $location.path('/product/subcategory/' + product._id);
            } else {
                $location.path('/product/category/' + product._id);
            }
        };

        $http.get('/footer').then(function(data) {
            var footer = data.data[data.data.length - 1];
            $('.skype-link').attr('href', 'skype:' + footer.skype.address +'?call');
            $('.img-skype').attr('href', 'skype:' + footer.skype.address +'?call');
            $('.skype-link').find('span').text(footer.skype.name);
            $('.footer-phone').text(footer.phone);
            $('.footer-email').text(footer.email);

        });


        $scope.changeLanguage = function (key) {
            $translate.use(key);
            localStorage.setItem('lang', key);
        };

        $http.get('/products').then(function (data) {
            console.log(data);
            $scope.products = data.data;
        });

        //$http.get('/design').then(function(data) {
        //   document.getElementsByTagName('html')[0].className = '';
        //   document.getElementsByTagName('body')[0].className = '';
        //    $('html').addClass(data.data[0].class);
        //    $('body').addClass(data.data[0].class);
        //});

        $http.get('/services').then(function (data) {
            console.log(data);
            $scope.services = data.data;
        });

        $scope.serviceCategories = function (service) {
            if (service.hasCategory) {
                $location.path('/service/subcategory/' + service._id);
            } else {
                $location.path('/service/category/' + service._id);
            }
        };

        $scope.sendEmail = function (contact) {
            $http.post('/email/send', contact).then(function () {

            });
        };

        $scope.goToNewsDescribe = function (id) {
            $location.path('/news/' + id);
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
            'height': '100%',
            'background-repeat': 'repeat-y'
        });

        $scope.saveImage = function () {
            var data = {
                username: 'admin',
                password: 'intluxAdmin'
            };
            $http.post('/auth/signup', data).then(function (res) {
                console.log(res);
            });
        };


        $rootScope.isAdmin = false;


        $scope.goToBlock = function (target) {
            if (target) {
                var target = $(target).attr('data-scroll-item');
                if (!target) {
                    target = '#about_us';
                }
                console.log(window.location.hash);
                if (window.location.hash !== "#/") {
                    if (target) {
                        localStorage.setItem('hash', target);
                    }
                    $location.path('/');
                    $('.navbar-collapse').removeClass('in');
                } else {
                    $target = $(target);
                    var top = $target.offset().top;
                    console.log(top);
                    $('html, body').stop().animate({
                        'scrollTop': top //no need of parseInt here
                    }, 900, 'swing', function () {
                        window.location.hash = target;
                    });
                    $('.navbar-collapse').removeClass('in');
                }
            }
        };

        $http.get('/news').then(function(data) {
            data.data = data.data.sort(function(a,b) {
                return new Date(b.created).getTime() - new Date(a.created).getTime()
            });
            data.data.forEach(function(news) {
                var date = new Date(news.created);
               news.created = date.toUTCString();
            });
           $scope.news = data.data;
        });

        $scope.goToTop = function (target) {
            var target = '#slider';
            console.log(window.location.hash);
            if (window.location.hash !== "#/") {
                if (target) {
                    localStorage.setItem('hash', target);
                }
                $location.path('/');
            } else {
                $target = $(target);
                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top //no need of parseInt here
                }, 900, 'swing', function () {
                    window.location.hash = target;
                });
            }
        };

        function goToBlock(newTarget) {
            if (newTarget) {
                var target = newTarget;
                $target = $(target);
                if ($target.offset()) {
                    $('html, body').stop().animate({
                        'scrollTop': $target.offset().top //no need of parseInt here
                    }, 900, 'swing', function () {
                        window.location.hash = target;
                    });
                    $('.navbar-collapse').removeClass('in');
                }
            }
        }

        goToBlock(localStorage.getItem('hash'));

        /*
         *  JQUERY FUNCTIONS
         * */
        $(document).ready(function () {

            // $('.navbar-collapse').on('click', function(e) {
            //     e.stopPropagation();
            // });
            // $('.navbar-header').on('click', function(e) {
            //     // $('.navbar-collapse').toggleClass('in');
            //     e.stopPropagation();
            // });
            // $('div').on('click', function() {
            //     $('.navbar-collapse').removeClass('in');
            // });

            //var isHash = localStorage.getItem('hash'),
            //    isclassName = localStorage.getItem('className'),
            //    isLang = localStorage.getItem('lang'),
            //    istestObject = localStorage.getItem('hash');
            //
            //if ((!isclassName || !isLang || !istestObject) ||
            //    (isclassName  === null || isLang === null || istestObject === null)) {
            //    localStorage.clear();
            //}


            $('a.back-to-top').on('click', function (e) {
                var target = this.hash;
                $target = $(target);
                if ($target.offset()) {
                    $('html, body').stop().animate({
                        'scrollTop': $target.offset().top //no need of parseInt here
                    }, 900, 'swing', function () {
                        window.location.hash = target;
                    });
                } else {
                    $location.path('/');
                }
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

                if ($(window).scrollTop() + $(window).height() > $(document).height() - 30) {
                    $('footer').addClass('resized-footer');
                    $('.back-to-top').removeClass('top-3');
                } else {
                    $('footer').removeClass('resized-footer');
                    $('.back-to-top').addClass('top-3');
                }
            });

            jQuery(document).on('click', '.mega-dropdown', function (e) {
                e.stopPropagation()
            });

            $('.product-list div').mouseover(function () {
                $('.product-list div img').css({
                    '-webkit-filter': 'blur(2px)',
                    'filter': 'blur(2px)'
                });
                $(this).children().css({
                    '-webkit-filter': 'none',
                    'filter': 'none'
                })
            }).mouseout(function () {
                $('.product-list div img').css({
                    '-webkit-filter': 'none',
                    'filter': 'none'
                });
            });

            $('.dropdown-hover').mouseover(function () {
                $('.' + $(this).attr('data-dropdown-item')).show();
            }).mouseout(function () {
                $('.' + $(this).attr('data-dropdown-item')).hide();
            });
            $('.dropdown-menu-hover').mouseover(function () {
                $(this).show();
            }).mouseout(function () {
                $(this).hide();
            });


            /*
             *  Slider
             * */
            (function () {
                "use strict";

                var $slider = $('#slider');
                if (!$slider.length) return;

                var $sliderElements = $slider.find('article'),
                    sliderElementLastIndex = $sliderElements.length - 1,
                    timer,
                    actualIndex = 0,
                    step = function () {
                        clearTimeout(timer);
                        timer = setTimeout(function () {
                            if (actualIndex < sliderElementLastIndex) {
                                actualIndex++;
                            } else {
                                actualIndex = 0;
                            }
                            $sliderElements.removeClass('show');
                            $sliderElements.eq(actualIndex).addClass('show');

                            step();
                        }, 5000);
                    };

                clearTimeout(timer);
                step();

            })();


        });


    }]);