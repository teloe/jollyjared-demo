jQuery(document).ready(function ($) {

    let $doc = $(document);
    $doc.on('scroll', function () {
        return ($doc.scrollTop() > 40) ? $('.menu-bar, .logo').addClass('shrink') : $('.menu-bar, .logo').removeClass('shrink');
    });


    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 200,
        itemMargin: 0
    });


});