jQuery(document).ready(function ($) {

    let $doc = $(document);
    $doc.on('scroll', function () {
        return ($doc.scrollTop() > 0) ? $('.menu-bar, .logo').addClass('shrink') : $('.menu-bar, .logo').removeClass('shrink');
    });

    // hamburger menu open/ close
    $('.menu-container').on('click', function(){
        $('nav').css('transform', 'translateX(0)');
    });
    $('.closebtn').on('click', function() {
        $('nav').css('transform', 'translateX(-580px)');
    });

    $('.testimonials-slider').flexslider({
        animation: "slide",
        animationLoop: true,
        controlNav: true
    });

    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 200,
        itemMargin: 0
    });


});
