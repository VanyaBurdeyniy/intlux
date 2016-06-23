artVikonce.controller('MainController', ['$scope', '$location', function($scope, $location) {
 $scope.hello = 'Hello';
    console.log($scope.hello);



    $scope.productCategories = function(id) {
        $location.path('/product/category/'+ id);
    };









    /*
    *  JQUERY FUNCTIONS
    * */
    $(document).ready(function() {
        $('a.link-nav[href^="#"]').on('click',function (e) {
            e.preventDefault();
            var target = this.hash;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop':  $target.offset().top //no need of parseInt here
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
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