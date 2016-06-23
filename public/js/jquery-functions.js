$(document).ready(function() {
    $('.navbar a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top //no need of parseInt here
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    $('.product-list div').hover(function() {
       $('.product-list div img').css({
           '-webkit-filter':'blur(2px)',
           'filter':'blur(2px)'
       });
        $(this).children().css({
            '-webkit-filter':'none',
            'filter':'none'
        })
    });
});


//-webkit-filter:blur(2px);
//filter: blur(2px);